export const personalInfo = {
  name: "Amaan Shaikh",
  role: "Python Full Stack Developer | Django Developer",
  status: "Open to Work",
  statusSub: "Available for Full-time Roles & Internships",
  location: "Gandhinagar, Gujarat, India",
  email: "shaikhamaan0785@gmail.com",
  phone: "+91 99877 20785",
  github: "https://github.com/amaansk45",
  linkedin: "https://www.linkedin.com/in/amaan-shaikh-771623222/",
  resumePath: "./resume.pdf",
  avatar: "./avatar-animated.png",
  avatarCutout: "./avatar-animated.png",
  avatarAnimated: "./avatar-animated.png",
  bio: "Master of Computer Application (Semester 3) scholar with a passion for architecting scalable web applications, robust Django RESTful APIs, and clean full-stack user experiences. Driven by clean code, structured database design, and continuous learning.",
  heroDescription: "I build modern, scalable and user-friendly web applications using Python, Django, React and modern web technologies.",
  careerGoal: "To become a professional Python Full Stack Developer and build scalable, real-world web applications that deliver measurable value.",
};

export const quickStats = [
  {
    label: "Projects Built",
    value: "3",
    detail: "Production & Academic Web Apps",
  },
  {
    label: "Technologies",
    value: "10+",
    detail: "Python, Django, React, SQL & more",
  },
  {
    label: "Academic CPI",
    value: "7.44",
    detail: "MCA Semester 3 (KSV)",
  },
  {
    label: "Currently Learning",
    value: "Advanced DRF",
    detail: "Microservices & Docker",
  },
];

export const skillCategories = [
  { id: "all", name: "All Skills" },
  { id: "programming", name: "Programming" },
  { id: "backend", name: "Backend" },
  { id: "frontend", name: "Frontend" },
  { id: "database", name: "Database" },
  { id: "tools", name: "Tools & DevOps" },
];

export const skills = [
  // Programming
  {
    name: "Python",
    category: "programming",
    level: "Advanced",
    icon: "FaPython",
    color: "#38bdf8",
    description: "Core Python, OOP principles, data structures, scripting, clean syntax",
  },
  {
    name: "JavaScript",
    category: "programming",
    level: "Intermediate",
    icon: "FaJs",
    color: "#facc15",
    description: "ES6+, Async/Await, DOM manipulation, Fetch API, modern patterns",
  },
  {
    name: "HTML5",
    category: "programming",
    level: "Advanced",
    icon: "FaHtml5",
    color: "#f97316",
    description: "Semantic markup, accessibility, SEO structure, modern standards",
  },
  {
    name: "CSS3",
    category: "programming",
    level: "Advanced",
    icon: "FaCss3Alt",
    color: "#3b82f6",
    description: "Flexbox, Grid, custom animations, responsive layouts, variables",
  },

  // Backend
  {
    name: "Django",
    category: "backend",
    level: "Advanced",
    icon: "SiDjango",
    color: "#2ba974",
    description: "MVT architecture, Django ORM, Admin panel customization, Auth & RBAC",
  },
  {
    name: "Django REST Framework",
    category: "backend",
    level: "Advanced",
    icon: "SiDjango",
    color: "#10b981",
    description: "Serializers, ViewSets, API views, token authentication, pagination",
  },
  {
    name: "REST APIs",
    category: "backend",
    level: "Advanced",
    icon: "FaServer",
    color: "#06b6d4",
    description: "RESTful architecture, CRUD endpoints, JSON data exchange, status codes",
  },

  // Frontend
  {
    name: "React.js",
    category: "frontend",
    level: "Proficient",
    icon: "FaReact",
    color: "#61dafb",
    description: "Hooks (useState, useEffect, useContext), modular components, state",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Advanced",
    icon: "SiTailwindcss",
    color: "#38bdf8",
    description: "Utility-first design, dark mode, responsive breakpoints, custom theme",
  },

  // Database
  {
    name: "MySQL",
    category: "database",
    level: "Advanced",
    icon: "SiMysql",
    color: "#00758f",
    description: "Relational schemas, queries, joins, indexes, normalization",
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    level: "Proficient",
    icon: "FaGitAlt",
    color: "#f05032",
    description: "Version control, branching, merge conflict resolution, commit hygiene",
  },
  {
    name: "GitHub",
    category: "tools",
    level: "Proficient",
    icon: "FaGithub",
    color: "#e2e8f0",
    description: "Repositories, pull requests, collaboration, project boards, GitHub Pages",
  },
  {
    name: "VS Code",
    category: "tools",
    level: "Advanced",
    icon: "FaLaptopCode",
    color: "#007acc",
    description: "Extensions, integrated debugging, linting, terminal workflows",
  },
];

export const projects = [
  {
    id: "student-management",
    title: "Student Management System",
    subtitle: "Enterprise Academic Administration Platform",
    category: "Django Full Stack",
    description:
      "A complete full-stack academic administrative platform engineered to manage student records, course enrollments, attendance, and administrative oversight with secure authentication.",
    image: "./projects/student-management.jpg",
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "Django ORM", "SQLite/MySQL"],
    features: [
      "Secure User Authentication & Role-Based Access Control (Admin vs Student)",
      "Comprehensive CRUD operations for student profiles, courses, and marks",
      "Dynamic search, multi-parameter filtering, and pagination",
      "Relational data integrity maintained through Django ORM models",
      "Clean, modern and mobile-responsive administrative dashboard",
    ],
    github: "https://github.com/amaansk45/Student-Management-System",
    liveDemo: "#",
    featured: true,
  },
  {
    id: "footwear-ecommerce",
    title: "PHP Footwear E-Commerce Website",
    subtitle: "High-Performance Retail Shopping Experience",
    category: "PHP & MySQL",
    description:
      "A feature-packed e-commerce web application specialized for footwear retail, featuring dynamic product catalogs, filtering, cart management, and seamless order workflows.",
    image: "./projects/footwear-ecommerce.jpg",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Dynamic product catalog with category, size, price, and brand filtering",
      "Interactive shopping cart with quantity updates and session persistence",
      "User authentication, profile management, and order history tracking",
      "Relational MySQL database schemas with sanitized queries and prepared statements",
      "Admin panel to manage stock inventory, pricing, and customer inquiries",
    ],
    github: "https://github.com/amaansk45/footwear-website",
    liveDemo: "#",
    featured: true,
  },
];

export const education = [
  {
    degree: "MCA (Master of Computer Application)",
    status: "Currently Pursuing – Semester 3",
    institution: "Kadi Sarva Vishwavidyalaya (KSV)",
    location: "Gandhinagar, Gujarat, India",
    duration: "2025 – 2027 (Expected Graduation)",
    performance: "CPI: 7.44 (Current)",
    highlights: [
      "Specializing in Advanced Web Technologies, Python Backend Development, and Database Systems.",
      "Active participant in technical hackathons and collaborative development projects.",
      "Consistently maintaining strong academic standing with a 7.44 CPI across coursework.",
    ],
    badge: "Current Degree",
  },
  {
    degree: "BCA (Bachelor of Computer Application)",
    status: "Graduated with Distinction",
    institution: "Hemchandracharya North Gujarat University (HNGU)",
    location: "Patan, Gujarat, India",
    duration: "2022 – 2025",
    performance: "CGPA: 6.86",
    highlights: [
      "Solid ground in Object-Oriented Programming (OOP), Data Structures, and RDBMS concepts.",
      "Developed foundational desktop and web applications with PHP, MySQL, and JavaScript.",
      "Demonstrated analytical problem-solving and software lifecycle comprehension.",
    ],
    badge: "Completed",
  },
];

export const whyHireMeCards = [
  {
    title: "Strong Python & Django Foundation",
    description:
      "Deep understanding of Django's MVT architectural pattern, Django ORM, authentication systems, and building robust RESTful APIs with Django REST Framework.",
    icon: "FaPython",
    badge: "Core Strength",
  },
  {
    title: "Full-Stack Development Skills",
    description:
      "Capable of seamlessly connecting interactive, component-driven React.js and Tailwind frontends with secure, scalable backend Python services.",
    icon: "FaReact",
    badge: "Versatility",
  },
  {
    title: "Real-World Project Experience",
    description:
      "Hands-on experience developing end-to-end applications from scratch — encompassing relational database modeling, business logic, CRUD workflows, and responsive UIs.",
    icon: "FaLaptopCode",
    badge: "Applied Practice",
  },
  {
    title: "Fast Learner & Problem Solver",
    description:
      "Demonstrated adaptability through active participation in events like the Odoo Hackathon 2026, disciplined debugging habits, and a constant drive to master emerging tech.",
    icon: "FaCheck",
    badge: "Growth Mindset",
  },
];

export const certifications = [
  {
    title: "Web Development",
    issuer: "Internshala",
    year: "2025",
    description: "Competed in rapid software prototyping, system logic, and team problem-solving.",
  },
  {
    title: "Python Full Stack Web Development",
    issuer: "Online Certification / Academic Program",
    year: "2025",
    description: "Comprehensive training in Python, Django, REST APIs, and database connectivity.",
  },
];
