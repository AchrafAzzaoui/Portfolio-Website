import "./index.css";
import Header from "./components/layout/Header.tsx";
import MainLayout from "./components/layout/MainLayout.tsx";
import HeroSection from "./components/hero/HeroSection.tsx";
import AboutExperience from "./components/layout/AboutExperience.tsx";
import SkillsSection from "./components/skill/SkillsSection.tsx";
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      <MainLayout>
        <HeroSection />
        <AboutExperience />
        <SkillsSection />
      </MainLayout>
    </div>
  );
}
