type Category = "frontend" | "backend" | "database" | "devops" | "ml";

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: Map<string, Category>; // Type-safe category
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "ML Engineer",
    company: "Open City Labs",
    period: "Dec 2024 - Present",
    description:
      "Developing REST APIs for interoperability between different healthcare systems utilizing vector similarity search and AI/ML models.",
    skills: new Map([
      ["Milvus", "database"],
      ["MongoDB", "database"],
      ["FastAPI", "backend"],
      ["Python", "backend"],
      ["Docker", "devops"], // Changed from "devops"
    ]),
  },
  {
    id: 2,
    title: "Data Science Researcher",
    company: "Jones School of Business",
    period: "Jan 2024 - Present",
    description: "Did literally nothing useful at all",
    skills: new Map([
      ["SQL", "database"],
      ["BigQuery", "database"],
      ["Python", "ml"],
      ["Docker", "devops"], // Changed from "devOps"
    ]),
  },
];
