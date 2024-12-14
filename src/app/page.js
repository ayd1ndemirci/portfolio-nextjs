"use client";
import { useEffect, useState } from "react";
import About from "./about.jsx";
import Skill from "./skill.jsx";
import Contact from "./contact.jsx";
import Projects from "./projects.jsx";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState("");

  const handleShowAbout = () => {
    setShowAbout(true);
    setShowSkill(false);
    setShowContact(false);
    setShowProjects(false);
  };

  const handleShowSkill = () => {
    setShowSkill(true);
    setShowAbout(false);
    setShowContact(false);
    setShowProjects(false);
  };

  const handleShowContact = () => {
    setShowContact(true);
    setShowAbout(false);
    setShowSkill(false);
    setShowProjects(false);
  };

  const handleShowProjects = () => {
    setShowProjects(true);
    setShowAbout(false);
    setShowSkill(false);
    setShowContact(false);
  };

  const handleBack = () => {
    setShowAbout(false);
    setShowSkill(false);
    setShowContact(false);
    setShowProjects(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDateTime = new Intl.DateTimeFormat("tr-TR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format(now);
      setCurrentDateTime(formattedDateTime);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {!showAbout && !showSkill && !showContact && !showProjects ? (
        <div className="main">
          <h1>Hi👋</h1>
          <h2 className="name">ayd1ndemirci</h2>
          <p className="description">My name is Aydın Demirci ✨</p>
          <p className="description1">I'm a student of High School 🏫</p>
          <p className="time">{currentDateTime}</p>
          <div className="navbar">
            <button className="about" onClick={handleShowAbout}>
              about
            </button>
            <button className="skill" onClick={handleShowSkill}>
              skill
            </button>
            <button className="contact" onClick={handleShowContact}>
              contact
            </button>
            <button className="projects" onClick={handleShowProjects}>
              projects
            </button>
          </div>
        </div>
      ) : showAbout ? (
        <About handleBack={handleBack} />
      ) : showSkill ? (
        <Skill handleBack={handleBack} />
      ) : showContact ? (
        <Contact handleBack={handleBack} />
      ) : (
        <Projects handleBack={handleBack} />
      )}
    </div>
  );
}
