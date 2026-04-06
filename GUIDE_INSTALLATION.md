# 📋 Guide d'Installation Complet - WebsiteSell

## Étape 1 : Configuration de Supabase

### A) Créer un projet Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Cliquez sur "Start your project"
3. Créez un compte ou connectez-vous
4. Cliquez sur "New Project"
5. Remplissez les informations :
   - **Name** : websitesell
   - **Database Password** : Choisissez un mot de passe fort
   - **Region** : Choisissez la région la plus proche
6. Cliquez sur "Create new project"
7. Attendez la création (environ 2 minutes)

### B) Récupérer les clés d'API

1. Une fois le projet créé, allez dans **Settings** > **API**
2. Notez les informations suivantes :
   - **Project URL** : `https://xxxxx.supabase.co`
   - **anon/public key** : `eyJhbG...` (longue chaîne)

### C) Créer la table des produits

1. Allez dans **SQL Editor** dans le menu de gauche
2. Cliquez sur "New query"
3. Copiez-collez le code SQL suivant :

```sql
-- Créer la table products
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Activer Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Politique pour la lecture publique (tout le monde peut voir les produits)
CREATE POLICY "Allow public read access" ON products
  FOR SELECT USING (true);

-- Politique pour l'insertion (seuls les utilisateurs authentifiés peuvent ajouter)
CREATE POLICY "Allow authenticated insert" ON products
  FOR INSERT TO authenticated
  WITH CHECK (true);

-- Politique pour la mise à jour (seuls les utilisateurs authentifiés peuvent modifier)
CREATE POLICY "Allow authenticated update" ON products
  FOR UPDATE TO authenticated
  USING (true)
  WITH CHECK (true);

-- Politique pour la suppression (seuls les utilisateurs authentifiés peuvent supprimer)
CREATE POLICY "Allow authenticated delete" ON products
  FOR DELETE TO authenticated
  USING (true);
```

4. Cliquez sur "Run" (en bas à droite)
5. Vérifiez que le message "Success. No rows returned" apparaît

### D) Créer le bucket de stockage pour les images

1. Allez dans **Storage** dans le menu de gauche
2. Cliquez sur "Create a new bucket"
3. Remplissez :
   - **Name** : `product-images`
   - **Public bucket** : ✅ Cochez cette case
4. Cliquez sur "Create bucket"
5. Retournez dans **SQL Editor** et exécutez :

```sql
-- Permettre la lecture publique des images
CREATE POLICY "Public Access" ON storage.objects FOR SELECT
  USING (bucket_id = 'product-images');

-- Permettre l'upload aux utilisateurs authentifiés
CREATE POLICY "Authenticated users can upload" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'product-images');

-- Permettre la mise à jour aux utilisateurs authentifiés
CREATE POLICY "Authenticated users can update" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'product-images')
  WITH CHECK (bucket_id = 'product-images');

-- Permettre la suppression aux utilisateurs authentifiés
CREATE POLICY "Authenticated users can delete" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'product-images');
```

## Étape 2 : Configuration de l'Application

### A) Installer Node.js

Si pas déjà installé :
1. Téléchargez Node.js depuis [nodejs.org](https://nodejs.org)
2. Installez la version LTS (recommandée)
3. Vérifiez l'installation : `node --version` et `npm --version`

### B) Installer les dépendances

```bash
# Ouvrez un terminal dans le dossier websitesell
cd Documents/websitesell

# Installez les dépendances
npm install
```

### C) Configurer les variables d'environnement

1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez les variables suivantes :

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

⚠️ **Important** : Remplacez les valeurs par celles de votre projet Supabase (étape 1B)

## Étape 3 : Lancer l'Application

```bash
# Mode développement
npm run dev
```

L'application sera accessible sur : **http://localhost:3000**

## Étape 4 : Premier Test

### A) Créer un compte administrateur

1. Ouvrez votre navigateur sur `http://localhost:3000/signup`
2. Créez un compte avec votre email et un mot de passe
3. Vous serez automatiquement connecté et redirigé vers le dashboard

### B) Ajouter un premier produit

1. Dans le dashboard, cliquez sur "Nouveau produit"
2. Remplissez le formulaire :
   - **Nom** : iPhone 14 Pro
   - **Description** : Smartphone haut de gamme avec puce A16 Bionic
   - **Prix** : 1199
   - **Image** : Uploadez une image (optionnel)
3. Cliquez sur "Créer le produit"

### C) Vérifier le catalogue public

1. Ouvrez un nouvel onglet sur `http://localhost:3000`
2. Vous devriez voir votre produit affiché sur la page d'accueil

## 🎉 Félicitations !

Votre application WebsiteSell est maintenant opérationnelle !

## Commandes Utiles

```bash
# Lancer en mode développement
npm run dev

# Créer une version de production
npm run build

# Lancer la version de production
npm start

# Vérifier les erreurs TypeScript
npm run lint
```

## 🐛 Problèmes Courants

### Erreur "Invalid API key"
- Vérifiez que les valeurs dans `.env.local` sont correctes
- Assurez-vous qu'il n'y a pas d'espaces avant/après les valeurs
- Redémarrez le serveur de développement

### Erreur "Permission denied" lors de l'ajout de produit
- Vérifiez que les politiques RLS sont bien créées
- Assurez-vous d'être connecté avec un compte

### Les images ne s'affichent pas
- Vérifiez que le bucket `product-images` est public
- Vérifiez les politiques du bucket
- Vérifiez la configuration dans `next.config.js`

## 📞 Besoin d'Aide ?

Consultez les fichiers suivants :
- `README.md` : Documentation générale
- `GUIDE_UTILISATION.md` : Guide d'utilisation
- `EXPLICATIONS_CODE.md` : Explications techniques
