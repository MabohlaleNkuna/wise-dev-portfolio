import React from "react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import './styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-options">
          <div className="contact-option">
            <FaWhatsapp className="contact-option-icon" />
            <h4>Whatsapp</h4>
            <h5>+27721843565</h5>
            <a href="https://api.whatsapp.com/send?phone=27721843565">
              Send a WhatsApp message
            </a>
          </div>

          <div className="contact-option">
            <FaLinkedin className="contact-option-icon" />
            <h4>LinkedIn</h4>
            <h5>Wise Nkuna</h5>
            <a href="https://www.linkedin.com/in/wise-nkuna-1a5525201/">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
