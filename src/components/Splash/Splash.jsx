import React, { useEffect, useState } from "react";
import "./Splash.css";
import gapvizLogo from "../../assets/logos/gapviz-logo.svg";

export default function Splash() {
  const [showLogo, setShowLogo] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    // Fade in logo
    setTimeout(() => {
      setShowLogo(true);
    }, 300);

    // Fade in tagline
    setTimeout(() => {
      setShowTagline(true);
    }, 1200);
  }, []);

  return (
    <div className="splash-container">
      <img
        src={gapvizLogo}
        alt="Gapviz Logo"
        className={`splash-logo ${showLogo ? "visible" : ""}`}
      />

      <p className={`splash-tagline ${showTagline ? "visible" : ""}`}>
        Your music. Their story.
      </p>
    </div>
  );
}
