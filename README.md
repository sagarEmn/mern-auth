# MERN Authentication Project

A full-stack application demonstrating user authentication features including signup, login, email verification, and password reset.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the `backend` directory and add the following variables. Replace the placeholder values with your actual credentials and settings.
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    MAILTRAP_TOKEN=your_mailtrap_api_token
    CLIENT_URL=http://localhost:3000 
    ```
    *   `PORT`: The port on which the backend server will run.
    *   `MONGO_URI`: Your MongoDB connection string.
    *   `JWT_SECRET`: A secret key for signing JSON Web Tokens.
    *   `MAILTRAP_TOKEN`: Your API token from Mailtrap for email sending (if you are using Mailtrap for development).
    *   `CLIENT_URL`: The URL of your frontend application (used for password reset links, etc.).

4.  **Run the backend server:**
    ```bash
    npm run dev
    ```
    (Assuming you have a `dev` script in your `package.json` like `nodemon index.js` or similar. If you use `npm start`, please adjust accordingly.)

    The backend server should now be running, typically on `http://localhost:5000`.

## Project Progress

*   **Backend:** Fully complete.
    *   User signup with email verification.
    *   User login and logout.
    *   Password reset functionality.
    *   Authenticated routes protection.
*   **Frontend:** Almost complete.
    *   Signup and Login pages.
    *   Components for UI elements and user feedback.
*   **Backend & Frontend Integration:** Not yet started.
