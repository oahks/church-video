export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  church: string;
  isSample: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "pastor-james",
    quote:
      " Emmanuel transformed our Sunday sermons into a full week of engaging content. Our social media has never been more active, and members share clips with friends and family daily.",
    author: "Pastor James Authur",
    role: "Lead Pastor",
    church: "Grace Community Church",
    isSample: false,
  },
  {
    id: "media-director-sarah",
    quote:
      " As a one-person media team, I couldn't keep up with editing demands. Emmanuel's turnaround time and quality freed me to focus on live production while he handled post-production flawlessly.",
    author: "Sarah Mitchell",
    role: "Media Director",
    church: "New Hope Fellowship",
    isSample: false,
  },
  {
    id: "youth-pastor-maria",
    quote:
      " The youth retreat recap video was delivered the next day and parents were sharing it everywhere. Emmanuel understands ministry timelines and delivers when it matters most.",
    author: "Maria Santos",
    role: "Youth Pastor",
    church: "Cornerstone Youth Ministry",
    isSample: false,
  },
];
