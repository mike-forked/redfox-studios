export interface Testimonial {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
  };
}

export const testimonialsSection = {
  badge: "TESTIMONIALS",
  title: "What our clients say",
} as const;

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with RedFox was an absolute pleasure. Their expertise in Unreal Engine brought our vision to life beyond expectations.",
    author: {
      name: "Sarah Johnson",
      title: "CEO",
      company: "GameTech Inc",
    },
  },
  {
    quote:
      "The technical expertise and attention to detail from the RedFox team is unmatched. They delivered a high-performance game that exceeded our goals.",
    author: {
      name: "Michael Chen",
      title: "CTO",
      company: "Digital Studios",
    },
  },
  {
    quote:
      "RedFox transformed our concept into a stunning, immersive experience. Their professionalism and skill set them apart from other studios.",
    author: {
      name: "Emily Rodriguez",
      title: "Product Director",
      company: "Interactive Media",
    },
  },
  {
    quote:
      "Outstanding collaboration and communication throughout the entire project. RedFox truly understands what it takes to build world-class games.",
    author: {
      name: "David Kim",
      title: "Lead Developer",
      company: "Nexus Games",
    },
  },
];
