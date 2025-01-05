import React, { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState("#");

  const styles = {
    nav: {
      background: "rgba(0, 0, 0, 0.3)",
      width: "max-content",
      padding: "0.8rem 2rem",
      zIndex: 2,
      position: "fixed",
      bottom: "2rem",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "1rem",
      borderRadius: "3rem",
      backdropFilter: "blur(15px)",
    },
    link: {
      background: "transparent",
      padding: "0.8rem",
      borderRadius: "50%",
      display: "flex",
      color: "#fff",
      fontSize: "1.2rem",
      transition: "background 0.3s, color 0.3s",
    },
    activeLink: {
      background: "#4CAF50",
      color: "#fff",
    },
    hoverLink: {
      background: "rgba(0, 0, 0, 0.4)",
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
        <i className="home-icon">🏠</i>
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
        <i className="user-icon">👤</i>
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
        <i className="experience-icon">📚</i>
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
        <i className="contact-icon">💬</i>
      </a>
    </nav>
  );
};

export default Navigation;
