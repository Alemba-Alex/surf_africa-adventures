import "./Footer.css";
import React from 'react';
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <div>
                        <p>Westlands, Nairobi</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>+2547 91267 737</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>surfAfrica@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <div className="social">
                <FaFacebook size={30} style={{color:"white", marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"white", marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer