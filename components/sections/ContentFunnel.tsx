"use client";

import { motion } from "framer-motion";
import { ArrowRight, X as XIcon, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

const withoutOutputs = ["1 Sunday Service", "1 YouTube Upload"];

const withOutputs = [
  "5–10 Social Reels",
  "3 Quote Graphics",
  "1 Podcast Audio Clip",
  "2 Devotional Shorts",
  "1 Email Newsletter Clip",
  "Weekly Content Calendar",
];

export function ContentFunnel() {
  return (
    <section id="content-funnel" className="section-padding bg-section-alt">
      <div className="container-max">
        <SectionHeader
          label="Content Strategy"
          title="One Sermon. Unlimited Reach."
          description="Stop letting your message stop at Sunday. See how sermon repurposing multiplies your ministry impact across every platform."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full border border-red-500/20">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full bg-red-500/10 p-2">
                  <XIcon className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Without Repurposing
                </h3>
              </div>

              <div className="flex flex-col items-center gap-4 py-6">
                <div className="rounded-xl bg-card px-6 py-4 text-center">
                  <p className="font-heading text-lg font-semibold">1 Sermon</p>
                  <p className="text-sm text-muted">Sunday Message</p>
                </div>
                <ArrowRight className="h-5 w-5 rotate-90 text-muted" />
                {withoutOutputs.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-center text-sm text-muted"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              <p className="mt-4 text-center text-sm text-red-400/80">
                Message reaches only Sunday attendees
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full border border-accent/30 glow-gold">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full bg-accent/10 p-2">
                  <Check className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  With Repurposing
                </h3>
              </div>

              <div className="flex flex-col items-center gap-3 py-4">
                <div className="rounded-xl bg-accent/10 px-6 py-4 text-center">
                  <p className="font-heading text-lg font-semibold text-accent">
                    1 Sermon
                  </p>
                  <p className="text-sm text-muted">Sunday Message</p>
                </div>

                <div className="relative w-full">
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-accent/30" />
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {withOutputs.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="rounded-lg border border-accent/20 bg-background/50 px-3 py-2.5 text-center text-xs text-foreground sm:text-sm"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-sm text-accent">
                Message reaches your community all week long
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
