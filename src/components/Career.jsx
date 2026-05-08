import Reveal from './Reveal.jsx';

const TIMELINE = [
  {
    time: 'Early years',
    place: 'Chișinău, Moldova',
    note: 'Schooling, a city of chestnut trees, and a first language. The place I keep returning to when I close my eyes.',
  },
  {
    time: '[Years]',
    place: 'University of Oradea',
    note: 'Software engineering. Late nights with whiteboards. A new country, a new alphabet of friends.',
  },
  {
    time: '[Years]',
    place: '[Bank № 1]',
    note: "First role on a bank's IT team. Production is unforgiving — a useful early lesson.",
  },
  {
    time: '[Years]',
    place: '[Bank № 2]',
    note: 'Different stack, similar rigor. I learned what good code review really feels like.',
  },
  {
    time: '[Years]',
    place: '[Outsourcing Co.]',
    note: 'Working across client codebases and time zones. A masterclass in adapting quickly without losing your craft.',
  },
  {
    time: 'Present',
    place: 'The Brief',
    note: 'Building tooling for an AI-native newsroom. Quick iteration, careful taste, big questions about what the news will become.',
    current: true,
  },
];

export default function Career() {
  return (
    <section className="chapter" id="career" aria-labelledby="career-title">
      <Reveal className="chapter-head">
        <span className="chapter-num">II.</span>
        <h2 className="chapter-title" id="career-title">
          <em>Where</em> I have been
        </h2>
      </Reveal>

      <ol className="timeline" aria-label="Career timeline">
        {TIMELINE.map((item, i) => (
          <Reveal
            key={i}
            as="li"
            className={`timeline-item ${item.current ? 'is-current' : ''}`}
            delay={i * 0.05}
          >
            <span className="timeline-time">{item.time}</span>
            <div className="timeline-body">
              <h3>
                {item.place}
                {item.current && <span className="badge">current</span>}
              </h3>
              <p>{item.note}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
