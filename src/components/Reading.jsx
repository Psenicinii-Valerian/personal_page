import Reveal from './Reveal.jsx';
import Photo from './Photo.jsx';

const SEA_PHOTO = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80&auto=format&fit=crop';

export default function Reading() {
  return (
    <section className="chapter" id="reading" aria-labelledby="reading-title">
      <Reveal className="chapter-head">
        <span className="chapter-num">VI.</span>
        <h2 className="chapter-title" id="reading-title">
          <em>One</em> book
        </h2>
      </Reveal>

      <div className="reading-grid">
        <Reveal className="reading-prose">
          <p>
            There is one book I return to. Hemingway wrote it tight as a fist — an old fisherman, a great fish, the long quiet of the sea. The line that has followed me longest, that I have repeated to myself in small and large moments alike, is this:
          </p>
        </Reveal>

        <Reveal className="reading-feature">
          <div className="reading-feature-photo">
            <Photo src={SEA_PHOTO} alt="The sea at the edge of the day" />
          </div>
          <div className="reading-feature-overlay">
            <blockquote className="pull-quote">
              <p>
                <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                A man can be destroyed but not defeated.
                <span className="quote-mark" aria-hidden="true">&rdquo;</span>
              </p>
              <footer>
                <span className="quote-attribution">Ernest Hemingway</span>
                <cite className="quote-source">The Old Man and the Sea</cite>
              </footer>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
