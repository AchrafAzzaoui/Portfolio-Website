import { Skill } from "./skills";

export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  skills: Skill[];
  githubLink?: string;
  demoLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    image: "hackrice_2024_picture.png",
    title: "Protege: AI-Powered Learning Platform",
    description:
      "An educational platform designed to enhance learning through the Protégé Effect. The system processes textbook PDFs into a knowledge graph, generates interactive learning paths, and creates quizzes. Leveraged vector embeddings, semantic search, and LLMs to provide intelligent content retrieval and personalized experiences. Won Best Use of AI and Best Use of MongoDB at HackRice 2024.",
    skills: [
      { name: "React", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "Vector Databases", category: "ml" },
      { name: "RAG", category: "ml" },
      { name: "LLMs", category: "ml" },
    ],
    githubLink: "https://github.com/AchrafAzzaoui/hackrice-2024",
    demoLink: "https://devpost.com/software/protege-3r7zw5",
  },
  {
    id: 2,
    image: "datathon_2024_picture.png",
    title: "ELO-Based MLB Game Predictor",
    description:
      "A machine learning system analyzing the impact of travel fatigue on MLB team performance using an ELO rating system enhanced with pitcher hot-hand adjustments. Achieved a 0.61 AUC-ROC score by processing geographic and temporal features, including circadian advantages and travel distances with the Haversine formula. Won 2nd Place at the 2024 Rice Datathon.",
    skills: [
      { name: "Python", category: "backend" },
      { name: "XGBoost", category: "ml" },
      { name: "Time Series", category: "ml" },
      { name: "Scikit-learn", category: "ml" },
    ],
    githubLink: "https://github.com/AchrafAzzaoui/Rice-Datathon-",
    demoLink:
      "https://devpost.com/software/team-coin-flip-travel-fatigue-and-performance",
  },
  {
    id: 3,
    image: "portfolio_website_picture.png",
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website showcasing interactive animations and a clean, professional design. Built with React, TypeScript, and Tailwind CSS, it features dynamic, mobile-friendly components. Used Framer Motion for animations to create a polished user experience and deployed the project using Vercel.",
    skills: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "backend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Framer Motion", category: "frontend" },
    ],
    githubLink: "https://github.com/AchrafAzzaoui/Portfolio-Website",
    demoLink: "https://demo.com",
  },
];
