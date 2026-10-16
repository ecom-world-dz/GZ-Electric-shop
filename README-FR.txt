GZ-Electric/shop — SITE D'AFFILIATION (VERSION DE DÉPART)

FICHIERS
- index.html : structure de la page
- styles.css : design responsive
- app.js : catalogue de démonstration, recherche, catégories et conversion
- netlify/functions/exchange-rate.mjs : fonction Netlify de taux
- netlify.toml : configuration Netlify

IMPORTANT
1. Les 8 produits sont des exemples. Leurs liens vont vers la page d'accueil AliExpress, pas vers des fiches produits affiliées.
2. Le taux de secours 240 DZD/USD est illustratif. Modifiez-le avec un taux vérifié.
3. La structure de réponse de l'API de change doit être vérifiée. Si le JSON ne correspond pas au code, adaptez le bloc qui extrait le taux USD.
4. L'intégration à l'API AliExpress n'est pas incluse : elle nécessite l'accès API/affiliate disponible sur ton compte, ainsi que les champs exacts de réponse et les liens affiliés.
5. Le taux parallèle est indicatif et peut varier selon le lieu, le montant et la source. Le prix final, la livraison et les frais doivent être vérifiés chez le vendeur.

TEST LOCAL SIMPLE
- Ouvre index.html pour vérifier l'apparence, mais la fonction de change Netlify ne fonctionnera pas simplement en ouvrant le fichier.
- Pour tester la fonction et le site ensemble, installe Node.js et Netlify CLI, puis lance `netlify dev` dans ce dossier.
- Tu peux aussi publier le dossier sur Netlify en le déposant sur Netlify Drop, mais pour les fonctions, vérifie ensuite le déploiement et les logs Netlify.

MISE EN LIGNE
1. Va sur https://app.netlify.com/
2. Connecte-toi.
3. Crée un nouveau site en important un dépôt Git, ou utilise le déploiement manuel si disponible pour ton compte.
4. Pour un dépôt Git : pousse tous les fichiers en conservant la structure, puis connecte le dépôt dans Netlify.
5. Vérifie que le répertoire publié est `.` et que les fonctions sont dans `netlify/functions`.
6. Ouvre `https://TON-SITE.netlify.app/.netlify/functions/exchange-rate`.
7. Si `live` est `false`, consulte les logs de la fonction et adapte l'extraction JSON au schéma réel de l'API.

LANGUES
- Le sélecteur FR / عربي permet de passer du français à l'arabe et bascule la page en RTL.
- Le chemin des fichiers CSS et JavaScript est relatif pour permettre l'ouverture locale.
