/* =================================================================
   Translations — English & Romanian
   Each language is a complete dictionary mirroring the page's
   structure. JSX is allowed wherever inline emphasis or markup
   is part of the copy (e.g. dropcaps, <strong>, <em>, <cite>).
   ================================================================ */

const en = {
  meta: {
    htmlLang: 'en',
    documentTitle: 'Valerian — A Personal Page',
  },

  toggle: {
    label: 'Language',
    en: 'EN',
    ro: 'RO',
    titleEn: 'Read in English',
    titleRo: 'Citește în română',
  },

  masthead: {
    mark: <>V&nbsp;·&nbsp;A Personal Page</>,
    topAria: 'Top of page',
    sectionsAria: 'Sections',
    nav: {
      prologue: 'Prologue',
      career: 'Career',
      implements: 'Implements',
      hobbies: 'Hobbies',
      reading: 'Reading',
    },
  },

  hero: {
    edition: ['Vol. I', '№ 1', 'MMXXVI'],
    firstName: 'Valerian',
    portraitAlt: 'Portrait of Valerian',
    portraitCaption: 'The author, recently photographed',
    lede: (
      <>
        <em>Software engineer.</em> Tea drinker. Reader of Hemingway.
        Writing this from a desk that faces a small kettle in{' '}
        <span className="nowrap">Oradea, Romania</span>.
      </>
    ),
    meta: [
      { dt: 'Born',      dd: '2003, Chișinău' },
      { dt: 'Currently', dd: <>Engineering at The&nbsp;Brief</> },
      { dt: 'Reading',   dd: <cite>The Old Man and the Sea</cite> },
      { dt: 'Drinking',  dd: 'Loose-leaf oolong' },
    ],
  },

  prologue: {
    eyebrow: 'I.',
    title: <><em>A short</em> prologue</>,
    titleId: 'A short prologue',
    body: (
      <>
        <p className="lead">
          <span className="dropcap">T</span>here is a thread that runs through my life — from the courtyards of <strong>Chișinău</strong>, through the lecture halls of the <strong>University of Oradea</strong>, into rooms where banks ran on careful spreadsheets and outsourcing firms ran on careful deadlines, and finally into <strong>The&nbsp;Brief</strong>, where AI is rewriting how brands create, publish, and optimize their ads.
        </p>
        <p>
          Along the way I have learned that good software, like good tea, asks for patience — and rewards it. I write code in the daylight hours and read books in the late ones. I keep a passport that has begun to fray at the edges, and a kettle that always seems to be on.
        </p>
      </>
    ),
  },

  career: {
    eyebrow: 'II.',
    title: <><em>Where</em> I have been</>,
    timelineAria: 'Career timeline',
    badge: 'current',
    timeline: [
      {
        time: 'Early years',
        place: 'Chișinău, Moldova',
        note: 'Schooling, a city of chestnut trees, and a first language. The place I keep returning to when I close my eyes.',
      },
      {
        time: '2022–2026',
        place: 'University of Oradea',
        note: 'Software engineering. Late nights with whiteboards. A new country, a new alphabet of friends.',
      },
      {
        time: '2023–2024',
        place: '[Bank Sella]',
        note: "First role on a bank's IT team. Production is unforgiving — a useful early lesson.",
      },
      {
        time: '2024–2025',
        place: '[Neurony Outsourcing Co.]',
        note: 'Working across client codebases and time zones. A masterclass in adapting quickly without losing your craft.',
      },
      {
        time: 'Present',
        place: 'The Brief',
        note: 'Building tooling for an AI-powered ad platform — creation, publishing, and optimization in one place. Quick iteration, careful taste, real questions about how brands tell their story.',
      },
    ],
  },

  stack: {
    eyebrow: 'III.',
    title: <><em>The</em> implements</>,
    aside:
      'Two ecosystems I work in fluently — and the small constellation of databases that anchor them.',
    chipsAria: (title, end) => `${title} & ${end} stack`,
    columns: [
      {
        num: 'i.',
        title: 'Laravel',
        titleEnd: 'Vue',
        chips: ['PHP', 'Laravel', 'Eloquent', 'Blade', 'Vue 3', 'Tailwind', 'Vite'],
      },
      {
        num: 'ii.',
        title: 'Node',
        titleEnd: 'React',
        chips: ['Node.js', 'TypeScript', 'React', 'GraphQL', 'BullMQ', 'AI tools'],
      },
    ],
    row: {
      num: 'iii.',
      title: 'Databases',
      titleEnd: 'Tooling',
      chips: ['MariaDB', 'MySQL', 'XAMPP', 'Git', 'Docker', 'Postman'],
    },
  },

  hobbies: {
    eyebrow: 'IV.',
    title: <><em>Three small</em> obsessions</>,
    cards: [
      {
        kind: 'tea',
        title: <>On <em>Chinese Tea</em></>,
        alt: 'A pour of Chinese tea',
        body: "I keep a small collection — pu'er for mornings that need grounding, oolong for afternoons of deep work. The ritual is the point: the boiling, the steeping, the waiting. It is the only meditation that has stuck with me.",
      },
      {
        kind: 'football',
        title: <>On <em>Football</em></>,
        alt: 'A football pitch under stadium lights',
        body: 'I watch football the way some people watch theatre — for the occasional moment of genius. A perfect first touch. A pass that bends the geometry of the pitch. The rest is just weather, and weather is fine too.',
      },
      {
        kind: 'travel',
        title: <>On <em>Travel</em></>,
        alt: 'A wandering road through Europe',
        body: 'Ten countries, so far — each a different lesson in coffee, language, and pace. Europe is small; one good train ride can change the way you think and understand things.',
      },
    ],
    album: {
      eyebrow: 'From the album',
      title: <><em>Ten</em> stamps in the passport</>,
      countries: {
        moldova: 'Moldova',
        romania: 'Romania',
        hungary: 'Hungary',
        czech_republic: 'Czech Republic',
        poland: 'Poland',
        ukraine: 'Ukraine',
        bulgaria: 'Bulgaria',
        italy: 'Italy',
        france: 'France',
        monaco: 'Monaco',
      },
    },
  },

  learning: {
    eyebrow: 'V.',
    title: <><em>Always</em> a student</>,
    body: 'I keep my evenings open for tech videos — a long walk, headphones in, a phone review, a hardware tear-down, or a deep-dive on systems design. The field moves quickly enough that the best engineers are always students. I would rather be the student than the relic.',
  },

  reading: {
    eyebrow: 'VI.',
    title: <><em>One</em> book</>,
    seaAlt: 'The sea at the edge of the day',
    intro: 'There is one book I return to. Hemingway wrote it tight as a fist — an old fisherman, a great fish, the long quiet of the sea. The line that has followed me longest, that I have repeated to myself in small and large moments alike, is this:',
    quote: 'A man can be destroyed but not defeated.',
    attribution: 'Ernest Hemingway',
    source: 'The Old Man and the Sea',
  },

  colophon: {
    correspondence: 'Correspondence',
    whereabouts: 'Whereabouts',
    whereaboutsValue: 'Oradea, Romania',
    year: 'Year',
    setIn: 'Set in',
    setInValue: <>Fraunces, Newsreader, and JetBrains Mono. Built with React &amp; Vite.</>,
  },
};

const ro = {
  meta: {
    htmlLang: 'ro',
    documentTitle: 'Valerian — O pagină personală',
  },

  toggle: {
    label: 'Limbă',
    en: 'EN',
    ro: 'RO',
    titleEn: 'Read in English',
    titleRo: 'Citește în română',
  },

  masthead: {
    mark: <>V&nbsp;·&nbsp;O pagină personală</>,
    topAria: 'Începutul paginii',
    sectionsAria: 'Secțiuni',
    nav: {
      prologue: 'Prolog',
      career: 'Carieră',
      implements: 'Unelte',
      hobbies: 'Pasiuni',
      reading: 'Lectură',
    },
  },

  hero: {
    edition: ['Vol. I', '№ 1', 'MMXXVI'],
    firstName: 'Valerian',
    portraitAlt: 'Portretul lui Valerian',
    portraitCaption: 'Autorul, fotografiat recent',
    lede: (
      <>
        <em>Inginer software.</em> Băutor de ceai. Cititor de Hemingway.
        Scriu acestea de la un birou ce privește spre un ceainic mic în{' '}
        <span className="nowrap">Oradea, România</span>.
      </>
    ),
    meta: [
      { dt: 'Născut',     dd: '2003, Chișinău' },
      { dt: 'În prezent', dd: <>Inginerie la The&nbsp;Brief</> },
      { dt: 'Citește',    dd: <cite>Bătrânul și marea</cite> },
      { dt: 'Bea',        dd: 'Oolong cu frunze' },
    ],
  },

  prologue: {
    eyebrow: 'I.',
    title: <><em>Un scurt</em> prolog</>,
    titleId: 'Un scurt prolog',
    body: (
      <>
        <p className="lead">
          <span className="dropcap">E</span>xistă un fir care străbate viața mea — de la curțile <strong>Chișinăului</strong>, prin sălile de curs ale <strong>Universității din Oradea</strong>, în încăperi unde băncile se sprijineau pe foi de calcul atent ținute, iar firmele de outsourcing pe termene atent respectate, și în cele din urmă la <strong>The&nbsp;Brief</strong>, unde inteligența artificială rescrie modul în care brandurile creează, publică și optimizează reclamele.
        </p>
        <p>
          Pe parcurs am învățat că software-ul bun, ca și ceaiul bun, cere răbdare — și o răsplătește. Scriu cod în orele de lumină și citesc cărți în cele târzii. Țin un pașaport care a început să se tocească pe margini și un ceainic care pare mereu să fie pe foc.
        </p>
      </>
    ),
  },

  career: {
    eyebrow: 'II.',
    title: <><em>Pe unde</em> am trecut</>,
    timelineAria: 'Cronologia carierei',
    badge: 'actual',
    timeline: [
      {
        time: 'Primii ani',
        place: 'Chișinău, Moldova',
        note: 'Școala, un oraș de castani și o primă limbă. Locul la care mă întorc mereu când închid ochii.',
      },
      {
        time: '2022–2026',
        place: 'Universitatea din Oradea',
        note: 'Inginerie software. Nopți târzii cu table albe. O țară nouă, un alfabet nou de prieteni.',
      },
      {
        time: '2023–2024',
        place: '[Banca Sella]',
        note: 'Primul rol într-o echipă IT bancară. Producția nu iartă — o lecție timpurie folositoare.',
      },
      {
        time: '2024–2025',
        place: '[Neurony Outsourcing Co.]',
        note: 'Lucrând prin coduri și fusuri orare ale clienților. O lecție de măiestrie despre adaptare rapidă fără pierderea meșteșugului.',
      },
      {
        time: 'Prezent',
        place: 'The Brief',
        note: 'Construiesc unelte pentru o platformă de reclame alimentată de AI — creație, publicare și optimizare într-un singur loc. Iterație rapidă, gust atent, întrebări reale despre felul în care brandurile își spun povestea.',
      },
    ],
  },

  stack: {
    eyebrow: 'III.',
    title: <><em>Uneltele</em> meseriei</>,
    aside:
      'Două ecosisteme în care lucrez fluent — și mica constelație de baze de date care le susține.',
    chipsAria: (title, end) => `Stivă ${title} & ${end}`,
    columns: [
      {
        num: 'i.',
        title: 'Laravel',
        titleEnd: 'Vue',
        chips: ['PHP', 'Laravel', 'Eloquent', 'Blade', 'Vue 3', 'Tailwind', 'Vite'],
      },
      {
        num: 'ii.',
        title: 'Node',
        titleEnd: 'React',
        chips: ['Node.js', 'TypeScript', 'React', 'GraphQL', 'BullMQ', 'Unelte AI'],
      },
    ],
    row: {
      num: 'iii.',
      title: 'Baze de date',
      titleEnd: 'Unelte',
      chips: ['MariaDB', 'MySQL', 'XAMPP', 'Git', 'Docker', 'Postman'],
    },
  },

  hobbies: {
    eyebrow: 'IV.',
    title: <><em>Trei mici</em> obsesii</>,
    cards: [
      {
        kind: 'tea',
        title: <>Despre <em>ceaiul chinezesc</em></>,
        alt: 'Un ceai chinezesc turnat',
        body: "Țin o mică colecție — pu'er pentru diminețile ce cer așezare, oolong pentru după-amiezi de muncă adâncă. Ritualul e esențialul: fierberea, infuzia, așteptarea. E singura meditație care a rămas cu mine.",
      },
      {
        kind: 'football',
        title: <>Despre <em>fotbal</em></>,
        alt: 'Un teren de fotbal sub luminile stadionului',
        body: 'Privesc fotbalul așa cum alții privesc teatrul — pentru ocazionalul moment de geniu. O primă atingere perfectă. O pasă care îndoaie geometria terenului. Restul e doar vreme, iar vremea e bună și ea.',
      },
      {
        kind: 'travel',
        title: <>Despre <em>călătorie</em></>,
        alt: 'Un drum prin Europa',
        body: 'Zece țări, până acum — fiecare o lecție diferită despre cafea, limbă și ritm. Europa e mică; o călătorie bună cu trenul îți poate schimba felul de a gândi și a percepe lumea înconjurătoare.',
      },
    ],
    album: {
      eyebrow: 'Din album',
      title: <><em>Zece</em> ștampile în pașaport</>,
      countries: {
        moldova: 'Moldova',
        romania: 'România',
        hungary: 'Ungaria',
        czech_republic: 'Cehia',
        poland: 'Polonia',
        ukraine: 'Ucraina',
        bulgaria: 'Bulgaria',
        italy: 'Italia',
        france: 'Franța',
        monaco: 'Monaco',
      },
    },
  },

  learning: {
    eyebrow: 'V.',
    title: <><em>Mereu</em> student</>,
    body: 'Îmi păstrez serile libere pentru videoclipuri tehnice — o plimbare lungă, căști în urechi, un review de telefon, un test de hardware sau o analiză aprofundată despre design de sisteme. Domeniul se mișcă suficient de repede încât cei mai buni ingineri sunt mereu studenți. Aș prefera să fiu studentul decât relicva.',
  },

  reading: {
    eyebrow: 'VI.',
    title: <><em>O</em> carte</>,
    seaAlt: 'Marea la marginea zilei',
    intro: 'Există o carte la care mă întorc. Hemingway a scris-o strânsă ca un pumn — un pescar bătrân, un pește mare, liniștea îndelungă a mării. Replica ce m-a însoțit cel mai mult, pe care mi-am repetat-o singur și-n clipe mici și-n clipe mari, este aceasta:',
    quote: 'Un om poate fi distrus, dar nu și înfrânt.',
    attribution: 'Ernest Hemingway',
    source: 'Bătrânul și marea',
  },

  colophon: {
    correspondence: 'Corespondență',
    whereabouts: 'Locație',
    whereaboutsValue: 'Oradea, România',
    year: 'Anul',
    setIn: 'Tipărit cu',
    setInValue: <>Fraunces, Newsreader și JetBrains Mono. Construit cu React &amp; Vite.</>,
  },
};

export const dictionaries = { en, ro };
