const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Root@123",
  database: "contact_book",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Error connecting to MySQL:", err.message);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

module.exports = db;
