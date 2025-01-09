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
      "Developed REST APIs for healthcare data integration using vector similarity search and ML models. Implemented cross-database architecture between Milvus and MongoDB for medical terminology standardization.",
    skills: new Map([
      ["Milvus", "database"],
      ["MongoDB", "database"],
      ["FastAPI", "backend"],
      ["Python", "backend"],
      ["Docker", "devops"],
      ["LLMs", "ml"],
    ]),
  },
  {
    id: 2,
    title: "Data Science RA",
    company: "Jones School of Business",
    period: "Jan 2024 - Present",
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
    id: 3,
    title: "Technical Analyst",
    company: "ACT Rice Consulting",
    period: "Jan 2024 - Present",
    description:
      "Increased nonprofit program evaluation accuracy through data analysis and interactive visualizations. Developing a responsive student recruitment portal using React and Tailwind CSS.",
    skills: new Map([
      ["React", "frontend"],
      ["Tailwind CSS", "frontend"],
      ["Python", "ml"],
      ["Matplotlib", "ml"],
    ]),
  },
  {
    id: 4,
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
