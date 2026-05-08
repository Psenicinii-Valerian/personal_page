import Reveal from './Reveal.jsx';
import { useT } from '../i18n/index.jsx';

export default function Prologue() {
  const t = useT();

  return (
    <section className="chapter" id="prologue" aria-labelledby="prologue-title">
      <Reveal className="chapter-head">
        <span className="chapter-num">{t.prologue.eyebrow}</span>
        <h2 className="chapter-title" id="prologue-title">
          {t.prologue.title}
        </h2>
      </Reveal>

      <Reveal className="prose">
        {t.prologue.body}
      </Reveal>
    </section>
  );
}
