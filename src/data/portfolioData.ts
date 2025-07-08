// Role-specific content data
export type Role = "fullstack" | "ctf" | "uiux" | "management";

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
  type?: "Individual" | "Team" | "Client" | "Open Source";
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
  credentialUrl?: string; // Optional field for credential URL
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
  image?: string; // User profile image
};

export const aboutData: Record<Role, AboutContent> = {
  fullstack: {
    name: "Reefah Tasnia Haque",
    tagline: "Building robust, scalable web solutions.",
    bio: `Passionate about creating beautiful, functional digital experiences that solve real-world problems. 
With expertise in both frontend and backend technologies, I build comprehensive solutions that deliver value.`,
    additionalInfo: `I specialize in JavaScript/TypeScript ecosystems, with particular focus on React, Node.js, and modern database technologies.
My approach combines technical excellence with user-centered design principles to create applications that are not just functional,
but also intuitive and enjoyable to use.`,
    image: "/Reefah_Tasnia.jpg", // Example image, user can change
  },
  ctf: {
    name: "Reefah Tasnia Haque",
    tagline: "Solving challenges, securing systems.",
    bio: `Passionate about creating beautiful, functional digital experiences that solve real-world problems. 
With expertise in both frontend and backend technologies, I build comprehensive solutions that deliver value.`,
    additionalInfo: `I specialize in JavaScript/TypeScript ecosystems, with particular focus on React, Node.js, and modern database technologies.
My approach combines technical excellence with user-centered design principles to create applications that are not just functional,
but also intuitive and enjoyable to use.`,
  },
  uiux: {
    name: "Reefah Tasnia Haque",
    tagline: "Designing intuitive and delightful user experiences.",
    bio: `Passionate about creating beautiful, functional digital experiences that solve real-world problems. 
With expertise in both frontend and backend technologies, I build comprehensive solutions that deliver value.`,
    additionalInfo: `I specialize in JavaScript/TypeScript ecosystems, with particular focus on React, Node.js, and modern database technologies.
My approach combines technical excellence with user-centered design principles to create applications that are not just functional,
but also intuitive and enjoyable to use.`,
  },
  management: {
    name: "Reefah Tasnia Haque",
    tagline: "Leading teams to success through collaboration.",
    bio: `Passionate about creating beautiful, functional digital experiences that solve real-world problems. 
With expertise in both frontend and backend technologies, I build comprehensive solutions that deliver value.`,
    additionalInfo: `I specialize in JavaScript/TypeScript ecosystems, with particular focus on React, Node.js, and modern database technologies.
My approach combines technical excellence with user-centered design principles to create applications that are not just functional,
but also intuitive and enjoyable to use.`,
  },
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
      title: "OncoConnect",
      description:
        "Centralized cancer care platform connecting patients and doctors through a secure hub, streamlining appointment scheduling, medical history tracking, and communication.",
      image:"/OncoConnect.png",
      tags: ["React", "CSS", "MongoDB", "Supabase", "Google Gemini API"],
      link: "#",
      github: "https://github.com/reefahtasnia/OncoConnectV2.git ",
      type: "Team",
      features: [
        "User authentication and role-based access",
        "Appointment scheduling with doctor-patient messaging",
        "Medical record storage and retrieval",
        "Integration with Google Gemini API for health insights",
        "Responsive design for mobile and desktop",
        "Real-time data sync across user profiles",
      ],
      techDetails:
        "Frontend built with React and CSS, backend using Supabase as BaaS, MongoDB for flexible document-based storage, and Gemini API for intelligent patient assistance.",
      collaboration:
        "Collaborated with two highly talented developers during academic coursework at MIST.",
    },
    {
      title: "Maternity Maven",
      description:
        "Health management application tailored for expecting mothers, offering real-time tracking, doctor communication, and robust data security using Oracle Database integration.",
      image: "/maternitymaven.png",
      tags: ["React", "Node.js", "Express.js", "Oracle", "CSS"],
      link: "#",
      github: "https://github.com/reefahtasnia/MaternityMaven ",
      type: "Team",
      features: [
        "User profile creation for mothers, doctors, and admins",
        "Medical history and appointment management",
        "Nutrition, fetal movement, and medication trackers",
        "Integrated e-commerce shop for maternal products",
        "Feedback and complaint submission system",
        "Secure data handling with Oracle DB",
      ],
      techDetails:
        "Frontend: ReactJS with CSS; Backend: Node.js + Express.js RESTful API; Database: Oracle for secure and structured data storage.",
      collaboration:
        "Collaborated with three talented classmates for this academic project completed at MIST.",
    },
    {
      title: "Focus Forge",
      description:
        "Personalized productivity tool designed to minimize distractions with task lists, timers, and a music player, featuring a clean UI/UX for enhanced focus.",
      image: "/focusforge.png",
      tags: ["HTML", "CSS", "PHP", "MySQL", "XAMPP"],
      link: "#",
      github: "https://github.com/Reefah84/focusforge_backend ",
      type: "Individual",
      features: [
        "Task list creation and prioritization",
        "Pomodoro-style timer for time blocking",
        "Embedded music player for concentration",
        "User-friendly interface for seamless interaction",
        "Data persistence using MySQL database",
        "Local development using XAMPP stack",
      ],
      techDetails:
        "Built using HTML, CSS, PHP for frontend and backend logic, with MySQL as the database and XAMPP for local server deployment.",
      collaboration:
        "Solo project developed as part of personal learning and academic coursework.",
    },
    {
      title: "PDF Genius",
      description:
        "An AI-powered PDF assistant that uses Large Language Models, ChromaDB, and a modern Next.js frontend to provide source-cited answers from uploaded documents.",
      image: "/PDFGenius.png",
      tags: ["Python", "Next.js", "ChromaDB", "LLM", "Flask", "Langchain", "Vector Database", "Tailwind CSS"],
      github: "https://github.com/reefahtasnia/LLM_Project",
      type: "Individual",
      features: [
        "Upload PDF files via modern web UI",
        "Ask context-aware questions from PDF content",
        "Get instant, source-cited answers using LLM",
        "PDF embedding and vector storage in ChromaDB",
        "Responsive chat UI built with Next.js and Tailwind",
        "Flask backend to handle document processing and API requests",
        "Automatic PDF parsing, splitting, and embedding pipeline"
      ],
      techDetails:
        "Frontend: Built with Next.js and Tailwind CSS for a sleek, responsive UI. Backend: Flask handles LLM-based PDF question answering, with ChromaDB used for vector similarity search. Langchain used to orchestrate LLM workflows.",
      collaboration:
        "Individual project created to explore real-world LLM use cases for document-based AI assistants, with a focus on secure, local processing and retrieval-augmented generation.",
    },    
    {
      title: "PCOS Journey",
      description:
        "Java-based desktop application connecting patients with specialists through symptom tracking, quizzes, and treatment reminders to manage PCOS effectively.",
      image: "/pcosjourney.png",
      tags: ["Java", "JavaFX", "OOP", "Desktop App", "UI/UX"],
      link: "#",
      github: "https://github.com/Reefah84/PCOSJourney.git ",
      type: "Team",
      features: [
        "Symptom tracking and quiz-based assessment",
        "Treatment reminder notifications",
        "Patient-doctor connection module",
        "Simple and intuitive JavaFX UI",
        "Modular OOP architecture",
        "Offline functionality for accessibility",
      ],
      techDetails:
        "Developed using Java and JavaFX with object-oriented principles to ensure scalability and maintainability. Designed as a standalone desktop app for ease of use.",
      collaboration:
        "Collaborated with two talented classmates on this academic project focused on healthcare problem-solving using core programming concepts.",
    },
  ],
  ctf: [
    {
      title: "Smart Company Management System",
      description:
        "A Cisco Packet Tracer simulation project integrating IoT sensors and networking technologies like firewalls, VPNs, VoIP, and smart sensors to enhance corporate security, communication, and operational efficiency.",
      image: "https://images.unsplash.com/photo-1581093588401-04f23be70276 ",
      tags: [
        "Cisco Networking",
        "IoT",
        "Packet Tracer",
        "Firewall",
        "VPN",
        "VoIP",
      ],
      link: "#",
      github:
        "https://github.com/reefahtasnia/Smart-Company-Management-System.git ",
      type: "Team",
      features: [
        "Network security using Cisco ASA firewall with ACLs and NAT",
        "Secure remote access via IPsec VPN tunneling",
        "Internal voice communication using VoIP infrastructure",
        "IoT-based environmental monitoring (fire, water level)",
        "RFID access control system for physical security",
        "Solar power generation and energy usage tracking",
      ],
      techDetails:
        "Simulated using Cisco Packet Tracer 8.2 with network devices configured for secure communication, disaster response automation, and power management systems.",
      collaboration:
        "Collaborative project with a team of 3 developers. I contributed to IoT sensor integration.",
    },
  ],
  uiux: [
    
  ],
  management: [

  ],
};

export const experienceData: Record<Role, ExperienceItem[]> = {
  fullstack: [
    {
      title: "Industrial Trainee",
      company: "NEXT Ventures - Internship",
      duration: "May 2025 - May 2025",
      description:
        "Participated in a 15-day intensive industrial training program covering 7+ departments including Product Management, Design, Frontend, Backend, DevOps, SQA, Data Engineering and Payment Systems. Built a working LLM chatbot using vector databases and custom PDF input. Worked directly with engineers and mentors on real-world fintech systems and workflows.",
      skills: [
        "Product Management",
        "Full Stack Development", 
        "LLM Integration",
        "Vector Databases",
        "DevOps",
        "Fintech Systems",
        "Docker",
        "Kubernetes",
        "AWS"
      ],
    },
  ],
  ctf: [
    {
      title: "Secretary and Mentor",
      company: "MIST Cyber Security Club",
      duration: "2024 - Present",
      description:
        "Serving as Secretary and mentoring junior CTF players, creating challenges, and organizing competition events.",
      skills: [
        "Challenge Creation",
        "Reverse Engineering",
        "Networking",
        "Mentorship",
        "Leadership",
      ],
    },
  ],
  uiux: [
    {
      title: "Freelance UI/UX Designer",
      company: "Fiverr",
      duration: "2024 - Present",
      description:
        "Leading design initiatives for enterprise clients, focusing on creating cohesive user experiences across platforms.",
      skills: ["Design Systems", "User Research", "Prototyping", "Figma"],
    },
  ],
  management: [
    {
      title: "Management Team Lead",
      company: "MIST Mongol Barota - Mars Rover Society",
      duration: "2023 - 2025",
      description:
        "Actively  managed people of multiple teams responsible for the development and documentation of the rover",
      skills: [
        "Team Leadership",
        "Event Management",
        "Delegation",
        "Communication",
      ],
    },
    {
      title: "Executive Member of Committe of Communication, Promotion and Design",
      company: "MIST Computer Club",
      duration: "2023 - Present",
      description:
        "Dynamic content writer at MIST Computer Club, crafting compelling and engaging narratives that captivate audience and drive impactful communication.",
      skills: [ "Dynamic Communication", "Web Content Writing"],
    },
    {
      title: "Assistant Financial Secretary",
      company: "Adamjee Cantonment College Taekwondo Club",
      duration: "2021 - 2022",
      description:
        "Assisted in managing the club's finances, including budgeting and expense tracking.",
      skills: [
        "Project Management",
        "Budgeting",
        "Cross-team Collaboration",
      ],
    },
    
  ],
};

export const certificatesData: Record<Role, CertificateItem[]> = {
  fullstack: [
    {
      name: "Full Stack Web Development using PHP and MySQL",
      issuer: "MIST Innovation Club",
      date: "Jun 2024",
      link: "#",
      image: "/MIC_fullstack.jpg",
      description:
        "Completed a comprehensive course on full-stack web development, focusing on PHP and MySQL for backend development.",
    },
    {
      name: "React (Basic)",
      issuer: "HackerRank",
      date: "Jul 2025",
      image: "/HackerRank react_basic certificate Reefah Tasnia-1.png",
      description: "HackerRank React (Basic) Certificate. Skills: React JS · React.js",
      credentialUrl: "https://www.hackerrank.com/certificates/6e006d487a63"
    },
    {
      name: "SQL (Basic)",
      issuer: "HackerRank",
      date: "Jul 2025",
      image: "/HackerRank react_basic certificate Reefah Tasnia-1.png",
      description: "HackerRank SQL (Basic) Certificate. Skills: SQL",
      credentialUrl: "https://www.hackerrank.com/certificates/394820cc30e9"
    },
    {
      name: "SQL (Intermediate)",
      issuer: "HackerRank",
      date: "Jul 2025",
      image: "/HackerRank sql_intermediate certificate-1.png",
      description: "HackerRank SQL (Intermediate) Certificate. Skills: SQL",
      credentialUrl: "https://www.hackerrank.com/certificates/bf78d75621b6"
    },
  ],
  ctf: [
    {
      name: "Connect and Protect: Networks and Network Security",
      issuer: "Google",
      date: "Jul 2025",
      image: "/connect and protect network and network security certificate-1.png",
      description: "Google Cybersecurity Certificate. Skills: Cybersecurity",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/NIF6WI5T2TLB"
    },
    {
      name: "Foundations of Cybersecurity",
      issuer: "Google Certification",
      date: "Jun 2025",
      image: "/foundations of cybersecurity certificate-1.png",
      description: "Google Foundations of Cybersecurity. Skills: Cybersecurity · Security Management · Cyber Attacks · Data Ethics · Security Controls · Security Information and Event Management (SIEM) · Cyber Security Strategy · Network Analysis · Information Assurance · Cyber Risk · Cybersecurity Incident Response",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/9MIHMHGJVMK6"
    },
    {
      name: "Play It Safe: Manage Security Risks",
      issuer: "Google",
      date: "Jun 2025",
      image: "/play it safe certificate-1.png",
      description: "Google Play It Safe: Manage Security Risks. Skills: Security Information and Event Management (SIEM)",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/4UTRTSIF4JP5"
    },
    {
      name: "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
      issuer: "IBM",
      date: "Jun 2025",
      image: "/Flutter development certificate-1.png",
      description: "IBM Flutter and Dart: Developing iOS, Android, and Mobile Apps. Skills: Flutter · Dart · Mobile Application Development · Android Studio",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/1YG24GPYYNIE"
    },
    {
      name: "Hands on Ethical Hacking and Security Analysis Course",
      issuer: "MIST Cyber Security Club & Cyber Bangla",
      date: "2025",
      image: "/mscs_bytebrigade.png",
      description: "Learned different tools and techniques on ethical hacking.",
    },
    {
      name: "Phoenix CTF 2025 participation",
      issuer: "Red Team Village",
      date: "2025",
      image: "/Phoenix_ctf.jpg",
      description: "Participated in Phoenix Summit CTF 2025. My team and I ranked 19th in the final scoreboard.",
    },
    {
      name: "UAP Cyber Siege 2025 participation",
      issuer: "University of Asia Pacific",
      date: "2025",
      image: "/UAP_ctf.jpg",
      description: "Participated in UAP Cyber Siege 2025 and my team and I secured 18th position in the final scoreboard.",
    },
    {
      name: "MIST Leetcon 2023 HackMeIfYouCan Participation",
      issuer: "MIST Cyber Security Club",
      date: "2025",
      image: "/leetcon_ctf.jpg",
      description: "First onsite CTF round with my team. Got inspired to continue competing.",
    },
  ],
  uiux: [
    {
      name: "Inception to Graphic Design",
      issuer: "MIST Innovation Club",
      date: "2022",
      image: "/MIC_graphic.jpg",
      description: "Learned basics of Adobe Photoshop and Adobe Illustrator and created a basic marketing poster.",
    },
  ],
  management: [
    {
      name: "MIST Mongol Barota Team secured 2nd Position in Anatolian Rover Challenge 2024",
      issuer: "Anatolian Rover Challenge",
      date: "2024",
      image: "/ARC_24.jpg",
      description: "As the team lead of the Management sub-team, I coordinated with multidisciplinary teams and helped support the main team to go to Turkiye to compete.",
    },
    {
      name: "MIST Mongol Barota Team secured 5th Position in Anatolian Rover Challenge 2023",
      issuer: "Anatolian Rover Challenge",
      date: "2023",
      image: "/ARC_23.png",
      description: "Worked as the team member of Management sub-team and learned all the necessary tasks and documentation from the team lead.",
    },
  ],
};

export const galleryImages: GalleryItem[] = [
  {
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc",
    caption: "Receiving Award at Tech Hackathon",
    alt: "Award ceremony at tech competition",
    story:
      "Won 1st place in a national hackathon with my team, showcasing our innovative project.",
  },
  {
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
    caption: "Leading Team Workshop",
    alt: "Team workshop session",
    story:
      "Conducted a hands-on workshop on full-stack development for junior developers in our university club.",
  },
  {
    image: "https://images.unsplash.com/photo-1532598065077-8b14c8f29165", //demo link
    caption: "CTF Competition Finals",
    alt: "Cybersecurity team at competition",
    story:
      "Made it to the finals of the regional CTF competition, competing against top teams from universities across the country.",
  },
  {
    image: "https://images.unsplash.com/photo-1544531586-5f544a0b3b99",
    caption: "University Tech Conference",
    alt: "Speaking at university tech conference",
    story:
      "Presented my research on modern web development practices at the annual university technology conference.",
  },
];

export const aboutBio = `Passionate about creating beautiful, functional digital experiences that solve real-world problems. 
With expertise in both frontend and backend technologies, I build comprehensive solutions that deliver value.`;

export const aboutAdditionalInfo = `I specialize in JavaScript/TypeScript ecosystems, with particular focus on React, Node.js, and modern database technologies.
My approach combines technical excellence with user-centered design principles to create applications that are not just functional,
but also intuitive and enjoyable to use.`;
