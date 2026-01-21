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
    slug: "account-executive-commercial",
    title: "Account Executive, Commercial Install Base",
    department: "Sales Positions",
    locations: ["Hybrid", "Austin", "New York City", "San Francisco"],
    type: "Hybrid",
    description:
      "We're looking for an Account Executive to manage and grow our commercial install base. You'll work closely with existing customers to maximize their success with our game development platform and identify expansion opportunities.",
    responsibilities: [
      "Own a book of commercial customers, driving renewals, upsells, and cross-sells",
      "Identify and execute expansion opportunities to grow account value",
      "Build and maintain strong relationships with key stakeholders and champions",
      "Partner with Solutions Engineering, Customer Success, and Product teams to deliver customer outcomes",
      "Develop strategic account plans aligned with customer goals and our growth objectives",
      "Learn about our technology and the space every day",
      "Use tools like Sales Navigator, Zoominfo, Outreach, SFDC, etc.",
    ],
    requirements: [
      "Top performer with a history of success in pipeline generation, opportunity management, and closing customers",
      "Coachable and collaborative",
      "Team first attitude and no ego",
      "Passionate about your customers and how our platform solves their problems",
      "Motivated, curious, hungry",
    ],
    niceToHave: [
      "Aspire to be a leader",
      "Have experience helping companies in hyper-growth stage",
      "Have experience in Product Led Growth company",
      "Have experience in Front End Software Development",
    ],
    benefits: [
      "Competitive compensation package, including equity",
      "Inclusive Healthcare Package",
      "Learn and Grow - we provide mentorship and send you to events that help you build your network and skills",
      "Flexible Time Off",
      "We will provide you the gear you need to do your role, and a WFH budget for you to outfit your space as needed",
    ],
    salaryRange: "$135,000 - $150,000",
  },
  {
    id: "2",
    slug: "commercial-account-executive-greenfield",
    title: "Commercial Account Executive, Greenfield",
    department: "Sales Positions",
    locations: ["Hybrid", "Austin", "New York City", "San Francisco"],
    type: "Hybrid",
    description:
      "Join our sales team as a Commercial Account Executive focused on greenfield opportunities. You'll be responsible for building new relationships and bringing innovative game development solutions to commercial customers.",
    responsibilities: [
      "Prospect and develop new business opportunities in the commercial segment",
      "Build pipeline through outbound prospecting and inbound lead follow-up",
      "Navigate complex sales cycles from initial contact to close",
      "Collaborate with technical teams to deliver compelling product demonstrations",
      "Forecast accurately and maintain detailed records in Salesforce",
      "Stay current on industry trends and competitive landscape",
    ],
    requirements: [
      "3+ years of sales experience in SaaS or technology",
      "Proven track record of exceeding quota",
      "Strong communication and presentation skills",
      "Ability to navigate complex organizations",
      "Self-motivated and results-oriented",
      "Experience with consultative selling methodologies",
    ],
    niceToHave: [
      "Experience selling to game development or creative teams",
      "Familiarity with developer tools and platforms",
      "Understanding of cloud infrastructure",
      "Previous startup experience",
    ],
    benefits: [
      "Competitive compensation package, including equity",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work arrangements",
      "Professional development budget",
      "Unlimited PTO",
      "Home office stipend",
    ],
    salaryRange: "$120,000 - $140,000",
  },
  {
    id: "3",
    slug: "director-partnerships-north-america",
    title: "Director of Partnerships, North America",
    department: "Sales Positions",
    locations: ["Hybrid", "New York City", "San Francisco"],
    type: "Hybrid",
    description:
      "Lead our North American partnership strategy as Director of Partnerships. You'll identify, develop, and manage strategic partnerships that drive growth and expand our market presence in the game development ecosystem.",
    responsibilities: [
      "Develop and execute partnership strategy for North America",
      "Identify and prioritize potential partners aligned with business objectives",
      "Negotiate and structure partnership agreements",
      "Manage relationships with key technology and platform partners",
      "Collaborate with product, marketing, and sales teams on go-to-market initiatives",
      "Track partnership performance and ROI metrics",
    ],
    requirements: [
      "7+ years of partnerships or business development experience",
      "Proven track record of building successful strategic partnerships",
      "Strong executive presence and relationship-building skills",
      "Experience with contract negotiation",
      "Deep understanding of the technology ecosystem",
      "Excellent strategic thinking and analytical capabilities",
    ],
    niceToHave: [
      "Experience in gaming or game development industry",
      "Existing relationships with major technology platforms",
      "MBA or equivalent advanced degree",
      "International partnership experience",
    ],
    benefits: [
      "Competitive compensation package, including equity",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work arrangements",
      "Professional development budget",
      "Executive coaching opportunities",
      "Generous PTO and parental leave",
    ],
    salaryRange: "$180,000 - $220,000",
  },
  {
    id: "4",
    slug: "enterprise-account-executive",
    title: "Enterprise Account Executive",
    department: "Sales Positions",
    locations: ["Hybrid", "Austin", "New York City", "San Francisco"],
    type: "Hybrid",
    description:
      "Join our enterprise sales team to drive adoption of our game development platform among large gaming studios and entertainment companies. You'll manage complex sales cycles and build strategic relationships with key decision-makers.",
    responsibilities: [
      "Manage full sales cycle for enterprise accounts from prospecting to close",
      "Develop and execute strategic account plans",
      "Build relationships with C-level executives and technical decision-makers",
      "Coordinate with cross-functional teams including engineering and product",
      "Deliver presentations and product demonstrations to large audiences",
      "Maintain accurate forecasts and pipeline management",
    ],
    requirements: [
      "5+ years of enterprise software sales experience",
      "History of consistently exceeding quota ($1M+ annually)",
      "Experience selling to gaming, entertainment, or media companies",
      "Strong technical aptitude and ability to understand complex products",
      "Excellent presentation and communication skills",
      "Proficiency with Salesforce and sales engagement tools",
    ],
    niceToHave: [
      "Existing relationships in the gaming industry",
      "Experience with developer tools or infrastructure sales",
      "Understanding of game development workflows",
      "Previous experience at a high-growth startup",
    ],
    benefits: [
      "Competitive compensation package, including equity",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work arrangements",
      "Professional development budget",
      "Uncapped commission potential",
      "Quarterly team offsites",
    ],
    salaryRange: "$150,000 - $200,000",
  },
  {
    id: "5",
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
    id: "6",
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
]
