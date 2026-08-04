/* =====================================================================
   Contenu éditable — FR / EN
   Ajoutez / modifiez vos projets et mémoires ici, dans les deux langues.
   Pas besoin de toucher au HTML — les cartes sont générées automatiquement.
===================================================================== */

const projets = [
  {
    tag: { fr: "Python · Simulation", en: "Python · Simulation" },
    titre: { fr: "Filtre de Kalman étendu — suivi radar", en: "Extended Kalman Filter — radar tracking" },
    description: {
      fr: "Implémentation d'un EKF pour le suivi d'une cible en mouvement à partir de mesures bruitées d'angle et de distance.",
      en: "Implementation of an EKF to track a moving target from noisy angle and range measurements."
    },
    lien_code: "https://github.com/votre-pseudo/projet-ekf-radar",
    lien_demo: null
  },
  {
    tag: { fr: "R · Statistiques", en: "R · Statistics" },
    titre: { fr: "Estimation par chaînes de Markov", en: "Markov chain estimation" },
    description: {
      fr: "Étude de la convergence d'une chaîne de Markov et estimation de sa mesure invariante sur données simulées.",
      en: "Study of the convergence of a Markov chain and estimation of its invariant measure on simulated data."
    },
    lien_code: "https://github.com/votre-pseudo/projet-markov",
    lien_demo: null
  },
  {
    tag: { fr: "LaTeX · Cours", en: "LaTeX · Course notes" },
    titre: { fr: "Notes de cours — calcul stochastique", en: "Course notes — stochastic calculus" },
    description: {
      fr: "Synthèse rédigée du cours de calcul stochastique : intégrale d'Itô, formule d'Itô, équations différentielles stochastiques.",
      en: "Written summary of the stochastic calculus course: Itô integral, Itô's formula, stochastic differential equations."
    },
    lien_code: "https://github.com/votre-pseudo/notes-calcul-stochastique",
    lien_demo: null
  }
];

const memoires = [
  {
    annee: "2026",
    titre: { fr: "Filtrage non linéaire : théorie et applications", en: "Nonlinear filtering: theory and applications" },
    description: {
      fr: "Mémoire de M1 portant sur les méthodes de filtrage non linéaire (filtre de Kalman étendu, filtre particulaire) et leur application au suivi de trajectoires.",
      en: "M1 thesis on nonlinear filtering methods (extended Kalman filter, particle filter) and their application to trajectory tracking."
    },
    lien_pdf: "assets/memoires/memoire-filtrage-non-lineaire.pdf",
    lien_slides: "assets/memoires/soutenance-slides.pdf",
    lien_pdf_label: { fr: "Lire le mémoire (PDF) →", en: "Read the thesis (PDF) →" },
    lien_slides_label: { fr: "Slides de soutenance →", en: "Defense slides →" }
  }
];

/* =====================================================================
   Dictionnaire de traduction des textes statiques
===================================================================== */
const i18n = {
  "nav.accueil": { fr: "Accueil", en: "Home" },
  "nav.projets": { fr: "Projets", en: "Projects" },
  "nav.memoires": { fr: "Mémoires", en: "Theses" },
  "nav.cv": { fr: "CV", en: "CV" },
  "nav.contact": { fr: "Contact", en: "Contact" },

  "hero.eyebrow": { fr: "Portfolio universitaire — M1 Mathématiques", en: "University Portfolio — M1 Mathematics" },
  "hero.tagline": {
    fr: "Étudiant en Master 1 de Mathématiques, spécialisé en probabilités et analyse stochastique. Mémoire de recherche sur le filtrage non linéaire.",
    en: "M1 Mathematics student, focused on probability and stochastic analysis. Research thesis on nonlinear filtering."
  },
  "hero.link.projets": { fr: "Voir mes projets →", en: "See my projects →" },
  "hero.link.memoires": { fr: "Lire mes mémoires →", en: "Read my theses →" },
  "hero.link.cv": { fr: "Consulter mon CV →", en: "View my CV →" },

  "traj.true": { fr: "trajectoire réelle", en: "true trajectory" },
  "traj.est": { fr: "estimation filtrée", en: "filtered estimate" },

  "section.projets.eyebrow": { fr: "02 — Travaux", en: "02 — Work" },
  "section.projets.title": { fr: "Projets", en: "Projects" },

  "section.memoires.eyebrow": { fr: "03 — Recherche", en: "03 — Research" },
  "section.memoires.title": { fr: "Mémoires", en: "Theses" },

  "section.cv.eyebrow": { fr: "04 — Parcours", en: "04 — Background" },
  "section.cv.title": { fr: "Curriculum Vitæ", en: "Curriculum Vitae" },
  "cv.summary": {
    fr: "Version à jour de mon CV, avec mon parcours académique, mes compétences techniques et mes expériences en lien avec les mathématiques appliquées.",
    en: "Up-to-date version of my CV, with my academic background, technical skills and experience related to applied mathematics."
  },
  "cv.button": { fr: "↓ Télécharger le CV (PDF)", en: "↓ Download CV (PDF)" },
  "cv.h1.label": { fr: "M1", en: "M1" },
  "cv.h1.value": { fr: "Mathématiques — probabilités & stochastique", en: "Mathematics — probability & stochastic analysis" },
  "cv.h2.label": { fr: "Mémoire", en: "Thesis" },
  "cv.h2.value": { fr: "Filtrage non linéaire", en: "Nonlinear filtering" },
  "cv.h3.label": { fr: "Outils", en: "Tools" },
  "cv.h3.value": { fr: "LaTeX, Python, R", en: "LaTeX, Python, R" },

  "section.contact.eyebrow": { fr: "05 — Contact", en: "05 — Contact" },
  "section.contact.title": { fr: "Me contacter", en: "Get in touch" },

  "ui.menu": { fr: "Menu", en: "Menu" },

  "footer.text": {
    fr: "Site construit avec HTML/CSS/JS, hébergé sur GitHub Pages.",
    en: "Site built with HTML/CSS/JS, hosted on GitHub Pages."
  }
};

const LANG_KEY = "portfolio-lang";
let currentLang = localStorage.getItem(LANG_KEY) || "fr";

/* ===================================================================
   Rendu des cartes (langue courante)
=================================================================== */
function renderProjets() {
  const grid = document.getElementById("projets-grid");
  grid.innerHTML = projets.map(p => `
    <article class="card reveal in">
      <p class="tag">${p.tag[currentLang]}</p>
      <h3>${p.titre[currentLang]}</h3>
      <p>${p.description[currentLang]}</p>
      <div class="card-links">
        ${p.lien_code ? `<a href="${p.lien_code}" target="_blank" rel="noopener">${currentLang === "fr" ? "Code →" : "Code →"}</a>` : ""}
        ${p.lien_demo ? `<a href="${p.lien_demo}" target="_blank" rel="noopener">${currentLang === "fr" ? "Démo →" : "Demo →"}</a>` : ""}
      </div>
    </article>
  `).join("");
}

function renderMemoires() {
  const list = document.getElementById("memoires-list");
  list.innerHTML = memoires.map(m => `
    <div class="memoire-item reveal in">
      <p class="year">${m.annee}</p>
      <div>
        <h3>${m.titre[currentLang]}</h3>
        <p>${m.description[currentLang]}</p>
        <div class="card-links">
          ${m.lien_pdf ? `<a href="${m.lien_pdf}" target="_blank" rel="noopener">${m.lien_pdf_label[currentLang]}</a>` : ""}
          ${m.lien_slides ? `<a href="${m.lien_slides}" target="_blank" rel="noopener">${m.lien_slides_label[currentLang]}</a>` : ""}
        </div>
      </div>
    </div>
  `).join("");
}

/* ===================================================================
   Langue : application au DOM + persistance
=================================================================== */
function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[key]) el.textContent = i18n[key][currentLang];
  });
}

function updateLangButtons() {
  document.querySelectorAll(".lang-switch").forEach(btn => {
    btn.setAttribute("data-current", currentLang);
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  applyStaticTranslations();
  updateLangButtons();
  renderProjets();
  renderMemoires();
}

function setupLangSwitch() {
  document.querySelectorAll(".lang-switch").forEach(btn => {
    btn.addEventListener("click", () => setLang(currentLang === "fr" ? "en" : "fr"));
  });
}

/* ===================================================================
   Navigation active au scroll + reveal on scroll
=================================================================== */
function setupScrollObservers() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("[data-nav]");

  const setActive = (id) => {
    navLinks.forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
    });
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  sections.forEach(s => sectionObserver.observe(s));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".card, .memoire-item").forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });
}

/* ===================================================================
   Menu mobile
=================================================================== */
function setupMobileMenu() {
  const btn = document.getElementById("menu-toggle");
  const menu = document.getElementById("topbar-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ===================================================================
   Init
=================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = currentLang;
  applyStaticTranslations();
  updateLangButtons();
  renderProjets();
  renderMemoires();
  setupLangSwitch();
  setupScrollObservers();
  setupMobileMenu();
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
