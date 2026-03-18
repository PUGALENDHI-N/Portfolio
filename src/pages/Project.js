import React from "react";
import "../css/Project.css";
import { FaGithub } from "react-icons/fa";

function Project() {
  return (
    <div className="project">
      <h1>MY PROJECTS</h1>
      <p>Here are <br/> <br/> <span style={{color: "#00ff88"}}>⇓</span> </p> <br/> <br/>

      <div className="project-container">

        {/* Project 1 */}
        <div className="project-card">
          <h3>Gift Shop App</h3>
          <p>An online Gift Shop Management System where admins manage products and users browse and purchase gifts.</p> <br/>
          <a href="https://github.com/PUGALENDHI-N/Gift-Shop_Management_System" target="_blank" rel="noreferrer">
            View Project  ➢ 
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio using React and responsive design</p> <br/>
          <a href="https://github.com/PUGALENDHI-N/Portfolio" target="_blank" rel="noreferrer">
            View Project ➢
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>Farmer Information  System</h3>
          <p>Farmer Information System – A web app for registering, logging in, and managing farmer information securely.</p> <br/>
          <a href="https://github.com/PUGALENDHI-N/Farmer_Information_System" target="_blank" rel="noreferrer">
            View Project ➢
          </a>
        </div>

      </div>
      <div className="github">
        <h2>Check my  </h2>
<a href="https://github.com/PUGALENDHI-N" target="_blank" rel="noreferrer">
             Github <FaGithub />
            </a>
      </div>

      
    </div>
    
  );
}

export default Project;