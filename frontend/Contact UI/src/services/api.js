import axios from "axios";

// Backend Base URL
const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// =========================
// GET ALL CONTACTS
// =========================
export const getContacts = () => API.get("/contacts");

// =========================
// ADD CONTACT
// =========================
export const addContact = (contact) =>
  API.post("/contacts", contact);

// =========================
// UPDATE CONTACT
// =========================
export const updateContact = (id, contact) =>
  API.put(`/contacts/${id}`, contact);

// =========================
// DELETE CONTACT
// =========================
export const deleteContact = (id) =>
  API.delete(`/contacts/${id}`);

export default API;