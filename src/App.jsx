import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./Pages/Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <div id="app">
        <header className="site-header">
          <nav className="main-nav">
            <div className="logo-text glow">Anthony Johnson</div>
            <ul className="nav-links">
              <li>
                <a href="#about-me" className="nav-link">About</a>
              </li>
              <li>
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
              <li>
                <a href="mailto:anthonyjohnson5016@gmail.com" className="nav-link primary">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <main id="about-me">
                <div className="hero-section fade-in">
                  <div className="text-content">
                    <figure className="profile-img-wrapper">
                      <img
                        src="/assets/profile.png"
                        className="profile-img"
                        alt="Anthony Johnson"
                      />
                    </figure>
                    <h1 className="hero-title">
                      Hey! I'm <span className="highlight">Anthony Johnson</span>{" "}
                      <span className="rocket">🚀</span>
                    </h1>
                    <p className="hero-subtext">
                      I'm a <strong className="highlight">Frontend Software Engineer</strong> passionate about tech. I specialize in building responsive, lightning-fast web apps that deliver results.
                    </p>
                    <div className="cta-links">
                      <a
                        href="https://github.com/AnthonyJohnsonDeveloper"
                        target="_blank"
                        rel="noreferrer"
                        className="cta-button"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/anthony-johnson-81ba01257/"
                        target="_blank"
                        rel="noreferrer"
                        className="cta-button"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://anthonyjohnsondeveloper.github.io/Resume/"
                        target="_blank"
                        rel="noreferrer"
                        className="cta-button"
                      >
                        Resume
                      </a>
                    </div>
                  </div>
                  <div className="illustration">
                    <img
                      src="/assets/undraw_Web_developer_re_h7ie.png"
                      className="dev-illustration"
                      alt="Developer Illustration"
                    />
                  </div>
                </div>
              </main>
            }
          />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;