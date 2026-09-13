import { useUser } from "../../context/UserContext";
import "./Profile.css";

export default function Profile() {
  const {
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
  } = useUser();

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handlePlaySample = () => {
    alert(
      `DJ will say your name like: "${phoneticName || "Stee-ven"}" (sample stub)`
    );
  };

  return (
    <div className="profile-screen">
      {/* HEADER */}
      <header className="profile-header">
        <button
          className="profile-back-button"
          onClick={() => window.history.back()}
        >
          ← Back
        </button>
        <h1 className="profile-title">Profile</h1>
      </header>

      {/* MAIN CONTENT */}
      <main className="profile-main">
        {/* IDENTITY SECTION */}
        <section className="profile-section">
          <label className="profile-label">
            Display Name
            <input
              className="profile-input"
              type="text"
              placeholder="Name shown on screen"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>

          <label className="profile-label">
            Full Name
            <input
              className="profile-input"
              type="text"
              placeholder="Your real full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>

          <label className="profile-label">
            Nickname (optional)
            <input
              className="profile-input"
              type="text"
              placeholder="Name you want Gapviz to call you"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </label>

          <label className="profile-label">
            Phonetic Name
            <input
              className="profile-input"
              type="text"
              placeholder="How the DJ should pronounce your name"
              value={phoneticName}
              onChange={(e) => setPhoneticName(e.target.value)}
            />
          </label>

          <button className="profile-play-button" onClick={handlePlaySample}>
            Hear how the DJ says it
          </button>
        </section>

        {/* THEME SECTION */}
        <section className="profile-section">
          <label className="profile-label">
            Theme
            <select
              className="profile-select"
              value={theme}
              onChange={handleThemeChange}
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </label>
        </section>
      </main>
    </div>
  );
}
