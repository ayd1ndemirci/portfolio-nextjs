"use client";
import { useEffect, useState } from "react";
import Head from "next/head";

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
    <>
      <Head>
        <meta name="description" content="Aydın Demirci'nin resmi web sitesi. Projelerim, yazılarım ve hakkımda bilgiye ulaşın." />
        <meta name="keywords" content="Aydın Demirci, ayd1ndemirci, aydın demirci, aydın demirci portfolyo" />
        <meta name="author" content="Aydın Demirci" />
        <meta name="google-site-verification" content="jrUa8qqaD-zV1JGqn5MvUbAn8EC-GlcKIuSfs-5JKVg"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <div>
        {!showAbout && !showSkill && !showContact && !showProjects ? (
          <div className="main">
            <h1>Hi👋</h1>
            <p className="description">I'm <span className="coloredName">Aydın Demirci</span></p>
            <p className="description1">I'm a <span className="coloredText">fullstack developer</span></p>
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
    </>
  );
}
