import { useEffect, useState } from "react";
import "./App.css";
import portrait from "./images/alperenweb3_profile.jpg";

const Arrow = () => <span aria-hidden="true">↗</span>;

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/alperenozkan" },
  { label: "GitHub", href: "https://github.com/alperenweb3" },
  { label: "Instagram", href: "https://instagram.com/alperenweb3" },
  { label: "X / Twitter", href: "https://twitter.com/alperenweb3" },
];

const copy = {
  en: {
    nav: ["About", "Path", "Contact"],
    hello: "Say hello",
    role: "Software Developer at Teledyne SevenCs",
    location: "Hamburg, Germany",
    title: <>I make ideas<span>click<span className="dot">.</span></span></>,
    portrait: "Hello, I’m Alperen",
    curious: <>CURIOUS<br />SINCE ’84</>,
    intro: "Developer, investigator and lifelong learner turning complex problems into useful, human things for the web.",
    readMore: "Read more about Alperen",
    aboutIndex: "01 / ABOUT",
    lead: "I’m at my best somewhere between a stubborn problem and a blank screen.",
    aboutOne: "My path runs through software development, cybercrime investigation and blockchain. Different disciplines, same instinct: look closer, understand the system, then make it better.",
    aboutTwo: "Away from the keyboard, you’ll find me planning short trips, hunting down Mediterranean food or learning the next thing I didn’t know I needed to know.",
    quote: "“Dreams are the shadows of reality.”",
    pathIndex: "02 / THE PATH",
    pathTitle: <>Still learning.<br /><em>Still building.</em></>,
    chapters: [
      { year: "Now", title: "Software Developer at Teledyne SevenCs", detail: "Navigation software made for real-world precision.", href: "https://sevencs.com" },
      { year: "The craft", title: "CodeWorks · DCI", detail: "Where I learned to turn logic into software." },
      { year: "The roots", title: "PA ’08 · AYZÖFL ’02", detail: "Two schools. One lifelong appetite for learning." },
    ],
    projectMeta: "SIDE QUEST / 2026",
    projectSale: "DOMAIN FOR SALE",
    visitProject: "Visit the project",
    projectIndex: "03 / SIDE QUEST",
    projectTitle: <>A small domain<br />with a big idea.</>,
    projectBody: "Short, expressive and unmistakably German. I’m currently looking for the right next owner for ach.so.",
    seeProject: "See ach.so",
    contactIndex: "04 / CONTACT",
    contactIntro: "Have an idea, a question, or just want to say hi?",
    contactTitle: <>Let’s talk<span>.</span></>,
    backTop: "Back to top ↑",
  },
  tr: {
    nav: ["Hakkımda", "Yolculuk", "İletişim"],
    hello: "Merhaba de",
    role: "Teledyne SevenCs’te Yazılım Geliştirici",
    location: "Hamburg, Almanya",
    title: <>Fikirleri<span>çalıştırırım<span className="dot">.</span></span></>,
    portrait: "Merhaba, ben Alperen",
    curious: <>’84’TEN BERİ<br />MERAKLI</>,
    intro: "Karmaşık problemleri web için faydalı ve insani şeylere dönüştüren geliştirici, araştırmacı ve ömür boyu öğrenci.",
    readMore: "Alperen hakkında daha fazlası",
    aboutIndex: "01 / HAKKIMDA",
    lead: "En iyi halim, inatçı bir problemle boş bir ekranın arasında bir yerde ortaya çıkar.",
    aboutOne: "Yolum yazılım geliştirme, siber suç araştırmaları ve blokzincirden geçiyor. Farklı disiplinler, aynı içgüdü: daha yakından bak, sistemi anla, sonra daha iyisini yap.",
    aboutTwo: "Klavyeden uzaktayken beni kısa seyahatler planlarken, Akdeniz yemeklerinin peşinde ya da ihtiyacım olduğunu bilmediğim yeni bir şeyi öğrenirken bulabilirsin.",
    quote: "“Hayaller, gerçekliğin gölgeleridir.”",
    pathIndex: "02 / YOLCULUK",
    pathTitle: <>Öğrenmeye.<br /><em>Üretmeye devam.</em></>,
    chapters: [
      { year: "Şimdi", title: "Teledyne SevenCs’te Yazılım Geliştirici", detail: "Gerçek dünyanın hassasiyeti için navigasyon yazılımları.", href: "https://sevencs.com" },
      { year: "Meslek", title: "CodeWorks · DCI", detail: "Mantığı yazılıma dönüştürmeyi öğrendiğim yerler." },
      { year: "Temeller", title: "PA ’08 · AYZÖFL ’02", detail: "İki okul. Ömür boyu süren bir öğrenme merakı." },
    ],
    projectMeta: "YAN PROJE / 2026",
    projectSale: "SATILIK ALAN ADI",
    visitProject: "Projeyi ziyaret et",
    projectIndex: "03 / YAN PROJE",
    projectTitle: <>Küçük bir alan adı,<br />büyük bir fikir.</>,
    projectBody: "Kısa, ifade gücü yüksek ve tartışmasız Alman. Şu anda ach.so için doğru yeni sahibini arıyorum.",
    seeProject: "ach.so’yu gör",
    contactIndex: "04 / İLETİŞİM",
    contactIntro: "Bir fikrin, sorun ya da yalnızca söyleyecek bir merhaban mı var?",
    contactTitle: <>Konuşalım<span>.</span></>,
    backTop: "Yukarı dön ↑",
  },
  de: {
    nav: ["Über mich", "Werdegang", "Kontakt"],
    hello: "Sag Hallo",
    role: "Softwareentwickler bei Teledyne SevenCs",
    location: "Hamburg, Deutschland",
    title: <>Ich bringe Ideen<span>zum Laufen<span className="dot">.</span></span></>,
    portrait: "Hallo, ich bin Alperen",
    curious: <>NEUGIERIG<br />SEIT ’84</>,
    intro: "Entwickler, Ermittler und lebenslanger Lerner, der komplexe Probleme in nützliche, menschliche Lösungen für das Web verwandelt.",
    readMore: "Mehr über Alperen erfahren",
    aboutIndex: "01 / ÜBER MICH",
    lead: "Am besten bin ich irgendwo zwischen einem hartnäckigen Problem und einem leeren Bildschirm.",
    aboutOne: "Mein Weg führt durch Softwareentwicklung, Cybercrime-Ermittlung und Blockchain. Verschiedene Disziplinen, derselbe Instinkt: genauer hinsehen, das System verstehen und es dann besser machen.",
    aboutTwo: "Abseits der Tastatur plane ich Kurztrips, entdecke mediterranes Essen oder lerne das nächste Thema, von dem ich noch nicht wusste, dass ich es brauche.",
    quote: "„Träume sind die Schatten der Wirklichkeit.“",
    pathIndex: "02 / WERDEGANG",
    pathTitle: <>Weiter lernen.<br /><em>Weiter entwickeln.</em></>,
    chapters: [
      { year: "Heute", title: "Softwareentwickler bei Teledyne SevenCs", detail: "Navigationssoftware für Präzision in der realen Welt.", href: "https://sevencs.com" },
      { year: "Handwerk", title: "CodeWorks · DCI", detail: "Wo ich gelernt habe, Logik in Software zu verwandeln." },
      { year: "Wurzeln", title: "PA ’08 · AYZÖFL ’02", detail: "Zwei Schulen. Eine lebenslange Lust am Lernen." },
    ],
    projectMeta: "NEBENPROJEKT / 2026",
    projectSale: "DOMAIN ZU VERKAUFEN",
    visitProject: "Projekt ansehen",
    projectIndex: "03 / NEBENPROJEKT",
    projectTitle: <>Eine kleine Domain<br />mit einer großen Idee.</>,
    projectBody: "Kurz, ausdrucksstark und unverkennbar deutsch. Für ach.so suche ich derzeit den passenden neuen Besitzer.",
    seeProject: "ach.so ansehen",
    contactIndex: "04 / KONTAKT",
    contactIntro: "Eine Idee, eine Frage oder einfach Lust, Hallo zu sagen?",
    contactTitle: <>Reden wir<span>.</span></>,
    backTop: "Nach oben ↑",
  },
};

function App() {
  const [language, setLanguage] = useState(() => {
    const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
    return requestedLanguage === "tr" || requestedLanguage === "de" ? requestedLanguage : "en";
  });
  const t = copy[language];

  const switchLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    const url = new URL(window.location.href);
    if (nextLanguage !== "en") url.searchParams.set("lang", nextLanguage);
    else url.searchParams.delete("lang");
    window.history.replaceState({}, "", url);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    const titles = {
      en: "Alperen Özkan — Software Developer",
      tr: "Alperen Özkan — Yazılım Geliştirici",
      de: "Alperen Özkan — Softwareentwickler",
    };
    document.title = titles[language];
  }, [language]);

  return (
    <main data-language={language}>
      <header className="topbar">
        <a className="monogram" href="#top" aria-label="Alperen Özkan — home">AÖ<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#about">{t.nav[0]}</a>
          <a href="#path">{t.nav[1]}</a>
          <a href="#contact">{t.nav[2]}</a>
        </nav>
        <div className="top-actions">
          <div className="languages" aria-label="Language">
            <button className={language === "en" ? "active" : ""} onClick={() => switchLanguage("en")} aria-pressed={language === "en"}>EN</button>
            <span>/</span>
            <button className={language === "tr" ? "active" : ""} onClick={() => switchLanguage("tr")} aria-pressed={language === "tr"}>TR</button>
            <span>/</span>
            <button className={language === "de" ? "active" : ""} onClick={() => switchLanguage("de")} aria-pressed={language === "de"}>DE</button>
          </div>
          <a className="availability" href="mailto:hi@alperen.co"><i /> {t.hello}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span>{t.role}</span><span>{t.location}</span></div>
        <div className="hero-heading">
          <h1>{t.title}</h1>
          <div className="portrait-wrap">
            <div className="portrait-label">{t.portrait}</div>
            <img src={portrait} alt="Alperen Özkan smiling" />
            <span className="portrait-stamp">{t.curious}</span>
          </div>
        </div>
        <div className="hero-bottom">
          <p>{t.intro}</p>
          <a className="round-link" href="#about" aria-label={t.readMore}>↓</a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-index">{t.aboutIndex}</div>
        <div className="about-copy">
          <p className="lead">{t.lead}</p>
          <div className="about-grid"><p>{t.aboutOne}</p><p>{t.aboutTwo}</p></div>
          <blockquote>{t.quote}</blockquote>
        </div>
      </section>

      <section className="path" id="path">
        <div className="path-heading"><div className="section-index">{t.pathIndex}</div><h2>{t.pathTitle}</h2></div>
        <div className="chapters">
          {t.chapters.map((chapter, index) => {
            const content = <><span className="chapter-number">0{index + 1}</span><span className="chapter-year">{chapter.year}</span><span className="chapter-title">{chapter.title}</span><span className="chapter-detail">{chapter.detail}</span>{chapter.href && <Arrow />}</>;
            return chapter.href
              ? <a className="chapter" href={chapter.href} target="_blank" rel="noreferrer" key={chapter.title}>{content}</a>
              : <div className="chapter" key={chapter.title}>{content}</div>;
          })}
        </div>
      </section>

      <section className="side-project">
        <div className="project-card">
          <div className="project-meta"><span>{t.projectMeta}</span><span>{t.projectSale}</span></div>
          <div className="project-name">ach<span>.</span><br />so</div>
          <a href="https://ach.so" target="_blank" rel="noreferrer">{t.visitProject} <Arrow /></a>
        </div>
        <div className="project-copy">
          <div className="section-index">{t.projectIndex}</div>
          <h2>{t.projectTitle}</h2>
          <p>{t.projectBody}</p>
          <a className="text-link" href="https://ach.so" target="_blank" rel="noreferrer">{t.seeProject} <Arrow /></a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-index">{t.contactIndex}</div>
        <p>{t.contactIntro}</p>
        <a className="contact-mail" href="mailto:hi@alperen.co">{t.contactTitle}<Arrow /></a>
      </section>

      <footer>
        <div className="footer-name">Alperen Özkan <span>© {new Date().getFullYear()}</span></div>
        <div className="socials">{socialLinks.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label} <Arrow /></a>)}</div>
        <a href="#top" className="back-top">{t.backTop}</a>
      </footer>
    </main>
  );
}

export default App;
