L'utilisateur doit pouvoir se connecter uniquement avec son code personnel _(PIN)_

Il n'y a pas de base de données, vous pouvez stocker les données en mémoire _(pas de persistance)_

La connexion est obligatoire pour accéder à l'application

Si le code PIN est incorrect, l'utilisateur doit être notifié

Après 3 tentatives invalides, l'application doit se fermer

Le projet doit utiliser à minima la version 18 de NodeJS

Vous devez respecter les principes de sécurité _(pas de stockage en clair du code PIN, utilisez un algorithme de hachage comme bcrypt ou argon2 par exemple)_

Les messages d'erreur doivent être explicites, sans donner d'informations sensibles ou compromettant la sécurité de l'application






BONUS :
Intégrer des tests unitaires _(Jest ou Mocha)_
Ajouter un système de découvert _(un découvert autorisé, qui ne peut pas être dépassé)_
Ajouter un système de placement _(transfert d'argent vers un compte épargne, lié au compte principal)_
Rendre les données persistantes _(stockage dans un fichier JSON ou dans une base de données)_
Ajouter un système de notification _([ntfy](https://ntfy.sh/) est très simple à utiliser !)_
