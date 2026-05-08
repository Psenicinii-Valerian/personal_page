import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { dictionaries } from './translations.jsx';

const I18nContext = createContext(null);
const STORAGE_KEY = 'pp.lang';
const SUPPORTED = ['en', 'ro'];
const DEFAULT_LANG = 'en';

function detectLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch { /* localStorage may be unavailable in private mode */ }
  const nav = (navigator.language || '').toLowerCase();
  if (nav.startsWith('ro')) return 'ro';
  return DEFAULT_LANG;
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ }
  }, [lang]);

  const setLang = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLangState(next);
  }, []);

  const value = useMemo(() => ({
    lang,
    setLang,
    languages: SUPPORTED,
    t: dictionaries[lang],
  }), [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>');
  return ctx;
}

export function useT() {
  return useI18n().t;
}
