# 🛍️ WebsiteSell - Application de Gestion de Produits

Application web complète de gestion de produits avec système d'administration et catalogue public.

## 🎯 Fonctionnalités

### 🔐 Authentification
- ✅ Inscription et connexion sécurisées avec Supabase Auth
- ✅ Protection des routes avec middleware Next.js
- ✅ Gestion automatique des sessions
- ✅ Déconnexion sécurisée

### 📊 Tableau de Bord Administrateur
- ✅ Interface moderne et intuitive avec navigation latérale
- ✅ Statistiques en temps réel (nombre de produits, valeur totale, prix moyen)
- ✅ Actions rapides pour une gestion efficace
- ✅ Design professionnel avec Tailwind CSS

### 🛒 Gestion Complète des Produits (CRUD)
- ✅ **Créer** : Ajout de produits avec formulaire validé
- ✅ **Lire** : Affichage en tableau avec toutes les informations
- ✅ **Modifier** : Mise à jour des données et images
- ✅ **Supprimer** : Suppression sécurisée avec confirmation

### 🖼️ Gestion d'Images
- ✅ Upload vers Supabase Storage
- ✅ Prévisualisation avant téléchargement
- ✅ Compression et optimisation automatique avec Next.js Image
- ✅ Suppression automatique des images lors de la suppression de produits

### 🌐 Site Web Public
- ✅ Page d'accueil moderne et responsive
- ✅ Catalogue de produits en grille
- ✅ Cartes produits attrayantes avec images et prix
- ✅ Navigation fluide et intuitive

### 🎨 UX/UI Moderne
- ✅ Loading states (indicateurs de chargement)
- ✅ Toast notifications (confirmations visuelles)
- ✅ Modales de confirmation
- ✅ Design 100% responsive (Mobile, Tablette, Desktop)
- ✅ Gestion d'erreurs robuste

## 🛠️ Technologies Utilisées

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Backend** : Supabase (Auth + Database + Storage)
- **Styles** : Tailwind CSS
- **UI Components** : Composants React personnalisés
- **Notifications** : react-hot-toast
- **Images** : Next.js Image Optimization

## 📁 Structure du Projet

```
websitesell/
├── app/                    # Pages et routes (App Router)
│   ├── (auth)/            # Routes d'authentification
│   │   ├── login/         # Page de connexion
│   │   └── signup/        # Page d'inscription
│   ├── (public)/          # Routes publiques
│   │   └── page.tsx       # Page d'accueil (catalogue)
│   ├── dashboard/         # Routes admin protégées
│   │   ├── page.tsx       # Dashboard principal
│   │   └── products/      # Gestion des produits
│   ├── api/               # Routes API
│   ├── layout.tsx         # Layout racine
│   └── globals.css        # Styles globaux
│
├── components/            # Composants React réutilisables
│   ├── auth/             # Formulaires d'authentification
│   ├── dashboard/        # Composants du dashboard
│   ├── products/         # Composants produits
│   ├── ui/               # Composants UI de base
│   └── Navbar.tsx        # Navigation publique
│
├── lib/                   # Utilitaires et configuration
│   ├── supabase/         # Configuration Supabase
│   │   ├── client.ts     # Client côté navigateur
│   │   ├── server.ts     # Client côté serveur
│   │   └── middleware.ts # Client pour middleware
│   ├── actions/          # Server Actions
│   │   ├── auth.actions.ts
│   │   └── products.actions.ts
│   └── utils.ts          # Fonctions utilitaires
│
├── types/                # Définitions TypeScript
│   ├── database.types.ts # Types Supabase
│   └── index.ts          # Types personnalisés
│
├── middleware.ts         # Protection des routes
├── .env.local           # Variables d'environnement (à créer)
├── package.json         # Dépendances
└── README.md           # Ce fichier
```

## 🚀 Installation Rapide

### 1. Prérequis
- Node.js 18+ installé
- Compte Supabase (gratuit sur [supabase.com](https://supabase.com))

### 2. Installation

```bash
# Installer les dépendances
npm install
```

### 3. Configuration Supabase

**Consultez `GUIDE_INSTALLATION.md` pour les instructions détaillées de configuration Supabase.**

Résumé :
1. Créer un projet Supabase
2. Créer la table `products` avec le SQL fourni
3. Créer le bucket `product-images`
4. Configurer les politiques de sécurité (RLS)

### 4. Variables d'Environnement

Créez un fichier `.env.local` :

```env
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_anon
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5. Lancer l'Application

```bash
# Mode développement
npm run dev

# L'application sera accessible sur http://localhost:3000
```

## 📚 Documentation Complète

| Document | Description |
|----------|-------------|
| **GUIDE_INSTALLATION.md** | Guide pas à pas pour configurer Supabase et l'application |
| **GUIDE_UTILISATION.md** | Manuel d'utilisation pour administrateurs et visiteurs |
| **EXPLICATIONS_CODE.md** | Explications techniques du code pour les développeurs |
| **DEPLOIEMENT.md** | Guide de déploiement en production (Vercel, Netlify, VPS) |
| **STRUCTURE_PROJET.md** | Architecture détaillée du projet |

## 🎓 Premiers Pas

### 1. Créer un compte administrateur

```
1. Ouvrez http://localhost:3000/signup
2. Créez un compte avec votre email
3. Vous serez automatiquement connecté
```

### 2. Ajouter votre premier produit

```
1. Dans le dashboard, cliquez sur "Nouveau produit"
2. Remplissez le formulaire
3. Uploadez une image (optionnel)
4. Cliquez sur "Créer le produit"
```

### 3. Voir le catalogue public

```
1. Ouvrez http://localhost:3000
2. Votre produit s'affiche sur la page d'accueil
```

## 🔒 Sécurité

- ✅ Authentification sécurisée avec Supabase
- ✅ Row Level Security (RLS) activée sur toutes les tables
- ✅ Protection des routes avec middleware Next.js
- ✅ Validation des données côté serveur
- ✅ Server Actions pour les opérations sensibles
- ✅ CSRF protection intégrée

## 📱 Responsive Design

L'application fonctionne parfaitement sur :
- 📱 **Mobile** : Menu adapté, grille 1 colonne
- 📱 **Tablette** : Grille 2 colonnes
- 💻 **Desktop** : Grille 3 colonnes, sidebar

## 🚀 Déploiement

Pour déployer en production, consultez **DEPLOIEMENT.md** qui couvre :
- Déploiement sur Vercel (recommandé)
- Déploiement sur Netlify
- Déploiement sur VPS
- Configuration DNS et SSL
- Monitoring et maintenance

## 🛡️ Base de Données

### Table `products`

| Colonne | Type | Description |
|---------|------|-------------|
| id | UUID | Identifiant unique (auto-généré) |
| name | TEXT | Nom du produit |
| description | TEXT | Description du produit |
| price | NUMERIC | Prix en euros |
| image_url | TEXT | URL de l'image (nullable) |
| created_at | TIMESTAMP | Date de création (auto) |

## 🎨 Personnalisation

### Changer les couleurs

Éditez `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    600: '#votre-couleur',  // Couleur principale
    700: '#votre-couleur-foncée',
  },
}
```

### Ajouter un champ au produit

Consultez **EXPLICATIONS_CODE.md** section "Personnalisation" pour un guide détaillé.

## 🐛 Dépannage

### Erreur de connexion Supabase
- Vérifiez vos variables d'environnement dans `.env.local`
- Assurez-vous que l'URL et la clé sont correctes

### Erreur d'upload d'image
- Vérifiez que le bucket `product-images` existe dans Supabase Storage
- Vérifiez qu'il est public
- Vérifiez les politiques de sécurité

### Page blanche après login
- Vérifiez que la table `products` est créée
- Vérifiez les politiques RLS
- Consultez la console du navigateur (F12) pour les erreurs

## 📊 Scripts Disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer la production
npm start

# Vérifier le code
npm run lint
```

## 🤝 Support

Pour toute question :
1. Consultez la documentation dans les fichiers MD
2. Vérifiez la [documentation Supabase](https://supabase.com/docs)
3. Consultez la [documentation Next.js](https://nextjs.org/docs)

## 📄 Licence

MIT License - Libre d'utilisation pour vos projets personnels et commerciaux.

## ✨ Fonctionnalités Futures (Suggestions)

- [ ] Système de catégories pour les produits
- [ ] Recherche et filtres
- [ ] Pagination pour les grandes listes
- [ ] Export des données (CSV, Excel)
- [ ] Statistiques avancées
- [ ] Multi-langues
- [ ] Mode sombre
- [ ] Système de panier (e-commerce complet)

---

**Développé avec ❤️ en utilisant Next.js 15 et Supabase**

**Date de création** : Avril 2026  
**Version** : 1.0.0
