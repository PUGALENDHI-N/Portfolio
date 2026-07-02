import React, { useState } from "react";
import axios from "axios";
import "../css/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Validation
  const validate = () => {
    let newErrors = {};

    // Name
    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Mobile
    const mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must contain exactly 10 digits.";
    }

    // Message
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const onlyNumbers = value.replace(/\D/g, "");

      setFormData({
        ...formData,
        mobile: onlyNumbers,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await axios.post(
        "https://portfolio-backend-bw7u.onrender.com/api/contact",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Unable to connect to the server.");
      }
    }
  };

  return (
    <section className="contact">

      <h1>Contact Me</h1>

      <p className="contact-subtitle">
        Have a project in mind? Let's build something amazing together.
      </p>

      <div className="contact-container">

        {/* Left */}

        <div className="contact-info">

          <h2>Let's Connect</h2>

          <p>
            I'm always open to discussing freelance work,
            internships, full-time opportunities, or exciting
            web development projects.
          </p>

          <div className="info-box">
            <h4>Email</h4>
            <p>pugalendhinagaraj29@gmail.com</p>
          </div>

          <div className="info-box">
            <h4>Phone</h4>
            <p>+91 8056771943</p>
          </div>

          <div className="info-box">
            <h4>Location</h4>
            <p>Coimbatore, Tamil Nadu</p>
          </div>

        </div>

        {/* Right */}

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && (
            <small className="error">{errors.name}</small>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <small className="error">{errors.email}</small>
          )}

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            maxLength="10"
            onChange={handleChange}
          />

          {errors.mobile && (
            <small className="error">{errors.mobile}</small>
          )}

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
          />

          {errors.message && (
            <small className="error">{errors.message}</small>
          )}

          <button type="submit">
            Build Together
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;