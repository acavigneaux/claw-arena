import Card from "../../components/Card";
import Badge from "../../components/Badge";

const features = [
  { name: "Dashboard", description: "Vue d'ensemble avec statistiques", status: "done" as const },
  { name: "Tasks CRUD", description: "Gestion complète des tâches", status: "done" as const },
  { name: "Settings", description: "Page de configuration avec formulaires", status: "done" as const },
  { name: "API Routes", description: "Routes REST mock pour les tâches", status: "done" as const },
  { name: "Tests", description: "Tests unitaires avec Vitest", status: "done" as const },
  { name: "Dark Mode", description: "Support du thème sombre", status: "todo" as const },
];

const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Vitest",
  "React Testing Library",
];

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          About
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Claw Arena &mdash; Application de test pour OpenClaw
        </p>
      </div>

      <Card title="Objectif">
        <p className="text-gray-700 dark:text-gray-300">
          Cette application sert de banc de test pour évaluer les capacités
          d&apos;un assistant de code AI. Elle contient différentes pages,
          composants, formulaires, une API mock et des tests pour fournir un
          terrain de jeu réaliste.
        </p>
      </Card>

      <Card title="Fonctionnalités">
        <div className="space-y-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex items-center justify-between rounded-lg border border-gray-100 p-3 dark:border-gray-800"
            >
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {feature.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
              <Badge variant={feature.status === "done" ? "success" : "default"}>
                {feature.status === "done" ? "Fait" : "À faire"}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Stack technique">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="info">
              {tech}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
}
