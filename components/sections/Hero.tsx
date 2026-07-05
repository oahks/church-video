"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => setVideoError(true));
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src={siteConfig.heroVideo} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 hero-gradient-fallback" />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0B0B0F]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.08)_0%,transparent_70%)]" />

      <div className="container-max relative z-10 px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              Church Video Editor
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              {siteConfig.headline.split("Through Video")[0]}
              <span className="gradient-text">Through Video</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Professional sermon editing, worship videos, event highlights, and
              social reels — helping your ministry reach people beyond Sunday.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#portfolio">
                <Button size="lg">View My Work</Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" size="lg">
                  <Calendar className="h-5 w-5" />
                  Book a Free Consultation
                </Button>
              </Link>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto lg:mx-0"
          >
            <GlassCard strong className="p-3 glow-gold">
              <div className="relative h-64 w-64 overflow-hidden rounded-xl sm:h-72 sm:w-72">
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="288px"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-heading text-xl font-bold">{siteConfig.name}</p>
                <p className="text-sm text-accent">{siteConfig.title}</p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-1 text-muted transition-colors hover:text-accent"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
