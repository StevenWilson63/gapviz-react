import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  // --------------------------------------------------
  // STATE
  // --------------------------------------------------
  const [displayName, setDisplayName] = useState("");
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneticName, setPhoneticName] = useState("");
  const [theme, setTheme] = useState("dark"); // Gapviz default theme

  // --------------------------------------------------
  // LOAD FROM LOCAL STORAGE (FIRST RENDER ONLY)
  // --------------------------------------------------
  useEffect(() => {
    setDisplayName(localStorage.getItem("gv_displayName") || "");
    setFullName(localStorage.getItem("gv_fullName") || "");
    setNickname(localStorage.getItem("gv_nickname") || "");
    setPhoneticName(localStorage.getItem("gv_phoneticName") || "");
    setTheme(localStorage.getItem("gv_theme") || "dark");
  }, []);

  // --------------------------------------------------
  // SAVE TO LOCAL STORAGE WHEN VALUES CHANGE
  // --------------------------------------------------
  useEffect(() => {
    localStorage.setItem("gv_displayName", displayName);
  }, [displayName]);

  useEffect(() => {
    localStorage.setItem("gv_fullName", fullName);
  }, [fullName]);

  useEffect(() => {
    localStorage.setItem("gv_nickname", nickname);
  }, [nickname]);

  useEffect(() => {
    localStorage.setItem("gv_phoneticName", phoneticName);
  }, [phoneticName]);

  useEffect(() => {
    localStorage.setItem("gv_theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // --------------------------------------------------
  // INITIALS (FROM FULL NAME)
  // --------------------------------------------------
  const getInitials = () => {
    if (!fullName.trim()) return "";
    const parts = fullName.trim().split(" ").filter(Boolean);
    return parts.map((p) => p[0].toUpperCase()).join("").slice(0, 2);
  };

  // --------------------------------------------------
  // GREETING NAME (NICKNAME → DISPLAY NAME → FALLBACK)
  // --------------------------------------------------
  const getGreetingName = () => {
    if (nickname.trim()) return nickname.trim();
    if (displayName.trim()) return displayName.trim();
    return "DJ"; // fallback
  };

  // --------------------------------------------------
  // CONTEXT VALUE
  // --------------------------------------------------
  const value = {
    displayName,
    setDisplayName,
    fullName,
    setFullName,
    nickname,
    setNickname,
    phoneticName,
    setPhoneticName,
    theme,
    setTheme,
    getInitials,
    getGreetingName,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// --------------------------------------------------
// HOOK
// --------------------------------------------------
export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used inside UserProvider");
  }
  return ctx;
};
