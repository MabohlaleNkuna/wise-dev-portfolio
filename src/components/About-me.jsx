import React, { useEffect } from "react"; 
import PIC from "../assets/PIC.jpg";
import './styles/About.css';

const About = () => {
  useEffect(() => {
    const globalStyle = document.createElement("style");
    globalStyle.innerHTML = `
      @keyframes rotate-left {
        from {
          transform: rotateY(0deg);
        }
        to {
          transform: rotateY(360deg); 
        }
      }
    `;
    document.head.appendChild(globalStyle);

    return () => {
      document.head.removeChild(globalStyle);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="about-section">
      <h2 className="about-heading">About Me</h2>
      <div className="about-container">
        <div className="about-me">
          <img
            src={PIC}
            alt="me"
            className="about-me-image"
            onMouseOver={(e) => (e.currentTarget.style.transform = "rotate(-10deg)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "rotate(0deg)")}
          />
        </div>
        <div>
          <p className="about-text">
          I am a Full-Stack Developer and recent graduate of the mLab CodeTribe Academy, specializing in React and React Native. With experience from Zaio Coding School and Botlhale AI, I’ve developed strong skills in both front-end and back-end technologies, including Node.js, MongoDB, Firebase,React,Java and Python. Passionate about innovation, I strive to create impactful, scalable solutions to real-world challenges.
          </p>
          <button className="about-btn" onClick={scrollToContact}>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
