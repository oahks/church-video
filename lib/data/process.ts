export type ProcessStep = {
  id: string;
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "send-footage",
    step: 1,
    title: "Send Footage",
    description:
      "Share your raw sermon, worship, or event footage via Google Drive, Dropbox, or your preferred cloud storage. Include any branding assets and style preferences.",
  },
  {
    id: "review-strategy",
    step: 2,
    title: "Review & Strategy",
    description:
      "We review your content together, discuss your ministry goals, and align on editing style, deliverables, and timeline before any cuts are made.",
  },
  {
    id: "editing",
    step: 3,
    title: "Editing",
    description:
      "Professional editing with color grading, audio cleanup, captions, graphics, and platform-optimized exports — all matched to your church's brand.",
  },
  {
    id: "delivery-revisions",
    step: 4,
    title: "Delivery & Revisions",
    description:
      "Receive your finished videos with revision rounds included. Fast turnaround so your content stays timely and relevant for your congregation.",
  },
];
