import Reveal from './Reveal.jsx';
import Photo from './Photo.jsx';

const COUNTRIES = [
  {
    name: 'Hungary',
    src: 'https://images.unsplash.com/photo-1551867633-194f125bddfa?w=900&q=80&auto=format&fit=crop',
  },
  {
    name: 'Czech Republic',
    src: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=900&q=80&auto=format&fit=crop',
  },
  {
    name: 'Poland',
    src: 'https://images.unsplash.com/photo-1607427293702-036933bbf746?w=900&q=80&auto=format&fit=crop',
  },
  {
    name: 'Italy',
    src: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=900&q=80&auto=format&fit=crop',
  },
  {
    name: 'France',
    src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=80&auto=format&fit=crop',
  },
  {
    name: 'Monaco',
    src: 'https://images.unsplash.com/photo-1530198365178-1ac6acaa8fce?w=900&q=80&auto=format&fit=crop',
  },
];

const TEA_PHOTO = 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=900&q=80&auto=format&fit=crop';
const FOOTBALL_PHOTO = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=80&auto=format&fit=crop';
const TRAVEL_PHOTO = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=80&auto=format&fit=crop';

export default function Hobbies() {
  return (
    <section className="chapter" id="hobbies" aria-labelledby="hobbies-title">
      <Reveal className="chapter-head">
        <span className="chapter-num">IV.</span>
        <h2 className="chapter-title" id="hobbies-title">
          <em>Three small</em> obsessions
        </h2>
      </Reveal>

      <div className="cards">
        <Reveal as="article" className="card card--tea" delay={0}>
          <div className="card-photo">
            <Photo src={TEA_PHOTO} alt="A pour of Chinese tea" />
          </div>
          <h3 className="card-title">
            On <em>Chinese Tea</em>
          </h3>
          <p>
            I keep a small collection — pu'er for mornings that need grounding, oolong for afternoons of deep work. The ritual is the point: the boiling, the steeping, the waiting. It is the only meditation that has stuck with me.
          </p>
        </Reveal>

        <Reveal as="article" className="card card--football" delay={0.1}>
          <div className="card-photo">
            <Photo src={FOOTBALL_PHOTO} alt="A football pitch under stadium lights" />
          </div>
          <h3 className="card-title">
            On <em>Football</em>
          </h3>
          <p>
            I watch football the way some people watch theatre — for the occasional moment of genius. A perfect first touch. A pass that bends the geometry of the pitch. The rest is just weather, and weather is fine too.
          </p>
        </Reveal>

        <Reveal as="article" className="card card--travel" delay={0.2}>
          <div className="card-photo">
            <Photo src={TRAVEL_PHOTO} alt="A wandering road through Europe" />
          </div>
          <h3 className="card-title">
            On <em>Travel</em>
          </h3>
          <p className="card-prose">
            Six countries, so far — each a different lesson in coffee, language, and pace. Europe is small; one good train ride can change the way you think for a week.
          </p>
        </Reveal>
      </div>

      <Reveal className="album">
        <header className="album-head">
          <span className="album-eyebrow">From the album</span>
          <h3 className="album-title"><em>Six</em> stamps in the passport</h3>
        </header>
        <ul className="album-grid">
          {COUNTRIES.map((c, i) => (
            <Reveal as="li" key={c.name} className="album-card" delay={i * 0.06}>
              <Photo src={c.src} alt={c.name} />
              <span className="album-card-label">{c.name}</span>
            </Reveal>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
