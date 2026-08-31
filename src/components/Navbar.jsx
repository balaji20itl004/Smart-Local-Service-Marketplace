import { Link } from "react-router-dom";
import { MapPin, User } from "lucide-react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          <span className="logo-icon">S</span>
          <span>ServiceHub</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <a href="#how-it-works">How It Works</a>
          <Link to="/providers">Providers</Link>
        </nav>

        <div className="nav-actions">
          <button className="location-button">
            <MapPin size={18} />
            Madurai
          </button>

          <Link to="/login" className="login-button">
            <User size={18} />
            Login
          </Link>

          <Link to="/register" className="register-button">
            Get Started
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;