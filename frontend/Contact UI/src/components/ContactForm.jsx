import { useState, useEffect } from "react";

// Initial state outside the component
const initialState = {
  name: "",
  phone: "",
  email: "",
};

const ContactForm = ({
  addContact,
  updateContact,
  editingContact,
  setEditingContact,
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingContact) {
      setFormData({
        name: editingContact.name || "",
        phone: editingContact.phone || "",
        email: editingContact.email || "",
      });
    } else {
      setFormData(initialState);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim()
    ) {
      alert("Please fill all fields!");
      return;
    }

    if (editingContact) {
      updateContact(editingContact._id, formData);
      setEditingContact(null);
    } else {
      addContact(formData);
    }

    setFormData(initialState);
  };

  const handleCancel = () => {
    setEditingContact(null);
    setFormData(initialState);
  };

  return (
    <div className="contact-form-container">
      <h2>
        {editingContact ? "✏️ Update Contact" : "➕ Add Contact"}
      </h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div className="button-group">
          <button type="submit">
            {editingContact ? "Update Contact" : "Add Contact"}
          </button>

          {editingContact && (
            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;