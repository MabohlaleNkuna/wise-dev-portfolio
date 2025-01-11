import React from "react";
import CV from "../assets/wise-cv.pdf";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="heading">Wise Mabohlale Nkuna</h1>
        <p className="text-light">Fullstack Developer</p>
        <div className="details">
          <p>CodeTribe Location: Pretoria</p>
          <p>Program Enrolled: Fullstack Mobile and Web Development</p>
          <p>Date: Last updated 10 January 2025</p>
        </div>
        <div className="cta">
          <a className="header-button" href={CV} download>
            Click to Download My CV
          </a>
        </div>
        <a className="scroll-down" href="#contact">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
