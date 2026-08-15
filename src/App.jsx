import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main className="app">
      <img
        className="background"
        src="/cyber-hero.jpeg"
        alt="Cyber"
      />

      <div className="overlay"></div>
      <div className="scanlines"></div>

      <section className="terminal">
        <div className="terminalHeader">
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="terminalTitle">
            SECURE TERMINAL // 2026
          </div>
        </div>

        <div className="terminalBody">
          <div className="smallTitle">
            CYBER SECURITY SYSTEM
          </div>

          <p className="line line1">
            &gt; SYSTEM INITIALIZING...
          </p>

          <p className="line line2">
            &gt; CONNECTING TO SECURE SERVER...
          </p>

          <p className="line line3">
            &gt; SCANNING NETWORK...
          </p>

          <p className="line line4">
            &gt; SECURITY CHECK COMPLETE...
          </p>

          <p className="line line5">
            &gt; ACCESS GRANTED.
          </p>

          <div className="typing">
            <span>&gt;&nbsp;</span>

            <span className="typingText">
              SYSTEM ONLINE
            </span>

            <span className="cursor">█</span>
          </div>
        </div>
      </section>

      <div className="online">
        <span></span>
        SYSTEM ONLINE
      </div>
    </main>
  );
}
