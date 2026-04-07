@AGENTS.md

# Claw Arena

## Objectif

Claw Arena est une **application de test / banc d'essai** conçue pour évaluer les capacités d'assistants de code AI (OpenClaw et différents modèles). L'idée est de fournir un terrain de jeu réaliste avec suffisamment de composants, pages, formulaires, API et tests pour tester si l'AI est capable de :

- Modifier du code existant
- Ajouter des features
- Ajouter des pages
- Écrire et faire passer des tests
- Refactorer du code

## Stack technique

- **Next.js 16** (App Router, TypeScript)
- **React 19**
- **Tailwind CSS v4**
- **Vitest** + **React Testing Library** pour les tests

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx          → Layout racine avec Navbar
│   ├── page.tsx            → Dashboard (stats + tâches récentes)
│   ├── tasks/page.tsx      → CRUD complet (créer, modifier, supprimer)
│   ├── settings/page.tsx   → Formulaire (inputs, selects, toggles)
│   ├── about/page.tsx      → Page info / stack technique
│   └── api/tasks/          → API REST mock (GET, POST, PUT, DELETE)
│       ├── route.ts        → GET all, POST new
│       └── [id]/route.ts   → GET one, PUT, DELETE
├── components/             → 9 composants réutilisables
│   ├── Button.tsx          → Variants: primary, secondary, danger, ghost
│   ├── Card.tsx            → Conteneur avec titre optionnel
│   ├── Badge.tsx           → Labels colorés (success, warning, error, info)
│   ├── Input.tsx           → Input avec label et erreur
│   ├── Select.tsx          → Select avec label et options
│   ├── Toggle.tsx          → Switch on/off
│   ├── Modal.tsx           → Dialog avec overlay
│   ├── DataTable.tsx       → Tableau générique avec colonnes et rendu custom
│   └── Navbar.tsx          → Navigation avec liens actifs
├── lib/
│   ├── types.ts            → Types : Task, TaskStatus, TaskPriority, StatCard
│   └── mock-data.ts        → 6 tâches mock + 4 stats dashboard
└── __tests__/              → 14 tests unitaires (tous passent)
    ├── setup.ts
    ├── Button.test.tsx
    ├── Badge.test.tsx
    ├── Card.test.tsx
    └── mock-data.test.ts
```

## Commandes

- `npm run dev` — Serveur de dev
- `npm run build` — Build production
- `npm test` — Lancer les tests (vitest run)
- `npm run test:watch` — Tests en mode watch
- `npm run lint` — ESLint

## Conventions

- Les composants interactifs (state, events) ont `"use client"` en haut
- Les pages server components n'ont pas de directive
- Les API routes utilisent `RouteContext<>` pour typer les params dynamiques
- Les données mock sont dans `src/lib/mock-data.ts` (pas de base de données)
- Les tests sont dans `src/__tests__/` avec Vitest + jsdom

## Idées de features à demander à l'AI pour le tester

- Ajouter le dark mode complet
- Ajouter un système de notifications/toasts
- Connecter les pages au API routes (fetch au lieu de données statiques)
- Ajouter de la pagination sur la DataTable
- Ajouter des filtres/recherche sur la page Tasks
- Créer une page de détail pour une tâche (`/tasks/[id]`)
- Ajouter de l'authentification simulée
- Ajouter des graphiques sur le dashboard
- Écrire des tests supplémentaires
- Refactorer les composants
