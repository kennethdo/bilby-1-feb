const { describe, it, before, after } = require('node:test');
const assert = require('node:assert');
const path = require('path');
const fs = require('fs');

describe('Database setup', () => {
  let db;

  before(() => {
    // Clean up any existing test database
    const dataDir = path.join(__dirname, '..', 'data');
    const dbPath = path.join(dataDir, 'app.db');
    if (fs.existsSync(dbPath)) {
      fs.unlinkSync(dbPath);
    }
    // Also remove WAL/SHM files if present
    if (fs.existsSync(dbPath + '-wal')) fs.unlinkSync(dbPath + '-wal');
    if (fs.existsSync(dbPath + '-shm')) fs.unlinkSync(dbPath + '-shm');

    // Re-require to get fresh database
    delete require.cache[require.resolve('../src/db')];
    const dbModule = require('../src/db');
    db = dbModule.db;
  });

  after(() => {
    if (db && db.open) {
      db.close();
    }
  });

  it('should export a configured better-sqlite3 instance', () => {
    assert.ok(db, 'db should be exported');
    assert.strictEqual(db.open, true, 'database should be open');
  });

  it('should create the database file at data/app.db', () => {
    const dbPath = path.join(__dirname, '..', 'data', 'app.db');
    assert.ok(fs.existsSync(dbPath), 'data/app.db should exist');
  });

  it('should create the data/ directory', () => {
    const dataDir = path.join(__dirname, '..', 'data');
    assert.ok(fs.existsSync(dataDir), 'data/ directory should exist');
  });

  it('should create users table with correct schema', () => {
    const tableInfo = db.pragma('table_info(users)');
    assert.ok(tableInfo.length > 0, 'users table should exist');

    const columns = tableInfo.reduce((acc, col) => {
      acc[col.name] = col;
      return acc;
    }, {});

    // Check id column
    assert.ok(columns.id, 'id column should exist');
    assert.strictEqual(columns.id.type, 'INTEGER');
    assert.strictEqual(columns.id.pk, 1);

    // Check email column
    assert.ok(columns.email, 'email column should exist');
    assert.strictEqual(columns.email.type, 'TEXT');
    assert.strictEqual(columns.email.notnull, 1);

    // Check password_hash column
    assert.ok(columns.password_hash, 'password_hash column should exist');
    assert.strictEqual(columns.password_hash.type, 'TEXT');
    assert.strictEqual(columns.password_hash.notnull, 1);

    // Check created_at column
    assert.ok(columns.created_at, 'created_at column should exist');
    assert.strictEqual(columns.created_at.type, 'TEXT');
  });

  it('should enforce unique email constraint', () => {
    const insert = db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)');
    insert.run('test@example.com', 'hash123');

    assert.throws(() => {
      insert.run('test@example.com', 'hash456');
    }, /UNIQUE constraint failed/);
  });

  it('should auto-set created_at timestamp', () => {
    const insert = db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)');
    insert.run('timestamp@example.com', 'hash789');

    const user = db.prepare('SELECT * FROM users WHERE email = ?').get('timestamp@example.com');
    assert.ok(user.created_at, 'created_at should be set automatically');
  });
});
