"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/site-config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/ui/ContactForm";
import { GlassCard } from "@/components/ui/GlassCard";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-section-alt">
      <div className="container-max">
        <SectionHeader
          label="Contact"
          title="Let's Expand Your Ministry Through Video"
          description="Send a message about your church's video needs, workflow, and content goals — I'll get back to you shortly."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard strong className="overflow-hidden p-0">
              <ContactForm />
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <GlassCard>
              <h3 className="font-heading text-lg font-bold">Get in Touch</h3>
              <p className="mt-1 text-sm text-muted">
                Prefer to reach out directly? I&apos;m here to help.
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
                  >
                    <Mail className="h-5 w-5 text-accent" />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
                  >
                    <Phone className="h-5 w-5 text-accent" />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
                  >
                    <MessageCircle className="h-5 w-5 text-accent" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h3 className="font-heading text-lg font-bold">Follow Along</h3>
              <div className="mt-4 flex gap-3">
                <SocialLink
                  href={siteConfig.social.linkedin}
                  label="LinkedIn"
                  icon={LinkedInIcon}
                />
                <SocialLink
                  href={siteConfig.social.facebook}
                  label="Facebook"
                  icon={FacebookIcon}
                />
                <SocialLink
                  href={siteConfig.social.instagram}
                  label="Instagram"
                  icon={InstagramIcon}
                />
              </div>
            </GlassCard>

            <p className="text-sm text-muted">
              {siteConfig.location}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-border p-3 text-muted transition-all hover:border-accent/40 hover:text-accent"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}
