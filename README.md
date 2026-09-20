# Site d'Ambre Thery

Site statique (HTML/CSS/JS, aucun outil de build nécessaire) pour le portfolio
d'Ambre — plongée scientifique, formation, stages, travaux, contact.

## Structure

```
index.html      → structure des sections (à ne modifier que rarement)
style.css       → couleurs, mise en page
script.js       → construit les sections à partir de data.js (à ne pas toucher)
data.js         → ✅ LE SEUL FICHIER À MODIFIER AU QUOTIDIEN (textes, dates, listes)
assets/
  img/portrait.jpg        → photo affichée en haut du site
  img/plongee/             → dépose ici les photos de plongée
  img/travaux/             → (optionnel) photos de projets
  cv/CV-Ambre-Thery.pdf    → CV téléchargeable depuis le bouton du site
```

## Modifier le contenu (le plus courant)

1. Ouvre `data.js` avec un simple éditeur de texte (Bloc-notes, VS Code...).
2. Chaque bloc est commenté en français : profil, plongée, formation, stages,
   travaux, compétences.
3. Pour ajouter une ligne (ex. un nouveau stage), copie un bloc `{ ... }`
   existant dans la liste et modifie son contenu.
4. Enregistre. Pour voir le résultat avant publication, ouvre `index.html`
   directement dans un navigateur (double-clic).

### Ajouter une photo de plongée

1. Copie le fichier image dans `assets/img/plongee/`.
2. Dans `data.js`, section `plongee.gallery`, ajoute une ligne :
   ```js
   { src: "assets/img/plongee/nom-du-fichier.jpg", caption: "Légende" },
   ```

## Mettre le site en ligne (une seule fois)

Cette machine n'a pas Git ni Node installés — mais ce n'est pas nécessaire :
le site n'a aucune étape de build, et GitHub permet d'éditer/publier
directement depuis le navigateur.

1. **Créer le dépôt GitHub**
   - Va sur https://github.com/new
   - Nom du dépôt : par exemple `site-ambre`
   - Laisse-le public (nécessaire pour GitHub Pages gratuit), ne coche rien
     d'autre, clique "Create repository".

2. **Envoyer les fichiers**
   - Sur la page du dépôt vide, clique "uploading an existing file".
   - Glisse-dépose TOUT le contenu de ce dossier (en gardant la structure des
     sous-dossiers `assets/...`) puis "Commit changes".
   - (Pour les mises à jour suivantes : ouvre le fichier sur github.com,
     clique l'icône crayon "Edit", modifie, puis "Commit changes" —
     le site se met à jour automatiquement en 1-2 minutes.)

3. **Activer GitHub Pages**
   - Dans le dépôt : Settings → Pages.
   - Source : "Deploy from a branch", branche `main`, dossier `/ (root)`.
   - Save. Le site sera visible sur `https://<ton-compte>.github.io/site-ambre/`.

4. **Brancher le sous-domaine ambre.thery.io (DNS chez Gandi)**
   - Dans le dépôt GitHub : Settings → Pages → section "Custom domain" :
     entre `ambre.thery.io`, puis Save (GitHub crée un fichier `CNAME` dans
     le dépôt automatiquement — ne le supprime pas).
   - Sur https://admin.gandi.net → le domaine `thery.io` → "DNS Records"
     (ou "Enregistrements DNS") → "Add a record" :
     - Type : `CNAME`
     - Nom (Name) : `ambre`
     - Valeur (Value/Target) : `<ton-compte>.github.io.`
       (chez Gandi, le point final après `.io` est important pour un CNAME)
     - TTL : laisse la valeur par défaut (1h).
   - Enregistre. Propagation DNS : quelques minutes, parfois jusqu'à
     quelques heures.
   - Reviens dans GitHub → Settings → Pages : un message confirme que le
     domaine est vérifié, puis coche "Enforce HTTPS" une fois le certificat
     généré (automatique, gratuit, peut prendre jusqu'à 24h après la
     propagation DNS).

Coût total : **0 €** (GitHub Pages gratuit, seul le domaine `thery.io` que tu
as déjà coûte quelque chose).

## Contact

Le bouton "Me contacter" ouvre le client mail avec `ambre@thery.io`
déjà rempli (pas de serveur ni de base de données nécessaire). Si un jour
un vrai formulaire est souhaité, un service gratuit comme Formspree peut
être ajouté sans changer d'hébergement.
