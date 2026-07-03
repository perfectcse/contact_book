const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">📒 Contact Book</h1>

        <ul className="nav-links">
          <li>
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              Home
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                document
                  .getElementById("add-contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Add Contact
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                document
                  .getElementById("contact-list")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contacts
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;