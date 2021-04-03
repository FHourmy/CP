# Résumé de l'application
L'application contient 2 pages ("/" et "/welcome")
"/" contient un logo (logo identiques pour les partenaires P1 et P3, logo P2 pour le partenaire P2) et un formulaire nom/prenom/submit qui redirige vers "/welcome".
"/welcome" est accesible via le formulaire (sinon redirection vers "/") qui affiche le même Logo que "/" et un texte  ("Bonjour prenom NOM" pour P1 et P2 et "Bonsoir prenom NOM" pour P3)

#Installation et execution
cloner le projet et lancer la commande :
```
npm install
```
## Développement
pour lancer le projet 
```
npm run start
```
En développement vous aurez accès a une combobox permettant de choisir le partenaire

## Production
pour build le projet 
```
// par défaut partenaire P1
npm run build
// ou pour un partenaire particulier build:partenaire, exemple :
npm run build:P2
```
vous pourrez ensuite exécuter l'application avec la commande
```
// dossier build par défaut, si utilisation des commandes build:P1, buildP2... lancer le dossier adéquat (buildPA, buildP2, ...) 
serve -s build
```

# Partie 1 : Résolution de la problématique
## Solution défini
Pour rendre paramétrable l'application a chaque partenaire et fournir un build propre à chacun nous utilisons ici plusieurs méchanisme :
1) Mis en place d'un dossier ressource pour chaque partenaire contenant les différences potentielles (dictionnaire, logo dans notre cas). Un dossier "défaut" est mis en place dans un soucis de scalabilité pour ne pas avoir a répéter des valeurs identiques à la majorité des partenaires. (difficulté d'implémentation pour les images, voir point Difficulté d'implémentation)
2) Injection du nom du partenaire spécifique au build par une variable d'environnement
3) Récupération des ressources (dictionnaire, logo) propres du partenaire au runtime (les assets des autres partenaire devraient être supprimés dans un soucis de confidentialité lors du build, mais non implémenté) grâce au nom injecté au build
4) Utiliser les ressources récupérées à l'endroit voulu

## Commentaire sur la problématique et son traitement
Le sujet étant accès front-end, la réponse données est entièrement géré en front-end. Cependant la gestion des ressources ici fait côté client (différents répertoires public / resources pour les partenaires) devrait être déporté dans le backend et récupéré grâce à une clé client. Exemple simplifié :
front envoie une requete get Ressources(P1) au back => back retourne dictionnaire et logo adapté.

## Difficulté d'implémentation
L'import d'image locale (logo) (stockées dans le front) dynamique n'est pas pratique en React. (raison de plus pour déporter à un back). Du à cela au lieu d'avoir des dossier src/ressources/(default - P1 - P2 - P3) contenant chacun dictionaire et logo quand nécéssaire, les logos ont été mis dans le dossier /public/nomdupartenaire et chaque partenaire doit obligatoirement avoir un logo (donc P1 et P3 bien qu'utilisant le même logo utilise 2 ressources différentes copiées collées)

# Partie 3 : CD
Pour faciliter le déploiement continue, en partant du principe que l'on désire un build propre à chaque partenaire, on a injecté le nom du partenaire au moment du build (voir partie 1 étape 2). Des scripts ont été mis en place pour générer ces builds (npm run build:P1, npm run build P2, ...). Pour améliorer encore le process, un script devrait générer les builds de tous les partenaires en fonction d'une liste de partenaire données (non implémenté) plutot que d'avoir un script par partenaire.

