import React, { useState } from "react";
import "./home.css";

import gapvizLogo from "../../assets/logos/gapviz-logo.svg";
import homeIcon from "../../assets/icons/home.svg";
import djIcon from "../../assets/icons/dj.svg";
import libraryIcon from "../../assets/icons/library.svg";
import fingerprintIcon from "../../assets/icons/fingerprint.svg";

import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default function Home() {
  const navigate = useNavigate();
  const { getGreetingName, getInitials, theme } = useUser();

  // Bottom nav active state
  const [activeNav, setActiveNav] = useState("home");

  // Greeting name (nickname → displayName → fallback)
  const greetingName = getGreetingName();

  // Initials for avatar (from fullName)
  const initials = getInitials() || "";

  // Time‑based greeting prefix
  const hours = new Date().getHours();
  let greetingPrefix = "";
  if (hours < 12) greetingPrefix = "Good morning";
  else if (hours < 18) greetingPrefix = "Good afternoon";
  else greetingPrefix = "Good evening";

  const greetingText = `${greetingPrefix} ${greetingName}`;

  return (
    <>
      {/* TOP‑LEFT AVATAR */}
      <div
        id="top-avatar"
        className={`home-avatar home-theme-${theme}`}
        onClick={() => navigate("/profile")}
      >
        {initials}
      </div>

      {/* MAIN HOME SCREEN */}
      <div id="home-screen" className={`home-theme-${theme}`}>
        <img id="home-logo" src={gapvizLogo} alt="Gapviz Logo" />

        <h1 id="welcome-text">{greetingText}</h1>
        <p className="sub-welcome">Ready to jump back in?</p>

        {/* STACKED BOXES */}
        <div className="home-boxes">

          <div className="home-box" onClick={() => navigate("/dj")}>
            <h2>Last DJ</h2>
            <p>Not set yet</p>
          </div>

          <div className="home-box" onClick={() => navigate("/identify-summary")}>
            <h2>Identify Summary</h2>
            <p>No track identified yet</p>
          </div>

          <div className="home-box" onClick={() => navigate("/song-story")}>
            <h2>Last Track Played</h2>
            <p>No track played yet</p>
          </div>

        </div>
      </div>

      {/* BOTTOM NAV */}
      <div id="bottom-nav" className={`home-theme-${theme}`}>

        {/* HOME */}
        <div
          className={`nav-item ${activeNav === "home" ? "active" : ""}`}
          onClick={() => {
            setActiveNav("home");
            navigate("/home");
          }}
        >
          <img src={homeIcon} alt="Home" />
          <span>Home</span>
          <div className="nav-underline"></div>
        </div>

        {/* DJ */}
        <div
          className={`nav-item ${activeNav === "dj" ? "active" : ""}`}
          onClick={() => {
            setActiveNav("dj");
            navigate("/dj");
          }}
        >
          <img src={djIcon} alt="DJ" />
          <span>DJ</span>
          <div className="nav-underline"></div>
        </div>

        {/* LIBRARY */}
        <div
          className={`nav-item ${activeNav === "library" ? "active" : ""}`}
          onClick={() => {
            setActiveNav("library");
            navigate("/library");
          }}
        >
          <img src={libraryIcon} alt="Library" />
          <span>Library</span>
          <div className="nav-underline"></div>
        </div>

        {/* IDENTIFY */}
        <div
          className={`nav-item ${activeNav === "identify" ? "active" : ""}`}
          onClick={() => {
            setActiveNav("identify");
            navigate("/identify");
          }}
        >
          <img src={fingerprintIcon} alt="Identify" />
          <span>Identify</span>
          <div className="nav-underline"></div>
        </div>

      </div>
    </>
  );
}
