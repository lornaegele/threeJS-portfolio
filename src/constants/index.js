import {
  AiRes1,
  frischzeit1,
  LorVis1,
  netflix1,
  spotify1,
  aiLearingPlattform,
  Websockets1,
} from "../assets/images";
import {
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  binarystate,
  bicycle,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Web & App Developer",
    company_name: "Freelance",
    icon: github,
    iconBg: "#accbe1",
    date: "October 2024 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Designing and ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "Binarystate",
    icon: binarystate,
    iconBg: "#fbc3bc",
    date: "Feb 2023 - Jan 2024",
    points: [
      "Web / app development for responsive applications.",
      "Development of an AI chatbot for document processing with LangChain and Nextjs.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Regular communication with internal and external project stakeholders.",
    ],
  },
  {
    title: "E-Commerce Manager",
    company_name: "Heiss GmbH",
    icon: bicycle,
    iconBg: "#b7e4c7",
    date: "Jun 2021 - Feb 2023",
    points: [
      "Project management, migration of the shop to Shopware 6.",
      "Creation of user-oriented and SEO-optimized content",
      "Maintenance of Google Shopping data feed and running ads.",
      "Continuous optimization of the online shop and processes.",
    ],
  },
  {
    title: "Apprenticeship in E-Commerce",
    company_name: "Heiss GmbH",
    icon: bicycle,
    iconBg: "#b7e4c7",
    date: "Sep 2018 - jun 2021",
    points: [
      "Project management, migration of the shop to Shopware 6.",
      "Creation of user-oriented and SEO-optimized content",
      "Maintenance of Google Shopping data feed and running ads.",
      "Continuous optimization of the online shop and processes.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/lornaegele",
  },
  // {
  //   name: "LinkedIn",
  //   iconUrl: linkedin,
  //   link: "https://www.linkedin.com/in/lorenz-naegele-43b571210/",
  // },
];

export const projects = [
  {
    thumbail: aiLearingPlattform,
    name: "SaaS AI Learning Platform",
    description:
      "SaaS platform built with Next.js, Clerk for authentication, Supabase as the database, and Vapi powered by OpenAI. It enables users to create and manage AI Companions they can interact with in real time through voice conversations.",
    link: "https://ai-learn-plattform.vercel.app",
  },
  {
    thumbail: AiRes1,
    name: "AI Resume Analyzer",
    description:
      "React app with React Router and AI model Cloud 3.7, you can upload resumes to get job-specific feedback and improvement suggestions.",
    link: "https://github.com/lornaegele/ai-pdf-resume-analyzer",
  },
  {
    thumbail: frischzeit1,
    name: "FreshNow IOS App",
    description:
      "iOS app in German (Frischzeit) built with React Native; provides users with essential health information and insights on daily nutrition.",
    link: "https://github.com/lornaegele/fresh-now",
  },
  {
    thumbail: Websockets1,
    name: "Websockets Chat and Draw",
    description:
      "Angular app with Node.js backend using WebSockets for real-time chat and collaborative drawing, demonstrating interactive web technology.",
    link: "https://github.com/lornaegele/websockets-chat-and-draw",
  },
  {
    thumbail: LorVis1,
    name: "Visuals Portfolio",
    description:
      "Next.js 14 film portfolio showcasing my visual work, using modern routing, folder structures, and slugs for smooth navigation.",
    link: "https://github.com/lornaegele/film-portfolio",
  },
  {
    thumbail: spotify1,
    name: "Spotify Clone",
    description:
      "React app leveraging the Shazam Rapid API to fetch, display, and play songs, providing a dynamic music discovery experience.",
    link: "https://github.com/lornaegele/spotify-clone",
  },
  {
    thumbail: netflix1,
    name: "Netflix Clone",
    description:
      "React application replicating key Netflix features, showcasing media content with a modern UI and interactive functionality.",
    link: "https://github.com/lornaegele/netflix-clone",
  },
];
