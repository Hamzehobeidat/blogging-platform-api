# Blogging Platform

## Description

This project is a full-stack blogging platform built using React/Next.js for the frontend and Node.js and Supabase for the backend API. It enables users to register, log in, and manage their blog posts.


# Features

- User Authentication: Register, log in, create, edit, and delete personal blog posts.
- State Management: Manages user sessions and blog post data using Redux.
- Blog Post Management: View, create, edit, and delete blog posts.
- Backend API: RESTful API for user authentication and CRUD operations on blog posts.
- CI/CD Integration: Automated testing, linting, and deployment using Jenkins or GitHub Actions.

## Installation:
1. Clone the repository:
 - git clone https://github.com/Hamzehobeidat/blogging-platform-api
 - git clone https://github.com/Hamzehobeidat/blogging-platform-app
2. Install dependencies:
 - npm install
3. Set up environment variables:
 - SUPABASE_URL=https://djlqtthvjjimxwzzbetp.supabase.co
 - SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbHF0dGh2amppbXh3enpiZXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMDQzMDMsImV4cCI6MjA0NTY4MDMwM30.rTX_T0SGT6J1vT17VVsxeNC0DPhAhDYSybu-NlTNSpc
 - PORT=5000
 - AUTH_JWT_SECRET=mysecret

4. Run the application:
 - Frontend: **npm run dev**
 - Backend: **npm run dev**

## Swagger documentation:

- swagger URL: http://localhost:5000/api/v1/api-docs/

## Usage:
1. Frontend URL: http://localhost:3000
  - Access the frontend by opening this URL in your browser.
2. Backend URL: http://localhost:5000
  - This URL serves as the API endpoint for the frontend to interact with.

## Postman collection:

- You can find the file in the postman-collection folder.



