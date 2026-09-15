import React from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default function Profile() {
  const navigate = useNavigate();
  const { theme } = useUser();

  return (
    <div id="profile-screen" className={`profile-theme-${theme}`}>
      
      {/* PAGE TITLE */}
      <h1 id="profile-title">Profile</h1>

      {/* 4 MAIN PROFILE BOXES */}
      <div className="profile-boxes">

        <div
          className="profile-box"
          onClick={() => navigate("/profile-account")}
        >
          <h2>Account</h2>
          <p>Who you are & how you log in</p>
        </div>

        <div
          className="profile-box"
          onClick={() => navigate("/profile-subscription")}
        >
          <h2>Subscription</h2>
          <p>Your plan & billing</p>
        </div>

        <div
          className="profile-box"
          onClick={() => navigate("/profile-djs")}
        >
          <h2>Your DJs</h2>
          <p>Manage your DJ voices</p>
        </div>

        <div
          className="profile-box"
          onClick={() => navigate("/settings")}
        >
          <h2>Settings</h2>
          <p>App preferences & behaviour</p>
        </div>

      </div>
    </div>
  );
}
