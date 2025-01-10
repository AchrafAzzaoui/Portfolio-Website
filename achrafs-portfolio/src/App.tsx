import "./index.css";
import Header from "./components/layout/Header.tsx";
import MainLayout from "./components/layout/MainLayout.tsx";
import HeroSection from "./components/hero/HeroSection.tsx";
import AboutExperience from "./components/layout/AboutExperience.tsx";
import ProjectSection from "./components/project/ProjectSection.tsx";
import SkillsSection from "./components/skill/SkillsSection.tsx";
import GithubStatsSection from "./components/github/GithubStatsSection.tsx";
import ContactForm from "./components/contact/ContactSection.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      <MainLayout>
        <HeroSection />
        <AboutExperience />
        <SkillsSection />
        <ProjectSection />
        <GithubStatsSection />
        <ContactForm />
      </MainLayout>
    </div>
  );
}
