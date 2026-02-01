const { describe, it, before, after } = require('node:test');
const assert = require('node:assert');
const path = require('path');
const fs = require('fs');
const http = require('node:http');

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

describe('App entry point (src/index.js)', () => {
  before(async () => {
    const dataDir = path.join(__dirname, '..', 'data');
    const dbPath = path.join(dataDir, 'app.db');
    if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);
    if (fs.existsSync(dbPath + '-wal')) fs.unlinkSync(dbPath + '-wal');
    if (fs.existsSync(dbPath + '-shm')) fs.unlinkSync(dbPath + '-shm');

    delete require.cache[require.resolve('../src/db')];
    delete require.cache[require.resolve('../src/middleware/auth')];
    delete require.cache[require.resolve('../src/routes/auth')];
    delete require.cache[require.resolve('../src/index')];

    app = require('../src/index');
    db = require('../src/db').db;

    await new Promise((resolve) => {
      server = app.listen(0, resolve);
    });
  });

  after(async () => {
    if (server) await new Promise((resolve) => server.close(resolve));
    if (db && db.open) db.close();
  });

  it('should export the Express app', () => {
    assert.ok(app, 'app should be exported');
    assert.strictEqual(typeof app.listen, 'function', 'app should have listen method');
  });

  it('should parse JSON request bodies', async () => {
    const res = await request('POST', '/api/auth/register', {
      email: 'jsontest@example.com',
      password: 'password123',
    });
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.body.email, 'jsontest@example.com');
  });

  it('should mount auth routes at /api/auth', async () => {
    const res = await request('POST', '/api/auth/login', {
      email: 'jsontest@example.com',
      password: 'password123',
    });
    assert.strictEqual(res.status, 200);
    assert.ok(res.body.token, 'login should return a token');
  });

  it('should mount the /api/auth/me protected route', async () => {
    // Login to get a token
    const loginRes = await request('POST', '/api/auth/login', {
      email: 'jsontest@example.com',
      password: 'password123',
    });
    const token = loginRes.body.token;

    const res = await request('GET', '/api/auth/me', null, {
      Authorization: `Bearer ${token}`,
    });
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.email, 'jsontest@example.com');
  });

  it('should have initialized the database', () => {
    assert.ok(db, 'database should exist');
    assert.ok(db.open, 'database should be open');
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='users'").all();
    assert.strictEqual(tables.length, 1, 'users table should exist');
  });

  it('should listen on configurable port', () => {
    const port = server.address().port;
    assert.ok(port > 0, 'server should be listening on a port');
  });
});
