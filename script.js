/* =====================================================================
   Contenu éditable : ajoutez / modifiez vos projets et mémoires ici.
   Pas besoin de toucher au HTML — les cartes sont générées automatiquement.
===================================================================== */

const projets = [
  {
    tag: "Python · Modélisation",
    titre: "Bibliothèque PyStochastic",
    description: "Création d'une bibliothèque python destinée au calcul stochastique et à la modélisation stochastique. Le projet est en cours de développement.",
    lien_code: "https://github.com/BastienVelcin/PyStochastic",
    lien_demo: null
  },
  {
    tag: "MATLAB · Modélisation",
    titre: "Méthodes  des Élements Finis en dimension 2",
    description: "Application de la méthode des éléments finis à un domaine rectange perforé par une ellipse. Projet co-réalisé avec MULLER Célia.",
    lien_code: "https://github.com/votre-pseudo/projet-markov",
    lien_demo: null
  },
  {
    tag: "LaTeX · Cours",
    titre: "Notes de cours — calcul stochastique",
    description: "Synthèse rédigée du cours de calcul stochastique : intégrale d'Itô, formule d'Itô, équations différentielles stochastiques.",
    lien_code: "https://github.com/votre-pseudo/notes-calcul-stochastique",
    lien_demo: null
  }
];

const memoires = [
  {
    annee: "2026",
    titre: "Calcul stochastique appliqué à quelques problèmes de filtrage non-linéaire",
    description: "Mémoire de Master 1 portant sur une introduction aux outils de calcul stochastique en vue d'aborder la théorie du filtrage non linéaire (équation de Zakai, filtre de Benes, ...) et leur application au suivi de trajectoires.",
    lien_pdf: "assets/memoires/memoire_filtrage_velcin.pdf",
    lien_slides: "assets/memoires/slide_filtrage_velcin.pdf"
  },
   {
    annee: "2025",
    titre: "Introduction à l'analyse fractionnaire",
    description: "Mémoire de Licence 3, coécrit avec LOUKILI Douae, visant à introduire une généralisation des opérateurs différentiels usuels (dérivation, intégration) à des ordres non-entiers ainsi que diverses méthodes de résolution d'équations différentielles fractionnaires.",
    lien_pdf: "assets/memoires/memoire_analyse_fractionnaire_loukili_velcin.pdf",
    lien_slides: "assets/memoires/slide_analyse_fractionnaire_loukili_velcin.pdf"
  },
   {
    annee: "2025",
    titre: "Chaînes de Markov et Méthodes de Monte Carlo par Chaines de Markov : quelques éléments de théorie et simulation du Modèle d'Ising",
    description: "Rapport issu de mon stage de recherche au sein de l'Institut Élie Cartan de Lorraine (IECL), ayant pour objectif d'introduire les chaînes de Markov et les méthodes MCMC, avec une application à la simulation du modèle d'Ising en 2D.",
    lien_pdf: "assets/memoires/markov_mcmc_velcin.pdf",
    lien_slides: null
  }
];

const diplomes = [
  {
    annee: "2025-2026",
    titre: "Master 1 - Mathématiques & Applications",
    universite: "Université de Lorraine",
   description: "Probabilités, Calcul Stochastique, Statistiques, Optimisation, Analyse de Données et Modélisation
  },
   {
    annee: "2025",
    titre: "Introduction à l'analyse fractionnaire",
    description: "Mémoire de Licence 3, coécrit avec LOUKILI Douae, visant à introduire une généralisation des opérateurs différentiels usuels (dérivation, intégration) à des ordres non-entiers ainsi que diverses méthodes de résolution d'équations différentielles fractionnaires.",
    lien_pdf: "assets/memoires/memoire_analyse_fractionnaire_loukili_velcin.pdf",
    lien_slides: "assets/memoires/slide_analyse_fractionnaire_loukili_velcin.pdf"
  },
   {
    annee: "2025",
    titre: "Chaînes de Markov et Méthodes de Monte Carlo par Chaines de Markov : quelques éléments de théorie et simulation du Modèle d'Ising",
    description: "Rapport issu de mon stage de recherche au sein de l'Institut Élie Cartan de Lorraine (IECL), ayant pour objectif d'introduire les chaînes de Markov et les méthodes MCMC, avec une application à la simulation du modèle d'Ising en 2D.",
    lien_pdf: "assets/memoires/markov_mcmc_velcin.pdf",
    lien_slides: null
  }
];

/* ===================================================================
   Rendu des cartes
=================================================================== */
function renderProjets() {
  const grid = document.getElementById("projets-grid");
  grid.innerHTML = projets.map(p => `
    <article class="card reveal">
      <p class="tag">${p.tag}</p>
      <h3>${p.titre}</h3>
      <p>${p.description}</p>
      <div class="card-links">
        ${p.lien_code ? `<a href="${p.lien_code}" target="_blank" rel="noopener">Code →</a>` : ""}
        ${p.lien_demo ? `<a href="${p.lien_demo}" target="_blank" rel="noopener">Démo →</a>` : ""}
      </div>
    </article>
  `).join("");
}

function renderMemoires() {
  const list = document.getElementById("memoires-list");
  list.innerHTML = memoires.map(m => `
    <div class="memoire-item reveal">
      <p class="year">${m.annee}</p>
      <div>
        <h3>${m.titre}</h3>
        <p>${m.description}</p>
        <div class="card-links">
          ${m.lien_pdf ? `<a href="${m.lien_pdf}" target="\_blank" rel="noopener" type="application/pdf" >Lire le mémoire (PDF) →</a>` : ""}
          ${m.lien_slides ? `<a href="${m.lien_slides}" target="\_blank" rel="noopener">Slides de soutenance →</a>` : ""}
        </div>
      </div>
    </div>
  `).join("");
}

function renderDiplomes() {
  const list = document.getElementById("diplomes-list");
  list.innerHTML = diplomes.map(m => `
    <div class="memoire-item reveal">
      <p class="year">${m.annee}</p>
      <div>
        <h4>${m.diplome}</h4>
        <h5>${m.universite}</h5>
        <p>${m.description}</p>
      </div>
    </div>
  `).join("");
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

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
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
    btn.textContent = open ? "Fermer" : "Menu";
  });

  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "Menu";
    });
  });
}

/* ===================================================================
   Init
=================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderProjets();
  renderMemoires();
   renderDiplomes();
  setupScrollObservers();
  setupMobileMenu();
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
