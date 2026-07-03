const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <h2 className="footer-logo">📒 Contact Book</h2>

          <p className="footer-description">
            A modern MERN Stack Contact Management System to add, search,
            update and manage your contacts with ease.
          </p>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            © {year} Contact Book. All Rights Reserved.
          </p>

          <p>
            Built with ❤️ using React, Express, Node.js & MongoDB
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;