"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { cn } from "@/lib/utils";

type PortfolioCardProps = {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  index?: number;
};

export function PortfolioCard({
  project,
  onOpenCaseStudy,
  index = 0,
}: PortfolioCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = () => onOpenCaseStudy(project);

  const primaryVideo = project.videos?.[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-section-alt transition-all duration-300 group-hover:border-accent/40 group-hover:glow-gold">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition-opacity duration-300",
            isHovering && primaryVideo ? "opacity-0" : "opacity-100"
          )}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {primaryVideo &&
          (primaryVideo.source === "youtube" ||
            primaryVideo.source === "google-drive") &&
          isHovering &&
          !isMobile && (
          <div className="absolute inset-0">
            <VideoPlayer
              source={primaryVideo.source}
              url={primaryVideo.url}
              fileId={primaryVideo.fileId}
              title={primaryVideo.title ?? project.title}
              className="h-full rounded-none"
            />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-white/70">{project.church}</p>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="rounded-full bg-accent/90 p-3 text-background">
            <Play className="h-6 w-6 fill-current" />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onOpenCaseStudy(project);
        }}
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-light transition-colors cursor-pointer"
      >
        View case study
        <ExternalLink className="h-4 w-4" />
      </button>
    </motion.article>
  );
}
