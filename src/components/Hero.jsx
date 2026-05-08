import { Fragment } from 'react';
import Reveal from './Reveal.jsx';
import { useT } from '../i18n/index.jsx';

export default function Hero() {
  const t = useT();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">
        <Reveal className="hero-colophon" delay={0.15}>
          {t.hero.edition.map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </Reveal>

        <Reveal as="h1" className="hero-title" id="hero-title" delay={0.28}>
          <span className="hero-firstname">{t.hero.firstName}</span>
        </Reveal>

        <Reveal className="hero-portrait-wrap" delay={0.4}>
          <figure className="hero-portrait">
            <img src="/my_photo.jpg" alt={t.hero.portraitAlt} />
            <figcaption>{t.hero.portraitCaption}</figcaption>
          </figure>
        </Reveal>

        <Reveal as="p" className="hero-lede" delay={0.52}>
          {t.hero.lede}
        </Reveal>

        <Reveal className="hero-meta" delay={0.64}>
          <dl>
            {t.hero.meta.map((row, i) => (
              <Fragment key={i}>
                <dt>{row.dt}</dt>
                <dd>{row.dd}</dd>
              </Fragment>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
