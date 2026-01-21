export interface Feature {
  title: string;
  description: string;
}

export const featuresSection = {
  badge: "WHAT'S IN REDFOX?",
  title: "Everything you need to build great games on the web.",
} as const;

export const features: Feature[] = [
  {
    title: "Game Development",
    description:
      "Full-cycle development from concept to launch. We transform ideas into immersive gaming experiences.",
  },
  {
    title: "Unreal Engine Expertise",
    description:
      "Advanced knowledge in Unreal Engine 5, including Nanite, Lumen, and cutting-edge rendering technologies.",
  },
  {
    title: "Technical Solutions",
    description:
      "Custom tools, plugins, and technical solutions to streamline your development workflow.",
  },
  {
    title: "Performance Optimization",
    description:
      "We ensure your games run smoothly across all platforms with advanced optimization techniques.",
  },
  {
    title: "Consulting Services",
    description:
      "Expert guidance on architecture, best practices, and technical decisions for your projects.",
  },
  {
    title: "Cross-Platform Development",
    description:
      "Build once, deploy everywhere. We create games that work seamlessly across all platforms.",
  },
];
