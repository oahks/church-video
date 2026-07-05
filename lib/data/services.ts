import {
  Film,
  Scissors,
  Music,
  Calendar,
  Heart,
  Repeat,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "sermon-editing",
    title: "Sermon Editing",
    description:
      "Full-service sermon post-production — from raw footage to polished, broadcast-ready messages your congregation can revisit anytime.",
    deliverables: [
      "Multi-camera sync & switching",
      "Audio cleanup & leveling",
      "Lower thirds & scripture overlays",
      "Color grading for cinematic look",
    ],
    icon: Film,
  },
  {
    id: "sermon-reels",
    title: "Sermon Reels & Shorts",
    description:
      "Turn key sermon moments into scroll-stopping vertical reels optimized for Instagram, TikTok, Facebook, and YouTube Shorts.",
    deliverables: [
      "Hook-first 30–60s cuts",
      "Animated captions & subtitles",
      "Platform-specific aspect ratios",
      "Branded intro/outro templates",
    ],
    icon: Scissors,
  },
  {
    id: "worship-editing",
    title: "Worship Video Editing",
    description:
      "Capture the atmosphere of worship with dynamic edits that highlight music, lyrics, and the spirit of praise.",
    deliverables: [
      "Multi-song worship compilations",
      "Lyric overlays & kinetic text",
      "Slow-motion & highlight moments",
      "Audio sync with live recordings",
    ],
    icon: Music,
  },
  {
    id: "event-highlights",
    title: "Church Event Highlights",
    description:
      "From conferences to baptisms — cinematic recap videos that celebrate milestones and inspire your community.",
    deliverables: [
      "2–5 minute highlight reels",
      "Event teaser promos",
      "Social media cut-downs",
      "Photo slideshow integrations",
    ],
    icon: Calendar,
  },
  {
    id: "testimony-videos",
    title: "Testimony Videos",
    description:
      "Powerful story-driven edits that share life-change testimonies with emotion, clarity, and ministry impact.",
    deliverables: [
      "Interview-style editing",
      "B-roll & visual storytelling",
      "Subtitles for accessibility",
      "Shareable social versions",
    ],
    icon: Heart,
  },
  {
    id: "content-repurposing",
    title: "Weekly Content Repurposing",
    description:
      "One sermon becomes a full week of ministry content — reels, clips, quote cards, and podcast audio extracts.",
    deliverables: [
      "Weekly content calendar",
      "5–10 clips per sermon",
      "Quote graphics from key lines",
      "Consistent brand templates",
    ],
    icon: Repeat,
  },
];
