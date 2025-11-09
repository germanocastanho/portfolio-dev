import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";

describe("Hero Component", () => {
  it("renders the name correctly", () => {
    render(<Hero />);
    expect(screen.getByText("Germano Castanho")).toBeInTheDocument();
  });

  it("renders the professional title", () => {
    render(<Hero />);
    expect(screen.getByText(/Data Scientist/i)).toBeInTheDocument();
    expect(screen.getByText(/AI Developer/i)).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Hero />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/germanocastanho"
    );
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/germanocastanho"
    );
  });

  it("renders contact button with correct anchor", () => {
    render(<Hero />);
    const contactButton = screen.getByRole("link", {
      name: /contato/i,
    });
    expect(contactButton).toHaveAttribute("href", "#contact");
  });
});
