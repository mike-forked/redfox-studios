export interface NavLink {
  label: string;
  href: string;
}

export const navConfig = {
  logo: {
    text: "RedFox",
    href: "/",
  },
  links: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Careers",
      href: "/careers",
    },
  ] as NavLink[],
} as const;
