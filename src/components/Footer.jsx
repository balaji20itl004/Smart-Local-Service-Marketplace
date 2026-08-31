function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>ServiceHub</h2>
          <p>
            Connecting customers with trusted local professionals
            for everyday services.
          </p>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <a href="#">Plumbing</a>
          <a href="#">Electrical</a>
          <a href="#">AC Repair</a>
          <a href="#">Cleaning</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <a href="#">About Us</a>
          <a href="#">How It Works</a>
          <a href="#">Become a Provider</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <a href="#">Help Center</a>
          <a href="#">Safety</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ServiceHub. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;