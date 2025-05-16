import sqlite3
from datetime import datetime
import csv
import os
import pathlib

class EmailDatabase:
    def __init__(self):
        # Get the project root directory (where the scripts folder is)
        project_root = pathlib.Path(__file__).parent.parent
        # Use the same data directory as the API
        data_dir = project_root / 'data'
        data_dir.mkdir(exist_ok=True)
        
        self.db_path = str(data_dir / 'emails.db')
        self.setup_database()
    
    def setup_database(self):
        """Create the database and emails table if they don't exist."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS emails (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL UNIQUE,
                signup_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        conn.commit()
        conn.close()
    
    def add_email(self, email):
        """Add a new email to the database."""
        try:
            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            
            cursor.execute('INSERT INTO emails (email) VALUES (?)', (email,))
            conn.commit()
            return True
        except sqlite3.IntegrityError:
            return False  # Email already exists
        finally:
            conn.close()
    
    def export_to_csv(self, output_file="email_list.csv"):
        """Export all emails to a CSV file."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute('SELECT email, signup_date FROM emails ORDER BY signup_date')
        rows = cursor.fetchall()
        
        with open(output_file, 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['Email', 'Signup Date'])
            writer.writerows(rows)
        
        conn.close()
        return output_file
    
    def export_to_txt(self, output_file="email_list.txt"):
        """Export all emails to a text file."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute('SELECT email, signup_date FROM emails ORDER BY signup_date')
        rows = cursor.fetchall()
        
        with open(output_file, 'w') as f:
            for email, signup_date in rows:
                f.write(f"{email} (signed up: {signup_date})\n")
        
        conn.close()
        return output_file

if __name__ == "__main__":
    # Example usage
    db = EmailDatabase()
    
    # Export options
    print("1. Export to CSV")
    print("2. Export to TXT")
    choice = input("Choose export format (1/2): ")
    
    if choice == "1":
        output_file = db.export_to_csv()
        print(f"Emails exported to {output_file}")
    elif choice == "2":
        output_file = db.export_to_txt()
        print(f"Emails exported to {output_file}")
    else:
        print("Invalid choice")