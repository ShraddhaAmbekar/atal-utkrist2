import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeMenu = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Brand</a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-center`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/gallery"
                onClick={closeMenu}
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/facilities"
                onClick={closeMenu}
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Facilities
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/docs"
                onClick={closeMenu}
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                Affiliations & Credentials
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
