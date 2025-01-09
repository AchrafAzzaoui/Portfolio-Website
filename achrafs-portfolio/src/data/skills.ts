import { FaCss3Alt } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { ReactNode } from "react";
import { createElement } from "react";
import { FaDatabase } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";

export type Category =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "ml"
  | "other";

export const tagColorSystem: Record<
  Category,
  { background: string; text: string; icon?: ReactNode }
> = {
  frontend: {
    background: "bg-emerald-400/20",
    text: "text-emerald-300",
    icon: createElement(FaCss3Alt),
  },
  backend: {
    background: "bg-sky-400/20",
    text: "text-sky-300",
    icon: createElement(CiServer),
  },
  database: {
    background: "bg-fuchsia-400/20",
    text: "text-fuchsia-300",
    icon: createElement(FaDatabase),
  },
  devops: {
    // lowercase to match data
    background: "bg-amber-400/20",
    text: "text-amber-300",
    icon: createElement(FaDocker),
  },
  ml: {
    background: "bg-rose-400/20",
    text: "text-rose-300",
    icon: createElement(FaPython),
  },
  other: {
    background: "bg-violet-400/20",
    text: "text-violet-300",
    icon: createElement(MdMiscellaneousServices),
  },
};
export interface Skill {
  name: string;
  category: Category;
}
export interface SkillCategory {
  category: Category;
  skills: Skill[];
}
export const skills: SkillCategory[] = [
  {
    category: "frontend",
    skills: [
      { name: "HTML5", category: "frontend" },
      { name: "CSS3", category: "frontend" },
      { name: "JavaScript (ES6+)", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "React", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Framer-Motion", category: "frontend" },
    ],
  },
  {
    category: "backend",
    skills: [
      { name: "Python", category: "backend" },
      { name: "Java", category: "backend" },
      { name: "JavaScript (ES6+)", category: "backend" },
      { name: "TypeScript", category: "backend" },
      { name: "Node.js", category: "backend" },
      { name: "Express.js", category: "backend" },
      { name: "Flask", category: "backend" },
    ],
  },
  {
    category: "database",
    skills: [
      { name: "MongoDB", category: "database" },
      { name: "PostgreSQL", category: "database" },
      { name: "Milvus", category: "database" },
      { name: "Vector Databases", category: "database" },
    ],
  },
  {
    category: "devops",
    skills: [
      { name: "Docker", category: "devops" },
      { name: "Modal", category: "devops" },
    ],
  },
  {
    category: "ml",
    skills: [
      { name: "Python", category: "ml" },
      { name: "TensorFlow", category: "ml" },
      { name: "PyTorch", category: "ml" },
      { name: "Scikit-learn", category: "ml" },
      { name: "Pandas", category: "ml" },
      { name: "NumPy", category: "ml" },
      { name: "Matplotlib", category: "ml" },
      { name: "OCR", category: "ml" },
      { name: "Retrieval Augmented Generation", category: "ml" },
      { name: "LLMs", category: "ml" },
      { name: "XGBoost", category: "ml" },
      { name: "Time Series", category: "ml" },
    ],
  },
  {
    category: "other",
    skills: [
      { name: "Git", category: "other" },
      { name: "Jira", category: "other" },
      { name: "Confluence", category: "other" },
    ],
  },
];
