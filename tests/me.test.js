const { describe, it, before, after } = require('node:test');
const assert = require('node:assert');
const path = require('path');
const fs = require('fs');
const http = require('node:http');
const express = require('express');

let app, server, db, userToken;

function request(method, urlPath, body, headers = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlPath, `http://localhost:${server.address().port}`);
    const options = {
      method,
      hostname: url.hostname,
      port: url.port,
      path: url.pathname,
      headers: { 'Content-Type': 'application/json', ...headers },
    };
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

describe('GET /api/auth/me', () => {
  before(async () => {
    const dataDir = path.join(__dirname, '..', 'data');
    const dbPath = path.join(dataDir, 'app.db');
    if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);
    if (fs.existsSync(dbPath + '-wal')) fs.unlinkSync(dbPath + '-wal');
    if (fs.existsSync(dbPath + '-shm')) fs.unlinkSync(dbPath + '-shm');

    delete require.cache[require.resolve('../src/db')];
    delete require.cache[require.resolve('../src/middleware/auth')];
    delete require.cache[require.resolve('../src/routes/auth')];

    const dbModule = require('../src/db');
    db = dbModule.db;

    const authRouter = require('../src/routes/auth');
    app = express();
    app.use(express.json());
    app.use('/api/auth', authRouter);

    await new Promise((resolve) => {
      server = app.listen(0, resolve);
    });

    // Register and login to get a token
    await request('POST', '/api/auth/register', {
      email: 'me@example.com',
      password: 'password123',
    });

    const loginRes = await request('POST', '/api/auth/login', {
      email: 'me@example.com',
      password: 'password123',
    });
    userToken = loginRes.body.token;
  });

  after(async () => {
    if (server) await new Promise((resolve) => server.close(resolve));
    if (db && db.open) db.close();
  });

  it('should return current user data when authenticated', async () => {
    const res = await request('GET', '/api/auth/me', null, {
      Authorization: `Bearer ${userToken}`,
    });
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.email, 'me@example.com');
    assert.ok(res.body.id, 'should include id');
    assert.ok(res.body.created_at, 'should include created_at');
  });

  it('should return 401 when no token provided', async () => {
    const res = await request('GET', '/api/auth/me', null);
    assert.strictEqual(res.status, 401);
    assert.ok(res.body.error);
  });

  it('should return 401 when invalid token provided', async () => {
    const res = await request('GET', '/api/auth/me', null, {
      Authorization: 'Bearer invalidtoken123',
    });
    assert.strictEqual(res.status, 401);
    assert.ok(res.body.error);
  });

  it('should include id, email, and created_at in response', async () => {
    const res = await request('GET', '/api/auth/me', null, {
      Authorization: `Bearer ${userToken}`,
    });
    assert.strictEqual(res.status, 200);
    assert.strictEqual(typeof res.body.id, 'number');
    assert.strictEqual(typeof res.body.email, 'string');
    assert.strictEqual(typeof res.body.created_at, 'string');
    // Should NOT include password_hash
    assert.strictEqual(res.body.password_hash, undefined, 'should not expose password_hash');
  });
});
