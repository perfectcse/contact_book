import express from "express";

import {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

// Get all contacts
router.get("/", getContacts);

// Add new contact
router.post("/", createContact);

// Update contact
router.put("/:id", updateContact);

// Delete contact
router.delete("/:id", deleteContact);

export default router;