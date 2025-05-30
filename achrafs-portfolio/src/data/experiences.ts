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
    title: "Software Engineer Intern",
    company: "RSM",
    period: "June 2025 - Aug 2025",
    description:
      "Building agentic AI tools to optimize enterprise workflows using Python and Microsoft Azure cloud infrastructure.",
    skills: new Map([
      ["Python", "backend"],
      ["Azure", "database"],
    ]),
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "Rice School of Engineering",
    period: "May 2025 - Present",
    description:
      "Building interactive educational tools for computer systems under the mentorship of Dr. Rebecca Schreib.",
    skills: new Map([
      ["Python", "backend"],
      ["Assembly", "backend"],
    ]),
  },
  {
    id: 3,
    title: "ML Engineer",
    company: "Open City Labs",
    period: "Dec 2024 - Apr 2025",
    description:
      "Developed production RAG system and REST APIs processing medical terminology data with vector embeddings and semantic search. Implemented multi-database architecture integrating Milvus vector database and MongoDB for UMLS medical code standardization and intelligent document retrieval.",
    skills: new Map([
      ["Milvus", "database"],
      ["MongoDB", "database"],
      ["FastAPI", "backend"],
      ["Python", "backend"],
      ["LLMs", "ml"],
    ]),
  },
  {
    id: 4,
    title: "Data Science RA",
    company: "Jones School of Business",
    period: "Jan 2024 - Jan 2025",
    description:
      "Engineered ETL pipelines using Google Cloud and BigQuery to process over 1TB of foottraffic data. Implemented causal inference analysis using difference-in-differences methodology and propensity score matching.",
    skills: new Map([
      ["BigQuery", "database"],
      ["Python", "ml"],
      ["Docker", "devops"],
      ["Google Cloud", "devops"],
      ["Causal Inference", "ml"],
    ]),
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "Levytation",
    period: "May 2024 - Aug 2024",
    description:
      "Developed time series forecasting pipeline using XGBoost and LSTM Neural Networks, achieving 90% accuracy. Built Flask REST API with MongoDB caching and implemented BERT-based sentiment analysis system.",
    skills: new Map([
      ["Flask", "backend"],
      ["MongoDB", "database"],
      ["Python", "backend"],
      ["Tensorflow", "ml"],
      ["Modal", "devops"],
    ]),
  },
];
