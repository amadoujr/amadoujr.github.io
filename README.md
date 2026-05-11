# amadoujr.github.io — Portfolio

Site portfolio personnel d'**Amadou Barro** (AI & Data Engineer).

Construit avec [Astro](https://astro.build) + Tailwind CSS v4. Déployé sur GitHub Pages via GitHub Actions.

## Stack

- **Framework** : Astro 6 (output statique)
- **Styling** : Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Contenu** : MDX (content collections)
- **Code highlighting** : Shiki (`github-dark-dimmed`)
- **Sitemap** : `@astrojs/sitemap`

## Développement local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build statique dans ./dist
npm run preview  # preview du build
```

## Structure

```
src/
├── content/projects/       # Fiches projet (MDX)
├── content.config.ts       # Schéma de la collection
├── layouts/Layout.astro    # Layout de base
├── components/             # Nav, Footer, ProjectCard, TechBadge
├── pages/
│   ├── index.astro         # Accueil
│   ├── projets/
│   │   ├── index.astro     # Grille filtrable
│   │   └── [...slug].astro # Page détail d'un projet
│   ├── about.astro
│   └── cv.astro
└── styles/global.css       # Thème dark + tokens
public/
├── Amadou_Barro_CV.pdf
└── favicon.svg
```

## Ajouter un projet

Créer un nouveau fichier `.mdx` dans `src/content/projects/` avec le frontmatter requis (voir `content.config.ts` pour le schéma).

## Déploiement

Push sur `main` → GitHub Actions build + deploy sur GitHub Pages.

Settings GitHub à activer :
- Repository → Settings → Pages → Source : **GitHub Actions**
