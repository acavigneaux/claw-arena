import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Badge from "../components/Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>Status</Badge>);
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  it("applies success variant", () => {
    render(<Badge variant="success">Done</Badge>);
    const badge = screen.getByText("Done");
    expect(badge.className).toContain("bg-green-100");
  });

  it("applies default variant when none specified", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge.className).toContain("bg-gray-100");
  });
});
