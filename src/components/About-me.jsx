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
    container: {
      display: "grid",
      gridTemplateColumns: "35% 50%",
      gap: "15%",
      alignItems: "center",
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
    aboutContent: {
      margin: "0.5rem 0",
    },
    aboutText: {
      marginTop: "0.5rem",
      color: "#6c757d",
    },
    btn: {
      display: "inline-block",
      padding: "0.5rem 1rem",
      backgroundColor: "#007bff",
      color: "#fff",
      borderRadius: "5px",
      textDecoration: "none",
      marginTop: "1rem", 
    },
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about">
      <h2>About Me</h2>
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
