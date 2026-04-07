import { Task, StatCard } from "./types";

export const initialTasks: Task[] = [
  {
    id: "1",
    title: "Configurer l'authentification",
    description: "Mettre en place NextAuth avec GitHub provider",
    status: "done",
    priority: "high",
    createdAt: "2026-04-01T10:00:00Z",
  },
  {
    id: "2",
    title: "Créer le dashboard",
    description: "Page d'accueil avec les statistiques principales",
    status: "in_progress",
    priority: "high",
    createdAt: "2026-04-02T14:30:00Z",
  },
  {
    id: "3",
    title: "Ajouter les notifications",
    description: "Système de toast notifications pour les actions utilisateur",
    status: "todo",
    priority: "medium",
    createdAt: "2026-04-03T09:15:00Z",
  },
  {
    id: "4",
    title: "Écrire les tests E2E",
    description: "Tests end-to-end avec Playwright pour les flux critiques",
    status: "todo",
    priority: "low",
    createdAt: "2026-04-04T16:45:00Z",
  },
  {
    id: "5",
    title: "Optimiser les performances",
    description: "Lazy loading des images et code splitting",
    status: "todo",
    priority: "medium",
    createdAt: "2026-04-05T11:00:00Z",
  },
  {
    id: "6",
    title: "Documenter l'API",
    description: "Swagger/OpenAPI pour les routes backend",
    status: "in_progress",
    priority: "low",
    createdAt: "2026-04-06T08:20:00Z",
  },
];

export const dashboardStats: StatCard[] = [
  { label: "Total tâches", value: 6, change: 2 },
  { label: "En cours", value: 2, change: -1 },
  { label: "Terminées", value: 1, change: 1 },
  { label: "À faire", value: 3, change: 0 },
];
