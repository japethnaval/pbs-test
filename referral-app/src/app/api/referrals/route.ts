import { NextResponse } from 'next/server';
import { openDB } from '@/lib/db';

export const GET = async () => {
  const db = await openDB();
  const referrals = await db.all('SELECT * FROM referrals ORDER BY created_at DESC');

  return NextResponse.json(
    {
      message: 'Success',
      data: referrals
    },
    { status: 200 }
  );
};

export const POST = async (request: Request) => {
  const db = await openDB();
  const { given_name, surname, email, phone, home_address, state, suburb, postcode, country } = await request.json();

  try {
    await db.run(
      `INSERT INTO referrals (given_name, surname, email, phone, home_address, state, suburb, postcode, country)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [given_name, surname, email, phone, home_address, state, suburb, postcode, country]
    );

    return NextResponse.json({ message: 'Referral added successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error adding referral' }, { status: 500 });
  }
};
