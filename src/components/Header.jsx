import React from "react";
import CV from "../assets/wiseM-cv.pdf";
import { Button } from "react-bootstrap";
import "./styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content text-center">
        <h1 className="animated-heading display-4">
          {"Wise Mabohlale Nkuna".split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 50}ms` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="lead mt-3 shadow-text">Mobile & Web Developer</p>
        <div className="header-details mt-4">
          <p>
            <strong>CodeTribe Location:</strong> Pretoria
          </p>
          <p>
            <strong>Program Enrolled:</strong> Fullstack Mobile and Web Development
          </p>
        </div>
        <div className="mt-4">
          <Button
            variant="primary"
            href={CV}
            download
            className="header-button"
          >
            Download My CV
          </Button>
        </div>
        <div className="scroll-down-container">
          <a href="#contact" className="scroll-down">
            <i className="bi bi-chevron-double-down"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
