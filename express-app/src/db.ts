import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(':memory:');

// Create the referrals table
db.exec(`
    CREATE TABLE referrals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        given_name TEXT,
        surname TEXT,
        email TEXT,
        phone TEXT,
        home_address TEXT,
        state TEXT,
        suburb TEXT,
        postcode TEXT,
        country TEXT
    )
`);

export default db;