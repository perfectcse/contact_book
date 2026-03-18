# 📇 Contact Book – Full Stack Web Application

Contact Book is a full-stack web application that allows users to manage their personal contacts efficiently. Users can add, view, and delete contacts through a clean and responsive interface connected to a MySQL database.

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript (Vanilla)

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Tools

* Postman (API testing)
* VS Code

---

## 🚀 Features

* 📥 Add new contacts (Name, Email, Phone)
* 📋 View all saved contacts
* ❌ Delete unwanted contacts
* 🔌 Fully integrated MySQL backend
* 🔐 RESTful API architecture
* 🎨 Clean and responsive UI

---

## 📂 Project Structure

```
contact-book/
├── backend/
│   ├── db.js
│   ├── server.js
│   └── routes/
│       └── contacts.js
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
```

---

## 🔌 API Endpoints

| Method | Endpoint            | Description            |
| ------ | ------------------- | ---------------------- |
| GET    | `/api/contacts`     | Get all contacts       |
| POST   | `/api/contacts`     | Add a new contact      |
| DELETE | `/api/contacts/:id` | Delete a contact by ID |

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/contact-book.git
cd contact-book
```

---

### 2. Setup MySQL Database

* Open MySQL
* Run the `database.sql` file
* This will create:

  * `contact_book` database
  * `contacts` table

---

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 4. Configure Database Connection

Update your MySQL credentials in:

```
backend/db.js
```

Example:

```js
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "contact_book"
});
```

---

### 5. Start Backend Server

```bash
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

### 6. Run Frontend

* Open `frontend/index.html` in your browser

---

## 🎯 Key Concepts Demonstrated

* RESTful API design
* CRUD operations with MySQL
* Backend routing using Express.js
* Client-server communication using Fetch API
* Clean UI with responsive layout
* Separation of frontend and backend

---

## 🧠 Future Improvements

* 🔍 Search & filter contacts
* 👤 User authentication (Login/Signup)
* 🖼️ Profile image upload
* 📁 Export contacts (CSV / PDF)
* ✏️ Edit/update contact feature

---

## 📌 Project Status

* ✔ Add contact functionality
* ✔ View contacts
* ✔ Delete contacts
* ✔ Backend & database integration complete
* ✔ UI responsive and functional

---

## 📬 Author

**Vishal**

* 💼 LinkedIn: *Add your profile link here*
* 💻 GitHub: *Add your GitHub link here*

---

⭐ If you like this project, don’t forget to star the repository!
