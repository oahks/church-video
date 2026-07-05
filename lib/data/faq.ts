export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    id: "turnaround",
    question: "What is your typical editing turnaround time?",
    answer:
      "Standard sermon edits are delivered within 3–5 business days. Rush delivery (24–48 hours) is available for urgent projects. Reels and short-form clips typically ship within 2–3 business days. Turnaround depends on footage length and project scope — we'll confirm timelines during our initial consultation.",
  },
  {
    id: "weekly-sermons",
    question: "Can you handle weekly sermon editing on an ongoing basis?",
    answer:
      "Absolutely. Many churches partner with me on a weekly or monthly retainer for consistent sermon editing and content repurposing. This ensures a reliable workflow, faster turnarounds, and a cohesive look across all your ministry videos.",
  },
  {
    id: "reels-from-sermons",
    question: "Do you create reels and shorts from existing sermons?",
    answer:
      "Yes — this is one of my core services. I extract the most impactful moments from your sermons and transform them into platform-ready reels with captions, hooks, and branded graphics. Most churches get 5–10 reels from a single sermon.",
  },
  {
    id: "captions",
    question: "Do you include captions and subtitles?",
    answer:
      "Yes, all social media reels and shorts include animated captions by default. Full sermon videos can include burned-in subtitles or SRT files for YouTube and Facebook. Captions improve accessibility and significantly boost engagement on muted autoplay platforms.",
  },
  {
    id: "branding",
    question: "Will the videos match our church's branding?",
    answer:
      "Every project is customized to your church's visual identity. Share your logo, brand colors, font preferences, and any existing templates — I'll integrate them into lower thirds, intros, outros, and social graphics for a consistent ministry look.",
  },
  {
    id: "revisions",
    question: "How many revisions are included?",
    answer:
      "Each project includes up to 2 rounds of revisions to ensure the final video meets your vision. Additional revision rounds can be arranged if needed. I want you to feel confident sharing every video with your congregation.",
  },
];
