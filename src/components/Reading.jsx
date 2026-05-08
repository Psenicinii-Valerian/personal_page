import Reveal from './Reveal.jsx';
import Photo from './Photo.jsx';
import { useT } from '../i18n/index.jsx';

const SEA_PHOTO = '/sea.jpg';

export default function Reading() {
  const t = useT();

  return (
    <section className="chapter" id="reading" aria-labelledby="reading-title">
      <Reveal className="chapter-head">
        <span className="chapter-num">{t.reading.eyebrow}</span>
        <h2 className="chapter-title" id="reading-title">
          {t.reading.title}
        </h2>
      </Reveal>

      <div className="reading-grid">
        <Reveal className="reading-prose">
          <p>{t.reading.intro}</p>
        </Reveal>

        <Reveal className="reading-feature">
          <div className="reading-feature-photo">
            <Photo src={SEA_PHOTO} alt={t.reading.seaAlt} />
          </div>
          <div className="reading-feature-overlay">
            <blockquote className="pull-quote">
              <p>
                <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                {t.reading.quote}
                <span className="quote-mark" aria-hidden="true">&rdquo;</span>
              </p>
              <footer>
                <span className="quote-attribution">{t.reading.attribution}</span>
                <cite className="quote-source">{t.reading.source}</cite>
              </footer>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
