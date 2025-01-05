import React from "react";

const SiteFooter = () => {
  const styles = {
    footer: {
      background: "#2E3B4E",
      padding: "3rem",
      textAlign: "center",
      fontSize: "0.9rem",
      marginTop: "7rem",
    },
    logo: {
      fontSize: "2rem",
      fontWeight: "500",
      marginBottom: "2rem",
      display: "block",
    },
    permalinks: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2rem",
      margin: "0 auto 3rem",
    },
    permalink: {
      color: "#F1F1F1",
      textDecoration: "none",
    },
    copyright: {
      marginBottom: "4rem",
      color: "#F1F1F1",
    },
    "@media screen and (max-width: 600px)": {
      permalinks: {
        flexDirection: "column",
        gap: "1.5rem",
      },
    },
  };

  return (
    <footer style={styles.footer}>
      <a href="#" style={styles.logo}>
        Mabohlale Nkuna
      </a>
      <ul style={styles.permalinks}>
        <li>
          <a href="#" style={styles.permalink}>Home</a>
        </li>
        <li>
          <a href="#about" style={styles.permalink}>About</a>
        </li>
        <li>
          <a href="#experience" style={styles.permalink}>Experience</a>
        </li>
        <li>
          <a href="#projects" style={styles.permalink}>Projects</a>
        </li>
        <li>
          <a href="#contact" style={styles.permalink}>Contact</a>
        </li>
      </ul>
    
    </footer>
  );
};

export default SiteFooter;
