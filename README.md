A full-stack web application to manage personal contacts. Users can add, view, and delete contacts using a clean UI and a connected MySQL backend.

🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript (Vanilla)

Backend: Node.js, Express.js

Database: MySQL

Tools: Postman (for API testing), VS Code

🚀 Features
📥 Add new contacts with name, email, and phone

📋 View all saved contacts

❌ Delete unwanted contacts

🔌 Fully connected with MySQL backend

🔐 Secure connection using RESTful API design

🎨 Clean and responsive UI/UX

git clone https://github.com/your-username/contact-book.git
cd contact-book

Setup the database

Open MySQL and run database.sql file to create the contact_book DB and contacts table.

Install backend dependencies
cd backend
npm install
Update DB credentials

Edit backend/db.js with your MySQL username & password.

Start the server
node server.js
Open the frontend

Open frontend/index.html in your browser

contact-book/
├── backend/
│ ├── db.js
│ ├── server.js
│ └── routes/
│ └── contacts.js
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js

📬 API Endpoints
| Method | Endpoint | Description |
| ------ | ------------------- | ---------------------- |
| GET | `/api/contacts` | Get all contacts |
| POST | `/api/contacts` | Add a new contact |
| DELETE | `/api/contacts/:id` | Delete a contact by ID |

🧠 Future Improvements
🔍 Add search and filter functionality

👤 Add user authentication (login/signup)

🖼️ Add image upload for profile pictures

📁 Export contacts to CSV/PDF

📌 Author
Your Name

LinkedIn

GitHub
