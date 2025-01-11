import React from "react";
import CV from "../assets/wise-cv.pdf";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <h1 style={styles.heading}>Hi, I Am Wise Mabohlale Nkuna</h1>
        <div style={styles.textLight}>Fullstack Developer</div>
        <div style={styles.details}>
          <p>CodeTribe Location: Pretoria</p>
          <p>Program Enrolled: Fullstack Mobile and Web Development</p>
          <p>Date: Last updated 10 January 2025</p>
        </div>
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
    width: "100vw",
    padding: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #004AAD, #F4C561)",
    color: "#FFF",
    position: "relative",
    overflow: "hidden",
  },

  headerContainer: {
    textAlign: "center",
    width: "100%",
    maxWidth: "1200px", // Fixed width for large screens
    margin: "0 auto",
    padding: "0 2rem",
  },

  heading: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "1rem",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#F4C561",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
    transition: "color 0.3s ease",
  },

  textLight: {
    fontSize: "1.3rem",
    marginBottom: "2rem",
    color: "#E0E0E0",
  },

  details: {
    textAlign: "left",
    marginLeft: "15px",
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#D1D1D1",
    marginBottom: "2rem",
  },

  cta: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
  },

  btn: {
    backgroundColor: "#F4C561",
    color: "#241D10",
    padding: "1rem 2.5rem",
    borderRadius: "50px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    border: "none",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },

  btnHover: {
    backgroundColor: "#E8B548",
    transform: "scale(1.05)",
  },

  scrollDown: {
    marginTop: "2rem",
    fontWeight: "500",
    fontSize: "1rem",
    textDecoration: "underline",
    color: "#F4C561",
    animation: "bounce 2s infinite",
  },

  "@media screen and (max-width: 768px)": {
    heading: {
      fontSize: "2rem",
    },

    details: {
      marginLeft: "10px",
    },

    textLight: {
      fontSize: "1.1rem",
    },

    btn: {
      padding: "0.8rem 2rem",
      fontSize: "1rem",
    },

    scrollDown: {
      fontSize: "0.9rem",
    },
  },

  "@media screen and (max-width: 480px)": {
    heading: {
      fontSize: "1.6rem",
    },

    details: {
      marginLeft: "5px",
    },

    textLight: {
      fontSize: "1rem",
    },

    btn: {
      padding: "0.8rem 2rem",
      fontSize: "1rem",
    },

    scrollDown: {
      fontSize: "0.9rem",
    },
  },
};

const globalStyle = document.createElement("style");
globalStyle.innerHTML = `
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #241D10, #004AAD, #F4C561);
    color: #FFFFFF;
    overflow-x: hidden;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem !important;
    }

    p, a {
      font-size: 0.9rem !important;
    }

    .details {
      margin-left: 10px !important;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 1.5rem !important;
    }

    p, a {
      font-size: 0.8rem !important;
    }
  }
`;

document.head.appendChild(globalStyle);

export default Header;
