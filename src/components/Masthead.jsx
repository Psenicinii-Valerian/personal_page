import { useEffect } from 'react';

export default function Masthead() {
  useEffect(() => {
    const handler = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <header className="masthead" role="banner">
      <div className="masthead-inner">
        <a href="#top" className="masthead-mark" aria-label="Top of page">
          V&nbsp;·&nbsp;A Personal Page
        </a>
        <nav className="masthead-nav" aria-label="Sections">
          <a href="#prologue">Prologue</a>
          <a href="#career">Career</a>
          <a href="#implements">Implements</a>
          <a href="#hobbies">Hobbies</a>
          <a href="#reading">Reading</a>
        </nav>
      </div>
    </header>
  );
}
