import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationAchievements } from "@/components/education-achievements"
import { ContactSection } from "@/components/contact-section"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationAchievements />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 <strong className="text-foreground">Adnan</strong> — AI Developer & Machine Learning Engineer. Crafting intelligent solutions with passion.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Built with</span>
              <span className="text-primary">♥</span>
              <span className="text-sm text-muted-foreground">using React, AI & modern web technologies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
