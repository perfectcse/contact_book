const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all contacts
router.get("/", (req, res) => {
  db.query("SELECT * FROM contacts", (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
});

// POST contact
router.post("/", (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields required" });
  }

  db.query(
    "INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)",
    [name, email, phone],
    (err, result) => {
      if (err) return res.status(500).json({ error: "Database error" });

      res.status(201).json({
        id: result.insertId,
        name,
        email,
        phone,
      });
    }
  );
});

// DELETE contact
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM contacts WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Not found" });
    }

    res.json({ message: "Deleted successfully" });
  });
});

module.exports = router;