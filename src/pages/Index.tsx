import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <CertificationsSection />
    <ContactSection />
    <footer className="py-8 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs text-muted-foreground font-mono">
          © 2026 Yassine Moussa. Built with intent.
        </p>
      </div>
    </footer>
  </div>
);

export default Index;