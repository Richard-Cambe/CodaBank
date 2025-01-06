## Fonctionnalités attendues

### Connexion

- L'utilisateur doit pouvoir se connecter uniquement avec son code personnel _(PIN)_
- Il n'y a pas de base de données, vous pouvez stocker les données en mémoire _(pas de persistance)_
- La connexion est obligatoire pour accéder à l'application
- Si le code PIN est incorrect, l'utilisateur doit être notifié
- Après 3 tentatives invalides, l'application doit se fermer

### Liste des choix possibles
- Il faudra cependant compléter les fonctions pour qu'ils fassent ce qui est attendu !
- 
## Contraintes
### Technologies
- Vous devez utiliser Typescript _(interdiction d'utiliser un fichier Javascript)_
- L'utilisation du type `any` est interdite
- Le projet doit utiliser à minima la version 18 de NodeJS

### Versionning
- Les répertoires `dist` et `node_modules` _(par exemple)_ ne doivent pas être versionnés

### Conventions
- Vous devez respecter les conventions de nommage que vous avez vous-même définies


### Sécurité
- Vous devez respecter les principes de sécurité _(pas de stockage en clair du code PIN, utilisez un algorithme de hachage comme bcrypt ou argon2 par exemple)_

### Architecture
- Le découpage et la lisibilité du code sont importants
- Chaque fonctionnalité doit être dans un fichier différent
- L'architecture du projet doit être modulaire

### Choix utilisateur
- Le format des choix utilisateurs via la bibliothèque `prompts` doit être respecté :
  - Chaque choix doit être un objet avec une propriété `title`, une propriété `value` et une méthode `action` qui sera appelée si l'utilisateur choisit ce choix
  - Exemple :
    ```typescript
    {
      title: 'Déposer de l\'argent',
      value: 'deposit',
      action: () => {
        console.log("Déposer de l'argent");
      },
    }
    ```
- Attention, on ne peut pas lancer un CLI dans un autre CLI _(pas de `prompt` dans une fonction qui est déjà appelée par un `prompt`)_

### Autres
- L’utilisation d’une IA pour générer ou rédiger le code est interdite, mais elle peut être utilisée pour clarifier des concepts
- Les messages d'erreur doivent être explicites, sans donner d'informations sensibles ou compromettant la sécurité de l'application


## Bonus
- Intégrer des tests unitaires _(Jest ou Mocha)_
- Ajouter un système de découvert _(un découvert autorisé, qui ne peut pas être dépassé)_
- Ajouter un système de placement _(transfert d'argent vers un compte épargne, lié au compte principal)_
- Rendre les données persistantes _(stockage dans un fichier JSON ou dans une base de données)_
- Ajouter un système de notification _([ntfy](https://ntfy.sh/) est très simple à utiliser !)_

