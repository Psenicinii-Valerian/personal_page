import Reveal from './Reveal.jsx';

export default function Colophon() {
  return (
    <footer className="colophon" role="contentinfo">
      <Reveal className="colophon-grid">
        <div className="colophon-block">
          <span className="colophon-label">Correspondence</span>
          <a href="mailto:valerian@thebrief.ai" className="colophon-link">
            valerian@thebrief.ai
          </a>
        </div>
        <div className="colophon-block">
          <span className="colophon-label">Whereabouts</span>
          <span>Oradea, Romania</span>
        </div>
        <div className="colophon-block">
          <span className="colophon-label">Year</span>
          <span>MMXXVI</span>
        </div>
        <div className="colophon-block colophon-block--wide">
          <span className="colophon-label">Set in</span>
          <span>
            Fraunces, Newsreader, and JetBrains Mono. Built with React &amp; Vite.
          </span>
        </div>
      </Reveal>
    </footer>
  );
}
