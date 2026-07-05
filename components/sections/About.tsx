"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GlassCard } from "@/components/ui/GlassCard";

export function About() {
  return (
    <section id="about" className="section-padding bg-section-alt">
      <div className="container-max">
        <SectionHeader
          label="About"
          title="More Than Video Editing"
          description="I partner with pastors and media teams to turn raw footage into ministry content that reaches people all week long."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border"
          >
            <Image
              src={siteConfig.profileImage}
              alt={siteConfig.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-muted">
              Hi, I&apos;m {siteConfig.name} — a dedicated church video editor
              passionate about helping ministries share their message with
              excellence. From full sermon edits to scroll-stopping reels, I
              handle the post-production so your team can focus on ministry.
            </p>

            <GlassCard className="mt-8 border-l-4 border-l-accent">
              <blockquote className="font-heading text-xl italic leading-relaxed text-foreground">
                &ldquo;{siteConfig.aboutQuote}&rdquo;
              </blockquote>
            </GlassCard>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <AnimatedCounter
                value={siteConfig.stats.sermonsEdited}
                suffix="+"
                label="Sermons"
              />
              <AnimatedCounter
                value={siteConfig.stats.reelsCreated}
                suffix="+"
                label="Reels"
              />
              <AnimatedCounter
                value={siteConfig.stats.churchesServed}
                suffix="+"
                label="Churches"
              />
              <AnimatedCounter
                value={siteConfig.stats.yearsExperience}
                suffix="+"
                label="Years"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
