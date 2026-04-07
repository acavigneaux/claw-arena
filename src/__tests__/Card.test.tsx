import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from "../components/Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Content here</Card>);
    expect(screen.getByText("Content here")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(<Card title="My Card">Content</Card>);
    expect(screen.getByText("My Card")).toBeInTheDocument();
  });

  it("does not render title heading when not provided", () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.querySelector("h3")).toBeNull();
  });
});
