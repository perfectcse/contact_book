import ContactCard from "./ContactCard";

const ContactList = ({
  contacts,
  onDelete,
  onEdit,
  searchTerm,
}) => {
  // Filter contacts based on search
  const filteredContacts = contacts.filter((contact) => {
    const search = searchTerm.toLowerCase();

    return (
      contact.name.toLowerCase().includes(search) ||
      contact.phone.toLowerCase().includes(search) ||
      contact.email.toLowerCase().includes(search)
    );
  });

  return (
    <div className="contact-list">
      {filteredContacts.length === 0 ? (
        <div className="no-contact">
          <h3>No Contacts Found</h3>
          <p>Add a new contact to get started.</p>
        </div>
      ) : (
        filteredContacts.map((contact) => (
          <ContactCard
            key={contact._id}
            contact={contact}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};

export default ContactList;