import { initialTasks } from "../../../../lib/mock-data";
import { Task } from "../../../../lib/types";

// Shared in-memory store
const tasks: Task[] = [...initialTasks];

function findTask(id: string) {
  return tasks.find((t) => t.id === id);
}

export async function GET(
  _req: Request,
  ctx: RouteContext<"/api/tasks/[id]">
) {
  const { id } = await ctx.params;
  const task = findTask(id);
  if (!task) {
    return Response.json({ error: "Task not found" }, { status: 404 });
  }
  return Response.json(task);
}

export async function PUT(
  request: Request,
  ctx: RouteContext<"/api/tasks/[id]">
) {
  const { id } = await ctx.params;
  const idx = tasks.findIndex((t) => t.id === id);
  if (idx === -1) {
    return Response.json({ error: "Task not found" }, { status: 404 });
  }
  const body = await request.json();
  tasks[idx] = { ...tasks[idx], ...body };
  return Response.json(tasks[idx]);
}

export async function DELETE(
  _req: Request,
  ctx: RouteContext<"/api/tasks/[id]">
) {
  const { id } = await ctx.params;
  const idx = tasks.findIndex((t) => t.id === id);
  if (idx === -1) {
    return Response.json({ error: "Task not found" }, { status: 404 });
  }
  const [removed] = tasks.splice(idx, 1);
  return Response.json(removed);
}
