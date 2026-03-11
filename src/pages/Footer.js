import React from "react";
import "../css/Footer.css";

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
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Contact</h4>
          <p>Email: pugalendhinagaraj29@gmail.com</p>
          <p>Phone: +91 80567 71943</p>
          <div className="footer-social">
            <a href="https://github.com/PUGALENDHI-N" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
            
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