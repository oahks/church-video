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
      "[Sample] Emmanuel transformed our Sunday sermons into a full week of engaging content. Our social media has never been more active, and members share clips with friends and family daily.",
    author: "Pastor James Okonkwo",
    role: "Lead Pastor",
    church: "Grace Community Church",
    isSample: true,
  },
  {
    id: "media-director-sarah",
    quote:
      "[Sample] As a one-person media team, I couldn't keep up with editing demands. Emmanuel's turnaround time and quality freed me to focus on live production while he handled post-production flawlessly.",
    author: "Sarah Mitchell",
    role: "Media Director",
    church: "New Hope Fellowship",
    isSample: true,
  },
  {
    id: "worship-leader-david",
    quote:
      "[Sample] Our worship videos went from amateur phone recordings to cinematic experiences. The lyric overlays and color grading made our online worship feel as powerful as being in the room.",
    author: "David Chen",
    role: "Worship Leader",
    church: "Living Waters Church",
    isSample: true,
  },
  {
    id: "youth-pastor-maria",
    quote:
      "[Sample] The youth retreat recap video was delivered the next day and parents were sharing it everywhere. Emmanuel understands ministry timelines and delivers when it matters most.",
    author: "Maria Santos",
    role: "Youth Pastor",
    church: "Cornerstone Youth Ministry",
    isSample: true,
  },
];
