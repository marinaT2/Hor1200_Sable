# HOR SABLE - Site Web Professionnel

## 📋 Description
Site web moderne et professionnel pour le projet **HOR1200 - Horizon : Risques et Défis du XXIe Siècle**, mettant en lumière l'impact invisible du sable sur nos ressources hydriques.

**Thème:** Sand & Water avec palette de couleurs rose doux, rose gold et textures aquatiques épurées.

---

## 🎨 Caractéristiques de Conception

### Palette de Couleurs
- **Rose Principal:** `#E8B4C8`
- **Rose Doré:** `#B8860B` et `#D4AF6F`
- **Bleu Eau:** `#E8F4F8`
- **Texte:** `#2C2C2C` (gris foncé)

### Design Épuré
- Fond blanc minimaliste
- Typographie haut de gamme
- Vibe féminin et professionnel
- Responsive design pour tous les appareils

---

## 📁 Structure des Fichiers

```
HOR_SABLE/
├── index.html      # Structure HTML complète
├── styles.css      # Feuille de styles avec thème Sand & Water
├── scripts.js      # Fonctionnalités interactives
└── README.md       # Ce fichier
```

---

## 🚀 Comment Utiliser

### 1. Ouvrir le Site
Ouvrez `index.html` dans votre navigateur favori.

### 2. Ajouter le Fichier Podcast
Actuellement, l'audio player est un placeholder. Pour ajouter votre vidéo/podcast :

**Option A - Fichier Local:**
```html
<!-- Dans index.html, remplacez cette ligne: -->
<audio id="audioFile" src=""></audio>

<!-- Par: -->
<audio id="audioFile" src="chemin/vers/votre/fichier.mp3"></audio>
```

**Option B - URL Distante:**
```html
<audio id="audioFile" src="https://exemple.com/podcast.mp3"></audio>
```

### 3. Personnaliser les Photos d'Équipe
Les initiales (MT, AD, YJ, MO) peuvent être remplacées par des images :

```html
<!-- Remplacez ceci: -->
<div class="member-circle">MT</div>

<!-- Par ceci: -->
<div class="member-circle" style="background-image: url('chemin/vers/photo.jpg'); background-size: cover;"></div>
```

---

## 🎯 Sections du Site

### Barre Supérieure (Sticky)
Titre du cours qui reste visible en scrollant.

### Section Équipe
4 cercles stylisés pour présenter l'équipe all-girls.

### Héro
Grand titre centré: "Le Sable : L'Impact Invisible sur Nos Eaux"

### Podcast 🎙️
Titre: "La Fièvre du Sable"
- Lecteur audio interactif
- Bouton play/pause personnalisé
- Barre de progression clickable
- Compte à rebours temporal

### Ressource Hydrique
Section dédiée à la turbidité et aux écosystèmes aquatiques avec texture eau.

### Cartes de Connaissance
4 cartes interactives:
- **I. Formation** - Érosion et renouvellement millénaire
- **II. Exploitation** - Demande mondiale et méthodes de dragage
- **III. Conséquences** - Érosion côtière et impacts sur la faune
- **IV. Alternatives** - Recyclage et nouvelles réglementations

### Pied de Page
Signature élégante: "Travail présenté à Laurie St-Fleur"

---

## ⚙️ Fonctionnalités Interactives

✅ Lecteur audio avec contrôles personnalisés
✅ Barre de progression interactive
✅ Animation au survol des éléments
✅ Intersection Observer pour animations fluides
✅ Design responsive (mobile, tablette, desktop)
✅ Scroll lisse entre sections

---

## 📱 Responsive Design

Le site s'adapte automatiquement à:
- **Desktop:** 1200px+ (layout complet)
- **Tablette:** 768px - 1199px (2 colonnes pour l'équipe)
- **Mobile:** < 480px (1 colonne, optimisé pour tactile)

---

## 🎨 Personnalisation Avancée

### Modifier les Couleurs
Éditez les variables CSS dans `styles.css`:
```css
:root {
    --primary-pink: #E8B4C8;
    --rose-gold: #B8860B;
    /* ... etc */
}
```

### Modifier les Textes
Tous les textes sont en français et peuvent être facilement modifiés dans `index.html`.

### Ajouter des Sections
Dupliquez des sections existantes et personnalisez-les selon vos besoins.

---

## ✨ Recommandations

1. **Images d'équipe:** Utilisez des photos professionelles et cohérentes
2. **Audio du podcast:** Format recommandé: MP3 pour une meilleure compatibilité
3. **Contenu:** Vérifiez l'orthographe en français
4. **Performance:** Compressez les images pour des temps de chargement rapides

---

## 🔗 Ressources

- Téléchargez des images d'eau libres de droits: [Pexels](https://pexels.com)
- Outils de compression d'images: [TinyPNG](https://tinypng.com)
- Validateur HTML: [W3C Validator](https://validator.w3.org)

---

**Créé avec ❤️ pour HOR1200**
*"Horizon : Risques et Défis du XXIe Siècle"*
