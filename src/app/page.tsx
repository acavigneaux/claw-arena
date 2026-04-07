import Card from "../components/Card";
import Badge from "../components/Badge";
import { dashboardStats, initialTasks } from "../lib/mock-data";

export default function DashboardPage() {
  const recentTasks = initialTasks.slice(0, 3);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Vue d&apos;ensemble de votre projet
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat) => (
          <Card key={stat.label}>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </span>
              {stat.change !== undefined && stat.change !== 0 && (
                <span
                  className={`text-sm font-medium ${
                    stat.change > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.change > 0 ? "+" : ""}
                  {stat.change}
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Tasks */}
      <Card title="Tâches récentes">
        <div className="space-y-3">
          {recentTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-lg border border-gray-100 p-3 dark:border-gray-800"
            >
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {task.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {task.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    task.status === "done"
                      ? "success"
                      : task.status === "in_progress"
                        ? "warning"
                        : "default"
                  }
                >
                  {task.status === "done"
                    ? "Terminé"
                    : task.status === "in_progress"
                      ? "En cours"
                      : "À faire"}
                </Badge>
                <Badge
                  variant={
                    task.priority === "high"
                      ? "error"
                      : task.priority === "medium"
                        ? "warning"
                        : "info"
                  }
                >
                  {task.priority}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
