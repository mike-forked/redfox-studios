export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerConfig = {
  sections: [
    {
      title: "Product",
      links: [
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Team", href: "/team" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Email", href: "mailto:contact@redfox-studios.org", external: true },
        { label: "GitHub", href: "https://github.com/redfox-studios", external: true },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/company/redfox-studios",
          external: true,
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ] as FooterSection[],
  copyright: "RedFox Studios. All rights reserved.",
} as const;
