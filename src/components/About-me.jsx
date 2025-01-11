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

  const styles = {
    section: {
      background: "linear-gradient(135deg, #241D10, #004AAD, #F4C561)",  
      padding: "4rem 0", 
      textAlign: "center",
      color: "#FFFFFF",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "35% 50%",
      gap: "15%",
      alignItems: "center",
      padding: "2rem",
      color: "#FFFFFF",
      borderRadius: "10px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      background: "transparent",
      // Media query for screens 450px and below
      "@media (max-width: 450px)": {
        display: "block", // Change to block to stack the elements vertically
        padding: "1rem",  // Adjust padding for smaller screens
        gap: "1rem",      // Adjust gap between elements
      },
    },
    aboutMe: {
      width: "100%",
      aspectRatio: "1 / 1",
      borderRadius: "50%",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      animation: "rotate-left 5s infinite alternate ease-in-out",
    },
    aboutMeImage: {
      width: "90%",
      height: "90%",
      borderRadius: "50%",
      objectFit: "cover",
      transition: "transform 0.5s ease-in-out",
    },
    aboutMeImageHover: {
      transform: "rotate(-10deg)",
    },
    aboutText: {
      marginTop: "0.5rem",
      color: "#E0E0E0",
      fontSize: "1.1rem",
      lineHeight: "1.8",
    },
    btn: {
      display: "inline-block",
      padding: "0.5rem 1rem",
      backgroundColor: "#F4C561",
      color: "#241D10",
      borderRadius: "30px",
      textDecoration: "none",
      marginTop: "1rem",
      fontWeight: "bold",
    },
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" style={styles.section}> 
      <h2 style={{ color: "#F4C561" }}>About Me</h2>
      <div style={styles.container}>
        <div style={styles.aboutMe}>
          <img
            src={PIC}
            alt="me"
            style={styles.aboutMeImage}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = styles.aboutMeImageHover.transform)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "rotate(0deg)")
            }
          />
        </div>
        <div>
          <p style={styles.aboutText}>
            I am a passionate Full-Stack Developer with experience in building impactful web and mobile applications. At Mlab CodeTribe Academy, I specialized in developing React Native mobile apps and web solutions, creating intuitive user experiences. Similarly, at Zaio Coding School, I honed my expertise in full-stack web application development, mastering modern tools and technologies to deliver dynamic software solutions. At Botlhale, I expanded my skill set by working on Python-based projects, including web scraping, audio processing, data processing, and chatbot development. My technical expertise includes front-end development with React, Redux, HTML, CSS, JavaScript, and TypeScript, as well as back-end development using Node.js, Express, MongoDB, Firebase, SQLite, and SQL. I also have extensive experience integrating APIs to create scalable applications. With certifications from SheCodes and Cisco Networking Academy, I am driven by curiosity and innovation, committed to delivering efficient solutions to real-world challenges.
          </p>
          <button style={styles.btn} onClick={scrollToContact}>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
