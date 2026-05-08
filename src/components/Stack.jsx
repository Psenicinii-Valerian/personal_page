import Reveal from './Reveal.jsx';
import { useT } from '../i18n/index.jsx';

function StackBlock({ data, ariaLabel, isRow = false }) {
  return (
    <article className={isRow ? 'stack-row' : 'stack-col'}>
      <header className="stack-col-head">
        <span className="stack-col-num">{data.num}</span>
        <h3>
          {data.title} <span className="amp">&amp;</span> {data.titleEnd}
        </h3>
      </header>
      <ul className="chips" aria-label={ariaLabel}>
        {data.chips.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Stack() {
  const t = useT();
  const aria = t.stack.chipsAria;

  return (
    <section className="chapter" id="implements" aria-labelledby="implements-title">
      <Reveal className="chapter-head">
        <span className="chapter-num">{t.stack.eyebrow}</span>
        <h2 className="chapter-title" id="implements-title">
          {t.stack.title}
        </h2>
      </Reveal>

      <Reveal as="p" className="prose-aside">
        {t.stack.aside}
      </Reveal>

      <div className="stack">
        {t.stack.columns.map((c, i) => (
          <Reveal key={c.num} delay={i * 0.08}>
            <StackBlock data={c} ariaLabel={aria(c.title, c.titleEnd)} />
          </Reveal>
        ))}
        <Reveal className="stack-row-wrap" delay={0.16}>
          <StackBlock
            data={t.stack.row}
            ariaLabel={aria(t.stack.row.title, t.stack.row.titleEnd)}
            isRow
          />
        </Reveal>
      </div>
    </section>
  );
}
