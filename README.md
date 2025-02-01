How to send emails using Node.js and Nodemailer.

## Setup Instructions

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and fill in your SMTP credentials.
4. Run `node index.js` to start the server.

## `.env` File

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_username
SMTP_PASS=your_password
RECEIVER_EMAIL=

## Notes

- Ensure your SMTP credentials are correct.
- The `.env` file is excluded from version control for security.
