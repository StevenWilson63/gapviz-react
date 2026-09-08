import React, { useEffect, useState } from "react";
import "./Splash.css";
import gapvizLogo from "../../assets/logos/gapviz-logo.svg";

export default function Splash() {
  const [showLogo, setShowLogo] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showSecondTagline, setShowSecondTagline] = useState(false);

  useEffect(() => {
  // Fade in logo
  setTimeout(() => {
    setShowLogo(true);
  }, 300);

   // "Your music." pops in
  setTimeout(() => setShowTagline(true), 1200);

  // "Their story." pops in 0.5s later
  setTimeout(() => setShowSecondTagline(true), 1700);
}, []);


 return (
  <div className="splash-container">
    <img
      src={gapvizLogo}
      alt="Gapviz Logo"
      className={`splash-logo ${showLogo ? "visible" : ""}`}
    />

    <p className="splash-tagline">
  <span className={`tagline-part ${showTagline ? "visible" : ""}`}>
    Your music.
  </span>
  <span className="tagline-gap"> </span>
  <span className={`tagline-part ${showSecondTagline ? "visible" : ""}`}>
    Their story.
  </span>
</p>



  </div>
);

}
