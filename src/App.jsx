import Masthead from './components/Masthead.jsx';
import Hero from './components/Hero.jsx';
import Fleuron from './components/Fleuron.jsx';
import Prologue from './components/Prologue.jsx';
import Career from './components/Career.jsx';
import Stack from './components/Stack.jsx';
import Hobbies from './components/Hobbies.jsx';
import Learning from './components/Learning.jsx';
import Reading from './components/Reading.jsx';
import Colophon from './components/Colophon.jsx';

export default function App() {
  return (
    <>
      <Masthead />
      <main id="top">
        <Hero />
        <Fleuron />
        <Prologue />
        <Career />
        <Stack />
        <Hobbies />
        <Learning />
        <Reading />
      </main>
      <Colophon />
    </>
  );
}
