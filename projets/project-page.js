/* =====================================================================
   project-page.js
   Version allégée, indépendante de script.js : gère seulement le lien
   actif du menu au scroll et les animations d'apparition, pour les
   pages projet individuelles (pas de contenu FR/EN ni de cartes ici).
===================================================================== */

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
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  // Signale que le JS a bien pu s'exécuter : voir la règle
  // "body.js-ready .reveal" dans project-page.css. Sans ce marqueur,
  // le contenu reste visible par défaut (voir cette même règle).
  document.body.classList.add("js-ready");
  setupScrollObservers();
});
