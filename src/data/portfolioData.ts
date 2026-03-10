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
      title: "Knowble: Your Smart Learning Companion",
      description:
        "Flutter-based EdTech app with AI-powered quizzes, personalized course guidance, real-time chat, and smart scheduling to make learning interactive and efficient.",
      image: "/Knowble.png",
      tags: [
        "Flutter",
        "Dart",
        "Supabase",
        "PostgreSQL",
        "Google Gemini API",
        "Mobile App",
      ],
      link: "#",
      github: "https://github.com/reefahtasnia/Knowble",
      type: "Team",
      features: [
        "AI-generated quizzes with instant feedback",
        "Personalized course recommendations and smart search",
        "Real-time chat for instructor-student support",
        "Study scheduler with reminders and local notifications",
        "Downloadable course materials (PDF, video) with offline access",
        "Real-time data sync via Supabase and secure authentication",
      ],
      techDetails:
        "Built with Flutter 3 for cross-platform delivery using Provider for state management. Supabase (PostgreSQL) powers auth, storage, and real-time sync; Node.js + Express support backend services and Gemini API integration for AI tutoring and content generation.",
      collaboration:
        "Developed with a four-person team: Sifat Bin Asad, Mehnaj Hridi, Progga Laboni Ray, and Reefah Tasnia Haque.",
    },
    {
      title: "PodiumPerfect",
      description:
        "AI-powered debate and public speaking coach with speech analysis, team collaboration, and admin controls; submitted for Therap JavaFest 2025.",
      image: "/PodiumPerfect.png",
      tags: [
        "Java",
        "Spring Boot",
        "MongoDB",
        "JWT",
        "React",
        "Vite",
        "Tailwind",
        "Google Cloud AI",
      ],
      link: "https://youtu.be/RzkaMyQz3cs?si=wSERu9ArLfX7vmTg",
      github: "https://github.com/reefahtasnia/PodiumPerfect",
      type: "Team",
      features: [
        "AI debate partners with personas and dynamic topics",
        "Speech analysis with metrics and progress tracking",
        "Socratic coaching mode for structured learning",
        "Major features done personally: AI integration, speech analysis, frontend UI/UX",
        "Admin dashboard for users, topics, and analytics",
        "Secure JWT authentication with role-based access",
      ],
      techDetails:
        "Backend: Spring Boot 3.5.4 (Java 17), MongoDB, Spring Security with JWT, Google Cloud AI for debate responses. Frontend: React 19 with Vite, Tailwind CSS + DaisyUI, React Router and Context API, Recharts for analytics.",
      collaboration:
        "Built with Reefah Tasnia and Samiha Akter as a competition submission for Therap JavaFest 2025.",
    },
    {
      title: "OncoConnect",
      description:
        "Centralized cancer care platform connecting patients and doctors through a secure hub, streamlining appointment scheduling, medical history tracking, and communication.",
      image: "/OncoConnect.png",
      tags: ["React", "CSS", "MongoDB", "Supabase", "Google Gemini API"],
      link: "https://youtu.be/dzlgqOCJZa4?si=8ksYEzerNWfidKkh",
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
      link: "https://youtu.be/qca_ZSVZIko?si=pOvAULr5nGmekYQh",
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
      image: "/Smart_Company_Management.png",
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
    {
      title: "Classroom Behavior Analyzer",
      description:
        "An IoT- and computer vision–based smart classroom monitoring system that automates student attendance, engagement analysis, noise monitoring, and security using ESP32-CAM, Arduino, and multi-sensor integration.",
      image: "/Dashboard.png",
      tags: [
        "IoT",
        "Computer Vision",
        "ESP32-CAM",
        "Arduino",
        "RFID",
        "Embedded Systems",
        "React.js",
      ],
      link: "https://youtu.be/jozQhont1Jk?si=oe6AXbZc8YlrOHBQ",
      github: "https://github.com/reefahtasnia/CI_Classroom_Behavior_Analyzer",
      type: "Team",
      features: [
        "RFID-based automated attendance tracking with entry and exit monitoring",
        "Computer vision–based head posture detection using SSIM algorithm",
        "Real-time classroom noise level monitoring with threshold alerts",
        "Ultrasonic motion detection for unauthorized backdoor exits",
        "Servo-controlled access system for automated door operation",
        "Live teacher dashboard with visual analytics and alerts",
      ],
      techDetails:
        "Developed using ESP32-CAM for vision-based posture detection and Arduino Mega for sensor integration, including RFID, ultrasonic, sound sensors, servo motors, LCD displays, and buzzers. Image processing implemented using SSIM for engagement detection, with real-time data visualization on a web-based teacher dashboard.",
      collaboration:
        "Collaborative academic project completed by a team of four members. I contributed to system integration, sensor coordination, and overall implementation of the classroom monitoring framework.",
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
      skills: ["Dynamic Communication", "Web Content Writing"],
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
      name: "Introduction to Software Quality Assurance",
      issuer: "Board Infinity (Coursera)",
      date:"March 2026",
      image: "/Introduction to SQA by Board Infinity.png",
      description: "Introduction to SQA. Skills: Software Testing · Quality Assurance · Test Automation · Manual Testing ",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/4QZKSBFTX683"
    },
    {
      name: "Pre Security Certificate",
      issuer: "TryHackMe",
      date: "February 2026",
      image:"/tryhackme pre security.png",
      description: "Basic concepts of all fields of cybersecurity. Skills: Cybersecurity · Networking · Linux · Web Exploitation · Cryptography · OSINT",
      credentialUrl: "https://tryhackme.com/certificate/THM-SBW9KSOKO4"
    },
    {
      name: "Automate Cybersecurity Tasks with Python",
      issuer: "Google",
      date: "August 2025",
      image: "/Automate Cybersecurity Tasks with Python-1.png",
      description: "Google Cybersecurity Certificate. Skills: Python Programming . Cybersecurity Automation . Task Automation",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/NDPFPF2Z6ZKT"
    },
    {
      name: "Sound the Alarm: Detection and Response",
      issuer: "Google",
      date: "August 2025",
      image: "/Sound the alarm incident detection and response-1.png",
      description: "Google Cybersecurity Certificate. Skills: Incident Response . Intrusion Detection and Prevention . Wireshark . TCP/IP",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/MTKK4HEKMVKM"
    },
    {
      name: "Assets, Threats, and Vulnerabilities",
      issuer: "Google",
      date: "August 2025",
      image: "/Assets, Threats, and Vulnerabilities certificate-1.png",
      description: "Google Cybersecurity Certificate. Skills: Threat Detection . Threat Management . Cryptography",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/53A17TUQUM2V"
    },
    {
      name: "Ethical Hacking Foundations",
      issuer: "Packt",
      date: "July 2025",
      image: "/ethical hacking foundations by packt-1.png",
      description: "Beginner Level course. Skills: Kali Linux · Command-Line Interface . Virtual Machines",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/TA66OBA2ZIA0"
    },
    {
      name: "Tools of the Trade: Linux and SQL",
      issuer: "Google",
      date: "July 2025",
      image: "/tools of trade certificate-1.png",
      description: "Google Cybersecurity Certificate. Skills: Kali Linux · SQL . Bash Scripting",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/AKGZG2WYKJDJ"
    },
    {
      name: "Connect and Protect: Networks and Network Security",
      issuer: "Google",
      date: "Jul 2025",
      image: "/connect and protect network and network security certificate-1.png",
      description: "Google Cybersecurity Certificate. Skills: Cybersecurity",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/NIF6WI5T2TLB"
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
      name: "Foundations of Cybersecurity",
      issuer: "Google Certification",
      date: "Jun 2025",
      image: "/foundations of cybersecurity certificate-1.png",
      description: "Google Foundations of Cybersecurity. Skills: Cybersecurity · Security Management · Cyber Attacks · Data Ethics · Security Controls · Security Information and Event Management (SIEM) · Cyber Security Strategy · Network Analysis · Information Assurance · Cyber Risk · Cybersecurity Incident Response",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/9MIHMHGJVMK6"
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
      date: "May 2025",
      image: "/mscs_bytebrigade.png",
      description: "Learned different tools and techniques on ethical hacking.",
    },
    {
      name: "Phoenix CTF 2025 participation",
      issuer: "Red Team Village",
      date: "May 2025",
      image: "/Phoenix_ctf.jpg",
      description: "Participated in Phoenix Summit CTF 2025. My team and I ranked 19th in the final scoreboard.",
    },
    {
      name: "UAP Cyber Siege 2025 participation",
      issuer: "University of Asia Pacific",
      date: "May 2025",
      image: "/UAP_ctf.jpg",
      description: "Participated in UAP Cyber Siege 2025 and my team and I secured 18th position in the final scoreboard.",
    },
    {
      name: "MIST Leetcon 2023 HackMeIfYouCan Participation",
      issuer: "MIST Cyber Security Club",
      date: "June 2023",
      image: "/leetcon_ctf.jpg",
      description: "First onsite CTF round with my team. Got inspired to continue competing.",
    },
    {
      name: "BUP CTF 2025 participation",
      issuer: "BUP Computer Programming Club & Knight Squad",
      date: "Oct 2025",
      image: "/BUP CTF 9th.png",
      description: "Participated in BUP CTF 2025 with team Kali_Hunters and secured 9th place out of 39 teams. Successfully solved challenging reverse engineering problems and demonstrated strong cybersecurity skills in collaboration with teammates.",
    },
  ],
  uiux: [
    {
        name: "Mastering UI/UX Design Course",
        issuer: "Grameenphone Academy's Freelancing Factory Program",
        description: "In recognition of outstanding dedication for the completion of the Mastering UI/UX Design Course under the Freelancing Factory Program.",
        image: "/1770130308011.jpg", 
        credentialUrl: "https://www.grameenphone.academy/cert/f74d4f2da211",
        date: "Jan 2026",
    },
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
      name: "MIST Mongol Barota Team Member Recognition",
      issuer: "MIST Mongol Barota",
      date: "2024-2025",
      image: "/2024 to 2025 Mongol Barota.png",
      description: "Certificate of Recognition for valuable contributions as a team member of MIST Mongol Barota during the period 2024–2025. Recognized for dedication and teamwork in supporting the development and documentation of the rover project.",
    },
    {
      name: "MIST Mongol Barota Team Contribution & Management Leadership",
      issuer: "MIST Mongol Barota",
      date: "2023-2024",
      image: "/Mongol Barota 23 to 24.png",
      description: "Certificate of Recognition for dedication and contribution as a member of the MIST Mongol Barota team. Served as general member and later as Team Lead of the Management sub-team from 2023 to 2024, playing a key role in coordinating multidisciplinary teams and supporting team's participation in Anatolian Rover Challenge 2024.",
    },
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
    image: "/IMG_5699.JPG",
    caption: "Grameenphone Academy Celebration at Radisson Blu Dhaka",
    alt: "Grameenphone Academy Celebration event at Radisson Blu Dhaka",
    story:
      "On Dec 6, 2025, I attended the Grameenphone Academy Celebration at Radisson Blu Dhaka with an inspiring community of learners, mentors, and industry professionals. The SHERO segment powerfully highlighted women leaders, and the eco-focused fashion show raised environmental awareness. It was wonderful reconnecting with the GP Academy network and reflecting on our growth."
  },
  {
    image: "/GP_House_Visit_23_OCT.jpg",
    caption: "2nd Place in Prompt Engineering Quiz at GP House",
    alt: "Prompt Engineering session at Grameenphone House",
    story:
      "Still can't believe it—2nd place out of nearly 300 participants! I attended a Prompt Engineering session at GP House on Oct 23rd, and unexpectedly placed 2nd in the live quiz. I wasn't expecting to win; I was just there to learn and connect. Each time I visit GP House, I leave with something new—a lesson, a connection, or a bit more inspiration. What struck me most was how genuinely welcoming everyone was and their commitment to youth development."
  },
  {
    image: "/BUP_CTF.jpg",
    caption: "BUP CTF 2025 - 9th Place Finish with Kali_Hunters",
    alt: "BUP CTF 2025 cybersecurity competition achievement",
    story:
      "Walking into BUP CTF 2025, our team Kali_Hunters had one goal: to push harder than we did at UAP Cyber Siege and prove ourselves among Bangladesh's top cybersecurity minds. The qualification round was intense, but we made it through. Then came the main event—challenges piling up, time ticking away, and the pressure mounting with every passing hour. At one point, I found myself staring at a particularly nasty reverse engineering problem. The scoreboard was frozen, we were sitting in 16th place, and honestly, I wasn't sure if we could climb higher. But I didn't give up. I dug deeper, analyzed the code, and finally cracked it. The wait for final results felt eternal, filled with nervous energy and what-ifs. Then came the announcement: 9th place out of 39 teams. I'll never forget that moment—the relief, the joy, the realization that all our late nights, countless bugs we debugged together, and the trust we had in each other had paid off. To my teammates Sumaiya, Sabbir, and Ibrahim: you guys are incredible. This win belongs to all of us, and I'm grateful for every challenge we solved together and every moment we pushed through the doubt."
  },
  {
    image: "/gpacademy1.jpeg",
    caption: "Celebrating Milestone at GP Academy as Freelance Factory Batch 1",
    alt: "Event at GP House celebrating GP Academy milestone",
    story:
      "Celebrated GP Academy crossing the $10,000 earning milestone through the Freelancing Factory program. Grateful for inspiring mentorship, supportive hosts, and the growth I’ve achieved in just five months of starting UI/UX design."
  },
  {
    image: "/problem_setter.jpg",
    caption: "Talent Hunt 2025 - Problem Setter & Organizer",
    alt: "Talent Hunt 2025 CTF event organization",
    story:
      "On July 5th, I stepped into the role of problem setter and organizer for Talent Hunt 2025, a Capture the Flag contest designed for freshers. Coordinating with classmates and juniors to create challenging yet fair problems, manage the competition flow, and ensure every fresher had an engaging learning experience was incredibly rewarding. Seeing their curiosity and enthusiasm as they tackled the challenges reminded me why I love this community. It was about building the next generation of cybersecurity enthusiasts."
  },
  {
    image: "/mcsc.jpeg",
    caption: "First Cybersecurity Class taken at MIST Cyber Security Club",
    alt: "Cybersecurity club session with students learning Kali Linux",
    story:
      "Conducted my first session for the Freshers’ Batch of MIST Cyber Security Club, introducing them to Kali Linux tools and Capture the Flag challenges. The energy and curiosity were amazing, and we wrapped up with a fun Kahoot quiz."
  },  
  {
    image: "/next.jpeg",
    caption: "Industrial Training at NEXT Ventures",
    alt: "Group training session at fintech company",
    story:
      "Completed 15 days of intensive industrial training at NEXT Ventures, working across product management, design, frontend, backend, data engineering, QA, DevOps, and payment integration. Our final project was an LLM chatbot. The experience boosted my confidence and exposed me to real-world workflows."
  },
  {
    image: "/uap.jpeg",
    caption: "UAP Cyber Siege 2025 Finals",
    alt: "Cybersecurity competition setup with team members",
    story:
      "Competed in the final round of UAP Cyber Siege 2025 with my team, securing 18th place on the leaderboard. It was a thrilling experience tackling complex cybersecurity challenges, learning teamwork, and gaining insights for my future journey."
  },
];

export const aboutBio = `Passionate about creating beautiful, functional digital experiences that solve real-world problems. 
With expertise in both frontend and backend technologies, I build comprehensive solutions that deliver value.`;

export const aboutAdditionalInfo = `I specialize in JavaScript/TypeScript ecosystems, with particular focus on React, Node.js, and modern database technologies.
My approach combines technical excellence with user-centered design principles to create applications that are not just functional,
but also intuitive and enjoyable to use.`;
