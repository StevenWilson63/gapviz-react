import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { UserProvider } from "./context/UserContext";

import Home from "./pages/home/home";
import Profile from "./pages/profile/Profile";

// If these screens exist, they will load.
// If not, you can add them later.
import DJ from "./pages/dj/DJ";
import Identify from "./pages/identify/Identify";
import Library from "./pages/library/Library";
import SongStory from "./pages/songstory/SongStory";
import IdentifySummary from "./pages/identify/IdentifySummary";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Main screens */}
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          {/* Additional screens */}
          <Route path="/dj" element={<DJ />} />
          <Route path="/identify" element={<Identify />} />
          <Route path="/library" element={<Library />} />
          <Route path="/song-story" element={<SongStory />} />
          <Route path="/identify-summary" element={<IdentifySummary />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
