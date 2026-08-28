/* =====================================================================
   pystochastic.js
   Spécifique à cette page projet : traductions FR/EN (partage la même
   préférence de langue que la page d'accueil via localStorage) et
   génération des petits graphiques de courbes de processus.
===================================================================== */

/* ===================================================================
   1) FR / EN
=================================================================== */
const i18n = {
  "nav.apercu": { fr: "Aperçu", en: "Overview" },
  "nav.modules": { fr: "Modules aléatoires", en: "Random modules" },
  "nav.processus": { fr: "Processus stochastiques", en: "Stochastic processes" },
  "nav.mc": { fr: "Monte Carlo & EDS", en: "Monte Carlo & SDEs" },
  "nav.stats": { fr: "Stats & séries temp.", en: "Stats & time series" },
  "nav.filtrage": { fr: "Filtrage non linéaire", en: "Nonlinear filtering" },
  "nav.perspectives": { fr: "Perspectives", en: "Perspectives" },

  "back.link": { fr: "Retour au portfolio", en: "Back to portfolio" },

  "hero.eyebrow": { fr: "Projet", en: "Project" },
  "hero.tagline": {
    fr: "Bibliothèque Python pour le calcul stochastique et la modélisation stochastique : génération d'échantillons aléatoires, processus classiques, équations différentielles stochastiques, statistiques et filtrage non linéaire.",
    en: "A Python library for stochastic calculus and stochastic modelling: random sampling, classic processes, stochastic differential equations, statistics and nonlinear filtering."
  },
  "hero.link.code": { fr: "Code source (GitHub) →", en: "Source code (GitHub) →" },
  "hero.link.download" : {fr : "Voir sur PyPI →", en : "View on PyPI →"},
  "hero.pill.status": { fr: "Version : 0.2.0", en: "Version : 0.2.0" },

  "section.apercu.eyebrow": { fr: "01 — Aperçu", en: "01 — Overview" },
  "section.apercu.title": { fr: "Aperçu", en: "Overview" },
  "apercu.p1": {
    fr: "PyStochastic est une bibliothèque Python pensée comme une boîte à outils unifiée pour le calcul stochastique et la modélisation stochastique : plutôt que de réimplémenter un générateur de mouvement brownien ou un schéma d'Euler-Maruyama à chaque projet, chaque brique (processus, EDS, statistiques, filtrage) est disponible sous une interface commune.",
    en: "PyStochastic is a Python library built as a unified toolkit for stochastic calculus and stochastic modeling: instead of reimplementing a Brownian motion generator or an Euler-Maruyama scheme for every project, each building block (processes, SDEs, statistics, filtering) is available behind a common interface."
  },
  "apercu.p2": {
    fr: "Le projet est encore en développement actif (WIP) : les modules ci-dessous décrivent l'architecture visée et l'état actuel du dépôt.",
    en: "The project is still under active development (WIP): the modules below describe the intended architecture and the current state of the repository."
  },
  "stat.modules": { fr: "sous-bibliothèques", en: "sub-libraries" },
  "stat.processus": { fr: "modules implémentés", en: "implemented" },
  "stat.statut": { fr: "Version du dépot", en: "Repository version" },

  "section.modules.eyebrow": { fr: "02 — Échantillonnage", en: "02 — Sampling" },
  "section.modules.title": { fr: "Modules aléatoires", en: "Random modules" },
  "modules.intro": {
    fr: "Deux modules de base pour générer des échantillons aléatoires, utilisés en interne par les processus stochastiques et directement réutilisables ailleurs.",
    en: "Two foundational modules for generating random samples, used internally by the stochastic processes and directly reusable elsewhere."
  },



  "section.processus.eyebrow": { fr: "03 — Processus", en: "03 — Processes" },
  "section.processus.title": { fr: "Processus stochastiques", en: "Stochastic processes" },

  "processus.intro": {
    fr: "Onze processus classiques, chacun dans son propre module, avec une interface commune de simulation et de tracé.",
    en: "Eleven classic processes, each in its own module, with a shared interface for simulation and plotting."
  },

  "section.eds.eyebrow": { fr: "04 — Simulation", en: "04 — Simulation" },
  "section.eds.title": { fr: "Équations Différentielles Stochastiques & solveurs", en: "Stochastic Differential Equations & solvers" },
  "eds.p1": {
    fr: "Les équations différentielles stochastiques permettent de relier la différentielle d'un processus au sens d'Itō à lui-même, avec un terme aléatoire modélisé par un mouvement brownien standard.",
    en: "Stochastic differential equations allows to link the differential of a stochastic process to itself, with a random term modeled by a standard Brownian motion."
  },
  "eds.p2": {
    fr: "Différentes méthodes numériques permettent de résoudre approximativement une équation différentielle stochastique : Euler-Maruyama, Milstein et Runge-Kutta.\n" +
        "        Notons que ces deux dernières méthodes ne sont compatibles uniquement pour des équations différentielles stochastiques unidimensionnelles et autonômes, tandis que\n" +
        "        la méthode d'Euler-Maruyama accepte tout type d'équations différentielles stochastiques.",
    en: "Few numerical methods allow to solve approximately a stochastic differential equation: Euler-Maruyama, Milstein and Runge-Kutta.\n" +
        "Note that these two methods are only compatible for unidimensional autonomous stochastic differential equations, while the Euler-Maruyama method accepts any type of stochastic differential equation."
  },
  "eds.chart.title": { fr: "Faisceau de trajectoires simulées", en: "Bundle of simulated trajectories" },
  "eds.legend.paths": { fr: "trajectoires", en: "trajectories" },
  "eds.legend.mean": { fr: "moyenne empirique", en: "empirical mean" },

  "eds.chart.title": { fr: "Schéma exact vs discrétisé", en: "Exact vs discretized scheme" },
  "eds.legend.exact": { fr: "trajectoire fine", en: "fine trajectory" },
  "eds.legend.approx": { fr: "approximation discrétisée", en: "discretized approximation" },

  "section.stats.eyebrow": { fr: "05 — Analyse statistique", en: "05 — Statistical analysis" },
  "section.stats.title": { fr: "Monte Carlo & Statistiques", en: "Monte Carlo & Statistics" },
  "stats.p1": {
    fr: "        Au-delà de la simulation de trajectoires, PyStochastic propose des outils d'analyse sur les simulations et sur des échantillons : estimation,\n" +
        "        intervalles de confiance, trajectoire moyenne, quantiles, histogramme et densité empirique ...",
    en: "Beyond trajectory simulation, PyStochastic offers tools for analyzing simulations and samples: estimation, confidence intervals, mean trajectory, quantiles, histogram and empirical density ..."
  },
  "hist.title": { fr: "Distribution des valeurs terminales", en: "Distribution of terminal values" },
  "ts.title": { fr: "Série temporelle", en: "Time series" },

  "section.filtrage.eyebrow": { fr: "06 — Estimation", en: "06 — Estimation" },
  "section.filtrage.title": { fr: "Filtrage non linéaire", en: "Nonlinear filtering" },
  "filtrage.p1": {
    fr: "Ce module rejoint directement le sujet de mon mémoire de M1 : à partir d'observations bruitées, estimer en continu l'état d'un système dont la dynamique et/ou les mesures sont non linéaires.",
    en: "This module ties directly into my M1 thesis topic: from noisy observations, continuously estimating the state of a system whose dynamics and/or measurements are nonlinear."
  },
  "filtrage.chart.title": { fr: "Trajectoire réelle vs estimation filtrée", en: "True trajectory vs filtered estimate" },
  "filtrage.legend.true": { fr: "trajectoire réelle", en: "true trajectory" },
  "filtrage.legend.est": { fr: "estimation filtrée", en: "filtered estimate" },

  "section.perspectives.eyebrow": { fr: "07 — Perspectives", en: "07 — Perspectives" },
  "section.perspectives.title": { fr: "Perspectives & ressources", en: "Perspectives & resources" },
  "perspectives.intro": { fr: "Pistes d'amélioration envisagées :", en: "Planned improvements:" },
  "perspectives.li1": { fr: "Compléter la couverture de tests sur l'ensemble des modules.", en: "Complete test coverage across all modules." },
  "perspectives.li2": { fr: "Publier une distribution stable sur PyPI.", en: "Publish a stable release on PyPI." },
  "perspectives.li3": { fr: "Documenter chaque module avec des exemples reproductibles.", en: "Document each module with reproducible examples." },
  "perspectives.resources": { fr: "Ressources", en: "Resources" },
  "perspectives.repo": { fr: "Dépôt GitHub →", en: "GitHub repository →" },

  "nextversion":{fr:"Prévu pour la version 0.3.0", en:"Planned for version 0.3.0"}
};

const random = [
  {
    title: {fr: "Aléatoire en temps continu",en:"Continuous-time Random"},
    path: "pyrandom/crandom.py",
    desc: {
      fr: "Génère des échantillons de lois à densité, des plus courantes (uniforme, normale, exponentielle) aux plus spécifiques (Weibull, Fréchet, Fisher…).",
      en: "Generates samples from continuous distributions, from common ones (uniform, normal, exponential) to more specific ones (Weibull, Fréchet, Fisher…)."
    },
    svg: "<path d=\'M4,58 C40,58 55,6 78,6 C101,6 116,58 216,58\' class=\'c-raspberry\'></path>"
  },
  {
    title: {fr: "Aléatoire en temps discret",en:"Discrete-time Random"},
    path: "pyrandom/drandom.py",
    desc: {
      fr: "Génère des échantillons de lois discrètes, pour tout ce qui relève des processus à sauts ou des variables de comptage.",
      en: "Generates samples from discrete distributions, for anything related to jump processes or counting variables."
    },
    svg: "<line x1='14' y1='58' x2='14' y2='40' class='c-steel' stroke-width='8'></line><line x1='50' y1='58' x2='50' y2='18' class='c-steel' stroke-width='8'></line><line x1='86' y1='58' x2='86' y2='52' class='c-steel' stroke-width='8'></line><line x1='122' y1='58' x2='122' y2='10' class='c-steel' stroke-width='8'></line><line x1='158' y1='58' x2='158' y2='30' class='c-steel' stroke-width='8'></line><line x1='194' y1='58' x2='194' y2='46' class='c-steel' stroke-width='8'></line>"
  },
];
const processus = [
  {
    title: { fr: "Mouvement Brownien Standard", en: "Standard Brownian Motion" },
    path: "processes/elementary/brownian.py",
    desc: {
      fr: "La brique de base de tout le calcul stochastique dans la bibliothèque. Outil fondamental de représentation de l'aléatoire.",
      en: "Standard Brownian motion (Wiener process): the basic building block for all stochastic calculus in the library. Fundamental tool for representing randomness."
    },
    chart: "chart-sbrownian",
  },
  {
    title: {fr:"Mouvement Brownien Géométrique", en:"Geometric Brownian Motion"},
    path: "processes/diffusion/geometric_brownian_motion.py",
    desc: {
      fr: "Trajectoires toujours positives, à la base des modèles de type Black-Scholes.",
      en: "Always-positive trajectories, the basis of Black-Scholes-type models."
    },
    chart: "chart-gbrownian",
  },
  {
    title: {fr:"Mouvement Brownien Fractionaire", en:"Fractional Brownian Motion"},
    path: "processes/diffusion/fractional_brownian.py",
    desc: {
      fr: "Extension du mouvement brownien à des processus gaussien aux incréments corrélés.",
      en: "Extension of a Brownian Motion on Gaussian processes with correlated increments."
    },
    chart: "chart-fbm",
  },
  {
    title: {fr:"Processus de Bessel", en:"Bessel process"},
    path: "processes/elementary/bessel.py",
    desc: {
      fr: "Norme euclidienne d'un mouvement brownien standard d-dimensionel.",
      en: "Euclidean norm of a d-dimensional standard Brownian Motion."
    },
    chart: "chart-bessel",
  },
  {
    title: {fr:"Processus d'Ornstein-Uhlenbeck", en:"Ornstein-Uhlenbeck processes"},
    path: "processes/OrnsteinUhlenbeck.py",
    desc: {
      fr: "Retour à la moyenne, utile pour modéliser des quantités qui oscillent autour de zéro",
      en: "Mean-reverting, useful for modelling quantities that oscillate around zero."
    },
    chart:"chart-ornuhl",
  },
  {
    title: {fr: "Modèle de Vasicek", en: "Vasicek model"},
    path: "processes/diffusion/vasicek.py",
    desc: {
      fr: "Un Ornstein-Uhlenbeck étendu, appliqué aux taux d'intérêt, qui peut prendre des valeurs négatives.",
      en: "An extended Ornstein-Uhlenbeck process, applied to interest rates, which can take negative values."
    },
    chart: "chart-vasicek",
  },
  {
    title:{fr:"Processus de Poisson", en:"Poisson processes"},
    path:"processes/jump/poisson.py",
    desc:{
      fr: "Compte des événements arrivant aléatoirement dans le temps, à taux constant.",
      en: "Counts events arriving randomly over time, at a constant rate."
    },
    chart:"chart-poisson",
  },
  {
    title:{fr:"Processus de Poisson Composé", en:"Compound Poisson processes"},
    path:"processes/jump/compound_poisson.py",
    desc:{
      fr: "Modélise des sauts arrivant selon un processus de Poisson, où chaque saut a une taille aléatoire.",
      en: "Model jumps arriving with respect to a Poisson process, where each jump length is random."
    },
    chart:"chart-compoundpoisson",
  },
  {
    title: {fr: "Modèle de Cox-Ingersoll-Ross", en: "Cox-Ingersoll-Ross Model"},
    path: "processes/diffusion/cir.py",
    desc: {
      fr: "Variante du Vasicek dont la volatilité dépend du niveau, ce qui garantit des trajectoires positives.",
      en: "A Vasicek variant whose volatility depends on the level, which keeps trajectories positive."
    },
    chart: "chart-cir",

  },
  {
    title: {fr: "Modèle de Hull-White", en: "Hull-White Model"},
    path: "processes/diffusion/hull_white.py",
    desc: {
      fr: "Un modèle permettant la modélisation de taux d'intérêts, avec un plus grand contrôle que Vasicek.",
      en: "A model allowing the modelling of interest rates, with an higher flexibility than Vasicek."
    },
    chart: "chart-hullwhite",
  },
  {
    title: {fr: "Modèle de Heston", en: "Heston Model"},
    path: "processes/diffusion/heston.py",
    desc: {
      fr: "Modélisation de la volatilité d'un actif, dépendant de l'évolution de l'actif sous-jacent.",
      en: "Modelling of an asset volatility, with a dependancy from the underlying asset."
    },
    chart: "chart-heston",
  },/*
  {
    title: {fr: "Modèle de Cox-Ross-Rubinstein", en: "Cox-Ross-Rubinstein Model"},
    path: "processes/crr.py",
    desc: {
      fr: "Approximation en arbre binomial recombinant, la version discrète du mouvement brownien géométrique.",
      en: "A recombining binomial tree approximation, the discrete counterpart of geometric Brownian motion."
    },
    chart: "chart-crr",
    chartType: "lattice"
  },*/
];

const LANG_KEY = "portfolio-lang";
let currentLang = localStorage.getItem(LANG_KEY) || "fr";

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
  renderRandom();
  renderProcessus();
  renderModuleCharts();
}

function setupLangSwitch() {
  document.querySelectorAll(".lang-switch").forEach(btn => {
    btn.addEventListener("click", () => setLang(currentLang === "fr" ? "en" : "fr"));
  });
}

/* ===================================================================
   2) Génération procédurale des graphiques (PRNG à graine fixe :
   les courbes ont un aspect aléatoire mais sont stables au rechargement)
=================================================================== */
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function gaussian(rng) {
  let u = 0, v = 0;
  while (u === 0) u = rng();
  while (v === 0) v = rng();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function genBrownian(n, seed, sigma = 1) {
  const rng = mulberry32(seed);
  let x = 0;
  const out = [0];
  for (let i = 1; i < n; i++) { x += gaussian(rng) * sigma; out.push(x); }
  return out;
}

function genGBM(n, seed, mu = 0.06, sigma = 0.25, S0 = 1, dt = 0.02) {
  const rng = mulberry32(seed);
  let logS = Math.log(S0);
  const out = [S0];
  for (let i = 1; i < n; i++) {
    logS += (mu - 0.5 * sigma * sigma) * dt + sigma * Math.sqrt(dt) * gaussian(rng);
    out.push(Math.exp(logS));
  }
  return out;
}

function genBessel(n, seed, dim = 3, sigma = 1, x0 = 1, dt = 0.05) {
  const rng = mulberry32(seed);
  let x = x0;
  const out = [x];
  for (let i = 1; i < n; i++) {
    const drift = x > 1e-6 ? ((dim - 1) / (2 * x)) * dt : 0;
    x += drift + sigma * Math.sqrt(dt) * gaussian(rng);
    x = Math.abs(x); // réflexion en 0
    out.push(x);
  }
  return out;
}

function genHullWhite(n, seed, a = 1.0, theta = () => 0.03, sigma = 0.01, r0 = 0.03, dt = 0.05) {
  const rng = mulberry32(seed);
  let r = r0;
  const out = [r];
  const thetaFn = typeof theta === "function" ? theta : () => theta;
  for (let i = 1; i < n; i++) {
    const t = i * dt;
    r += (thetaFn(t) - a * r) * dt + sigma * Math.sqrt(dt) * gaussian(rng);
    out.push(r);
  }
  return out;
}

function genHeston(n, seed, mu = 0.05, kappa = 1.5, thetaV = 0.04, xi = 0.3, rho = -0.5, s0 = 1, v0 = 0.04, dt = 0.02) {
  const rng = mulberry32(seed);
  let s = s0, v = v0;
  const sOut = [s], vOut = [v];
  for (let i = 1; i < n; i++) {
    const z1 = gaussian(rng);
    const z2 = rho * z1 + Math.sqrt(1 - rho * rho) * gaussian(rng);
    const vPos = Math.max(v, 0);
    s += mu * s * dt + Math.sqrt(vPos) * s * Math.sqrt(dt) * z1;
    v += kappa * (thetaV - v) * dt + xi * Math.sqrt(vPos) * Math.sqrt(dt) * z2;
    v = Math.max(v, 0);
    sOut.push(s);
    vOut.push(v);
  }
  return { s: sOut, v: vOut };
}

function genCompoundPoisson(n, seed, lambda = 0.25, jumpMean = 0, jumpStd = 1) {
  const rng = mulberry32(seed);
  let x = 0;
  const out = [0];
  for (let i = 1; i < n; i++) {
    if (rng() < lambda) x += jumpMean + jumpStd * gaussian(rng);
    out.push(x);
  }
  return out;
}

function genMeanReverting(n, seed, theta, mu, sigma, x0, dt, floorZero) {
  const rng = mulberry32(seed);
  let x = x0;
  const out = [x];
  for (let i = 1; i < n; i++) {
    const vol = floorZero ? sigma * Math.sqrt(Math.max(x, 0)) : sigma;
    x += theta * (mu - x) * dt + vol * Math.sqrt(dt) * gaussian(rng);
    if (floorZero) x = Math.max(x, 0);
    out.push(x);
  }
  return out;
}

function genPoissonCounts(n, seed, lambda = 0.28) {
  const rng = mulberry32(seed);
  let count = 0;
  const out = [0];
  for (let i = 1; i < n; i++) { if (rng() < lambda) count++; out.push(count); }
  return out;
}

function scaleToPath(values, w, h, padY = 0.14) {
  const n = values.length;
  const min = Math.min(...values), max = Math.max(...values);
  const range = (max - min) || 1;
  const usableH = h * (1 - 2 * padY);
  const yFor = v => h * padY + usableH * (1 - (v - min) / range);
  const xFor = i => (i / (n - 1)) * w;
  let d = `M${xFor(0).toFixed(1)},${yFor(values[0]).toFixed(1)}`;
  for (let i = 1; i < n; i++) d += ` L${xFor(i).toFixed(1)},${yFor(values[i]).toFixed(1)}`;
  return { d, xFor, yFor, min, max, range };
}

function stepPath(values, w, h, padY = 0.16) {
  const n = values.length;
  const min = Math.min(...values), max = Math.max(...values);
  const range = (max - min) || 1;
  const usableH = h * (1 - 2 * padY);
  const yFor = v => h * padY + usableH * (1 - (v - min) / range);
  const xFor = i => (i / (n - 1)) * w;
  let d = `M${xFor(0).toFixed(1)},${yFor(values[0]).toFixed(1)}`;
  for (let i = 1; i < n; i++) {
    d += ` L${xFor(i).toFixed(1)},${yFor(values[i - 1]).toFixed(1)}`;
    d += ` L${xFor(i).toFixed(1)},${yFor(values[i]).toFixed(1)}`;
  }
  return d;
}

function setPath(id, d) {
  const el = document.getElementById(id);
  if (el) el.setAttribute("d", d);
}

function latticeSvg() {
  const levels = [
    [{ x: 10, y: 32 }],
    [{ x: 60, y: 10 }, { x: 60, y: 54 }],
    [{ x: 110, y: 4 }, { x: 110, y: 26 }, { x: 110, y: 58 }],
    [{ x: 160, y: 2 }, { x: 160, y: 18 }, { x: 160, y: 36 }, { x: 160, y: 60 }],
    [{ x: 210, y: 2 }, { x: 210, y: 18 }, { x: 210, y: 36 }, { x: 210, y: 60 }]
  ];

  const lines = levels.slice(0, -1).flatMap((level, levelIndex) =>
    level.flatMap((node, nodeIndex) => {
      const nextLevel = levels[levelIndex + 1];
      const nextNodes = levelIndex === 0
        ? nextLevel
        : [nextLevel[nodeIndex], nextLevel[nodeIndex + 1]].filter(Boolean);
      return nextNodes.map(next =>
        `<line x1="${node.x}" y1="${node.y}" x2="${next.x}" y2="${next.y}"></line>`
      );
    })
  ).join("");

  const circles = levels.slice(0, -1).flat().map(node =>
    `<circle cx="${node.x}" cy="${node.y}" r="3"></circle>`
  ).join("");

  return lines + circles;
}

function renderModuleCharts() {
  const W = 220, H = 64, WIDE_W = 640, WIDE_H = 160;

  setPath("chart-sbrownian", scaleToPath(genBrownian(60, 11, 1), W, H).d);
  setPath("chart-gbrownian", scaleToPath(genGBM(60, 22), W, H).d);
  setPath("chart-fbm", scaleToPath(genBrownian(30, 22), W, H).d);
  setPath("chart-bessel", scaleToPath(genBessel(60, 5), W, H).d);
  setPath("chart-ornuhl", scaleToPath(genMeanReverting(70, 33, 1.4, 0, 0.5, 1.3, 0.04, false), W, H).d);
  setPath("chart-compoundpoisson", stepPath(genCompoundPoisson(60, 12), W, H));
  setPath("chart-poisson", stepPath(genPoissonCounts(50, 44, 0.3), W, H));
  setPath("chart-vasicek", scaleToPath(genMeanReverting(70, 55, 0.9, 0.02, 0.03, -0.01, 0.05, false), W, H).d);
  setPath("chart-cir", scaleToPath(genMeanReverting(70, 66, 1.0, 0.035, 0.1, 0.02, 0.05, true), W, H).d);
  setPath("chart-heston", scaleToPath(genHullWhite(80, 10), W, H).d);
  setPath("chart-hullwhite", scaleToPath(genHullWhite(75, 110), W, H).d);


  // ProcessDisp : superposition de 3 trajectoires faibles + 1 nette
  ["chart-processdisp-1", "chart-processdisp-2", "chart-processdisp-3"].forEach((id, i) => {
    setPath(id, scaleToPath(genBrownian(50, 77 + i, 1), W, H).d);
  });
  setPath("chart-processdisp-main", scaleToPath(genBrownian(50, 80, 1), W, H).d);

  // Monte Carlo : faisceau de trajectoires + moyenne
  const mcPaths = [];
  for (let i = 0; i < 10; i++) mcPaths.push(genBrownian(80, 100 + i, 1));
  mcPaths.forEach((vals, i) => setPath(`chart-mc-${i}`, scaleToPath(vals, WIDE_W, WIDE_H).d));
  const mean = mcPaths[0].map((_, i) => mcPaths.reduce((s, p) => s + p[i], 0) / mcPaths.length);
  setPath("chart-mc-mean", scaleToPath(mean, WIDE_W, WIDE_H).d);

  // SDE : trajectoire fine (steel) vs approximation discrétisée (raspberry, moins de points)
  const fine = genBrownian(200, 200, 1);
  setPath("chart-sde-fine", scaleToPath(fine, WIDE_W, WIDE_H).d);
  const coarseIdx = [];
  for (let i = 0; i < fine.length; i += 12) coarseIdx.push(fine[i]);
  setPath("chart-sde-coarse", stepPath(coarseIdx, WIDE_W, WIDE_H));

  // Filtrage : réutilise le même duo visuel que la page d'accueil
  setPath("chart-filter-true",
    "M0,90 C40,60 60,110 100,80 S160,40 200,70 240,100 280,60 320,30 360,55 400,90 440,65 480,45 520,75 560,50");
  setPath("chart-filter-est",
    "M0,88 C40,78 60,92 100,82 S160,60 200,72 240,88 280,66 320,48 360,58 400,78 440,68 480,58 520,68 560,58");

  // Série temporelle : ligne + marqueurs
  const ts = genGBM(16, 300, 0.04, 0.3, 1, 0.15);
  const { d: tsPath, xFor, yFor } = scaleToPath(ts, WIDE_W, WIDE_H, 0.2);
  setPath("chart-ts-line", tsPath);
  const marker = document.getElementById("chart-ts-markers");
  if (marker) {
    marker.innerHTML = ts.map((v, i) =>
      `<circle cx="${xFor(i).toFixed(1)}" cy="${yFor(v).toFixed(1)}" r="2.6"></circle>`
    ).join("");
  }

  // Histogramme : distribution des valeurs terminales sur N simulations
  const hist = document.getElementById("histogram-bars");
  if (hist) {
    const terminals = [];
    for (let i = 0; i < 400; i++) {
      const path = genGBM(20, 500 + i, 0.05, 0.3);
      terminals.push(path[path.length - 1]);
    }
    const bins = 14;
    const min = Math.min(...terminals), max = Math.max(...terminals);
    const counts = new Array(bins).fill(0);
    terminals.forEach(v => {
      const idx = Math.min(bins - 1, Math.floor(((v - min) / (max - min)) * bins));
      counts[idx]++;
    });
    const maxCount = Math.max(...counts);
    hist.innerHTML = counts.map(c =>
      `<div class="bar" style="height:${Math.max(2, (c / maxCount) * 100).toFixed(0)}%"></div>`
    ).join("");
  }
}

/* ===================================================================
   3) Génération des cards des processus
=================================================================== */
function renderRandom() {
  const grid = document.getElementById("modules-grid");
  grid.innerHTML = random.map(r => `
    <article class="module-card">
          <svg class="module-chart" viewBox="0 0 220 64">${r.svg}</svg>
          <h3 class="module-name">${r.title[currentLang]}</h3>
          <p class="module-path">${r.path}</p>
          <p class="module-desc">${r.desc[currentLang]}</p>
    </article>
  `).join("");
}


function renderProcessus() {
  const grid = document.getElementById("processus-grid");
  grid.innerHTML = processus.map(p => `
    <article class="module-card">
      <svg class="${p.chartType === "lattice" ? "lattice-chart" : "module-chart"}" viewBox="0 0 220 64">
        ${p.chartType === "lattice" ? latticeSvg() : `<path id="${p.chart}" class="c-raspberry"></path>`}
      </svg>
      <h3 class="module-name">${p.title[currentLang]}</h3>
      <p class="module-path">${p.path}</p>
      <p class="module-desc">${p.desc[currentLang]}</p>
    </article>
  `).join("");
}





/* ===================================================================
   Init
=================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = currentLang;
  applyStaticTranslations();
  updateLangButtons();
  renderModuleCharts();
  renderRandom();
  renderProcessus();
  setupLangSwitch();
  renderModuleCharts();
});
