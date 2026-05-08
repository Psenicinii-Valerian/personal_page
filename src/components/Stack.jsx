import Reveal from './Reveal.jsx';

const COLUMNS = [
  {
    num: 'i.',
    title: 'Laravel',
    titleEnd: 'Vue',
    chips: ['PHP', 'Laravel', 'Eloquent', 'Blade', 'Vue 3', 'Pinia', 'Vite'],
  },
  {
    num: 'ii.',
    title: 'Node',
    titleEnd: 'React',
    chips: ['Node.js', 'Express', 'TypeScript', 'React', 'Next.js', 'Tailwind'],
  },
];

const ROW = {
  num: 'iii.',
  title: 'Databases',
  titleEnd: 'Tooling',
  chips: ['MariaDB', 'MySQL', 'XAMPP', 'Git', 'Docker', 'Postman'],
};

function StackBlock({ data, isRow = false }) {
  return (
    <article className={isRow ? 'stack-row' : 'stack-col'}>
      <header className="stack-col-head">
        <span className="stack-col-num">{data.num}</span>
        <h3>
          {data.title} <span className="amp">&amp;</span> {data.titleEnd}
        </h3>
      </header>
      <ul className="chips" aria-label={`${data.title} ${data.titleEnd} stack`}>
        {data.chips.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Stack() {
  return (
    <section className="chapter" id="implements" aria-labelledby="implements-title">
      <Reveal className="chapter-head">
        <span className="chapter-num">III.</span>
        <h2 className="chapter-title" id="implements-title">
          <em>The</em> implements
        </h2>
      </Reveal>

      <Reveal as="p" className="prose-aside">
        Two ecosystems I work in fluently — and the small constellation of databases that anchor them.
      </Reveal>

      <div className="stack">
        {COLUMNS.map((c, i) => (
          <Reveal key={c.num} delay={i * 0.08}>
            <StackBlock data={c} />
          </Reveal>
        ))}
        <Reveal className="stack-row-wrap" delay={0.16}>
          <StackBlock data={ROW} isRow />
        </Reveal>
      </div>
    </section>
  );
}
