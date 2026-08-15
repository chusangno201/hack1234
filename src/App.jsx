import "./styles.css";

export default function App() {
  return (
    <div className="cyber-page">
      <img
        className="cyber-bg"
        src="/cyber-hero.jpeg"
        alt="Cyber background"
      />

      <div className="overlay"></div>
      <div className="scanlines"></div>

      <div className="terminal">
        <div className="terminal-top">
          <span></span>
          <span></span>
          <span></span>
          <strong>SECURE TERMINAL</strong>
        </div>

        <div className="terminal-body">
          <p className="line line1">&gt; SYSTEM INITIALIZING...</p>
          <p className="line line2">&gt; CONNECTING TO SECURE SERVER...</p>
          <p className="line line3">&gt; SCANNING NETWORK...</p>
          <p className="line line4">&gt; CHECKING SECURITY...</p>
          <p className="line line5">&gt; ACCESS GRANTED.</p>

          <div className="typing-line">
            <span>&gt;&nbsp;</span>
            <span className="typing-text">
              SYSTEM ONLINE - MONITORING NETWORK
            </span>
            <span className="cursor">█</span>
          </div>
        </div>
      </div>
    </div>
  );
}
