import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<div> 
     {/* <nav className="navbar navbar-dark navbar-expand-lg sticky-top">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">Logo</Link> */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tours">Tours</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav> */} 
    
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Brand</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/facilities">Facilities</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/docs">Affliations & Credentials</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav></div>
  );
};


export default Navbar;
