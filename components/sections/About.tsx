"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <section id="about" className="section-padding bg-section-alt">
      <div className="container-max">
        <SectionHeader
          label="About"
          title="More Than Video Editing: Ministry Through Media"
          description="I partner with pastors and media teams to turn raw footage into ministry content that reaches people all week long."
        />

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-muted">
              {siteConfig.aboutBio}
            </p>

            <GlassCard className="mt-8 border-l-4 border-l-accent">
              <blockquote className="font-heading text-xl italic leading-relaxed text-foreground">
                &ldquo;{siteConfig.aboutQuote}&rdquo;
              </blockquote>
            </GlassCard>

            <Link href="#contact" className="mt-8 inline-block">
              <Button variant="outline">
                Let&apos;s Talk About Your Church
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard strong>
              <h3 className="font-heading text-lg font-bold text-foreground">
                How I Help Ministries Grow Online
              </h3>
              <ul className="mt-6 space-y-4">
                {siteConfig.aboutHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-muted leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
