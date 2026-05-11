import { PawPrint, Bell } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <PawPrint className="navbar-logo-icon" />

          <div>
            <h1>GreenRoute</h1>
            <p>Travel green. Earn more.</p>
          </div>
        </div>

        <div className="navbar-links">
          <a className="active" href="#">Home</a>
          <a href="#">Journey Planner</a>
          <a href="#">Rewards</a>
          <a href="#">Sustainability</a>
          <a href="#">Community</a>
        </div>

        <div className="navbar-actions">
          <button className="navbar-icon-button">
            <Bell size={20} />
          </button>

          <div className="navbar-profile">P</div>

          <button className="navbar-start-button">
            Start Journey
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;