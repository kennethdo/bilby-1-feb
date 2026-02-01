const { describe, it, before, after } = require('node:test');
const assert = require('node:assert');
const http = require('node:http');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-change-in-production';

describe('Auth Middleware', () => {
  let server;
  let baseUrl;

  before(async () => {
    const express = require('express');
    const authMiddleware = require('../src/middleware/auth');

    const app = express();
    app.use(express.json());

    // Test route behind auth middleware
    app.get('/protected', authMiddleware, (req, res) => {
      res.json({ user: req.user });
    });

    await new Promise((resolve) => {
      server = app.listen(0, () => {
        const { port } = server.address();
        baseUrl = `http://localhost:${port}`;
        resolve();
      });
    });
  });

  after(() => {
    if (server) server.close();
  });

  function request(path, options = {}) {
    return new Promise((resolve, reject) => {
      const url = new URL(path, baseUrl);
      const req = http.request(url, { method: 'GET', ...options }, (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          resolve({ status: res.statusCode, body: JSON.parse(body) });
        });
      });
      req.on('error', reject);
      req.end();
    });
  }

  it('should return 401 when no Authorization header is provided', async () => {
    const res = await request('/protected');
    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.error, 'Authentication required');
  });

  it('should return 401 when Authorization header has no Bearer prefix', async () => {
    const token = jwt.sign({ id: 1, email: 'test@test.com' }, JWT_SECRET);
    const res = await request('/protected', {
      headers: { Authorization: token },
    });
    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.error, 'Authentication required');
  });

  it('should return 401 when token is invalid', async () => {
    const res = await request('/protected', {
      headers: { Authorization: 'Bearer invalidtoken123' },
    });
    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.error, 'Invalid or expired token');
  });

  it('should return 401 when token is expired', async () => {
    const token = jwt.sign({ id: 1, email: 'test@test.com' }, JWT_SECRET, { expiresIn: '0s' });
    // Small delay to ensure expiration
    await new Promise((resolve) => setTimeout(resolve, 50));
    const res = await request('/protected', {
      headers: { Authorization: `Bearer ${token}` },
    });
    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.error, 'Invalid or expired token');
  });

  it('should attach decoded user to req.user for valid token', async () => {
    const token = jwt.sign({ id: 1, email: 'test@test.com' }, JWT_SECRET, { expiresIn: '1h' });
    const res = await request('/protected', {
      headers: { Authorization: `Bearer ${token}` },
    });
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.user.id, 1);
    assert.strictEqual(res.body.user.email, 'test@test.com');
  });

  it('should return 401 when token is signed with wrong secret', async () => {
    const token = jwt.sign({ id: 1, email: 'test@test.com' }, 'wrong-secret');
    const res = await request('/protected', {
      headers: { Authorization: `Bearer ${token}` },
    });
    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.error, 'Invalid or expired token');
  });
});
