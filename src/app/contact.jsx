"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 
import { faDiscord, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"; 

export default function Contact({ handleBack }) {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you want to reach out, you can find me at:</p>
      <div className="icon-grid">
        <div className="icon-item">
          <a href="mailto:demirciaydin013@gmail.com" title="Email">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "white", fontSize: "1.5rem" }} />
            <span>demirciaydin013@gmail.com</span>
          </a>
        </div>
        <div className="icon-item">
          <a href="https://discord.com/users/581450819224993803" target="_blank" rel="noopener noreferrer" title="Discord">
            <FontAwesomeIcon icon={faDiscord} style={{ color: "white", fontSize: "1.5rem" }} />
            <span>4ydindemirci</span>
          </a>
        </div>
        <div className="icon-item">
          <a href="https://www.linkedin.com/in/ayd%C4%B1n-demirci-4242b62a7/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "white", fontSize: "1.5rem" }} />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="icon-item">
          <a href="https://github.com/ayd1ndemirci" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FontAwesomeIcon icon={faGithub} style={{ color: "white", fontSize: "1.5rem" }} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <button className="back" onClick={handleBack}> &larr; back</button>
    </div>
  );
}
