"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Video } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "glass py-3 shadow-lg shadow-black/20" : "bg-transparent py-5"
      )}
    >
      <nav className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="flex items-center gap-2 font-heading text-lg font-bold text-foreground"
          onClick={() => setMobileOpen(false)}
        >
          <Video className="h-6 w-6 text-accent" />
          <span>{siteConfig.name.split(" ")[0]}</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="#contact">
            <Button size="sm">Get in Touch</Button>
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-foreground lg:hidden cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-nav-panel lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-card-hover"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 px-4">
              <Link href="#contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full">Get in Touch</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
