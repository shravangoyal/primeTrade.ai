Backend Application Task Manager with Authentication & Role-Based Access

A complete Backend MERN Application with:

-JWT Authentication
-Role-based access (User & Admin)
-CRUD operations on Tasks
-Admin Panel with user & task management
-Protected routes on frontend
-MongoDB database

This project demonstrates real-world backend + frontend architecture used in production systems.

🚀 Tech Stack
Backend
Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
Role-based Middleware
Frontend
React.js (Vite)
React Router
Axios
Custom CSS

🔐 Authentication & Roles

This project has two roles:

👤 Normal User
Register & Login
Create tasks
View only their tasks
Update tasks
Delete tasks

👑 Admin

Login as admin
View all users
Delete users
View all tasks created by all users
Access protected Admin Panel

🔑 Default Admin Credentials
Use these credentials to login as Admin:

Email: admin@primetrade.ai
Password: admin123
Role: admin

⚠️ This admin account is created manually for testing and demo purposes.

📂 Project Structure
backend/
 ├── src/
 │   ├── controllers/
 │   ├── routes/
 │   ├── models/
 │   ├── middlewares/
 │   ├── config/
 │   ├── app.js
 │   └── server.js

frontend/
 ├── src/
 │   ├── auth/
 │   ├── pages/
 │   ├── components/
 │   ├── api/
 │   ├── styles/
 │   └── App.jsx
 
🛠️ How To Run This Project Locally
🔹 Step 1 — Clone Repository
git clone <your-repository-url>
cd <project-folder>
🔹 Step 2 — Backend Setup
Go to backend folder
cd backend
Install dependencies
npm install
Create .env file inside backend/
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start backend server
npm run dev

You should see:

Server running on port 5000
MongoDB connected

Backend runs on:

http://localhost:5000
🔹 Step 3 — Frontend Setup

Open a new terminal.

cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
API Endpoints
Authentication
Method	URL	Description
POST	/api/v1/auth/register	Register new user
POST	/api/v1/auth/login	Login user
--User APIs
Method	URL	Access	Description
GET	/api/v1/users/me	User	Get current user profile
GET	/api/v1/users	Admin	Get all users
DELETE	/api/v1/users/	Admin	Delete user and their tasks
-- Task APIs
Method	URL	Access	Description
POST	/api/v1/tasks	User	Create task
GET	/api/v1/tasks	User	Get own tasks
PATCH	/api/v1/tasks/	User	Update own task
DELETE	/api/v1/tasks/	User	Delete own task
GET	/api/v1/tasks/all	Admin	Get all users' tasks
-- Security Features

Password hashing using bcrypt
JWT authentication
Role-based access middleware
Protected frontend routes
Ownership-based task updates
Cascade delete (delete user → delete all tasks)

🧠 Important Concepts Demonstrated

JWT Authentication Flow

Role-Based Authorization

Protected Routes in React

Ownership validation

Cascade deletion of related data

Inline editing UI

Admin panel design

🖥️ Application Flow
User Flow

Register

Login

Redirect to Dashboard

Create / View / Update / Delete Tasks

Logout

Admin Flow

Login using admin credentials

Redirect to Dashboard

Open Admin Panel

View all users

Delete users

View all tasks with owner info

-- Features Summary

-User Registration & Login
- JWT Authentication
- Role-Based Access
- Protected Routes
- Task CRUD Operations
- Admin Panel
- User Management
- Task Ownership
- Cascade Delete
- Professional UI

🧑‍💻 Author

Developed by: Shravan Goyal
Project Type: Full Stack MERN Authentication & Admin System


Make sure MongoDB Atlas IP is whitelisted

Always start backend before frontend

Admin credentials are for demo/testing only
