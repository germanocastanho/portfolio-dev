import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Projects } from "@/components/Projects";

describe("Projects Component", () => {
  it("renders the section title", () => {
    render(<Projects />);
    expect(screen.getByText("Projetos")).toBeInTheDocument();
  });

  it("renders project cards with correct titles", () => {
    render(<Projects />);
    expect(screen.getByText("Audio Transcriber")).toBeInTheDocument();
    expect(screen.getByText("Socrates Bot")).toBeInTheDocument();
    expect(screen.getByText("Minerva's Owl")).toBeInTheDocument();
  });

  it("renders featured badges correctly", () => {
    render(<Projects />);
    const featuredBadges = screen.getAllByText("Destaque");
    expect(featuredBadges.length).toBe(2); // Audio Transcriber and Socrates Bot
  });
});
