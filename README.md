# 📝 Projet Web Dynamique - Gestion de Publications

## 📚 Description

Ce projet est une application web complète permettant aux utilisateurs de s'inscrire, se connecter et créer des publications (posts). Il s'agit de la suite d'une série de travaux pratiques, enrichie par l'ajout de nouvelles fonctionnalités :

- Authentification et inscription des utilisateurs.
- Affichage d'une **home page** personnalisée avec le `userName` après connexion.
- Création, modification et suppression de posts.
- Système de droits basé sur la propriété des posts (édition/suppression uniquement par le propriétaire).

## 🧰 Technologies Utilisées

### Front-end
- React.js
- Librairies tierces autorisées selon les besoins (ex. éditeurs de texte, gestion d'état, etc.)

### Back-end
- PHP
- MySQL

## 📌 Fonctionnalités

- 🔐 **Inscription / Connexion** : Accès sécurisé avec redirection vers la home page.
- ✍️ **Création de publication** : Interface d'édition avec sélection de catégorie (art, science, etc.).
- 🔧 **Modification / Suppression** : Autorisées uniquement pour le propriétaire du post.
- 👀 **Lecture seule** : Pour les utilisateurs non propriétaires.
- 🗃️ **Mise à jour dynamique de la base de données** après chaque opération via PHP.
