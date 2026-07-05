export type ProjectCategory =
  | "Sermon Reels"
  | "Worship Videos"
  | "Conference Highlights"
  | "Testimony Videos"
  | "Church Event Recaps"
  | "Social Media Shorts";

export type VideoSource = "local" | "youtube" | "vimeo" | "google-drive";

export type ProjectVideo = {
  source: VideoSource;
  title?: string;
  url?: string;
  fileId?: string;
  filename?: string;
  poster?: string;
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  church: string;
  thumbnail: string;
  videos?: ProjectVideo[];
  caseStudy: {
    challenge: string;
    editingStyle: string;
    churchType: string;
    results: string[];
  };
};

export const projectCategories: ProjectCategory[] = [
  "Sermon Reels",
  "Worship Videos",
  "Conference Highlights",
  "Testimony Videos",
  "Church Event Recaps",
  "Social Media Shorts",
];

function driveVideo(url: string, title: string): ProjectVideo {
  return { source: "google-drive", url, title };
}

export const projects: Project[] = [
  {
    id: "faith-community-sermon-reel",
    title: "Sunday Sermon Reel Series",
    category: "Sermon Reels",
    church: "Faith Community Church",
    thumbnail: "/images/thumbnails/sermon.jpeg",
    videos: [
      driveVideo(
        "https://drive.google.com/file/d/1moOYGG1WwZnAoGAW2u7NN-ku28ExTs5C/view",
        "N Apst 16"
      ),
      driveVideo(
        "https://drive.google.com/file/d/1KFD-TnJ4nuihmqe7vW75tXCzQJoPbfYz/view",
        "Vid 1 (1)"
      ),
      driveVideo(
        "https://drive.google.com/file/d/1JHGPDd1eQjrFAaJW-XUI3xCy5TqFmHAn/view",
        "Vid 1"
      ),
    ],
    caseStudy: {
      challenge:
        "The church had strong Sunday messages but minimal engagement on social media throughout the week.",
      editingStyle:
        "Fast-paced reel edits with kinetic captions, scripture overlays, and hook-first openings under 3 seconds.",
      churchType: "Mid-size urban congregation (~800 members)",
      results: [
        "12 reels per month from a single sermon",
        "3x increase in social media engagement",
        "Consistent branded look across all platforms",
      ],
    },
  },
  {
    id: "grace-worship-session",
    title: "Worship Session Edit",
    category: "Worship Videos",
    church: "Grace Chapel",
    thumbnail: "/images/thumbnails/worship.jpeg",
    videos: [
      driveVideo(
        "https://drive.google.com/file/d/1fgKpiGisKQxRrukhIa79LafAUXnJrf1-/view",
        "Bidemi 4"
      ),
      driveVideo(
        "https://drive.google.com/file/d/1tjk7MwY4iWc2k2uvkeiZA43X1ESaUlRv/view",
        "M & H 1"
      ),
    ],
    caseStudy: {
      challenge:
        "Raw worship footage lacked polish and failed to capture the energy of live sessions for online viewers.",
      editingStyle:
        "Cinematic multi-camera cuts with lyric overlays, color grading, and audio-synced highlight moments.",
      churchType: "Contemporary worship-focused church",
      results: [
        "More polished worship videos",
        "More engagement with the church's worship",
        "Improved watch time on worship content",
      ],
    },
  },
  {
    id: "church-announcement",
    title: "Church Announcement",
    category: "Church Event Recaps",
    church: "WoodLand Church",
    thumbnail: "/images/thumbnails/announcements.jpeg",
    videos: [
      driveVideo(
        "https://drive.google.com/file/d/1DmhiYpjYODP-QKceLFY_bFnZ5ddFGHeh/view",
        "WoodLand Church 01"
      ),
    ],
    caseStudy: {
      challenge:
        "The church needed a quick announcement video to share the impact of a recent event with the wider community.",
      editingStyle:
        "Fast-paced reel edits with kinetic captions, scripture overlays, and hook-first openings under 3 seconds.",
      churchType: "Mid-size urban congregation (~800 members)",
      results: [
        "More attention to the church's events",
        "More engagement with the church's events",
        "More people attending the church's activities",
      ],
    },
  },
];
