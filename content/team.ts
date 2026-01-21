export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image?: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

export const teamSection = {
  title: "Meet Our Team",
  description:
    "We're a passionate team of developers, designers, and engineers dedicated to creating exceptional gaming experiences.",
} as const;

export const teamMembers: TeamMember[] = [
  /*
  {
    name: "",
    role: "",
    bio: "",
    skills: ["", ""],
    image: "/team/member-1.jpg",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    email: "member1@redfox-studios.org",
  },
  */
  {
    name: "Team Member 1",
    role: "Lead Developer",
    bio: "Passionate game developer with expertise in Unreal Engine and C++.",
    skills: ["Unreal Engine", "C++", "Blueprint", "Game Design"],
  },
  {
    name: "Team Member 2",
    role: "Game Designer",
    bio: "Creative game designer focused on player experience and mechanics.",
    skills: ["Game Design", "Level Design", "Prototyping"],
  },
  {
    name: "Team Member 3",
    role: "Technical Artist",
    bio: "Bridging the gap between art and programming.",
    skills: ["Shaders", "VFX", "Optimization", "Unity"],
  },
];
