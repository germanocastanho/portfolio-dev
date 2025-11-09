# Agent Documentation

## Project Overview

Single-page portfolio application built with **Vite + React + TypeScript** featuring shadcn/ui components. This is a professional portfolio for Germano Castanho (Data Scientist/AI Developer) deployed via GitHub Pages at `https://germanocastanho.github.io`.

**Featured Projects:**

- **Audio Transcriber**: OpenAI Whisper-based transcription tool
- **Socrates Bot**: Philosophical AI chatbot with LangChain
- **Minerva's Owl**: RAG assistant for Obsidian knowledge management

**Additional Repositories:**

- `python-notes`: Python/Data Science/ML notes collection
- `juriscraper-stj`: Legal web scraper for Brazilian courts
- `crime-analysis`: Criminal data analysis (Rio Grande do Sul)
- `hammond-vb3ii`: Debian music keyboard setup
- `obsidian-vault`: Personal second brain

## Architecture

### Component Structure

- **Page Components** (`src/pages/`): Route-level components (`Index.tsx`, `NotFound.tsx`)
- **Section Components** (`src/components/`): Portfolio sections (Hero, About, Skills, Projects, Education, Contact, Footer)
- **UI Components** (`src/components/ui/`): shadcn/ui primitives (50+ Radix UI-based components)
- **Single Route App**: All content lives on `/` route via `Index.tsx` which composes section components

### Styling System

- **Design Tokens**: All colors defined as HSL CSS variables in `src/index.css` under `:root`
- **Utility Classes**: Custom classes `glass-card`, `hover-lift`, `section-title` defined in `@layer utilities`
- **Glassmorphism Pattern**: Consistent `glass-card hover-lift` combination on all Card components
- **Background**: Fixed background image from `src/assets/hero-bg.jpg` with gradient overlays
- **Color Scheme**: AI/Data Science theme with cyan primary (`--primary: 189 94% 55%`), dark background (`--background: 220 15% 8%`)

### Key Conventions

1. **Import Alias**: Always use `@/` prefix (maps to `./src/`) for all imports
2. **Component Exports**: Named exports for section components, default export for pages
3. **Styling Pattern**: Every Card component uses `className="p-8 md:p-12 glass-card hover-lift"`
4. **Section Headers**: Icon + title pattern with `flex items-center justify-center gap-4 mb-12`
5. **Utility Function**: Use `cn()` from `@/lib/utils` for conditional className merging

## Development Workflow

### Essential Commands

```bash
npm run dev           # Start localhost server
npm run build         # Production build
npm run build:dev     # Development mode build
npm run lint          # ESLint check
npm run preview       # Preview production build
npm test              # Run tests in watch mode
npm run test:ui       # Run tests with Vitest UI
npm run test:coverage # Run tests with coverage report
```

### Adding shadcn/ui Components

Components are pre-configured in `components.json`. To add new UI components, manually create files in `src/components/ui/` following the shadcn/ui patterns. The project uses:

- Style: `default`
- Base color: `slate`
- CSS variables: enabled
- Tailwind config: `tailwind.config.ts`

### Working with Sections

When creating new portfolio sections:

1. Create component in `src/components/[SectionName].tsx`
2. Use section structure: icon + title header, Card wrapper with glass-card styling
3. Add to `src/pages/Index.tsx` import and render
4. Add navigation anchor if needed (use `id="section-name"` on section element)

### Testing Strategy

Project uses **Vitest** + **React Testing Library** for testing:

- **Test Location**: All tests in `src/test/` directory
- **Setup File**: `src/test/setup.ts` configures `@testing-library/jest-dom`
- **Configuration**: `vitest.config.ts` at project root
- **Coverage**: Configured with v8 provider, excludes config files and test setup

**Testing Patterns:**

- Component tests verify rendering, content, and user interactions
- Utility tests validate helper functions like `cn()`
- Focus on user-visible behavior over implementation details
- Use `screen` queries from Testing Library for accessibility

**Example test structure:**

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ComponentName } from "@/components/ComponentName";

describe("ComponentName", () => {
  it("renders correctly", () => {
    render(<ComponentName />);
    expect(screen.getByText("Expected Text")).toBeInTheDocument();
  });
});
```

## Tech Stack Details

### Core Dependencies

- **React 18.3** + **React Router 6.30** for routing
- **TanStack Query 5.83** for data fetching (QueryClient configured in App.tsx)
- **Vite 5.4** with SWC React plugin for fast builds
- **shadcn/ui** components built on Radix UI primitives
- **Lucide React** for icons
- **Tailwind CSS 3.4** + custom design system
- **TypeScript 5.8** with strict mode

### Special Configurations

- **Server Config**: Vite dev server runs on `::` (IPv6) port 8080
- **Path Alias**: `@` resolves to `./src` in both Vite and TypeScript configs
- **Toasts**: Dual toast system (shadcn toaster + sonner) initialized in App.tsx

## Content Customization

### Profile Information

- Update `src/components/Hero.tsx` for name, title, social links
- Modify `src/components/About.tsx` for bio text
- Edit `src/components/Skills.tsx` skills array for technologies
- Update `TEMPLATES.md` for alternative profile descriptions

### Styling Adjustments

- **Colors**: Modify HSL variables in `src/index.css` `:root`
- **Typography**: Font family set to Inter in `tailwind.config.ts`
- **Spacing**: Container padding controlled by `container` Tailwind config
- **Animations**: Custom utility classes in `src/index.css` @layer utilities

## Common Patterns

### Section Component Template

```tsx
import { Card } from "@/components/ui/card";
import { IconName } from "lucide-react";

export const SectionName = () => {
  return (
    <section id="section-name" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <IconName className="w-10 h-10 text-primary" />
          <h2 className="section-title mb-0">Section Title</h2>
        </div>
        <Card className="p-8 md:p-12 glass-card hover-lift">
          {/* Content */}
        </Card>
      </div>
    </section>
  );
};
```

### Button with Icon Pattern

```tsx
<Button
  size="lg"
  className="gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
  asChild
>
  <a href="#target">
    <Icon className="w-4 h-4" />
    Label
  </a>
</Button>
```

## Deployment

Project deploys to **GitHub Pages** at `https://germanocastanho.github.io`:

### Manual Deployment

1. Run `npm run build` to generate `dist/` folder
2. Push `dist/` contents to `germanocastanho.github.io` repository
3. GitHub Pages will automatically serve the site

### Automated Deployment

- GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys on push to `main`
- Workflow runs build, generates static files, and deploys to GitHub Pages
- Ensure repository settings have GitHub Pages enabled with source set to GitHub Actions

## File Organization Rules

- Keep UI components atomic in `src/components/ui/`
- Place custom hooks in `src/hooks/`
- Store utilities in `src/lib/`
- Add static assets to `src/assets/`
- Pages go in `src/pages/` (only for route components)
- Tests go in `src/test/` directory

## Projects Section Management

The **Projects** section (`src/components/Projects.tsx`) is designed for frequent updates. Follow these conventions:

### Project Data Structure

```typescript
interface Project {
  title: string; // Project name
  description: string; // Brief description (1-2 sentences)
  technologies: string[]; // Tech stack used
  githubUrl?: string; // GitHub repository URL
  liveUrl?: string; // Live demo URL
  featured?: boolean; // Highlight as featured project
}
```

### Adding/Updating Projects

1. Edit the `projects` array in `src/components/Projects.tsx`
2. Add project object with all required fields
3. Mark important projects with `featured: true` for special styling
4. Technologies array should match skills in `Skills.tsx` when possible
5. Always include description that highlights the technical challenge or solution

### Project Card Features

- **Featured Badge**: Projects with `featured: true` get a highlighted border and badge
- **Technology Badges**: Automatically rendered from `technologies` array
- **Action Buttons**: GitHub and Live Demo links conditionally rendered
- **Consistent Styling**: Uses `glass-card hover-lift` pattern like other sections

### Best Practices

- Keep descriptions concise (max 2-3 lines)
- Use 3-6 technology tags per project
- Order projects by importance/recency (featured first)
- Update regularly to reflect current work
- Ensure all URLs are valid and use `target="_blank" rel="noopener noreferrer"`

### Adding Projects Section to Site

If not already included, add to `src/pages/Index.tsx`:

```tsx
import { Projects } from "@/components/Projects";

// In the component JSX, add between other sections:
<Projects />;
```
