document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
  
    await fetch("http://localhost:5000/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone }),
    });
  
    document.getElementById("contactForm").reset();
    loadContacts();
  });
  
  async function loadContacts() {
    const res = await fetch("http://localhost:5000/api/contacts");
    const contacts = await res.json();
    const list = document.getElementById("contactList");
    list.innerHTML = "";
  
    contacts.forEach((contact) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${contact.name} (${contact.phone})
        <button onclick="deleteContact(${contact.id})">Delete</button>
      `;
      list.appendChild(li);
    });
  }
  
  async function deleteContact(id) {
    await fetch(`http://localhost:5000/api/contacts/${id}`, { method: "DELETE" });
    loadContacts();
  }
  
  loadContacts();
  