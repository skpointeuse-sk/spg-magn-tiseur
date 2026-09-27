# Site Sandrine Pazec Gouget — remake Vercel

Site statique (HTML/CSS/JS pur, aucun framework), prêt à déployer sur Vercel sans configuration.

## Déployer

1. Crée un nouveau repo GitHub, pousse tout ce dossier dedans.
2. Sur Vercel : "Add New Project" → importe le repo → Deploy (aucune configuration nécessaire, c'est un site statique).
3. Une fois en ligne, va dans Vercel → Settings → Domains → ajoute `spg-magnetiseur.com`.
4. Chez Shopify Domains, repointe les DNS du domaine vers Vercel (Vercel t'indique les enregistrements A / CNAME exacts à la connexion du domaine).
5. Dans Google Search Console, resoumets `https://spg-magnetiseur.com/sitemap.xml`.

## Ce qui est déjà fait

- Toutes les pages du site actuel recréées avec le contenu réel (textes, photos, tarifs).
- Design repris (violet/vert, mise en page similaire).
- Le bouton "Prendre RDV" pointe vers Cal.com comme sur le site actuel.
- `vercel.json` redirige automatiquement (301) toutes les anciennes URLs Shopify vers les nouvelles, pour ne pas perdre le référencement.
- Sitemap et robots.txt inclus.
- **Formulaire de contact** connecté à Formspree (`xvkgvwel`) — les messages arrivent directement par email, sans backend à gérer.
- **Article de blog "Les chakras..."** intégré en entier, mis en forme.
- **Bande d'avis** : les 40 vrais avis (38 Google + 2 Pages Jaunes) sont affichés en défilement automatique sur la page Avis.

## À savoir sur les avis

Le défilement des avis est pour l'instant une liste figée dans le code (mise à jour manuelle : renvoie-moi les nouveaux avis et je les ajoute en 2 minutes).

Une vraie mise à jour automatique (dès qu'un nouvel avis Google tombe) demande une clé API Google Places côté Sandrine (compte Google Cloud + facturation activée, gratuit jusqu'à un certain volume) branchée à une fonction serveur sur Vercel. C'est faisable si vous voulez — dites-moi et je le mets en place, mais ça ne remonte que les 5 avis les plus récents (limite imposée par Google), pas les 40.

## Étapes finales pour toi

1. Crée le repo GitHub et pousse ce dossier.
2. Importe le repo dans Vercel → Deploy (zéro config, c'est du HTML/CSS statique).
3. Vercel → Settings → Domains → ajoute `spg-magnetiseur.com`, puis repointe les DNS chez Shopify Domains vers les valeurs que Vercel te donne.
4. Resoumets `https://spg-magnetiseur.com/sitemap.xml` dans Google Search Console une fois le domaine basculé.
5. Dans Vercel → ton projet → onglet **Analytics** et onglet **Speed Insights** : clique sur "Enable" pour chacun (gratuit jusqu'à un certain volume de visites). Les scripts sont déjà dans le code, il ne manque que ce clic pour que les stats commencent à remonter.

C'est tout — plus rien côté code à faire avant ça.
