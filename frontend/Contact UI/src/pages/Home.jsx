import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import SearchBar from "../components/SearchBar";
import ContactList from "../components/ContactList";

const Home = ({
  contacts,
  searchTerm,
  setSearchTerm,
  addContact,
  updateContact,
  deleteContact,
  editingContact,
  setEditingContact,
}) => {
  return (
    <>
      <Navbar />

      <main className="home-container">
        <section id="add-contact" className="form-section">
          <ContactForm
            addContact={addContact}
            updateContact={updateContact}
            editingContact={editingContact}
            setEditingContact={setEditingContact}
          />
        </section>

        <section className="search-section">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </section>

        <section id="contact-list" className="list-section">
          <ContactList
            contacts={contacts}
            searchTerm={searchTerm}
            onDelete={deleteContact}
            onEdit={setEditingContact}
          />
        </section>
      </main>
    </>
  );
};

export default Home;