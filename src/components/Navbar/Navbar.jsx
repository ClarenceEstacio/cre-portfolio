import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="top-navbar">
        <a href="#HOME" className="navbar-logo flex items-center gap-4">
          <img
            src="/bg/logo.png"
            alt=""
            className="animate-spin [animation-duration:5s] ease-linear origin-center rounded-full w-16 h-16"
          />
          <h1 className="navbar-text">
            <div className="navh1">&lt;CRE&gt;</div>Portfolio
            <div className="navh1">&lt;/CRE&gt;</div>
          </h1>
        </a>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>

        {/* Nav links */}
        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li>
            <a
              href="#HOME"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#ABOUT"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#PROJECTS"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#CONTACT"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
