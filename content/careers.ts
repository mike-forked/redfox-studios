export interface Job {
  id: string
  slug: string
  title: string
  department: string
  locations: string[]
  type: string
  description: string
  responsibilities: string[]
  requirements: string[]
  niceToHave?: string[]
  benefits: string[]
  salaryRange?: string
}

export const careersData: Job[] = [
  {
    id: "1",
    slug: "senior-game-designer",
    title: "Senior Game Designer",
    department: "Design",
    locations: ["Remote", "Austin", "New York City", "San Francisco"],
    type: "Full Time",
    description:
      "We're looking for a Senior Game Designer to help shape the future of gaming at RedFox Studios. You'll work closely with our engineering and art teams to create innovative gameplay experiences that push the boundaries of what's possible.",
    responsibilities: [
      "Design and prototype new gameplay mechanics and systems",
      "Collaborate with engineers and artists to implement game features",
      "Create and maintain design documentation",
      "Balance game systems and tune player experience",
      "Mentor junior designers and contribute to design culture",
      "Analyze player feedback and iterate on designs",
    ],
    requirements: [
      "5+ years of experience in game design",
      "Shipped at least 2 AAA titles or equivalent",
      "Strong understanding of game systems and player psychology",
      "Excellent communication and collaboration skills",
      "Experience with Unreal Engine or similar game engines",
      "Portfolio demonstrating strong design work",
    ],
    niceToHave: [
      "Experience with multiplayer game design",
      "Scripting skills (Blueprint, C++, Python)",
      "Experience with live service games",
      "Understanding of monetization and retention",
    ],
    benefits: [
      "Competitive compensation package, including equity",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work arrangements",
      "Professional development budget",
      "Latest hardware and software",
      "Collaborative and creative work environment",
    ],
    salaryRange: "$120,000 - $180,000",
  },
  {
    id: "2",
    slug: "lead-unreal-engineer",
    title: "Lead Unreal Engine Developer",
    department: "Engineering",
    locations: ["Austin", "San Francisco"],
    type: "Full Time",
    description:
      "Join our engineering team as a Lead Unreal Engine Developer. You'll architect and build cutting-edge game systems while mentoring a team of talented engineers.",
    responsibilities: [
      "Lead the development of core game systems in Unreal Engine",
      "Architect scalable and maintainable code solutions",
      "Mentor and guide engineering team members",
      "Collaborate with design and art teams on feature implementation",
      "Optimize performance for multiple platforms",
      "Establish engineering best practices and standards",
    ],
    requirements: [
      "7+ years of professional game development experience",
      "Expert-level C++ programming skills",
      "Deep knowledge of Unreal Engine 5",
      "Experience leading engineering teams",
      "Strong problem-solving and debugging skills",
      "Shipped multiple titles using Unreal Engine",
    ],
    niceToHave: [
      "Experience with multiplayer/networking systems",
      "Knowledge of rendering pipelines and graphics programming",
      "Contribution to open-source projects",
      "Experience with console development (PlayStation, Xbox)",
    ],
    benefits: [
      "Competitive compensation package, including equity",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Relocation assistance available",
      "Professional development budget",
      "Latest hardware and software",
      "Game development library access",
    ],
    salaryRange: "$150,000 - $220,000",
  },
  {
    id: "3",
    slug: "technical-artist",
    title: "Technical Artist",
    department: "Art",
    locations: ["Remote", "Austin", "New York City"],
    type: "Full Time",
    description:
      "We're seeking a Technical Artist to bridge the gap between our art and engineering teams, helping us create stunning visuals while maintaining optimal performance.",
    responsibilities: [
      "Develop tools and workflows for the art team",
      "Create and maintain shader systems and materials",
      "Optimize art assets for performance",
      "Collaborate with artists and engineers on technical solutions",
      "Establish and document art pipelines",
      "Troubleshoot technical art issues",
    ],
    requirements: [
      "4+ years of experience as a technical artist in games",
      "Strong understanding of real-time rendering",
      "Experience with Unreal Engine material editor",
      "Proficiency in at least one scripting language (Python, C#, etc.)",
      "Knowledge of 3D software (Maya, Blender, Houdini, etc.)",
      "Portfolio showcasing technical art work",
    ],
    niceToHave: [
      "Experience with procedural generation techniques",
      "Knowledge of Houdini and procedural workflows",
      "Understanding of VFX and particle systems",
      "Experience with performance profiling tools",
    ],
    benefits: [
      "Competitive compensation package, including equity",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work arrangements",
      "Professional development budget",
      "Creative tools and software licenses",
      "Collaborative studio environment",
    ],
    salaryRange: "$100,000 - $150,000",
  },
  {
    id: "4",
    slug: "gameplay-programmer",
    title: "Gameplay Programmer",
    department: "Engineering",
    locations: ["Remote", "Austin", "San Francisco"],
    type: "Full Time",
    description:
      "Join our team as a Gameplay Programmer and bring exciting game mechanics to life. You'll work closely with designers to implement engaging gameplay systems.",
    responsibilities: [
      "Implement gameplay features and mechanics in Unreal Engine",
      "Work with designers to prototype and iterate on gameplay ideas",
      "Write clean, maintainable, and well-documented code",
      "Debug and optimize gameplay systems",
      "Collaborate with other engineers on shared systems",
      "Participate in code reviews and technical discussions",
    ],
    requirements: [
      "3+ years of gameplay programming experience",
      "Strong C++ programming skills",
      "Experience with Unreal Engine or similar game engines",
      "Understanding of game design principles",
      "Ability to work in a collaborative environment",
      "Shipped at least one commercial game title",
    ],
    niceToHave: [
      "Experience with Blueprint visual scripting",
      "Knowledge of animation systems and state machines",
      "Understanding of AI and pathfinding",
      "Experience with physics systems",
    ],
    benefits: [
      "Competitive compensation package, including equity",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work arrangements",
      "Professional development budget",
      "Latest development hardware",
      "Game collection for research",
    ],
    salaryRange: "$110,000 - $160,000",
  },
  {
    id: "5",
    slug: "qa-lead",
    title: "QA Lead",
    department: "Quality Assurance",
    locations: ["Austin", "Remote"],
    type: "Full Time",
    description:
      "Lead our quality assurance efforts as a QA Lead. You'll establish testing processes, manage QA team members, and ensure we ship high-quality gaming experiences.",
    responsibilities: [
      "Lead and manage the QA team",
      "Develop and implement testing strategies and processes",
      "Create and maintain test plans and test cases",
      "Identify, document, and track bugs and issues",
      "Collaborate with development teams on bug triage and resolution",
      "Establish quality metrics and reporting",
    ],
    requirements: [
      "5+ years of QA experience in game development",
      "2+ years of team leadership experience",
      "Strong understanding of QA methodologies and best practices",
      "Experience with bug tracking systems (JIRA, etc.)",
      "Excellent communication and organizational skills",
      "Shipped multiple game titles",
    ],
    niceToHave: [
      "Experience with automation testing",
      "Knowledge of scripting languages (Python, etc.)",
      "Certification in QA or testing methodologies",
      "Experience with Unreal Engine",
    ],
    benefits: [
      "Competitive compensation package",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work arrangements",
      "Professional development opportunities",
      "Gaming hardware and software",
      "Team building events",
    ],
    salaryRange: "$90,000 - $130,000",
  },
  {
    id: "6",
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    locations: ["Remote", "New York City", "San Francisco"],
    type: "Full Time",
    description:
      "We're looking for a talented UI/UX Designer to create intuitive and beautiful user interfaces for our games. You'll work across multiple projects to deliver exceptional player experiences.",
    responsibilities: [
      "Design user interfaces and user experiences for games",
      "Create wireframes, mockups, and interactive prototypes",
      "Collaborate with designers and engineers on implementation",
      "Conduct user research and usability testing",
      "Maintain and evolve UI/UX design systems",
      "Stay current with industry trends and best practices",
    ],
    requirements: [
      "3+ years of UI/UX design experience in games",
      "Strong portfolio showcasing UI/UX work",
      "Proficiency in design tools (Figma, Adobe XD, Photoshop, etc.)",
      "Understanding of game UI/UX principles and patterns",
      "Experience with user research and testing methodologies",
      "Excellent visual design skills",
    ],
    niceToHave: [
      "Experience with motion design and animation",
      "Knowledge of accessibility standards",
      "Understanding of front-end development (HTML, CSS)",
      "Experience with Unreal Engine UMG system",
    ],
    benefits: [
      "Competitive compensation package, including equity",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work arrangements",
      "Professional development budget",
      "Creative software licenses",
      "Design conferences and workshops",
    ],
    salaryRange: "$95,000 - $140,000",
  },
]
