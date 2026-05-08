import Reveal from './Reveal.jsx';
import { useT } from '../i18n/index.jsx';

export default function Learning() {
  const t = useT();

  return (
    <section className="chapter chapter--narrow" id="learning" aria-labelledby="learning-title">
      <Reveal className="chapter-head">
        <span className="chapter-num">{t.learning.eyebrow}</span>
        <h2 className="chapter-title" id="learning-title">
          {t.learning.title}
        </h2>
      </Reveal>

      <Reveal className="prose">
        <p>{t.learning.body}</p>
      </Reveal>
    </section>
  );
}
