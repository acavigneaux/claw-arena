import { initialTasks } from "../../../lib/mock-data";
import { Task } from "../../../lib/types";

// In-memory store (resets on server restart)
const tasks: Task[] = [...initialTasks];

export async function GET() {
  return Response.json(tasks);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newTask: Task = {
    id: String(Date.now()),
    title: body.title ?? "",
    description: body.description ?? "",
    status: body.status ?? "todo",
    priority: body.priority ?? "medium",
    createdAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  return Response.json(newTask, { status: 201 });
}
