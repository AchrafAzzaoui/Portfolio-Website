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
    company: "Amazon",
    period: "September 2026 - December 2026",
    description: "Incoming Fall SWE Intern at Amazon. Working on the Flex Labor Planning and Forecasting Team within the Last Mile Delivery Organization.",
    skills: new Map([]),
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "LinkedIn",
    period: "May 2026 - August 2026",
    description: "Engineered a Java gRPC-based microservice for agentic quote modification and product discovery. Created a Python LangGraph agent to help Sales Representatives surface relevant CRM information and autonomously build enterprise-level sales proposals.",
    skills: new Map([
      ["Java", "backend"],
      ["Python", "backend"],
      ["LangGraph", "ml"],
      ["gRPC", "backend"],
    ]),
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "Air Alliance",
    period: "September 2025 - May 2026",
    description: "Deployed a real-time air quality monitoring dashboard for Air Alliance Houston, serving thousands of residents across 15 Houston regions. Built a parallelized data ingestion pipeline system integrated with multiple external air quality APIs, and an efficient, automated twilio-based notification system to alert users of air quality hazards in their area.",
    skills: new Map([
      ["Python", "backend"],
      ["Django", "backend"],
      ["Celery", "backend"],
      ["Redis", "database"],
      ["PostgreSQL", "database"],
    ]),
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
    title: "ML Engineer Intern",
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
    id: 7,
    title: "Data Science Research Assistant",
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
    id: 8,
    title: "Software Engineer Intern",
    company: "Levytation",
    period: "May 2024 - Aug 2024",
    description:
      "Developed a time series forecasting pipeline using XGBoost and LSTM Neural Networks, achieving 90% accuracy. Built Flask REST API with MongoDB caching and implemented BERT-based sentiment analysis system.",
    skills: new Map([
      ["Flask", "backend"],
      ["MongoDB", "database"],
      ["Python", "backend"],
      ["Tensorflow", "ml"],
      ["Modal", "devops"],
    ]),
  },
];
