const apiUrl = "http://127.0.0.1:5000/api/contacts";

// Load contacts when page loads
document.addEventListener("DOMContentLoaded", loadContacts);

// Add Contact
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  try {
    await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone }),
    });

    e.target.reset();
    loadContacts();
  } catch (error) {
    console.error("Add Error:", error);
  }
});

// Load Contacts
async function loadContacts() {
  try {
    const res = await fetch(apiUrl);
    const contacts = await res.json();

    const list = document.getElementById("contactList");
    list.innerHTML = "";

    contacts.forEach((contact) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${contact.name} (${contact.email}) - ${contact.phone}
        <button onclick="deleteContact(${contact.id})">Delete</button>
      `;
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Fetch Error:", error);
  }
}

// Delete Contact
async function deleteContact(id) {
  try {
    await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    loadContacts();
  } catch (error) {
    console.error("Delete Error:", error);
  }
}