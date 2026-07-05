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
  previewVideo?: ProjectVideo;
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

export const projects: Project[] = [
  {
    id: "faith-community-sermon-reel",
    title: "Sunday Sermon Reel Series",
    category: "Sermon Reels",
    church: "Faith Community Church [Sample]",
    thumbnail: "/images/placeholders/thumb-sermon-reels.svg",
    previewVideo: {
      source: "youtube",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      poster: "/images/placeholders/thumb-sermon-reels.svg",
    },
    caseStudy: {
      challenge:
        "The church had strong Sunday messages but minimal engagement on social media throughout the week.",
      editingStyle:
        "Fast-paced reel edits with kinetic captions, scripture overlays, and hook-first openings under 3 seconds.",
      churchType: "Mid-size urban congregation (~800 members)",
      results: [
        "12 reels per month from a single sermon",
        "3x increase in social media engagement [Sample]",
        "Consistent branded look across all platforms",
      ],
    },
  },
  {
    id: "grace-worship-session",
    title: "Live Worship Session Edit",
    category: "Worship Videos",
    church: "Grace Chapel [Sample]",
    thumbnail: "/images/placeholders/thumb-worship.svg",
    caseStudy: {
      challenge:
        "Raw worship footage lacked polish and failed to capture the energy of live sessions for online viewers.",
      editingStyle:
        "Cinematic multi-camera cuts with lyric overlays, color grading, and audio-synced highlight moments.",
      churchType: "Contemporary worship-focused church",
      results: [
        "Full 45-min worship video for YouTube",
        "5 highlight clips for social sharing",
        "Improved watch time on worship content [Sample]",
      ],
    },
  },
  {
    id: "revival-conference-highlights",
    title: "Annual Revival Conference Highlights",
    category: "Conference Highlights",
    church: "Revival Ministries [Sample]",
    thumbnail: "/images/placeholders/thumb-conference.svg",
    caseStudy: {
      challenge:
        "A 3-day conference produced hours of footage but no recap video to share the impact with the wider community.",
      editingStyle:
        "Documentary-style storytelling with speaker highlights, crowd reactions, and emotional peak moments.",
      churchType: "Multi-campus ministry network",
      results: [
        "4-minute cinematic recap delivered within 48 hours",
        "Used for next-year conference promotion",
        "Shared across 6 campus social channels [Sample]",
      ],
    },
  },
  {
    id: "transformation-testimony",
    title: "Life Change Testimony Film",
    category: "Testimony Videos",
    church: "New Life Assembly [Sample]",
    thumbnail: "/images/placeholders/thumb-testimony.svg",
    caseStudy: {
      challenge:
        "A powerful member testimony was recorded but needed professional editing to tell the story with impact.",
      editingStyle:
        "Interview-driven narrative with b-roll, subtle music beds, and subtitle accessibility.",
      churchType: "Community-focused local church",
      results: [
        "3-minute testimony film for Sunday service",
        "60-second social version with captions",
        "Featured in church outreach campaign [Sample]",
      ],
    },
  },
  {
    id: "youth-retreat-recap",
    title: "Youth Retreat Recap Video",
    category: "Church Event Recaps",
    church: "Cornerstone Youth [Sample]",
    thumbnail: "/images/placeholders/thumb-event.svg",
    caseStudy: {
      challenge:
        "Youth retreat generated great moments but parents and supporters couldn't experience the event remotely.",
      editingStyle:
        "Energetic montage with quick cuts, group activities, and worship moments set to upbeat music.",
      churchType: "Youth ministry program",
      results: [
        "2-minute recap shared within 24 hours of event",
        "Boosted registration for next retreat [Sample]",
        "Reusable template for future events",
      ],
    },
  },
  {
    id: "daily-devotional-shorts",
    title: "Daily Devotional Shorts",
    category: "Social Media Shorts",
    church: "Hope City Church [Sample]",
    thumbnail: "/images/placeholders/thumb-social.svg",
    caseStudy: {
      challenge:
        "The pastoral team wanted daily bite-sized content but lacked time to edit clips from weekly sermons.",
      editingStyle:
        "Vertical 9:16 format with bold captions, branded lower thirds, and scripture callouts.",
      churchType: "Growing online-first ministry",
      results: [
        "30 shorts per month from sermon library",
        "Consistent daily posting schedule achieved",
        "Expanded reach to younger demographics [Sample]",
      ],
    },
  },
];
