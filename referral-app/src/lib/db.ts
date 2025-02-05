import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

let db: Database | null = null;

export const openDB = async() => {
  if (!db) {

    const dbPath = path.resolve('./src/lib', 'database.db');

    db = await open({
      driver: sqlite3.Database,
      filename: dbPath, 
    });

    // await db.exec('DROP TABLE IF EXISTS referrals');

    await db.exec(`CREATE TABLE IF NOT EXISTS referrals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        given_name TEXT,
        surname TEXT,
        email TEXT,
        phone TEXT,
        home_address TEXT,
        state TEXT,
        suburb TEXT,
        postcode TEXT,
        country TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
  return db;
}


export const closeDB = async() => {
  if (db) {
    await db.close();
    db = null;
  }
}