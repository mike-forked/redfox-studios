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
      "Blah blah blah",
    author: {
      name: "Person 1",
      title: "Title",
      company: "Company",
    },
  },
  {
    quote:
      "Blah blah blah",
    author: {
      name: "Person 2",
      title: "Title",
      company: "Company",
    },
  },
  {
    quote:
      "Blah blah blah",
    author: {
      name: "Person 3",
      title: "Title",
      company: "Company",
    },
  },
  {
    quote:
      "Blah blah blah",
    author: {
      name: "Person 4",
      title: "Title",
      company: "Company",
    },
  }
];
