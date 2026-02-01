const { Router } = require('express');
const bcrypt = require('bcryptjs');
const { db } = require('../db');

const router = Router();

router.post('/register', (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
  if (existing) {
    return res.status(400).json({ error: 'Email already taken' });
  }

  const password_hash = bcrypt.hashSync(password, 10);
  const result = db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)').run(email, password_hash);

  res.status(201).json({ id: result.lastInsertRowid, email });
});

module.exports = router;
