import { describe, it, expect } from "vitest";
import { initialTasks, dashboardStats } from "../lib/mock-data";

describe("mock-data", () => {
  it("has tasks with required fields", () => {
    for (const task of initialTasks) {
      expect(task).toHaveProperty("id");
      expect(task).toHaveProperty("title");
      expect(task).toHaveProperty("status");
      expect(task).toHaveProperty("priority");
      expect(["todo", "in_progress", "done"]).toContain(task.status);
      expect(["low", "medium", "high"]).toContain(task.priority);
    }
  });

  it("has at least 5 tasks", () => {
    expect(initialTasks.length).toBeGreaterThanOrEqual(5);
  });

  it("has dashboard stats", () => {
    expect(dashboardStats.length).toBe(4);
    for (const stat of dashboardStats) {
      expect(stat).toHaveProperty("label");
      expect(stat).toHaveProperty("value");
    }
  });
});
