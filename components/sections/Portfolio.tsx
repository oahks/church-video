"use client";

import { useState } from "react";
import { projects, projectCategories, type Project, type ProjectCategory } from "@/lib/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { CaseStudyModal } from "@/components/ui/CaseStudyModal";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="Portfolio"
          title="Featured Ministry Projects"
          description="Explore sample projects across sermon reels, worship edits, announcements, and more."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <FilterPill
            label="All"
            active={activeCategory === "All"}
            onClick={() => setActiveCategory("All")}
          />
          {projectCategories.map((cat) => (
            <FilterPill
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filtered.map((project, index) => (
            <PortfolioCard
              key={project.id}
              project={project}
              index={index}
              onOpenCaseStudy={setSelectedProject}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted">No projects in this category yet.</p>
        )}
      </div>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer",
        active
          ? "bg-accent text-background glow-gold"
          : "border border-border text-muted hover:border-accent/40 hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}
