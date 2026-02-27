#  TaskFlow – Task Manager Application

A modern **Task Manager** web application built with **Node.js, Express, MongoDB, HTML, CSS, and JavaScript**.  
This project allows users to **create, read, update, and delete tasks**, manage **task priorities**, and persist data using **MongoDB**. The application is fully **responsive** for both desktop and mobile devices.

##  Features

- **User Authentication**
  - Signup & login functionality
  - Passwords securely hashed using bcrypt
- **Task Management**
  - Add new tasks with **title, due date, and priority (High, Medium, Low)**
  - Update tasks (edit title, date, priority)
  - Delete tasks
- **Task History**
  - View all tasks saved in the database
  - Tasks persist even after page refresh
- **Responsive Design**
  - Works seamlessly on desktop, tablet, and mobile screens
- **Data Persistence**
  - Tasks and user credentials stored in **MongoDB**
  - Backend API built with **Node.js and Express**
- **Clean & Modern UI**
  - Intuitive layout
  - Color-coded priorities for better visualization

---

## 🛠 Technology Stack

| Frontend          | Backend            | Database          |
|------------------|------------------|-----------------|
| HTML / CSS / JS   | Node.js / Express | MongoDB          |

**Other Tools & Libraries:**

- [bcryptjs](https://www.npmjs.com/package/bcryptjs) – password hashing  
- [cors](https://www.npmjs.com/package/cors) – API security  
- [MongoDB Compass](https://www.mongodb.com/products/compass) – database visualization  

---

## 📂 Project Structure


task-manager/
│
├── backend/
│ ├── models/
│ │ ├── User.js
│ │ └── Task.js
│ ├── server.js
│ └── package.json
│
└── frontend/
├── login.html
├── signup.html
├── task.html
├── style.css
└── script.js




##  Setup Instructions

1️⃣ Clone Repository

git clone https://github.com/username/TaskFlow.git
cd task-manager/backend

2️⃣ Install Dependencies

npm install

3️⃣ Start MongoDB

If you are using local MongoDB:

mongod

Ensure MongoDB is running on mongodb://127.0.0.1:27017.

4️⃣ Run Backend Server
node server.js

You should see:

MongoDB Connected
Server running on port 5000

5️⃣ Run Frontend

Open frontend/login.html or frontend/task.html in your browser.
Use login/signup to start adding tasks.


## Key Highlights

Full CRUD functionality for tasks

Task priority levels implemented with colors

Data stored securely in MongoDB

Responsive professional UI

Clean and maintainable code

Ready for real-world deployment

## Future Enhancements

User-specific tasks (multi-user support)

Task reminders & notifications

Drag-and-drop task sorting

Dark mode toggle

Deploy backend on Vercel: 

## Author

Sanjana Ale 

B.Tech CSE Student

LinkedIn: [https://www.linkedin.com/in/sanjana-ale-53a913309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app]

🔗 GitHub Repository

https://github.com/sanjanasanju6/TaskFlow
