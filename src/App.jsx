import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { UserProvider } from "./context/UserContext";

import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
          <Route path="/profile/account" element={<div>Account Page</div>} />
<Route path="/profile/subscription" element={<div>Subscription Page</div>} />
<Route path="/profile/dj" element={<div>DJ Settings Page</div>} />
<Route path="/profile/app" element={<div>App Settings Page</div>} />

        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
