# 📒 Contact Book - MERN Stack Application

A modern Contact Management System built using the **MERN Stack (MongoDB, Express.js, React, Node.js)**. The application allows users to create, search, update, and delete contacts through a clean and responsive interface.

---

## 🚀 Features

- ➕ Add New Contacts
- 📋 View All Contacts
- ✏️ Update Existing Contacts
- 🗑️ Delete Contacts
- 🔍 Search Contacts
- 📱 Responsive UI
- ⚡ REST API Integration
- 🗄️ MongoDB Database
- 🔄 Real-Time CRUD Operations

---

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Axios
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## 📂 Project Structure

```text
contact-book/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── ContactCard.jsx
│   │   │   ├── ContactList.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Loader.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contacts.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/contact-book.git
```

```bash
cd contact-book
```

---

## Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/contactBook
```

Run the backend

```bash
npm run dev
```

Backend will run on

```
http://localhost:5000
```

---

## Frontend Setup

Open a new terminal

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run React App

```bash
npm run dev
```

Frontend will run on

```
http://localhost:5173
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/contacts | Get all contacts |
| POST | /api/contacts | Create a new contact |
| PUT | /api/contacts/:id | Update a contact |
| DELETE | /api/contacts/:id | Delete a contact |

---



## 🎯 Learning Outcomes

Through this project I learned:

- React Component Architecture
- React Hooks (useState, useEffect)
- Axios API Integration
- Express.js REST APIs
- MongoDB CRUD Operations
- Mongoose Models & Schemas
- MVC Architecture
- Backend Routing
- Error Handling
- Responsive UI Design

---

## 🚀 Future Improvements

- User Authentication (JWT)
- Dark Mode
- Export Contacts (CSV/PDF)
- Favorite Contacts
- Contact Categories
- Pagination
- Toast Notifications
- Profile Pictures
- Cloud Deployment

---

## 👨‍💻 Author

**Vishal Mishra**

Aspiring MERN Stack Developer

GitHub: https://github.com/perfectcse



---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

---

## 📜 License

This project is developed for learning and portfolio purposes.