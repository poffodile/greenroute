import { useState } from "react";
import { PawPrint, Bell } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  // Tracks which nav item is selected
  const [activeLink, setActiveLink] = useState("Home");

  // Navigation items
  const navLinks = [
    "Home",
    "Journey Planner",
    "Rewards",
    "Sustainability",
    "Community",
  ];

  return (
    <header className="navbar">
      <nav className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <PawPrint className="navbar-logo-icon" />

          <div>
            <h1>GreenRoute</h1>
            <p>Travel green. Earn more.</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <button
              key={link}
              className={activeLink === link ? "active" : ""}
              onClick={() => setActiveLink(link)}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="navbar-actions">

          <button className="navbar-icon-button">
            <Bell size={20} />
          </button>

          <div className="navbar-profile">
            P
          </div>

          <button className="navbar-start-button">
            Start Journey
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;