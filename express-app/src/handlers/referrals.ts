import { Request, Response } from "express-serve-static-core";
import db from "../db";
import sqlite3 from "sqlite3";


export const getReferrals = (request: Request, response: Response) => {
  db.all("SELECT * FROM referrals", function (err, rows) {
    if (err) {
      console.error("Error fetching referrals:", err);
      response.status(500).json({ error: "Failed to fetch referrals" });
    }

    response.status(200).json({
      message: 'success',
      data: rows
    });
  });
};

export const addReferral = (request: Request, response: Response) => {
  const referralData = request.body;

  try {
    const stmt = db.prepare(`
      INSERT INTO referrals (given_name, surname, email, phone, home_address, state, suburb, postcode, country)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      referralData.given_name,
      referralData.surname,
      referralData.email,
      referralData.phone,
      referralData.home_address,
      referralData.state,
      referralData.suburb,
      referralData.postcode,
      referralData.country,
      function (this: sqlite3.RunResult, err: Error | null) {
        if (err) {
          console.error('Error inserting referral:', err);
          return;
        }

        const lastInsertedId = this.lastID;
        console.log("Referral created with ID:", lastInsertedId);

        response.status(201).json({
          message: 'Referral created successfully',
          data: { id: lastInsertedId, ...referralData }
        });
      }
    );

  } catch (error) {
    console.error("Error creating referral:", error);
    response.status(500).json({ error: "Failed to create referral" })
  }
}
