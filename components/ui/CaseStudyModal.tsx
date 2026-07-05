"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

type CaseStudyModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const hasVideos = (project?.videos?.length ?? 0) > 0;

  useEffect(() => {
    if (!project) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-[var(--overlay)] backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl p-6 sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-lg p-2 text-muted transition-colors hover:bg-card-hover hover:text-foreground cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-block rounded-lg bg-accent/20 px-2.5 py-1 text-xs font-medium text-accent">
              {project.category}
            </span>
            <h3 className="mt-3 font-heading text-2xl font-bold text-foreground pr-10">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{project.church}</p>

            {hasVideos && (
              <div className="mt-6 space-y-6">
                {project.videos!.map((video, index) => (
                  <div key={`${project.id}-video-${index}`}>
                    {(video.title || project.videos!.length > 1) && (
                      <p className="mb-2 text-sm font-medium text-foreground">
                        {video.title ?? `Video ${index + 1}`}
                      </p>
                    )}
                    <VideoPlayer
                      source={video.source}
                      url={video.url}
                      fileId={video.fileId}
                      filename={video.filename}
                      poster={video.poster}
                      title={video.title ?? project.title}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 space-y-5">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Challenge
                </h4>
                <p className="mt-2 leading-relaxed text-muted">
                  {project.caseStudy.challenge}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Editing Style
                </h4>
                <p className="mt-2 leading-relaxed text-muted">
                  {project.caseStudy.editingStyle}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Church Type
                </h4>
                <p className="mt-2 leading-relaxed text-muted">
                  {project.caseStudy.churchType}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Results
                </h4>
                <ul className="mt-2 space-y-2">
                  {project.caseStudy.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start gap-2 text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
