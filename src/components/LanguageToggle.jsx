import { useI18n } from '../i18n/index.jsx';

export default function LanguageToggle() {
  const { lang, setLang, t } = useI18n();

  return (
    <div className="lang-toggle" role="group" aria-label={t.toggle.label}>
      <button
        type="button"
        className={`lang-toggle-option ${lang === 'en' ? 'is-active' : ''}`}
        aria-pressed={lang === 'en'}
        title={t.toggle.titleEn}
        onClick={() => setLang('en')}
      >
        {t.toggle.en}
      </button>
      <span className="lang-toggle-sep" aria-hidden="true">/</span>
      <button
        type="button"
        className={`lang-toggle-option ${lang === 'ro' ? 'is-active' : ''}`}
        aria-pressed={lang === 'ro'}
        title={t.toggle.titleRo}
        onClick={() => setLang('ro')}
      >
        {t.toggle.ro}
      </button>
    </div>
  );
}
