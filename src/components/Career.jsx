import Reveal from './Reveal.jsx';
import { useT } from '../i18n/index.jsx';

export default function Career() {
  const t = useT();
  const lastIndex = t.career.timeline.length - 1;

  return (
    <section className="chapter" id="career" aria-labelledby="career-title">
      <Reveal className="chapter-head">
        <span className="chapter-num">{t.career.eyebrow}</span>
        <h2 className="chapter-title" id="career-title">
          {t.career.title}
        </h2>
      </Reveal>

      <ol className="timeline" aria-label={t.career.timelineAria}>
        {t.career.timeline.map((item, i) => {
          const isCurrent = i === lastIndex;
          return (
            <Reveal
              key={i}
              as="li"
              className={`timeline-item ${isCurrent ? 'is-current' : ''}`}
              delay={i * 0.05}
            >
              <span className="timeline-time">{item.time}</span>
              <div className="timeline-body">
                <h3>
                  {item.place}
                  {isCurrent && <span className="badge">{t.career.badge}</span>}
                </h3>
                <p>{item.note}</p>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
