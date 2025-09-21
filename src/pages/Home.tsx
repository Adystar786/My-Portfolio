import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { Link } from "react-router-dom"
import heroBackground from "@/assets/hero-bg.jpg"

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    "AI Developer",
    "Creative Technologist", 
    "React Developer",
    "Machine Learning Engineer"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="page-transition">
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <h1>Adnan - AI Developer & Machine Learning Engineer Portfolio</h1>
      </div>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with enhanced parallax */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBackground} 
            alt="AI Developer Portfolio - Adnan's professional background showcasing machine learning and web development expertise" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10 scale-110"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
        </div>
        
        {/* Floating 3D blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-primary blob" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/5 w-48 h-48 bg-gradient-accent blob" style={{ animationDelay: '5s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 blob" style={{ animationDelay: '10s' }} />
          <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-accent/30 blob" style={{ animationDelay: '15s' }} />
        </div>
        
        {/* Enhanced geometric elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-primary opacity-20 transform rotate-45 geometric-float blur-sm glass-morphism" />
          <div className="absolute top-1/3 right-1/5 w-24 h-24 bg-primary/30 transform rotate-12 geometric-float glass-morphism" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-secondary opacity-15 transform -rotate-45 geometric-float blur-md" style={{ animationDelay: '4s' }} />
          <div className="absolute bottom-1/3 left-1/5 w-32 h-32 bg-accent/25 transform rotate-45 geometric-float glass-morphism" style={{ animationDelay: '3s' }} />
          
          {/* Enhanced floating particles */}
          <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-primary rounded-full float opacity-80" style={{ animationDelay: '1s' }} />
          <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-primary-glow rounded-full float opacity-60" style={{ animationDelay: '2.5s' }} />
          <div className="absolute bottom-1/2 left-2/3 w-2 h-2 bg-accent rounded-full float opacity-90" style={{ animationDelay: '1.8s' }} />
        </div>
        
        {/* Main content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center animate-fade-in-up">
          <div className="mb-16">
            <div className="mb-8">
              <span className="code-style text-primary text-sm animate-slide-in-left">
                <span className="text-muted-foreground">const</span> developer = {"{"} 
              </span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight font-heading">
              <span 
                className="glitch shimmer-text cursor-pointer inline-block hover:scale-105 transition-transform duration-300" 
                data-text="ADNAN"
              >
                ADNAN
              </span>
            </h1>
            
            <div className="mb-8 h-16 flex items-center justify-center">
              <span className="text-2xl md:text-4xl font-light text-foreground">
                I build{" "}
                <span className="gradient-text font-semibold typing-cursor">
                  {roles[currentRole]}
                </span>
              </span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-light text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Computer Science graduate specializing in{" "}
              <span className="text-primary font-medium">AI companions</span>,{" "}
              <span className="text-primary font-medium">intelligent apps</span>, and{" "}
              <span className="text-primary font-medium">creative web experiences</span>
            </h2>
            
            <div className="mb-8 animate-slide-in-right">
              <span className="code-style text-primary text-sm">
                <span className="text-muted-foreground">{"}"};  </span>
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/projects">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:scale-110 transition-all duration-500 shadow-glow hover:shadow-xl px-10 py-4 text-xl font-medium ripple"
              >
                See My Work
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-primary/30 hover:border-primary hover:bg-primary/10 px-10 py-4 text-xl font-medium transition-all duration-500 glass-morphism"
              >
                Let's Connect
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-foreground transition-colors animated-underline"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center glass-morphism">
            <div className="w-2 h-4 bg-primary rounded-full mt-3 animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  )
}