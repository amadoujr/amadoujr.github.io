# Portfolio — Amadou Barro

Portfolio personnel basé sur Jekyll + Minimal Mistakes, hébergé sur GitHub Pages.

## 🚀 Mise en ligne (5 étapes)

### 1. Créer le repo GitHub
- Crée un nouveau repo nommé exactement : `amadoujr.github.io`
- Clone-le en local

### 2. Copier ces fichiers
Copie tous les fichiers de ce dossier dans le repo cloné.

### 3. Ajouter ta photo
Place ta photo dans `assets/images/avatar.jpg`

### 4. Mettre à jour les liens
Dans `_config.yml`, mets à jour :
- L'URL LinkedIn (ligne `url: "https://linkedin.com/in/..."`)

### 5. Push et activer GitHub Pages
```bash
git add .
git commit -m "init portfolio"
git push origin main
```
Ensuite dans les Settings du repo → Pages → Source : `main` / `root`

Ton site sera en ligne à : **https://amadoujr.github.io** ✅

## 📁 Structure

```
├── _config.yml          # Config principale (nom, bio, liens)
├── _pages/
│   ├── index.md         # Page d'accueil
│   ├── projets.md       # Page projets
│   └── cv.md            # Page CV
├── assets/
│   ├── images/
│   │   └── avatar.jpg   # Ta photo (à ajouter)
│   └── amadou_barro_cv.pdf  # Ton CV PDF (à ajouter)
└── Gemfile
```

## ✏️ Modifier le contenu

Tout est en Markdown — pas besoin de toucher au HTML.
- Modifier la bio → `_config.yml`
- Ajouter un projet → `_pages/projets.md`
- Mettre à jour le CV → `_pages/cv.md`
