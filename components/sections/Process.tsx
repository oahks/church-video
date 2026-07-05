"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data/process";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="Process"
          title="How We Work Together"
          description="A simple, ministry-friendly workflow from raw footage to polished content ready to share."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="relative h-full pt-8">
                <div className="absolute -top-0 left-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-background font-heading text-sm font-bold text-accent">
                  {step.step}
                </div>
                <h3 className="mt-2 font-heading text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
