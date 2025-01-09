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
      "An educational platform leveraging the Protégé Effect to enhance learning through teaching. Built a knowledge graph-based system that processes textbook PDFs, constructs learning paths, and generates interactive quizzes. Implements vector embeddings and semantic search to enable intelligent content retrieval and personalized learning sequences.",
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
    title: "ELO-based MLB Game Predictor",
    description:
      "Developed a machine learning system to analyze the impact of travel fatigue on MLB team performance. Implemented an ELO rating system with pitcher hot-hand adjustments, achieving a 0.61 AUC-ROC score. Created data pipelines to process geographic and temporal features including circadian advantage and travel distance using the Haversine formula.",
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
      "A responsive portfolio website built with modern web technologies, featuring dynamic animations and interactive components. Implements server-side rendering for optimal performance and SEO, while maintaining a clean and professional design aesthetic.",
    skills: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "backend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Framer-Motion", category: "frontend" },
    ],
    githubLink: "https://github.com/AchrafAzzaoui/Portfolio-Website",
    demoLink: "https://demo.com",
  },
];
