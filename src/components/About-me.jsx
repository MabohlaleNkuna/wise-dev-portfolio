import React, { useEffect } from "react";
import PIC from "../assets/PIC.jpg";

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
            I am a passionate Full-Stack Developer with experience in building impactful web and mobile applications. At Mlab CodeTribe Academy, I specialized in developing React Native mobile apps and web solutions, creating intuitive user experiences. Similarly, at Zaio Coding School, I honed my expertise in full-stack web application development, mastering modern tools and technologies to deliver dynamic software solutions. At Botlhale, I expanded my skill set by working on Python-based projects, including web scraping, audio processing, data processing, and chatbot development. My technical expertise includes front-end development with React, Redux, HTML, CSS, JavaScript, and TypeScript, as well as back-end development using Node.js, Express, MongoDB, Firebase, SQLite, and SQL. I also have extensive experience integrating APIs to create scalable applications. With certifications from SheCodes and Cisco Networking Academy, I am driven by curiosity and innovation, committed to delivering efficient solutions to real-world challenges.
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
