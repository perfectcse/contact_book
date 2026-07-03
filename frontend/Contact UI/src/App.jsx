import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
} from "./services/api";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch Contacts
  const fetchContacts = async () => {
    try {
      setLoading(true);

      const response = await getContacts();

      setContacts(response.data.data || []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Add Contact
  const handleAddContact = async (contactData) => {
    try {
      await addContact(contactData);
      fetchContacts();
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  // Update Contact
  const handleUpdateContact = async (id, contactData) => {
    try {
      await updateContact(id, contactData);
      setEditingContact(null);
      fetchContacts();
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  // Delete Contact
  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id);
      fetchContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="app">
      <Navbar totalContacts={contacts.length} />

      <div className="home-container">

        <div id="add-contact">
          <ContactForm
            addContact={handleAddContact}
            updateContact={handleUpdateContact}
            editingContact={editingContact}
            setEditingContact={setEditingContact}
          />
        </div>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div id="contact-list">
          {loading ? (
            <Loader />
          ) : (
            <ContactList
              contacts={contacts}
              searchTerm={searchTerm}
              onDelete={handleDeleteContact}
              onEdit={setEditingContact}
            />
          )}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default App;