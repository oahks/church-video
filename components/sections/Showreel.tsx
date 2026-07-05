"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { showreel } from "@/lib/data/showreel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

export function Showreel() {
  return (
    <section id="showreel" className="section-padding bg-section-alt">
      <div className="container-max">
        <SectionHeader
          label="Showreel"
          title={showreel.title}
          description={showreel.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-border glow-royal"
        >
          <VideoPlayer
            source={showreel.source}
            url={showreel.url}
            filename={showreel.filename}
            poster={showreel.poster}
            title={showreel.title}
          />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {showreel.highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-muted"
            >
              <Check className="h-4 w-4 text-accent" />
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
