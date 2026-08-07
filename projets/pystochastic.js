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
  "hero.pill.status": { fr: "En développement", en: "Work in progress" },

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
  "stat.modules": { fr: "modules", en: "modules" },
  "stat.processus": { fr: "processus implémentés", en: "processes implemented" },
  "stat.statut": { fr: "statut du dépôt", en: "repository status" },

  "section.modules.eyebrow": { fr: "02 — Échantillonnage", en: "02 — Sampling" },
  "section.modules.title": { fr: "Modules aléatoires", en: "Random modules" },
  "modules.intro": {
    fr: "Deux modules de base pour générer des échantillons aléatoires, utilisés en interne par les processus stochastiques et directement réutilisables ailleurs.",
    en: "Two foundational modules for generating random samples, used internally by the stochastic processes and directly reusable elsewhere."
  },
  "crandom.desc": {
    fr: "Génère des échantillons de lois à densité, des plus courantes (uniforme, normale, exponentielle) aux plus spécifiques (Weibull, Fréchet, Fisher…).",
    en: "Generates samples from continuous distributions, from common ones (uniform, normal, exponential) to more specific ones (Weibull, Fréchet, Fisher…)."
  },
  "drandom.desc": {
    fr: "Génère des échantillons de lois discrètes, pour tout ce qui relève des processus à sauts ou des variables de comptage.",
    en: "Generates samples from discrete distributions, for anything related to jump processes or counting variables."
  },

  "section.processus.eyebrow": { fr: "03 — Processus", en: "03 — Processes" },
  "section.processus.title": { fr: "Processus stochastiques", en: "Stochastic processes" },
  "processus.intro": {
    fr: "Huit processus classiques, chacun dans son propre module, avec une interface commune de simulation et de tracé (via ProcessDisp).",
    en: "Eight classic processes, each in its own module, with a shared interface for simulation and plotting (via ProcessDisp)."
  },
  "sbrownian.desc": {
    fr: "Mouvement brownien standard (processus de Wiener) : la brique de base de tout le calcul stochastique dans la bibliothèque.",
    en: "Standard Brownian motion (Wiener process): the basic building block for all stochastic calculus in the library."
  },
  "gbrownian.desc": {
    fr: "Mouvement brownien géométrique : trajectoires toujours positives, à la base des modèles de type Black-Scholes.",
    en: "Geometric Brownian motion: always-positive trajectories, the basis of Black-Scholes-type models."
  },
  "ornuhl.desc": {
    fr: "Processus d'Ornstein-Uhlenbeck : retour à la moyenne, utile pour modéliser des quantités qui oscillent autour d'un niveau d'équilibre.",
    en: "Ornstein-Uhlenbeck process: mean-reverting, useful for modelling quantities that oscillate around an equilibrium level."
  },
  "poisson.desc": {
    fr: "Processus de Poisson : compte des événements arrivant aléatoirement dans le temps, à taux constant.",
    en: "Poisson process: counts events arriving randomly over time, at a constant rate."
  },
  "vasicek.desc": {
    fr: "Modèle de Vasicek : un Ornstein-Uhlenbeck appliqué aux taux d'intérêt, qui peut prendre des valeurs négatives.",
    en: "Vasicek model: an Ornstein-Uhlenbeck process applied to interest rates, which can take negative values."
  },
  "cir.desc": {
    fr: "Modèle Cox-Ingersoll-Ross : variante du Vasicek dont la volatilité dépend du niveau, ce qui garantit des trajectoires positives.",
    en: "Cox-Ingersoll-Ross model: a Vasicek variant whose volatility depends on the level, which keeps trajectories positive."
  },
  "crr.desc": {
    fr: "Modèle Cox-Ross-Rubinstein : approximation en arbre binomial recombinant, la version discrète du mouvement brownien géométrique.",
    en: "Cox-Ross-Rubinstein model: a recombining binomial tree approximation, the discrete counterpart of geometric Brownian motion."
  },
  "processdisp.desc": {
    fr: "Module de visualisation : trace plusieurs trajectoires simulées d'un même processus pour comparer leur dispersion.",
    en: "Visualization module: plots several simulated trajectories of the same process to compare their spread."
  },

  "section.mc.eyebrow": { fr: "04 — Simulation", en: "04 — Simulation" },
  "section.mc.title": { fr: "Monte Carlo & équations différentielles stochastiques", en: "Monte Carlo & stochastic differential equations" },
  "mc.p1": {
    fr: "La simulation de Monte Carlo consiste à générer un grand nombre de trajectoires indépendantes d'un même processus pour estimer une quantité d'intérêt (prix, probabilité, espérance) par une moyenne empirique.",
    en: "Monte Carlo simulation generates a large number of independent trajectories of the same process to estimate a quantity of interest (price, probability, expectation) via an empirical average."
  },
  "mc.chart.title": { fr: "Faisceau de trajectoires simulées", en: "Bundle of simulated trajectories" },
  "mc.legend.paths": { fr: "trajectoires", en: "trajectories" },
  "mc.legend.mean": { fr: "moyenne empirique", en: "empirical mean" },

  "eds.p1": {
    fr: "Pour les processus définis par une équation différentielle stochastique sans solution explicite, PyStochastic propose deux schémas de discrétisation : Euler-Maruyama (ordre faible 1) et Milstein, qui ajoute un terme correctif pour une meilleure précision lorsque la diffusion dépend de l'état.",
    en: "For processes defined by a stochastic differential equation with no closed-form solution, PyStochastic provides two discretization schemes: Euler-Maruyama (weak order 1) and Milstein, which adds a correction term for better accuracy when diffusion depends on the state."
  },
  "eds.chart.title": { fr: "Schéma exact vs discrétisé", en: "Exact vs discretized scheme" },
  "eds.legend.exact": { fr: "trajectoire fine", en: "fine trajectory" },
  "eds.legend.approx": { fr: "approximation discrétisée", en: "discretized approximation" },

  "section.stats.eyebrow": { fr: "05 — Analyse", en: "05 — Analysis" },
  "section.stats.title": { fr: "Statistiques & séries temporelles", en: "Statistics & time series" },
  "stats.p1": {
    fr: "Au-delà de la simulation, la bibliothèque vise aussi des outils d'analyse : statistiques descriptives sur les trajectoires simulées, et manipulation de séries temporelles pour confronter modèle et données réelles.",
    en: "Beyond simulation, the library also targets analysis tools: descriptive statistics on simulated trajectories, and time series handling to compare the model against real data."
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
  "perspectives.repo": { fr: "Dépôt GitHub →", en: "GitHub repository →" }
};

const ps = {
   "sbrownian.title": { fr: "Mouvement Brownien Standard", en: "Standard Brownian Motion" },
   "sbrownian.path": { fr: "processes/brownian.py", en: "processes/brownian.py" },
}
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

function renderModuleCharts() {
  const W = 220, H = 64, WIDE_W = 640, WIDE_H = 160;

  setPath("chart-sbrownian", scaleToPath(genBrownian(60, 11, 1), W, H).d);
  setPath("chart-gbrownian", scaleToPath(genGBM(60, 22), W, H).d);
  setPath("chart-ornuhl", scaleToPath(genMeanReverting(70, 33, 1.4, 0, 0.5, 1.3, 0.04, false), W, H).d);
  setPath("chart-poisson", stepPath(genPoissonCounts(50, 44, 0.3), W, H));
  setPath("chart-vasicek", scaleToPath(genMeanReverting(70, 55, 0.9, 0.02, 0.03, -0.01, 0.05, false), W, H).d);
  setPath("chart-cir", scaleToPath(genMeanReverting(70, 66, 1.0, 0.035, 0.1, 0.02, 0.05, true), W, H).d);

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
   Init
=================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = currentLang;
  applyStaticTranslations();
  updateLangButtons();
  setupLangSwitch();
  renderModuleCharts();
});
