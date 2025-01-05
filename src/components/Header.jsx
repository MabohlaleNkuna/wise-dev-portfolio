import React, { useEffect, useRef } from "react";
import CV from "../assets/wise-cv.pdf";

const Header = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const typingEffect = () => {
      const text = "Hi I Am Wise Mabohlale Nkuna";
      let index = 0;
      let isDeleting = false;

      const type = () => {
        if (isDeleting) {
          index--;
        } else {
          index++;
        }

        typingRef.current.textContent = text.substring(0, index);

        if (!isDeleting && index === text.length) {
          setTimeout(() => {
            isDeleting = true;
            setTimeout(type, 100);
          }, 1000);
        }

        if (isDeleting && index === 0) {
          isDeleting = false;
        }

        if (!isDeleting || index > 0) {
          setTimeout(type, isDeleting ? 100 : 200);
        }
      };

      type();
    };

    typingEffect();
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <h1 style={styles.heading} ref={typingRef}></h1>
        <div style={styles.textLight}>Fullstack Developer</div>
        <div style={styles.cta}>
          <a style={styles.btn} href={CV} download>
            Click to Download My CV
          </a>
        </div>
        <a style={styles.scrollDown} href="#contact">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

const styles = {
    header: {
      height: "100vh",
      paddingTop: "5rem",
      overflow: "hidden",
    },
    headerContainer: {
      textAlign: "center",
      height: "100%",
      position: "relative",
    },
    heading: {
      fontSize: "3rem",
      color: "#004AAD",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontWeight: "bold",
      marginBottom: "1rem",
      marginTop: "0.5rem",
      whiteSpace: "nowrap",
      display: "inline-block",
    },
    textLight: {
      color: "#a9a9a9",
    },
    cta: {
      marginTop: "1.5rem",
      display: "flex",
      gap: "1.2rem",
      justifyContent: "center",
    },
    btn: {
      backgroundColor: "#4CAF50",
      color: "#fff",
      padding: "0.8rem 2rem",
      borderRadius: "50px",
      fontSize: "1.2rem",
      textDecoration: "none",
      transition: "background-color 0.6s ease",
      cursor: "pointer",
      marginBottom: "0.5rem", // Reduced margin-bottom
    },
    scrollDown: {
      position: "absolute",
      right: "-2.3rem",
      bottom: "5rem",
      transform: "rotateZ(90deg)",
      fontWeight: "200",
      fontSize: "0.9rem",
    },
  };
  
const globalStyle = document.createElement("style");
globalStyle.innerHTML = `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  .fadeIn {
    animation: fadeIn 4s ease-in-out;
  }
`;

document.head.appendChild(globalStyle);

export default Header;
