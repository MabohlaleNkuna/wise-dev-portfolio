import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navigation = () => {
  const [active, setActive] = useState("#");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 400);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 400);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styles = {
    nav: {
      background: "rgba(207, 207, 207, 0.3)",
      height: isSmallScreen ? "5rem" : "7rem",
      width: isSmallScreen ? "16rem" : "23rem",
      padding: isSmallScreen ? "0.4rem 0.8rem" : "0.8rem 2rem",
      zIndex: 2,
      position: "fixed",
      bottom: "2rem",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: isSmallScreen ? "1rem" : "1.5rem",
      borderRadius: "3rem",
      backdropFilter: "blur(15px)",
      transition: "all 0.3s ease",
    },
    link: {
      background: "transparent",
      padding: isSmallScreen ? "0.8rem" : "1rem",
      borderRadius: "50%",
      display: "flex",
      color: "#fff",
      fontSize: isSmallScreen ? "0.8rem" : "1rem",
      transition: "background 0.3s, color 0.3s, transform 0.3s",
    },
    hoverLink: {
      background: "rgba(0, 0, 0, 0.4)",
    },
    icons: {
      fontSize: isSmallScreen ? "1.4rem" : "1.7rem",
      color: "#0d6efd",
    },
  };

  return (
    <nav style={styles.nav}>
      <a
        onClick={() => setActive("#")}
        style={{
          ...styles.link,
          ...(active === "#" ? styles.activeLink : {}),
        }}
        href="#"
        onMouseOver={(e) => (e.currentTarget.style.background = styles.hoverLink.background)}
        onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <i className="bi bi-house-door" style={styles.icons}></i>
      </a>
      <a
        onClick={() => setActive("#about")}
        style={{
          ...styles.link,
          ...(active === "#about" ? styles.activeLink : {}),
        }}
        href="#about"
        onMouseOver={(e) => (e.currentTarget.style.background = styles.hoverLink.background)}
        onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <i className="bi bi-person" style={styles.icons}></i>
      </a>
      <a
        onClick={() => setActive("#experience")}
        style={{
          ...styles.link,
          ...(active === "#experience" ? styles.activeLink : {}),
        }}
        href="#experience"
        onMouseOver={(e) => (e.currentTarget.style.background = styles.hoverLink.background)}
        onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <i className="bi bi-journal-bookmark" style={styles.icons}></i>
      </a>
      <a
        onClick={() => setActive("#contact")}
        style={{
          ...styles.link,
          ...(active === "#contact" ? styles.activeLink : {}),
        }}
        href="#contact"
        onMouseOver={(e) => (e.currentTarget.style.background = styles.hoverLink.background)}
        onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <i className="bi bi-chat-dots" style={styles.icons}></i>
      </a>
    </nav>
  );
};

export default Navigation;
