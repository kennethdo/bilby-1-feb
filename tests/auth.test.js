const { describe, it, before, after } = require('node:test');
const assert = require('node:assert');
const path = require('path');
const fs = require('fs');
const http = require('http');
const express = require('express');

let app, server, db;

function request(method, path, body) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, `http://localhost:${server.address().port}`);
    const options = {
      method,
      hostname: url.hostname,
      port: url.port,
      path: url.pathname,
      headers: { 'Content-Type': 'application/json' },
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

describe('POST /api/auth/register', () => {
  before(async () => {
    // Clean database for fresh state
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
  });

  after(async () => {
    if (server) await new Promise((resolve) => server.close(resolve));
    if (db && db.open) db.close();
  });

  it('should create a new user and return 201', async () => {
    const res = await request('POST', '/api/auth/register', {
      email: 'user@example.com',
      password: 'password123',
    });
    assert.strictEqual(res.status, 201);
    assert.ok(res.body.id, 'should return user id');
    assert.strictEqual(res.body.email, 'user@example.com');
    assert.strictEqual(res.body.password, undefined, 'should not return password');
    assert.strictEqual(res.body.password_hash, undefined, 'should not return password_hash');
  });

  it('should hash the password with bcryptjs', async () => {
    const bcrypt = require('bcryptjs');
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get('user@example.com');
    assert.ok(user.password_hash, 'password_hash should be stored');
    assert.notStrictEqual(user.password_hash, 'password123', 'password should be hashed');
    assert.ok(bcrypt.compareSync('password123', user.password_hash), 'hash should match original password');
  });

  it('should return 400 if email already taken', async () => {
    const res = await request('POST', '/api/auth/register', {
      email: 'user@example.com',
      password: 'anotherpassword',
    });
    assert.strictEqual(res.status, 400);
    assert.ok(res.body.error);
  });

  it('should return 400 if email is missing', async () => {
    const res = await request('POST', '/api/auth/register', {
      password: 'password123',
    });
    assert.strictEqual(res.status, 400);
    assert.ok(res.body.error);
  });

  it('should return 400 if password is missing', async () => {
    const res = await request('POST', '/api/auth/register', {
      email: 'another@example.com',
    });
    assert.strictEqual(res.status, 400);
    assert.ok(res.body.error);
  });

  it('should return 400 if body is empty', async () => {
    const res = await request('POST', '/api/auth/register', {});
    assert.strictEqual(res.status, 400);
    assert.ok(res.body.error);
  });
});
