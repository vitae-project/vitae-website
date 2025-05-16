import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { promises as fs } from 'fs';

// Initialize database connection
async function openDb() {
  // Ensure the data directory exists
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch (error) {
    console.error('Error creating data directory:', error);
  }

  const dbPath = path.join(dataDir, 'emails.db');
  
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  // Create table if it doesn't exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS emails (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      signup_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return db;
}

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const db = await openDb();

    try {
      await db.run(
        'INSERT INTO emails (email) VALUES (?)',
        [email]
      );

      return NextResponse.json(
        { 
          message: 'Subscription successful',
          redirect: '/thank-you'
        },
        { status: 200 }
      );
    } catch (error) {
      if (error.message.includes('UNIQUE constraint failed')) {
        return NextResponse.json(
          { error: 'Email already subscribed' },
          { status: 409 }
        );
      }
      console.error('Database error:', error);
      throw error;
    } finally {
      await db.close();
    }
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 