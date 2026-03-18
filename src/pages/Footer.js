import React from "react";
import "../css/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h3>PUGALENDHI N</h3>
          <p>MERN Full Stack Developer</p>
        </div>

        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/project">Projects</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Contact</h4>

          <p>
            <FaEnvelope className="footer-icon" /> 
            pugalendhinagaraj29@gmail.com
          </p> 

          <p>
            <FaPhone className="footer-icon" /> 
            +91 80567 71943
          </p>

          <div className="footer-social">
            <a href="https://github.com/PUGALENDHI-N" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/pugalendhi12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PUGALENDHI N. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;