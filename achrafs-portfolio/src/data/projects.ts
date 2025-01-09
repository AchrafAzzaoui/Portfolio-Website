import { Category } from "./skills";
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
      "A web-based application designed to help people with disabilities navigate urban environments by identifying accessible locations, routes, and services. The app provides real-time data on ramps, elevators, and wheelchair-friendly areas while integrating user feedback to ensure accuracy. Users can search for nearby accessible restaurants, public transit stops, or restrooms and contribute their own reviews to the platform.",
    skills: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "backend" },
      { name: "Tailwind CSS", category: "frontend" },
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
  },
  {
    id: 2,
    image: "datathon_2024_picture.png",
    title: "ELO-based AI MLB Game Predictor",
    description:
      "A web-based application designed to help people with disabilities navigate urban environments by identifying accessible locations, routes, and services. The app provides real-time data on ramps, elevators, and wheelchair-friendly areas while integrating user feedback to ensure accuracy. Users can search for nearby accessible restaurants, public transit stops, or restrooms and contribute their own reviews to the platform.",
    skills: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "backend" },
      { name: "Tailwind CSS", category: "frontend" },
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
  },
  {
    id: 3,
    image: "portfolio_website_picture.png",
    title: "Personal Portfolio Website",
    description: "A project description",
    skills: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "backend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Framer-Motion", category: "frontend" },
      { name: "Next.js", category: "frontend" },
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
  },
];
