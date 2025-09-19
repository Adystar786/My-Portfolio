import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import heroBackground from "@/assets/hero-bg.jpg"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="" 
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span 
              className="glitch gradient-text cursor-pointer inline-block hover:scale-105 transition-transform duration-300" 
              data-text="Adnan"
            >
              Adnan
            </span>
            <span className="text-muted-foreground"> — </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            I build <span className="font-semibold gradient-text">AI companions</span>, 
            <span className="font-semibold gradient-text"> intelligent apps</span>, and 
            <span className="font-semibold gradient-text"> creative web experiences</span>.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Computer Science graduate specializing in AI, Data Science, and human-centered technology.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="group bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-xl px-8 py-3 text-lg font-medium"
            onClick={() => scrollToSection('projects')}
          >
            See My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-primary/20 hover:border-primary hover:bg-primary/5 px-8 py-3 text-lg font-medium transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Let's Connect
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-muted-foreground hover:text-foreground transition-colors animated-underline"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}