const { describe, it, before, after } = require('node:test');
const assert = require('node:assert');
const path = require('path');
const fs = require('fs');
const http = require('node:http');
const express = require('express');

let app, server, db;

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

describe('POST /api/auth/login', () => {
  before(async () => {
    const dataDir = path.join(__dirname, '..', 'data');
    const dbPath = path.join(dataDir, 'app.db');
    if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);
    if (fs.existsSync(dbPath + '-wal')) fs.unlinkSync(dbPath + '-wal');
    if (fs.existsSync(dbPath + '-shm')) fs.unlinkSync(dbPath + '-shm');

    delete require.cache[require.resolve('../src/db')];
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

    // Register a user to test login against
    await request('POST', '/api/auth/register', {
      email: 'login@example.com',
      password: 'password123',
    });
  });

  after(async () => {
    if (server) await new Promise((resolve) => server.close(resolve));
    if (db && db.open) db.close();
  });

  it('should return a valid JWT token on successful login', async () => {
    const res = await request('POST', '/api/auth/login', {
      email: 'login@example.com',
      password: 'password123',
    });
    assert.strictEqual(res.status, 200);
    assert.ok(res.body.token, 'should return a token');
    // JWT has 3 parts separated by dots
    const parts = res.body.token.split('.');
    assert.strictEqual(parts.length, 3, 'token should be a valid JWT format');
  });

  it('should include user id and email in JWT payload', async () => {
    const jwt = require('jsonwebtoken');
    const res = await request('POST', '/api/auth/login', {
      email: 'login@example.com',
      password: 'password123',
    });
    const decoded = jwt.decode(res.body.token);
    assert.ok(decoded.id, 'payload should contain user id');
    assert.strictEqual(decoded.email, 'login@example.com', 'payload should contain email');
  });

  it('should return 401 for wrong email', async () => {
    const res = await request('POST', '/api/auth/login', {
      email: 'nonexistent@example.com',
      password: 'password123',
    });
    assert.strictEqual(res.status, 401);
    assert.ok(res.body.error);
  });

  it('should return 401 for wrong password', async () => {
    const res = await request('POST', '/api/auth/login', {
      email: 'login@example.com',
      password: 'wrongpassword',
    });
    assert.strictEqual(res.status, 401);
    assert.ok(res.body.error);
  });

  it('should return 400 if email is missing', async () => {
    const res = await request('POST', '/api/auth/login', {
      password: 'password123',
    });
    assert.strictEqual(res.status, 400);
    assert.ok(res.body.error);
  });

  it('should return 400 if password is missing', async () => {
    const res = await request('POST', '/api/auth/login', {
      email: 'login@example.com',
    });
    assert.strictEqual(res.status, 400);
    assert.ok(res.body.error);
  });
});
