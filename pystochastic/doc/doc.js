/* =====================================================================
   doc.js — commun à toutes les pages de pystochastic/doc/
   Traductions FR/EN (même préférence que le reste du site via
   localStorage), filtre de recherche, tiroir de nav mobile, lien actif
   au scroll pour les ancres de la page courante.
===================================================================== */

const i18n = {
  "search.placeholder": { fr: "Rechercher…", en: "Search…" },
  "topbar.project": { fr: "← Projet", en: "← Project" },
  "topbar.portfolio": { fr: "Portfolio", en: "Portfolio" },

  "nav.group.guide": { fr: "Guide", en: "Guide" },
  "nav.guide.install": { fr: "Installation", en: "Installation" },
  "nav.guide.quickstart": { fr: "Démarrage rapide", en: "Quickstart" },
  "nav.group.random": { fr: "pystochastic.random", en: "pystochastic.random" },
  "nav.group.processes": { fr: "pystochastic.processes", en: "pystochastic.processes" },
  "nav.group.sde": { fr: "pystochastic.sde", en: "pystochastic.sde" },

  "hero.guide.eyebrow": { fr: "Documentation", en: "Documentation" },
  "hero.guide.title": { fr: "Guide", en: "Guide" },
  "hero.guide.tagline": {
    fr: "Installation et démarrage rapide de PyStochastic : une introduction rapide et simple.",
    en: "Installation and a quick hands-on introduction to PyStochastic : a quick and simple introduction."
  },
  "install.badge": { fr: "Guide", en: "Guide" },
  "install.title": { fr: "Installation", en: "Installation" },
  "install.p1": {
    fr: "La version actuelle de PyStochastic n'est pas encore publié sur PyPI. En attendant, installez-le directement depuis GitHub :",
    en: "The current version of PyStochastic is not yet published on PyPI. In the meantime, install it directly from GitHub:"
  },
  "install.p2": {
    fr: "Une distribution stable sur PyPI fait partie des prochaines étapes du projet.",
    en: "A stable PyPI release is on the project's roadmap."
  },
  "quickstart.badge": { fr: "Guide", en: "Guide" },
  "quickstart.title": { fr: "Démarrage rapide", en: "Quickstart" },
  "quickstart.p1": {
    fr: "Exemple introductif : simulation d'un mouvement brownien et affichage de quelques de ses trajectoires.",
    en: "Introductory example: simulation of a Brownian motion and plot a few of its trajectories."
  },

  "hero.random.eyebrow": { fr: "Documentation", en: "Documentation" },
  "hero.random.tagline": {
    fr: "Génération d'échantillons aléatoires : lois continues et discrètes, utilisées en interne par les processus et directement réutilisables.",
    en: "Random sample generation: continuous and discrete distributions, used internally by the processes and directly reusable."
  },
  "crandom.desc": {
    fr: "Génère des échantillons selon une loi continue choisie parmi celles disponibles (normale, uniforme, exponentielle, Weibull, Fréchet, Fisher…).",
    en: "Generates samples from a chosen continuous distribution among those available (normal, uniform, exponential, Weibull, Fréchet, Fisher…)."
  },
  "crandom.p.law": { fr: "nom de la loi continue à échantillonner.", en: "name of the continuous distribution to sample from." },
  "crandom.p.params": { fr: "paramètres spécifiques à la loi choisie (ex. mu, sigma pour la loi normale).", en: "parameters specific to the chosen distribution (e.g. mu, sigma for the normal law)." },
  "sample.r": { fr: "tableau d'échantillons de taille n.", en: "array of n samples." },
  "drandom.desc": {
    fr: "Génère des échantillons selon une loi discrète choisie (Poisson, binomiale, géométrique…).",
    en: "Generates samples from a chosen discrete distribution (Poisson, binomial, geometric…)."
  },
  "drandom.p.law": { fr: "nom de la loi discrète à échantillonner.", en: "name of the discrete distribution to sample from." },
  "drandom.p.params": { fr: "paramètres spécifiques à la loi choisie (ex. lam pour Poisson).", en: "parameters specific to the chosen distribution (e.g. lam for Poisson)." },

  "hero.processes.tagline": {
    fr: "Huit processus stochastiques classiques, chacun avec une interface commune de simulation.",
    en: "Eight classic stochastic processes, each with a shared simulation interface."
  },
  "sbrownian.desc": { fr: "Mouvement brownien standard (processus de Wiener).", en: "Standard Brownian motion (Wiener process)." },
  "gbrownian.desc": { fr: "Mouvement brownien géométrique, à trajectoires toujours positives.", en: "Geometric Brownian motion, with always-positive trajectories." },
  "ornuhl.desc": { fr: "Processus d'Ornstein-Uhlenbeck, à retour à la moyenne.", en: "Ornstein-Uhlenbeck process, mean-reverting." },
  "poisson.desc": { fr: "Processus de comptage à sauts, arrivant à taux constant.", en: "Jump counting process, arriving at a constant rate." },
  "vasicek.desc": { fr: "Modèle de taux d'intérêt de Vasicek (Ornstein-Uhlenbeck appliqué aux taux).", en: "Vasicek interest rate model (Ornstein-Uhlenbeck applied to rates)." },
  "cir.desc": { fr: "Modèle Cox-Ingersoll-Ross : variante du Vasicek à volatilité dépendante du niveau, trajectoires positives.", en: "Cox-Ingersoll-Ross model: a Vasicek variant with level-dependent volatility, positive trajectories." },
  "crr.desc": { fr: "Modèle Cox-Ross-Rubinstein : arbre binomial recombinant.", en: "Cox-Ross-Rubinstein model: a recombining binomial tree." },
  "processdisp.desc": { fr: "Trace plusieurs trajectoires simulées d'un même processus.", en: "Plots several simulated trajectories of the same process." },

  "p.sigma": { fr: "volatilité du processus.", en: "process volatility." },
  "p.x0": { fr: "valeur initiale.", en: "initial value." },
  "p.s0": { fr: "valeur initiale (prix).", en: "initial value (price)." },
  "p.mu": { fr: "dérive (taux de croissance moyen).", en: "drift (average growth rate)." },
  "p.theta": { fr: "vitesse de retour à la moyenne.", en: "mean-reversion speed." },
  "p.meanlevel": { fr: "niveau moyen de long terme.", en: "long-term mean level." },
  "p.lam": { fr: "taux d'arrivée des sauts (intensité).", en: "jump arrival rate (intensity)." },
  "p.a": { fr: "vitesse de retour à la moyenne.", en: "mean-reversion speed." },
  "p.b": { fr: "niveau moyen de long terme du taux.", en: "long-term mean level of the rate." },
  "p.r0": { fr: "taux initial.", en: "initial rate." },
  "p.crr.s0": { fr: "prix initial du sous-jacent.", en: "initial price of the underlying." },
  "p.crr.u": { fr: "facteur de hausse à chaque pas.", en: "up-move factor at each step." },
  "p.crr.d": { fr: "facteur de baisse à chaque pas.", en: "down-move factor at each step." },
  "p.crr.n": { fr: "nombre de pas de l'arbre.", en: "number of steps in the tree." },
  "p.disp.process": { fr: "instance de processus à visualiser.", en: "process instance to visualize." },

  "m.simulate": { fr: "Simule n_paths trajectoires sur n_steps pas de temps.", en: "Simulates n_paths trajectories over n_steps time steps." },
  "m.p.t": { fr: "horizon de temps total.", en: "total time horizon." },
  "m.p.nsteps": { fr: "nombre de pas de discrétisation.", en: "number of discretization steps." },
  "m.p.npaths": { fr: "nombre de trajectoires indépendantes à simuler.", en: "number of independent trajectories to simulate." },
  "m.p.seed": { fr: "graine du générateur aléatoire, pour la reproductibilité.", en: "random generator seed, for reproducibility." },
  "m.r.simulate": { fr: "tableau de forme (n_paths, n_steps).", en: "array of shape (n_paths, n_steps)." },

  "crr.m.tree.desc": { fr: "Construit l'arbre binomial recombinant complet.", en: "Builds the full recombining binomial tree." },
  "crr.r.tree": { fr: "tableau des valeurs du sous-jacent à chaque nœud.", en: "array of underlying values at each node." },
  "crr.m.price.desc": { fr: "Évalue une option européenne par rétro-induction sur l'arbre.", en: "Prices a European option by backward induction on the tree." },
  "crr.p.strike": { fr: "prix d'exercice de l'option.", en: "option strike price." },
  "crr.p.type": { fr: "\"call\" ou \"put\".", en: "\"call\" or \"put\"." },
  "crr.p.r": { fr: "taux sans risque.", en: "risk-free rate." },
  "crr.r.price": { fr: "prix de l'option.", en: "option price." },

  "disp.m.plot.desc": { fr: "Trace les trajectoires simulées, avec la moyenne empirique en surbrillance.", en: "Plots the simulated trajectories, with the empirical mean highlighted." },
  "disp.p.paths": { fr: "trajectoires simulées à afficher.", en: "simulated trajectories to display." },
  "disp.p.t": { fr: "grille de temps associée.", en: "associated time grid." },
  "disp.r.plot": { fr: "figure Matplotlib.", en: "Matplotlib figure." },

  "hero.sde.tagline": {
    fr: "Schémas de discrétisation pour les équations différentielles stochastiques sans solution explicite.",
    en: "Discretization schemes for stochastic differential equations with no closed-form solution."
  },
  "eulermaruyama.desc": {
    fr: "Schéma d'Euler-Maruyama : discrétisation d'ordre faible 1, la méthode de référence pour simuler une EDS.",
    en: "Euler-Maruyama scheme: weak order 1 discretization, the reference method for simulating an SDE."
  },
  "milstein.desc": {
    fr: "Schéma de Milstein : ajoute un terme correctif à Euler-Maruyama, plus précis lorsque la diffusion dépend de l'état.",
    en: "Milstein scheme: adds a correction term to Euler-Maruyama, more accurate when diffusion depends on the state."
  },
  "sde.p.process": { fr: "instance de processus définissant la dérive et la diffusion.", en: "process instance defining the drift and diffusion." },
  "sde.p.dt": { fr: "pas de temps de la discrétisation.", en: "discretization time step." },
  "sde.p.nsteps": { fr: "nombre de pas de temps.", en: "number of time steps." }
};

const LANG_KEY = "portfolio-lang";
let currentLang = localStorage.getItem(LANG_KEY) || "fr";

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[key]) el.textContent = i18n[key][currentLang];
  });
  document.querySelectorAll(".doc-search-input").forEach(input => {
    if (i18n["search.placeholder"]) input.setAttribute("placeholder", i18n["search.placeholder"][currentLang]);
  });
}

function updateLangButtons() {
  document.querySelectorAll(".lang-switch").forEach(btn => btn.setAttribute("data-current", currentLang));
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  applyStaticTranslations();
  updateLangButtons();
}

function setupLangSwitch() {
  document.querySelectorAll(".lang-switch").forEach(btn => {
    btn.addEventListener("click", () => setLang(currentLang === "fr" ? "en" : "fr"));
  });
}

/* ===================================================================
   Recherche : deux champs possibles (topbar desktop + sidebar mobile),
   synchronisés, filtrent les mêmes groupes de nav.
=================================================================== */
function setupSearchFilter() {
  const inputs = document.querySelectorAll(".doc-search-input");
  if (!inputs.length) return;

  const applyFilter = (q) => {
    document.querySelectorAll(".doc-nav-group").forEach(group => {
      let anyVisible = false;
      group.querySelectorAll("li").forEach(li => {
        const match = li.textContent.toLowerCase().includes(q);
        li.classList.toggle("doc-hidden", !match);
        if (match) anyVisible = true;
      });
      group.style.display = (q === "" || anyVisible) ? "" : "none";
    });
  };

  inputs.forEach(input => {
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      inputs.forEach(other => { if (other !== input) other.value = input.value; });
      applyFilter(q);
    });
  });
}

/* ===================================================================
   Tiroir de navigation mobile
=================================================================== */
function setupMobileDrawer() {
  const btn = document.getElementById("doc-hamburger");
  const sidebar = document.getElementById("doc-sidebar");
  const scrim = document.getElementById("doc-scrim");
  if (!btn || !sidebar || !scrim) return;

  const open = () => { sidebar.classList.add("open"); scrim.classList.add("open"); btn.setAttribute("aria-expanded", "true"); };
  const close = () => { sidebar.classList.remove("open"); scrim.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };

  btn.addEventListener("click", () => {
    sidebar.classList.contains("open") ? close() : open();
  });
  scrim.addEventListener("click", close);
  sidebar.querySelectorAll("a.doc-item-link").forEach(a => a.addEventListener("click", close));
}

/* ===================================================================
   Lien actif au scroll, pour les ancres de la page courante
=================================================================== */
function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("a.doc-item-link");
  if (!sections.length) return;

  const setActive = (id) => {
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = currentLang;
  applyStaticTranslations();
  updateLangButtons();
  setupLangSwitch();
  setupSearchFilter();
  setupMobileDrawer();
  setupScrollSpy();
});
