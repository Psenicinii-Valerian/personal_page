import Reveal from './Reveal.jsx';
import Photo from './Photo.jsx';
import { useT } from '../i18n/index.jsx';

const COUNTRY_KEYS = [
  'moldova', 'romania', 'hungary', 'czech_republic', 'poland',
  'ukraine', 'bulgaria', 'italy', 'france', 'monaco',
];

const COUNTRY_SRC = {
  moldova:        '/moldova.jpg',
  romania:        '/romania.jpg',
  hungary:        '/hungary.jpg',
  czech_republic: '/czech_republic.jpg',
  poland:         '/poland.jpg',
  ukraine:        '/ukraine.jpg',
  bulgaria:       '/bulgaria.jpg',
  italy:          '/italy.jpg',
  france:         '/france.jpg',
  monaco:         '/monaco.jpg',
};

const CARD_PHOTOS = {
  tea:      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=900&q=80&auto=format&fit=crop',
  football: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=80&auto=format&fit=crop',
  travel:   'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=80&auto=format&fit=crop',
};

export default function Hobbies() {
  const t = useT();

  return (
    <section className="chapter" id="hobbies" aria-labelledby="hobbies-title">
      <Reveal className="chapter-head">
        <span className="chapter-num">{t.hobbies.eyebrow}</span>
        <h2 className="chapter-title" id="hobbies-title">
          {t.hobbies.title}
        </h2>
      </Reveal>

      <div className="cards">
        {t.hobbies.cards.map((card, i) => (
          <Reveal
            key={card.kind}
            as="article"
            className={`card card--${card.kind}`}
            delay={i * 0.1}
          >
            <div className="card-photo">
              <Photo src={CARD_PHOTOS[card.kind]} alt={card.alt} />
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className={card.kind === 'travel' ? 'card-prose' : undefined}>
              {card.body}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="album">
        <header className="album-head">
          <span className="album-eyebrow">{t.hobbies.album.eyebrow}</span>
          <h3 className="album-title">{t.hobbies.album.title}</h3>
        </header>
        <ul className="album-grid">
          {COUNTRY_KEYS.map((key, i) => {
            const name = t.hobbies.album.countries[key];
            return (
              <Reveal as="li" key={key} className="album-card" delay={i * 0.06}>
                <Photo src={COUNTRY_SRC[key]} alt={name} />
                <span className="album-card-label">{name}</span>
              </Reveal>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
