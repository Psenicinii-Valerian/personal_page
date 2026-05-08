import Reveal from './Reveal.jsx';
import { useT } from '../i18n/index.jsx';

export default function Colophon() {
  const t = useT();

  return (
    <footer className="colophon" role="contentinfo">
      <Reveal className="colophon-grid">
        <div className="colophon-block">
          <span className="colophon-label">{t.colophon.correspondence}</span>
          <a href="mailto:valerian@thebrief.ai" className="colophon-link">
            valerian@thebrief.ai
          </a>
        </div>
        <div className="colophon-block">
          <span className="colophon-label">{t.colophon.whereabouts}</span>
          <span>{t.colophon.whereaboutsValue}</span>
        </div>
        <div className="colophon-block">
          <span className="colophon-label">{t.colophon.year}</span>
          <span>MMXXVI</span>
        </div>
      </Reveal>
    </footer>
  );
}
