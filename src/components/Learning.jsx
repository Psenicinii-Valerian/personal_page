import Reveal from './Reveal.jsx';

export default function Learning() {
  return (
    <section className="chapter chapter--narrow" id="learning" aria-labelledby="learning-title">
      <Reveal className="chapter-head">
        <span className="chapter-num">V.</span>
        <h2 className="chapter-title" id="learning-title">
          <em>Always</em> a student
        </h2>
      </Reveal>

      <Reveal className="prose">
        <p>
          I keep my evenings open for tech videos — a long walk, headphones in, a deep-dive on systems design or a release-notes recap. The field moves quickly enough that the best engineers are always students. I would rather be the student than the relic.
        </p>
      </Reveal>
    </section>
  );
}
