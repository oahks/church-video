"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { siteConfig } from "@/lib/site-config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { TestimonialVideoModal } from "@/components/ui/TestimonialVideoModal";
import { GlassCard } from "@/components/ui/GlassCard";

export function Testimonials() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="testimonials" className="section-padding bg-section-alt">
      <div className="container-max">
        <SectionHeader
          label="Testimonials"
          title="What Pastors & Media Teams Say"
          description="Hear from ministry leaders who've partnered on video content."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
          <TestimonialCarousel testimonials={testimonials} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-80"
          >
            <GlassCard className="h-full">
              <h3 className="font-heading text-lg font-bold">Video Testimonial</h3>
              <p className="mt-1 text-sm text-muted">
                Placeholder slot for a pastor video review
              </p>

              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="group relative mt-4 aspect-video w-full overflow-hidden rounded-xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-accent/90 p-4 text-background transition-transform group-hover:scale-110">
                    <Play className="h-8 w-8 fill-current" />
                  </div>
                </div>
                <p className="absolute bottom-3 left-3 right-3 text-xs text-white/80">
                  {siteConfig.testimonialVideo.title}
                </p>
              </button>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      <TestimonialVideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
}
