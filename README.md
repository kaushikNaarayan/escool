# Escool - Simple Web App with Google Authentication

A full-stack web application built with Node.js, Express, and React, featuring Google OAuth authentication.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Google Cloud Platform account (for OAuth credentials)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install-all
   ```

3. Set up Google OAuth:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable the Google+ API
   - Create OAuth 2.0 credentials
   - Add `http://localhost:5000/auth/google/callback` as an authorized redirect URI

4. Create a `.env` file in the root directory with the following content:
   ```
   PORT=5000
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

## Running the Application

1. Start the development servers (both frontend and backend):
   ```bash
   npm run dev
   ```

2. The application will be available at:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## Features

- Google OAuth authentication
- Protected routes
- User profile display
- Session management 