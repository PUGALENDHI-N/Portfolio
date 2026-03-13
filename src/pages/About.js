import React from "react";
import "../css/About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          Hi! I’m <b>PUGALENDHI N</b>, a MERN Full Stack Developer.

I specialize in building modern, scalable, and responsive web applications using MongoDB, Express, React, and Node.js (MERN stack). I enjoy turning complex problems into simple, efficient solutions that provide real value to users.

With a strong foundation in JavaScript, HTML, CSS, and backend development, I develop full-fledged web applications from frontend interfaces to server-side APIs. I also ensure my applications are user-friendly, responsive, and performant.

I have experience working on projects ranging from portfolio websites, e-commerce platforms, to dynamic dashboards, and I am passionate about continuously learning new technologies to stay up-to-date in the fast-evolving web development ecosystem.
        </p> <br/>

        <h2>Skills</h2> <br/>
        <ul className="skills">
          <li>React.js</li>
          <li>Node.js & Express</li>
          <li>MongoDB</li>
          <li>HTML, CSS, JavaScript</li>
          <li>Git & GitHub</li>
        </ul> <br/>

        <div className="experience">
          <h3>Portfolio Website</h3>
          <p>
            Developed a responsive portfolio website using React, Node.js, and MongoDB to showcase my projects and skills.
          </p>
        </div>

        <h2>Education & Certifications</h2>
        <p>BSc Information Technology – Hindusthan college of arts and science</p>
        <p>MERN Stack Certification – Elysium Acadamy</p> <br/>

        <h2>About Me Personally</h2>
        <p>
          I’m a passionate MERN Full Stack Developer and a freelancer who loves building custom web applications that help businesses and individuals achieve their goals. I specialize in creating responsive, scalable, and user-friendly websites and web apps from scratch, tailored to the client’s needs.

As a freelancer, I take pride in delivering high-quality solutions on time and communicating clearly with clients to ensure the final product exceeds expectations. I enjoy working on projects of all sizes, whether it’s a personal portfolio, e-commerce platform, or a dynamic web application.

I am constantly learning new technologies and best practices to stay ahead in web development. My goal is not just to code, but to solve real-world problems and create meaningful experiences for users.

<p> <b>Why work with me?</b></p>
<ul>
  <li>Dedicated and self-motivated</li>
  <li>Clear communication and project updates</li>
  <li>Flexible and adaptive to client requirements</li>
  <li>Focused on creating efficient and maintainable code</li>
</ul>

Let’s work together to bring your ideas to life with a professional, modern web application built using the latest technologies.
        </p>
<br/>
        
      </div>
    </section>
  );
}

export default About;