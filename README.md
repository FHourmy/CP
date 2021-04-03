# Résumé de l'application
L'application contient 2 pages ("/" et "/welcome").
- "/" contient un logo (logo identiques pour les partenaires P1 et P3, logo P2 pour le partenaire P2) et un formulaire nom/prenom/submit qui redirige vers "/welcome".
- "/welcome" est accesible via le formulaire (sinon redirection vers "/") qui affiche le même Logo que "/" et un texte  ("Bonjour prenom NOM" pour P1 et P2 et "Bonsoir prenom NOM" pour P3)

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
// dossier build par défaut, si utilisation des commandes build:P1, buildP2... lancer le dossier adéquat (buildP1, buildP2, ...) 
serve -s build
```

# Partie 1 : Résolution de la problématique
## Solution défini
Pour rendre paramétrable l'application à chaque partenaire et fournir un build propre à chacun nous utilisons ici plusieurs méchanismes :
1) Mise en place d'un dossier ressource pour chaque partenaire contenant les différences potentielles (dictionnaire et logo dans notre cas). Un dossier "défaut" est mis en place dans un soucis de scalabilité pour ne pas avoir a répéter des valeurs identiques à la majorité des partenaires. (difficulté d'implémentation pour les images, voir point Difficulté d'implémentation)
2) Injection du nom du partenaire spécifique au build par une variable d'environnement **ATTENTION les scripts implémentés ne fonctionne que sous windows**
3) Récupération des ressources (dictionnaire, logo) propres du partenaire au runtime (les assets des autres partenaire devraient être supprimés dans un soucis de confidentialité lors du build, mais non implémenté) grâce au nom injecté au build
4) Utiliser les ressources récupérées à l'endroit voulu

## Commentaire sur la problématique et son traitement
Le sujet étant accès front-end, la réponse données est entièrement gérée en front-end. Cependant la gestion des ressources ici faite côté client (différents répertoires public / resources pour les partenaires) devrait être selon moi déportée dans le backend et récupérée grâce à une clé client (ceci permet d'alléger la taille du build front end, d'éviter certains problèmes d'implémentations et de plus simplement gérer une éventuelle problématique de confidentialité des ressources de chaque partenaire). Exemple simplifié :
Le front envoie une requete get Ressources(P1) au back => back retourne dictionnaire et logo adapté.

## Difficulté d'implémentation
L'import d'images locales (logo) (stockées dans le front) dynamique n'est pas pratique en React (car webpack ne peut mapper correctement les images au code que au build, et pour cela a besoin d'avoir un import avec un chemin en "dur". Les imports dynamiques ne permettent pas le bon déroulement de ce process). 

Du à cela au lieu d'avoir des dossiers src/ressources/(default - P1 - P2 - P3) contenant chacun dictionaire et logo quand nécéssaire, les logos ont été mis dans le dossier /public/nomdupartenaire et chaque partenaire doit obligatoirement avoir un logo dans son dossier (donc P1 et P3 bien qu'utilisant le même logo utilise 2 ressources différentes copiées collées)

Une autre solution, plus élégante mais pouvant entrainer des problèmes de latence de chargement, aurait put être d'héberger les images ailleurs et de ne conserver que leurs urls dans le dossier ressources.

# Partie 3 : CD
Pour faciliter le déploiement continue, en partant du principe que l'on désire un build propre à chaque partenaire, on a injecté le nom du partenaire au moment du build (voir partie 1 étape 2). Des scripts ont été mis en place pour générer ces builds (npm run build:P1, npm run build P2, ...). Pour améliorer encore le process, un script devrait générer les builds de tous les partenaires en fonction d'une liste de partenaire données (non implémenté) plutot que d'avoir un script par partenaire.


# Screenshots

## Dev (combobox pour choisir le partenaire)
![image](https://user-images.githubusercontent.com/34136072/113478090-e39a4980-9486-11eb-977d-c2ac689dd66c.png)

## Prod P1
![image](https://user-images.githubusercontent.com/34136072/113478048-a5048f00-9486-11eb-8263-3828855e6af5.png)

## Prod P2
![image](https://user-images.githubusercontent.com/34136072/113478066-ba79b900-9486-11eb-91dc-dce2c5fd4dd9.png)

## Prod P3
![image](https://user-images.githubusercontent.com/34136072/113478076-c8c7d500-9486-11eb-8018-3f13e5ac7163.png)



