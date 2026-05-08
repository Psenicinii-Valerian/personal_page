import Reveal from './Reveal.jsx';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">
        <Reveal className="hero-colophon" delay={0.15}>
          <span>Vol. I</span>
          <span>№ 1</span>
          <span>MMXXVI</span>
        </Reveal>

        <Reveal as="h1" className="hero-title" id="hero-title" delay={0.28}>
          <span className="hero-firstname">Valerian</span>
        </Reveal>

        <Reveal className="hero-portrait-wrap" delay={0.4}>
          <figure className="hero-portrait">
            <img src="/face.jpg" alt="Portrait of Valerian" />
            <figcaption>The author, recently photographed</figcaption>
          </figure>
        </Reveal>

        <Reveal as="p" className="hero-lede" delay={0.52}>
          <em>Software engineer.</em> Tea drinker. Reader of Hemingway.
          Writing this from a desk that faces a small kettle in{' '}
          <span className="nowrap">Oradea, Romania</span>.
        </Reveal>

        <Reveal className="hero-meta" delay={0.64}>
          <dl>
            <dt>Currently</dt>
            <dd>Engineering at The&nbsp;Brief</dd>
            <dt>Reading</dt>
            <dd>
              <cite>The Old Man and the Sea</cite>
            </dd>
            <dt>Drinking</dt>
            <dd>Loose-leaf oolong</dd>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
