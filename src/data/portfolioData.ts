
// Role-specific content data
export type Role = 'fullstack' | 'ctf' | 'uiux' | 'management';

export type SkillItem = {
  name: string;
  level: number; // 1-5
  category?: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  features?: string[];
  techDetails?: string;
  collaboration?: string;
  type?: 'Individual' | 'Team' | 'Client' | 'Open Source';
};

export type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
};

export type CertificateItem = {
  name: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
  description?: string;
};

export type GalleryItem = {
  image: string;
  caption: string;
  alt: string;
  story?: string;
};

export type AboutContent = {
  name: string;
  tagline: string;
  bio: string;
  additionalInfo: string;
};

// About data for different roles
export const aboutData: Record<Role, AboutContent> = {
  fullstack: {
    name: "Reefah Tasnia Haque",
    tagline: "Full Stack Developer",
    bio: `Passionate about creating beautiful, functional digital experiences that solve real-world problems. 
    With expertise in both frontend and backend technologies, I build comprehensive solutions that deliver value.`,
    additionalInfo: `I specialize in JavaScript/TypeScript ecosystems, with particular focus on React, Node.js, and modern database technologies.
    My approach combines technical excellence with user-centered design principles to create applications that are not just functional,
    but also intuitive and enjoyable to use.`,
  },
  ctf: {
    name: "Reefah Tasnia Haque",
    tagline: "Cybersecurity Enthusiast & CTF Player",
    bio: `Dedicated cybersecurity enthusiast with a passion for ethical hacking and security research. I regularly participate in
    Capture The Flag competitions to sharpen my skills and stay updated with the latest security vulnerabilities and techniques.`,
    additionalInfo: `My expertise includes penetration testing, reverse engineering, cryptography, and web application security.
    I believe in responsible disclosure and using security knowledge to build more robust systems rather than exploiting vulnerabilities.`,
  },
  uiux: {
    name: "Reefah Tasnia Haque",
    tagline: "UI/UX Designer & Front-End Developer",
    bio: `Creative designer focused on crafting intuitive, beautiful user experiences that balance aesthetic appeal with functional design.
    I approach each project with empathy for users and a keen eye for detail.`,
    additionalInfo: `My design process involves extensive user research, wireframing, prototyping, and usability testing to ensure
    that the final product not only looks good but truly meets user needs and business objectives. I'm proficient with design tools
    like Figma and have the technical skills to bring those designs to life with code.`,
  },
  management: {
    name: "Reefah Tasnia Haque",
    tagline: "Team Leader & Project Manager",
    bio: `Experienced team leader with a track record of successfully managing technical projects and cross-functional teams.
    I excel at strategic planning, resource allocation, and fostering collaborative environments where innovation thrives.`,
    additionalInfo: `My management philosophy centers on clear communication, empowering team members, and maintaining a balance
    between achieving business goals and supporting individual growth. I have particular experience in leading university clubs
    and organizing large-scale events that bring together diverse stakeholders.`,
  }
};

export const skillsData: Record<Role, SkillItem[]> = {
  fullstack: [
    { name: "JavaScript", level: 4, category: "Frontend" },
    { name: "React.js", level: 3, category: "Frontend" },
    { name: "Next.js", level: 2, category: "Frontend" },
    { name: "HTML", level: 4, category: "Frontend" },
    { name: "CSS", level: 4, category: "Frontend" },
    { name: "Node.js", level: 4, category: "Backend" },
    { name: "Express.js", level: 4, category: "Backend" },
    { name: "PHP", level: 2, category: "Backend" },
    { name: "MongoDB", level: 3, category: "Backend" },
    { name: "PostgreSQL", level: 2, category: "Backend" },
    { name: "Oracle SQL", level: 3, category: "Backend" },
    { name: "MySQL", level: 2, category: "Backend" },
    { name: "Docker", level: 3, category: "DevOps" },
    { name: "Git", level: 4, category: "Tools" },
  ],
  ctf: [
    { name: "Reverse Engineering", level: 3, category: "Security" },
    { name: "Cryptography", level: 2, category: "Security" },
    { name: "Binary Exploitation", level: 2, category: "Security" },
    { name: "Digital Forensics", level: 2, category: "Security" },
    { name: "Pwn", level: 2, category: "Security" },
    { name: "OSINT", level: 5, category: "Security" },
    { name: "Python", level: 4, category: "Programming" },
    { name: "Bash", level: 4, category: "Programming" },
    { name: "C/C++", level: 3, category: "Programming" },
    { name: "Wireshark", level: 4, category: "Tools" },
    { name: "Ghidra", level: 3, category: "Tools" },
    { name: "gdb", level: 3, category: "Tools" },
    { name: "Hashcat", level: 3, category: "Tools" },
  ],
  uiux: [
    { name: "Figma", level: 5, category: "Design" },
    { name: "Adobe Illustrator", level: 3, category: "Design" },
    { name: "Prototyping", level: 4, category: "Process" },
    { name: "Wireframing", level: 4, category: "Process" },
    { name: "User Research", level: 4, category: "Process" },
    { name: "Information Architecture", level: 4, category: "Process" },
    { name: "Responsive Design", level: 4, category: "Skills" },
  ],
  management: [
    { name: "Team Leadership", level: 4, category: "Leadership" },
    { name: "Project Management", level: 3, category: "Management" },
    { name: "Microsoft Office Suite", level: 5, category: "Tools" },
    { name: "Excel", level: 4, category: "Tools" },
    { name: "Communication", level: 4, category: "Soft Skills" },
    { name: "Problem Solving", level: 4, category: "Soft Skills" },
    { name: "Time Management", level: 4, category: "Management" },
    { name: "Social Media Management", level: 3, category: "Digital" },
  ],
};

export const projectsData: Record<Role, ProjectItem[]> = {
  fullstack: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store built with Next.js, Node.js, and MongoDB. This platform includes user authentication, product catalog, shopping cart functionality, payment integration, and an admin dashboard.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "JWT Auth"],
      link: "#",
      github: "https://github.com/username/e-commerce-platform",
      type: "Team",
      features: [
        "User authentication and profile management",
        "Product catalog with advanced filtering",
        "Shopping cart and checkout process",
        "Payment processing with Stripe",
        "Admin dashboard for inventory management",
        "Order tracking and history"
      ],
      techDetails: "Built with a microservices architecture using Next.js for the frontend and Node.js/Express for the backend API. MongoDB is used for data storage with Mongoose ODM. Authentication is handled using JWT tokens.",
      collaboration: "Collaborative project with a team of 3 developers. I was responsible for the frontend architecture, payment integration, and deployment pipeline."
    },
    {
      title: "Task Management System",
      description: "A collaborative project management tool with real-time updates, designed to help teams track tasks, deadlines, and project milestones. Features include drag-and-drop task organization, file attachments, comments, and notifications.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["React", "Firebase", "Material UI", "Redux", "Real-time Database"],
      link: "#",
      github: "https://github.com/username/task-manager",
      type: "Individual",
      features: [
        "Drag-and-drop kanban board interface",
        "Real-time updates across all connected clients",
        "Task assignment and deadline tracking",
        "File attachments and rich text comments",
        "Email notifications for task updates",
        "Project analytics and reporting"
      ],
      techDetails: "Built with React and Firebase for real-time data synchronization. Uses Redux for state management and Material UI components. Firebase Authentication handles user management while Cloud Functions manage notifications.",
      collaboration: "Individual project developed as part of a web development bootcamp. Later extended with additional features based on user feedback."
    },
    {
      title: "Financial Dashboard",
      description: "Interactive data visualization dashboard for financial analytics, enabling users to monitor stocks, analyze market trends, and manage personal investments. The dashboard presents complex financial data in an accessible, visually appealing format.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["React", "D3.js", "Express", "PostgreSQL", "ChartJS", "REST API"],
      link: "#",
      github: "https://github.com/username/financial-dashboard",
      type: "Team",
      features: [
        "Real-time stock ticker and price charts",
        "Portfolio performance visualization",
        "Market trend analysis with customizable indicators",
        "Personalized watchlists and alerts",
        "News feed integration with sentiment analysis",
        "Responsive design for mobile and desktop"
      ],
      techDetails: "Frontend built with React and D3.js for data visualization. Backend uses Express and PostgreSQL for data storage. Financial data is fetched from multiple external APIs and processed in real-time.",
      collaboration: "Developed collaboratively with a team of 4 members. I led the frontend development and was responsible for the data visualization components and API integration."
    },
  ],
  ctf: [
    {
      title: "Web Vulnerability Scanner",
      description: "An automated tool for identifying common web security vulnerabilities such as XSS, SQL injection, CSRF, and insecure configurations. The scanner generates detailed reports with remediation recommendations and proof-of-concept exploit code.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de",
      tags: ["Python", "Web Security", "Ethical Hacking", "Automation", "OWASP"],
      github: "https://github.com/username/web-vulnerability-scanner",
      type: "Individual",
      features: [
        "Automated scanning for OWASP Top 10 vulnerabilities",
        "Custom payload generation for testing",
        "Detailed reporting with severity ratings",
        "Low false-positive rate with verification steps",
        "Configurable scan depth and target selection",
        "Support for authenticated scanning"
      ],
      techDetails: "Developed in Python using custom web crawling and analysis modules. Integrates with popular security tools and maintains a database of known vulnerability patterns.",
      collaboration: "Individual project developed for educational purposes and to assist in responsible security auditing."
    }
  ],
  uiux: [
    {
      title: "Banking App Redesign",
      description: "A complete redesign of a traditional banking application with a focus on simplicity, accessibility, and visual appeal. The project included user research, information architecture, wireframing, high-fidelity designs, and interactive prototyping.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      tags: ["UI/UX", "Figma", "User Research", "Mobile Design", "Accessibility", "Prototyping"],
      link: "#",
      type: "Client",
      features: [
        "Streamlined user onboarding process",
        "Simplified transaction history with visual categorization",
        "Smart budget planning and spending analysis tools",
        "Biometric authentication and enhanced security features",
        "Personalized insights and financial wellness indicators",
        "Accessible design compliant with WCAG guidelines"
      ],
      techDetails: "Created in Figma with comprehensive component libraries and design systems. Included responsive designs for mobile, tablet, and desktop experiences with adaptive layouts and interaction patterns.",
      collaboration: "Client project completed with continuous stakeholder feedback and multiple rounds of user testing. Collaborated with developers to ensure feasibility of implementation."
    }
  ],
  management: [
    {
      title: "University Club Website",
      description: "Designed and managed the website for our university club, improving member engagement by 40%. The site serves as a central hub for club activities, event registration, resource sharing, and community building among members.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      tags: ["Project Management", "Team Coordination", "Content Strategy", "WordPress", "SEO"],
      link: "#",
      type: "Team",
      features: [
        "Event calendar with registration functionality",
        "Member profiles and networking directory",
        "Resource library for sharing materials",
        "Blog with member contribution capabilities",
        "Integration with social media platforms",
        "Analytics dashboard for engagement tracking"
      ],
      techDetails: "Built on WordPress with custom themes and plugins. Implemented SEO best practices and mobile-responsive design. Set up automated content workflows and member management systems.",
      collaboration: "Led a team of 5 volunteers including content creators, designers, and technical support. Established editorial guidelines and content creation processes."
    },
    {
      title: "Social Media Campaign",
      description: "Led a team to create and execute a social media campaign that increased event attendance by 35%. The campaign spanned multiple platforms and included content creation, influencer outreach, analytics tracking, and community engagement strategies.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      tags: ["Social Media", "Team Leadership", "Content Creation", "Digital Marketing", "Analytics"],
      link: "#",
      type: "Team",
      features: [
        "Cross-platform content strategy (Instagram, Twitter, LinkedIn)",
        "Video series highlighting key speakers and topics",
        "Interactive polls and audience engagement activities",
        "Targeted ad campaigns with A/B testing",
        "Influencer partnerships and guest posting",
        "Comprehensive performance analytics"
      ],
      techDetails: "Used social media management tools like Hootsuite and Buffer for scheduling. Implemented tracking pixels and UTM parameters for conversion tracking. Created custom graphics and videos using Canva and Adobe Creative Suite.",
      collaboration: "Managed a cross-functional team including graphic designers, content writers, and marketing specialists. Coordinated with event organizers to ensure message consistency."
    }
  ]
};

export const experienceData: Record<Role, ExperienceItem[]> = {
  fullstack: [
    
  ],
  ctf: [
    {
      title: "Cybersecurity Mentor",
      company: "MIST Cyber Security Club",
      duration: "2024 - Present",
      description: "Mentoring junior CTF players, creating challenges, and organizing competition events.",
      skills: ["Challenge Creation", "Reverse Engineering", "Networking", "Mentorship"],
    },
    
  ],
  uiux: [
    {
      title: "Freelance UI/UX Designer",
      company: "Fiverr",
      duration: "2024 - Present",
      description: "Leading design initiatives for enterprise clients, focusing on creating cohesive user experiences across platforms.",
      skills: ["Design Systems", "User Research", "Prototyping", "Figma"],
    },
  ],
  management: [
    {
      title: "Team Lead",
      company: "University Tech Club",
      duration: "2023 - Present",
      description: "Leading a team of 10 members in organizing tech events, workshops, and hackathons. Improved team efficiency and event attendance by 30%.",
      skills: ["Team Leadership", "Event Management", "Delegation", "Communication"],
    },
    {
      title: "Project Coordinator",
      company: "Student Association",
      duration: "2022 - 2023",
      description: "Coordinated inter-university projects and competitions, managing timelines, resources, and team communication.",
      skills: ["Project Management", "Budgeting", "Cross-team Collaboration", "Problem Solving"],
    }
  ]
};

export const certificatesData: Record<Role, CertificateItem[]> = {
  fullstack: [
    {
      name: "Advanced React and Redux",
      issuer: "Udemy",
      date: "2023",
      link: "#",
      description: "In-depth course on React and Redux, covering advanced patterns and best practices.",  
    },
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2022",
      link: "#",
    },
    {
      name: "MongoDB Database Administrator",
      issuer: "MongoDB University",
      date: "2021",
      link: "#",
    },
    {
      name: "TypeScript Masterclass",
      issuer: "Frontend Masters",
      date: "2021",
      link: "#",
    },
  ],
  ctf: [
    {
      name: "Offensive Security Certified Professional",
      issuer: "Offensive Security",
      date: "2022",
      link: "#",
    },
    {
      name: "Certified Ethical Hacker",
      issuer: "EC-Council",
      date: "2021",
      link: "#",
    },
    {
      name: "National CTF Championship - 2nd Place",
      issuer: "National Cybersecurity Alliance",
      date: "2020",
      link: "#",
    },
    {
      name: "Web Security Fundamentals",
      issuer: "SANS Institute",
      date: "2019",
      link: "#",
    },
  ],
  uiux: [
  ],
  management: [
    {
      name: "Microsoft Office Specialist: Excel",
      issuer: "Microsoft",
      date: "2023",
      link: "#",
    },
    {
      name: "Social Media Management",
      issuer: "Coursera",
      date: "2022",
      link: "#",
    },
    {
      name: "Project Management Fundamentals",
      issuer: "LinkedIn Learning",
      date: "2022",
      link: "#",
    },
    {
      name: "Leadership and Team Management",
      issuer: "edX",
      date: "2021",
      link: "#",
    },
  ],
};

export const galleryImages: GalleryItem[] = [
  {
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc",
    caption: "Receiving Award at Tech Hackathon",
    alt: "Award ceremony at tech competition",
    story: "Won 1st place in a national hackathon with my team, showcasing our innovative project.",
  },
  {
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
    caption: "Leading Team Workshop",
    alt: "Team workshop session",
    story: "Conducted a hands-on workshop on full-stack development for junior developers in our university club.",
  },
  {
    image: "https://images.unsplash.com/photo-1532598065077-8b14c8f29165",
    caption: "CTF Competition Finals",
    alt: "Cybersecurity team at competition",
    story: "Made it to the finals of the regional CTF competition, competing against top teams from universities across the country.",
  },
  {
    image: "https://images.unsplash.com/photo-1544531586-5f544a0b3b99",
    caption: "University Tech Conference",
    alt: "Speaking at university tech conference",
    story: "Presented my research on modern web development practices at the annual university technology conference.",
  },
];
