import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { Link } from "react-router-dom"
import heroBackground from "@/assets/hero-bg.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBackground} 
            alt="AI Developer Portfolio - Adnan's professional background showcasing machine learning and web development expertise" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
        </div>
        
        {/* 3D Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-primary opacity-20 transform rotate-45 geometric-float blur-sm" />
          <div className="absolute top-1/3 right-1/5 w-24 h-24 bg-primary/30 transform rotate-12 geometric-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-secondary opacity-15 transform -rotate-45 geometric-float blur-md" style={{ animationDelay: '4s' }} />
          <div className="absolute bottom-1/3 left-1/5 w-32 h-32 bg-accent/25 transform rotate-45 geometric-float" style={{ animationDelay: '3s' }} />
          
          {/* Floating particles */}
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary rounded-full float opacity-60" style={{ animationDelay: '1s' }} />
          <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-primary-glow rounded-full float opacity-40" style={{ animationDelay: '2.5s' }} />
          <div className="absolute bottom-1/2 left-2/3 w-1.5 h-1.5 bg-accent rounded-full float opacity-80" style={{ animationDelay: '1.8s' }} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
          <div className="mb-12">
            <div className="mb-6">
              <span className="code-style text-primary text-sm animate-slide-in-left">
                <span className="text-muted-foreground">const</span> developer = {"{"} 
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight font-heading">
              <span 
                className="glitch shimmer-text cursor-pointer inline-block hover:scale-105 transition-transform duration-300" 
                data-text="ADNAN"
              >
                ADNAN
              </span>
            </h1>
            
            <h2 className="text-xl md:text-3xl font-light text-foreground mb-8 max-w-4xl mx-auto leading-relaxed tracking-wide">
              <span className="code-style text-muted-foreground">qualified:</span> 
              <span className="text-primary">"AI Developer & Machine Learning Engineer"</span><span className="text-muted-foreground">,</span><br/>
              <span className="code-style text-muted-foreground">expertise:</span> 
              <span className="gradient-text font-medium">["AI Applications", "Data Science Projects", "Creative Web Apps"]</span><span className="text-muted-foreground">,</span><br/>
              <span className="code-style text-muted-foreground">mission:</span> 
              <span className="text-primary">"Building intelligent solutions with human-centered design"</span>
            </h2>
            
            <div className="mb-8 animate-slide-in-right">
              <span className="code-style text-primary text-sm">
                <span className="text-muted-foreground">{"}"};  </span>
              </span>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Computer Science graduate specializing in Artificial Intelligence, Machine Learning, Data Science, and modern web development technologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-xl px-8 py-3 text-lg font-medium"
              asChild
            >
              <Link to="/projects">
                See My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-primary/20 hover:border-primary hover:bg-primary/5 px-8 py-3 text-lg font-medium transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Let's Connect
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-foreground transition-colors animated-underline"
              asChild
            >
              <Link to="/resume">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
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
    </div>
  )
}