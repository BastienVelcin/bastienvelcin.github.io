# Portfolio universitaire

Site statique (HTML/CSS/JS pur, aucune dépendance à installer) prêt à être publié sur **GitHub Pages**.

## Structure

```
.
├── index.html          → structure de la page (hero, sections)
├── style.css           → tous les styles (couleurs, typographie, mise en page)
├── script.js           → contenu des projets/mémoires (à éditer) + interactions
├── assets/
│   ├── cv/CV.pdf        → votre CV (à ajouter, voir PLACEHOLDER.txt)
│   ├── memoires/         → PDF de vos mémoires et slides de soutenance
│   └── projets/          → images ou fichiers liés aux projets (optionnel)
└── .nojekyll            → désactive le traitement Jekyll de GitHub Pages
```

## Personnaliser le contenu

1. **Nom et intitulés** : dans `index.html`, remplacez `Prénom Nom`, l'email et les liens
   GitHub/LinkedIn (section `<aside class="sidebar">`, `<div class="topbar">` et section `#contact`).
2. **Projets et mémoires** : tout se modifie dans `script.js`, en haut du fichier,
   dans les tableaux `projets` et `memoires` — pas besoin de toucher au HTML.
3. **CV** : déposez votre `CV.pdf` dans `assets/cv/`.
4. **Couleurs** : les variables sont regroupées en haut de `style.css` (`:root { ... }`)
   si vous voulez changer la teinte d'accent (`--raspberry`, `--steel`).

## Publier sur GitHub Pages

1. Créez un nouveau dépôt sur GitHub (par exemple `mon-portfolio`).
2. Placez tous ces fichiers à la racine du dépôt (pas dans un sous-dossier), puis :
   ```bash
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/votre-pseudo/mon-portfolio.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment → Source : Deploy from a branch**,
   choisissez la branche `main` et le dossier `/ (root)`, puis **Save**.
4. Après une minute environ, votre site sera visible à :
   `https://votre-pseudo.github.io/mon-portfolio/`

## Notes

- Aucune étape de build n'est nécessaire : ce sont des fichiers statiques, GitHub Pages les sert tels quels.
- Le menu à droite est fixe (`position: fixed`) et reste visible pendant le défilement ;
  sous 900px de large, il se transforme automatiquement en menu déroulant en haut de page.
- Le lien actif du menu se met à jour automatiquement selon la section visible à l'écran.
