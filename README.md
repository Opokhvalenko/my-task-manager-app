# ✨ Task Manager ✨

This is a full-featured web application for task management, allowing users to add, view, edit, mark as completed/incomplete, delete, filter, sort, and search tasks.  
The application consists of a **Node.js (Express.js)** backend with a **MongoDB** database and a **React** frontend utilizing **Tailwind CSS** for styling.

---

## 📚 Table of Contents
- [Description](#-description)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation and Setup](#-installation-and-setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Deployment](#-deployment)

---

## 📝 Description

The **Task Manager** application is designed for simple and effective management of personal or team tasks.  
It demonstrates a full-stack application development cycle using modern web technologies.

---

## ✅ Features
- **Add Tasks:** Quickly create new tasks with a description.
- **View Tasks:** Browse a list of all tasks.
- **Edit Tasks:** Modify the description of existing tasks.
- **Toggle Status:** Mark tasks as completed or incomplete.
- **Delete Tasks:** Remove tasks that are no longer needed.
- **Filter Tasks:** Filter tasks by status (all, active, completed).
- **Sort Tasks:** Sort tasks by creation date (newest to oldest, oldest to newest) or by description (alphabetical).
- **Search Tasks:** Find tasks by keywords in their description.
- **Smooth Animations:** Enhanced user experience with CSS animations.
- **English Interface:** The entire application interface is in English.

---

## 🛠️ Technologies Used

### Backend
- **Node.js:** JavaScript runtime environment.
- **Express.js:** Web framework for Node.js.
- **MongoDB:** NoSQL database for storing tasks.
- **Mongoose:** ODM library for MongoDB and Node.js.
- **dotenv:** For loading environment variables.
- **cors:** For enabling Cross-Origin Resource Sharing.

### Frontend
- **React:** JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for rapid styling.
- **Axios:** HTTP client for making API requests.
- **ESBuild:** Used via Create React App (or CRA’s Webpack equivalent).

---

## 🚀 Installation and Setup

### 1️⃣ Clone the Repository
```bash
git clone <YOUR_REPOSITORY_URL>
cd task-manager-app # or your project folder
```
## 2️⃣ Backend Setup
Navigate to the backend folder:

```bash

cd task-manager-backend # or your backend folder name
```

Install dependencies:

``` bash 

npm install
# or
yarn install
``` 
Create a .env file in the backend root:

env
``` bash 
PORT=3000
MONGO_URI=mongodb://localhost:27017/taskmanager
Replace MONGO_URI with your local or MongoDB Atlas connection string.

Start the backend server:


npm start
# or
yarn start
The backend runs at: http://localhost:3000

```

## 3️⃣ Frontend Setup
Open a new terminal and navigate to the frontend folder:

``` bash 
cd task-manager-frontend # or your frontend folder name
```
Install dependencies:

``` bash 
npm install
# or
yarn install
Start the React application:
```

npm start
# or
yarn start
The frontend runs at: http://localhost:3001

```bash
💻 Usage
Open http://localhost:3001 in your browser.

Use the "Add a new task..." input to add tasks.

Click ✏️ to edit, ✅/❌ to toggle completion, 🗑️ to delete.

Use filter buttons (All, Active, Completed) and sort dropdowns.

Use the search bar to quickly find tasks.

🌐 Deployment
Backend: Deploy on Heroku, Render, Cyclic, Fly.io, AWS, DigitalOcean.

Frontend: Deploy on Netlify, Vercel, Firebase Hosting, GitHub Pages.

Deployment may require setting environment variables and CORS updates.

✅ Enjoy using your Task Manager app!
If you find this project helpful, feel free to ⭐ star the repo or contribute.