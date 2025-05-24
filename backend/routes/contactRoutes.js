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

// POST a new contact
router.post("/", (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) return res.status(400).json({ error: "Missing fields" });

  db.query(
    "INSERT INTO contacts (name, phone) VALUES (?, ?)",
    [name, phone],
    (err) => {
      if (err) return res.status(500).json({ error: "Database error" });
      res.json({ message: "Contact added" });
    }
  );
});

// DELETE a contact by ID
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM contacts WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Contact not found" });
    res.json({ message: "Contact deleted" });
  });
});

module.exports = router;