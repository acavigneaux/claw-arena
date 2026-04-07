"use client";

import { useState } from "react";
import { Task, TaskStatus, TaskPriority } from "../../lib/types";
import { initialTasks } from "../../lib/mock-data";
import Button from "../../components/Button";
import Badge from "../../components/Badge";
import DataTable from "../../components/DataTable";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Select from "../../components/Select";

const statusOptions = [
  { value: "todo", label: "À faire" },
  { value: "in_progress", label: "En cours" },
  { value: "done", label: "Terminé" },
];

const priorityOptions = [
  { value: "low", label: "Basse" },
  { value: "medium", label: "Moyenne" },
  { value: "high", label: "Haute" },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "todo" as TaskStatus,
    priority: "medium" as TaskPriority,
  });

  const openCreateModal = () => {
    setEditingTask(null);
    setForm({ title: "", description: "", status: "todo", priority: "medium" });
    setModalOpen(true);
  };

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setForm({
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
    });
    setModalOpen(true);
  };

  const handleSave = () => {
    if (!form.title.trim()) return;

    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingTask.id ? { ...t, ...form } : t
        )
      );
    } else {
      const newTask: Task = {
        id: String(Date.now()),
        ...form,
        createdAt: new Date().toISOString(),
      };
      setTasks((prev) => [...prev, newTask]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const columns = [
    { key: "title", header: "Titre" },
    { key: "description", header: "Description" },
    {
      key: "status",
      header: "Statut",
      render: (task: Task) => (
        <Badge
          variant={
            task.status === "done"
              ? "success"
              : task.status === "in_progress"
                ? "warning"
                : "default"
          }
        >
          {statusOptions.find((o) => o.value === task.status)?.label}
        </Badge>
      ),
    },
    {
      key: "priority",
      header: "Priorité",
      render: (task: Task) => (
        <Badge
          variant={
            task.priority === "high"
              ? "error"
              : task.priority === "medium"
                ? "warning"
                : "info"
          }
        >
          {priorityOptions.find((o) => o.value === task.priority)?.label}
        </Badge>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (task: Task) => (
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => openEditModal(task)}>
            Modifier
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleDelete(task.id)}
          >
            Supprimer
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Tasks
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Gérez vos tâches de projet
          </p>
        </div>
        <Button onClick={openCreateModal}>+ Nouvelle tâche</Button>
      </div>

      <DataTable columns={columns} data={tasks} />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingTask ? "Modifier la tâche" : "Nouvelle tâche"}
      >
        <div className="space-y-4">
          <Input
            id="title"
            label="Titre"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Nom de la tâche"
          />
          <Input
            id="description"
            label="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Décrivez la tâche"
          />
          <Select
            id="status"
            label="Statut"
            options={statusOptions}
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value as TaskStatus })
            }
          />
          <Select
            id="priority"
            label="Priorité"
            options={priorityOptions}
            value={form.priority}
            onChange={(e) =>
              setForm({ ...form, priority: e.target.value as TaskPriority })
            }
          />
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleSave}>
              {editingTask ? "Enregistrer" : "Créer"}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
