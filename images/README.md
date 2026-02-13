# 📁 Dossier IMAGES - Organisation

Ce dossier contient toutes les images locales du site YDS Services.

## 📂 Structure recommandée :

```
images/
├── favicon/
│   ├── favicon.ico          # Icône navigateur (16x16, 32x32, 48x48)
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png # Icône iOS (180x180)
│   ├── android-chrome-192x192.png
│   └── android-chrome-512x512.png
│
├── logo/
│   ├── logo-yds.png         # Logo principal
│   ├── logo-yds-white.png   # Logo blanc (sur fond sombre)
│   └── logo-yds.svg         # Version vectorielle
│
├── services/
│   ├── nettoyage-bureaux.jpg
│   ├── remise-etat-chantier.jpg
│   ├── maintenance.jpg
│   └── immobilier.jpg
│
├── realisations/
│   ├── projet-1.jpg
│   ├── projet-2.jpg
│   └── projet-3.jpg
│
├── guides/
│   ├── guide-bureaux-productifs.jpg
│   ├── guide-nettoyage-chantier.jpg
│   └── guide-maintenance.jpg
│
├── hero/
│   ├── slide-1.jpg
│   ├── slide-2.jpg
│   └── slide-3.jpg
│
└── team/
    └── (photos d'équipe si besoin)
```

## 🎯 Bonnes pratiques :

### 1. **Nommage des fichiers**
- ✅ Utilisez des tirets : `nettoyage-bureaux.jpg`
- ❌ Évitez les espaces : `nettoyage bureaux.jpg`
- ❌ Évitez les accents : `nettoyage-bâtiment.jpg`
- ✅ Soyez descriptifs : `guide-5-astuces-bureaux-productifs.jpg`

### 2. **Formats recommandés**
- **Photos** : `.jpg` ou `.webp` (meilleure compression)
- **Logos/Icônes** : `.svg` (vectoriel, redimensionnable) ou `.png` (avec transparence)
- **Favicon** : `.ico` + `.png`

### 3. **Optimisation des images**
- **Poids max recommandé** :
  - Hero slides : 200-300 Ko max
  - Images services : 100-150 Ko max
  - Logo : 20-50 Ko max
  - Favicon : < 10 Ko

- **Outils d'optimisation** :
  - [TinyPNG](https://tinypng.com/) - Compression PNG/JPG
  - [Squoosh](https://squoosh.app/) - Compression avancée
  - [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimisation SVG

### 4. **Dimensions recommandées**
- **Hero slides** : 1920x1080px (16:9)
- **Images services** : 800x600px
- **Logo header** : Hauteur 100-120px
- **Images guides** : 800x500px
- **Favicon** : Voir section dédiée ci-dessous

## 🎨 FAVICON - Tailles nécessaires :

| Fichier | Taille | Usage |
|---------|--------|-------|
| `favicon.ico` | 16x16, 32x32, 48x48 | Navigateurs desktop |
| `favicon-16x16.png` | 16x16 | Petite icône |
| `favicon-32x32.png` | 32x32 | Icône standard |
| `apple-touch-icon.png` | 180x180 | iPhone/iPad |
| `android-chrome-192x192.png` | 192x192 | Android |
| `android-chrome-512x512.png` | 512x512 | Android haute résolution |

## 🔄 Migration depuis Unsplash

Actuellement, votre site utilise des images Unsplash (hébergées en ligne).
Pour de meilleures performances, vous pouvez :

1. Télécharger les images Unsplash que vous utilisez
2. Les optimiser (réduire le poids)
3. Les placer dans ce dossier
4. Mettre à jour les URLs dans script.js et index.html

### Exemple de modification dans script.js :
```javascript
// AVANT (Unsplash)
image: 'https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?q=80&w=800'

// APRÈS (Local)
image: 'images/services/nettoyage-bureaux.jpg'
```

## ⚡ Performances

Avantages d'héberger les images localement :
- ✅ Contrôle total sur la qualité/compression
- ✅ Pas de dépendance externe (Unsplash peut être lent)
- ✅ Meilleur pour le SEO (images sur votre domaine)
- ✅ Fonctionne hors ligne
- ❌ Inconvénient : Vous devez gérer l'espace disque

---

**Note :** Ce dossier est vide pour l'instant. Ajoutez vos images au fur et à mesure en respectant cette organisation.
