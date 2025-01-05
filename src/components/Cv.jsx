import React from "react";
import CV from "../assets/wise-cv.pdf";

const Cv = () => {
  return (
    <div style={styles.actionButtons}>
      <a style={styles.button} href={CV} download>
        Click to Download My CV
      </a>
    </div>
  );
};

const styles = {
  actionButtons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "0.8rem 2rem",
    borderRadius: "30px",
    fontSize: "1.2rem",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  },
};

export default Cv;
