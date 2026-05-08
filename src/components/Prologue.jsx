import Reveal from './Reveal.jsx';

export default function Prologue() {
  return (
    <section className="chapter" id="prologue" aria-labelledby="prologue-title">
      <Reveal className="chapter-head">
        <span className="chapter-num">I.</span>
        <h2 className="chapter-title" id="prologue-title">
          <em>A short</em> prologue
        </h2>
      </Reveal>

      <Reveal className="prose">
        <p className="lead">
          <span className="dropcap">T</span>here is a thread that runs through my life — from the courtyards of <strong>Chișinău</strong>, through the lecture halls of the <strong>University of Oradea</strong>, into rooms where banks ran on careful spreadsheets and outsourcing firms ran on careful deadlines, and finally into <strong>The&nbsp;Brief</strong>, where AI is rewriting the rules of the modern newsroom.
        </p>
        <p>
          Along the way I have learned that good software, like good tea, asks for patience — and rewards it. I write code in the daylight hours and read books in the late ones. I keep a passport that has begun to fray at the edges, and a kettle that always seems to be on.
        </p>
      </Reveal>
    </section>
  );
}
