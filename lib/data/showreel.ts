export type ShowreelSource = "local" | "youtube" | "vimeo";

export type ShowreelConfig = {
  title: string;
  description: string;
  source: ShowreelSource;
  url?: string;
  filename?: string;
  poster: string;
  highlights: string[];
};

export const showreel: ShowreelConfig = {
  title: "Ministry Showreel",
  description:
    "A curated showcase of sermon edits, worship sessions, conference highlights, and social reels — placeholder until final showreel is ready.",
  source: "youtube",
  url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  poster: "/images/placeholders/showreel-poster.svg",
  highlights: [
    "Sermons",
    "Worship",
    "Conferences",
    "Testimonials",
    "Reels",
  ],
};
