import { useEffect } from 'react';
import { useT } from '../i18n/index.jsx';
import LanguageToggle from './LanguageToggle.jsx';

export default function Masthead() {
  const t = useT();

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
        <a href="#top" className="masthead-mark" aria-label={t.masthead.topAria}>
          {t.masthead.mark}
        </a>
        <div className="masthead-end">
          <nav className="masthead-nav" aria-label={t.masthead.sectionsAria}>
            <a href="#prologue">{t.masthead.nav.prologue}</a>
            <a href="#career">{t.masthead.nav.career}</a>
            <a href="#implements">{t.masthead.nav.implements}</a>
            <a href="#hobbies">{t.masthead.nav.hobbies}</a>
            <a href="#reading">{t.masthead.nav.reading}</a>
          </nav>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
