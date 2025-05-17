import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="container">
        <div className="row">

          {/* Column 1: School Info + About Links */}
          <div className="col-md-3 mb-4 px-3">
            <h3>Atal Utkrisht Govt Inter College,  Shrikot, Chinyalisaur,
            Uttarkashi</h3>
           
          </div>

          {/* Column 2: Facilities */}
          <div className="col-md-3 mb-4 ">
            <h4>Other Navigation</h4>
           <div className=''>
             <ul>
              <li><Link to="/facilities">About</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/facilities">Gallery</Link></li>
               <li><Link to="/facilities">Affliation and Credentials</Link></li>
            </ul>
           </div>
          
          </div>

          <div className="col-md-3 mb-4 ">
            <h4>Stay Connected</h4>
           <div className=''>
             <ul>
              <li><Link to="/">Facebook</Link></li>
              <li><Link to="/">Twitter</Link></li>
              <li><Link to="/">Instagram</Link></li>
               <li><Link to="/">Youtube</Link></li>
            </ul>
           </div>
          
          </div>

    
      

          {/* Column 4: Contact Details */}
          <div className="col-md-3 mb-4">
            <h4>Contact Us</h4>
            <p>Atal Utkrisht Government Inter College,
            Shrikot, Chinyalisaur, Uttarkashi</p>
            <p>Pin code -</p>
            <p>Email: </p>
            <p>Phone: </p>
         
          </div>

        </div>

        <div className="footer-bottom-text">
          <p className="text-center">
            &copy; 2025 Atal Utkrisht Government Inter College, Shrikot, Chinyalisaur, Uttarkashi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
