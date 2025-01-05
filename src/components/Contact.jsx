import React from "react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <style>
        {`
          .contact__container {
            width: 58%;
            display: grid;
            grid-template-columns: 1fr 3fr;
            gap: 12%;
          }
          .contact__options {
            display: grid;
            grid-template-columns: repeat(3, 1fr); 
            gap: 1.5rem; /* space between items */
          }
          .contact__option {
            background: var(--color-bg-variant);
            padding: 1.2rem;
            border-radius: 1.2rem;
            text-align: center;
            border: 1px solid transparent;
            transition: var(--transition);
          }
          .contact__option:hover {
            background: transparent;
            border-color: var(--color-primary-variant);
          }
          .contact__option-icon {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          .contact__option a {
            margin-top: 0.7rem;
            display: inline-block;
            font-size: 0.8rem;
          }
          @media screen and (max-width: 1024px) {
            .contact__container {
              grid-template-columns: 1fr; 
              gap: 2rem;
            }
            .contact__options {
              grid-template-columns: 1fr 1fr; 
            }
          }
          @media screen and (max-width: 600px) {
            .contact__container {
              width: var(--container-width-sm);
            }
          }
        `}
      </style>

      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+27721843565</h5>
            <a href="https://api.whatsapp.com/send?phone=27721843565">
              Send a WhatsApp message
            </a>
          </div>

          <div className="contact__option">
            <FaLinkedin className="contact__option-icon" />
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
