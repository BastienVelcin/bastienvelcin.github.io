/* =====================================================================
   Contenu éditable — FR / EN
   Ajoutez / modifiez vos projets et mémoires ici, dans les deux langues.
   Pas besoin de toucher au HTML — les cartes sont générées automatiquement.
===================================================================== */

const projets = [
  {
    tag: { fr: "Python · Modélisation", en: "Python · Modeling" },
    titre: { fr: "Bibliothèque PyStochastic", en: "PyStochastic Library" },
    description: {
      fr: "Création d'une bibliothèque python destinée au calcul stochastique et à la modélisation stochastique. Le projet est en cours de développement.",
      en: "Creation of a Python library for stochastic calculus and stochastic modeling. The project is currently under development."
    },
    lien_code: "https://github.com/BastienVelcin/PyStochastic",
    lien_demo: null
  },
  {
    tag: { fr: "MATLAB · Modélisation", en: "MATLAB · Modeling" },
    titre: { fr: "Méthode des Élements Finis en dimension 2", en: "2 Dimensional Finite Element Method" },
    description: {
      fr: "Application de la méthode des éléments finis à un domaine rectange perforé par une ellipse. Projet co-réalisé avec MULLER Célia.",
      en: "Application of the finite element method to a rectangular domain with an elliptical cutout. Project co-authored with MULLER Célia."
    },
    lien_code: "https://github.com/BastienVelcin/FiniteElementMethod",
    lien_demo: null
  },
];

const memoires = [
  {
    annee: "2026",
    titre: { fr: "Calcul stochastique appliqué à quelques problèmes de filtrage non-linéaire", en: "Stochastic calculus applied to some non-linear filtering problems" },
    description: {
      fr: "Mémoire de Master 1 portant sur une introduction aux outils de calcul stochastique en vue d'aborder la théorie du filtrage non linéaire (équation de Zakai, filtre de Benes, ...) et leur application au suivi de trajectoires.",
      en: "First-year Master’s thesis providing an introduction to stochastic computation tools to explore the theory of non-linear filtering (Zakai equation, Benes filter, etc.) and their application to trajectory tracking."
    },
    lien_pdf: "assets/memoires/memoire_filtrage_velcin.pdf",
    lien_slides: "assets/memoires/slide_filtrage_velcin.pdf",
    lien_pdf_label: { fr: "Lire le mémoire (PDF) →", en: "Read the thesis (PDF) →" },
    lien_slides_label: { fr: "Slides de soutenance →", en: "Defense slides →" }
  },
   {
    annee: "2025",
    titre: { fr: "Introduction à l'analyse fractionnaire", en: "Introduction to fractional calculus" },
    description: {
      fr: "Mémoire de Licence 3, coécrit avec LOUKILI Douae, visant à introduire une généralisation des opérateurs différentiels usuels (dérivation, intégration) à des ordres non-entiers ainsi que diverses méthodes de résolution d'équations différentielles fractionnaires.",
      en: "Third-year undergraduate thesis, co-authored with LOUKILI Douae, aimed at generalising the standard differential operators (differentiation, integration) to non-integer orders, as well as various methods for solving fractional differential equations."
    },
    lien_pdf: "assets/memoires/memoire_analyse_fractionnaire_loukili_velcin.pdf",
    lien_slides: "assets/memoires/slide_analyse_fractionnaire_loukili_velcin.pdf",
    lien_pdf_label: { fr: "Lire le mémoire (PDF) →", en: "Read the thesis (PDF) →" },
    lien_slides_label: { fr: "Slides de soutenance →", en: "Defense slides →" }
  },
   {
    annee: "2025",
    titre: { fr: "Chaînes de Markov et Méthodes de Monte Carlo par Chaines de Markov : quelques éléments de théorie et simulation du Modèle d'Ising", en: "Markov Chains and Markov Chains Monte Carlo  Methods : Some Theoretical Aspects and Simulation of the Ising Model" },
    description: {
      fr: "Rapport issu de mon stage de recherche au sein de l'Institut Élie Cartan de Lorraine (IECL), ayant pour objectif d'introduire les chaînes de Markov et les méthodes MCMC, avec une application à la simulation du modèle d'Ising en 2D.",
      en: "A report resulting from my research placement at the Élie Cartan Institute of Lorraine (IECL), aimed at introducing Markov chains and MCMC methods, with an application to the simulation of the 2D Ising model"
    },
    lien_pdf: "assets/memoires/markov_mcmc_velcin.pdf",
    lien_slides: null,
    lien_pdf_label: { fr: "Lire le mémoire (PDF) →", en: "Read the thesis (PDF) →" },
    lien_slides_label: { fr: "Slides de soutenance →", en: "Defense slides →" }
  }
];

const diplomes = [
  {
    annee: "2025-2026",
    titre: { fr: "Master 1 - Mathématiques & Applications", en: "Master 1 - Mathematics & Applications"},
    universite: { fr: "Université de Lorraine - Site de Metz", en: "University of Lorraine – Metz Campus"},
    description: { fr: "Perfectionnement de notions de mathématiques appliquées : Probabilités, Statistiques, Optimisation, Algorithmie, Réseaux de neurones, Analyse de données, Modélisation.", en: "In-depth study of applied mathematics concepts: Probability, Statistics, Optimisation, Algorithms, Neural Networks, Data Analysis, Modeling."},
  },

  {
    annee: "2022-2025",
    titre: { fr: "Licence - Mathématiques (Mention : Très bien)", en: "Bachelor's degree – Mathematics (Honours: Highest Honours)"},
    universite: { fr: "Université de Lorraine - Site de Metz", en: "University of Lorraine – Metz Campus"},
    description: { fr: "Formation approfondie en mathématiques fondamentales et appliquées : analyse, algèbre, algèbre linéaire et bilinéaire, probabilités, statistiques, analyse numérique, simulation, calcul différentiel.", en: "Solid training in both fundamental and applied mathematics : analysis, algebra, linear and bilinear algebra, probability theory and statistics, numerical analysis, simulation, differential calculus."},
  },
  {
    annee: "2022",
    titre: { fr: "Baccalauréat Général (Mention : Très bien)", en: "General Baccalaureate (Honours: Highest Honours)"},
    universite: { fr: "Lycée Antoine de Saint-Exupéry - Fameck", en: "Antoine de Saint-Exupéry High School - Fameck"},
    description: { fr: "Spécialités : Mathématiques, Numériques et Sciences Informatiques, Physique-Chimie.", en: "Specializations: Mathematics, Digital Sciences and Computer Science, Physics and Chemistry"},
  }
];

const experiences = [
     {
    annee: "2024-2026",
    titre: { fr: "Tuteur en Mathématiques", en: "Tutor in Mathematics"},
    lieu: { fr: "Université de Lorraine - Site de Metz", en: "University of Lorraine – Metz Campus"},
    description: { fr: "Organisation et conduite de séances pédagogiques de tutorat pour les L1 Mathématiques et L1 Mathématiques pour le Professorat des Écoles (PPPE) en logique, analyse, algèbre, et algèbre linéaire.", en: "Organizing and conducting tutorial sessions in logic, analysis, algebra, and linear algebra for first-year Mathematics students and those in the Mathematics for Primary School Teaching (PPPE) track."},
  },

  {
    annee: "2024-2025",
    titre: { fr: "Stage de recherche en Mathématiques", en: "Mathematics Research Internship"},
    lieu: { fr: "Institut Élie Cartan de Lorraine (IECL)", en: "Élie Cartan Institute of Lorraine (IECL)"},
    description: { fr: "Analyse de publications scientifiques traitant des chaînes de Markov et des Méthodes de Monte Carlo par Chaînes de Markov (MCMC). Rédaction d’un rapport de recherche structuré, synthétisant les résultats obtenus et la méthodologie.", en: "Analysis of scientific publications dealing with Markov chains and Markov Chain Monte Carlo (MCMC) methods. Preparation of a structured research report summarizing the results obtained and the methodology."},
  },
];

const softskills = [
   {
      titre: { fr:"Programmation", en:"Programming"},
      description : {fr: "Python, R, MATLAB et SQL", en: "Python, R, MATLAB and SQL"}
   },
   {
      titre: { fr:"Bureautique", en:"Office automation"},
      description : {fr: "LaTeX, Microsoft Office", en: "LaTeX, Microsoft Office"}
   },
   {
      titre: { fr:"Langues", en:"Languages"},
      description : {fr: "Français (Natif), Anglais (B2)", en: "French (Native), English (B2)"}
   },
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

  "hero.eyebrow": { fr: "Portfolio universitaire — M2 Mathématiques", en: "University Portfolio — M2 Mathematics" },
  "hero.tagline": {
    fr: "Étudiant en Master 2 de Mathématiques, spécialisé en probabilités, calcul stochastique et statistiques appliquées à la finance et à l'assurance.",
    en: "Second-year Master’s student in Mathematics, specialising in probability, stochastic calculus and statistics applied to finance and insurance."
  },
  "hero.link.projets": { fr: "Voir mes projets →", en: "See my projects →" },
  "hero.link.memoires": { fr: "Lire mes mémoires →", en: "Read my theses →" },
  "hero.link.cv": { fr: "Consulter mon CV →", en: "View my CV →" },

  "traj.true": { fr: "trajectoire réelle", en: "true trajectory" },
  "traj.est": { fr: "estimation filtrée", en: "filtered estimate" },

  "section.projets.eyebrow": { fr: "02 — Travaux", en: "02 — Works" },
  "section.projets.title": { fr: "Projets", en: "Projects" },

  "section.memoires.eyebrow": { fr: "03 — Recherche", en: "03 — Research" },
  "section.memoires.title": { fr: "Mémoires & Rapports", en: "Theses & Reports" },
   
  "section.diplomes.title": { fr: "Formations & Diplômes", en: "Training & Qualifications" },
   "section.experiences.title": { fr: "Expériences professionelles", en: "Professional experiences" },

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

function renderDiplomes() {
  const list = document.getElementById("diplomes-list");
  list.innerHTML = diplomes.map(d => `
    <div class="memoire-item reveal in">
      <p class="year">${d.annee}</p>
      <div>
        <h3>${d.titre[currentLang]}</h3>
        <h4>${d.universite[currentLang]}</h4>
        <p>${d.description[currentLang]}</p>
      </div>
    </div>
  `).join("");
}

function renderExperiences() {
  const list = document.getElementById("experiences-list");
  list.innerHTML = experiences.map(e => `
    <div class="memoire-item reveal in">
      <p class="year">${e.annee}</p>
      <div>
        <h3>${e.titre[currentLang]}</h3>
        <h4>${e.lieu[currentLang]}</h4>
        <p>${e.description[currentLang]}</p>
      </div>
    </div>
  `).join("");
}

function renderSoftskills() {
  const list = document.getElementById("softskills-list");
  list.innerHTML = softskills.map(s => `
      <li><strong data-i18n="cv.h1.label">${s.titre[currentLang]}</strong><span data-i18n="cv.h1.value">${s.description[currentLang]}</span></li>
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
   renderDiplomes();
   renderExperiences();
   renderSoftskills();
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
   renderDiplomes();
   renderExperiences();
   renderSoftskills();
  setupLangSwitch();
  setupScrollObservers();
  setupMobileMenu();
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
