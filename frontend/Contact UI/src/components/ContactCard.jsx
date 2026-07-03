// src/components/ContactCard.jsx

const ContactCard = ({ contact, onDelete, onEdit }) => {
  return (
    <div className="contact-card">
      <div className="card-header">
        <h2>{contact.name}</h2>
      </div>

      <div className="card-body">
        <p>
          <strong>📞 Phone:</strong> {contact.phone}
        </p>

        <p>
          <strong>📧 Email:</strong> {contact.email}
        </p>
      </div>

      <div className="card-footer">
        <button
          className="edit-btn"
          onClick={() => onEdit(contact)}
        >
          ✏️ Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => {
            const confirmDelete = window.confirm(
              `Are you sure you want to delete ${contact.name}?`
            );

            if (confirmDelete) {
              onDelete(contact._id);
            }
          }}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;