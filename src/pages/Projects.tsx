import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Brain, Eye, BookOpen, MapPin, ShieldCheck, ShoppingBag, Zap, Code } from "lucide-react"

export default function Projects() {
  const aiProjects = [
    {
      title: "Furina AI",
      subtitle: "Mental Health AI Companion",
      description: "An empathetic AI companion designed to provide emotional support and mental wellness guidance. Furina AI uses advanced natural language processing to understand and respond to users' emotional states, offering a safe space for mental health conversations.",
      icon: <Brain className="h-6 w-6" />,
      tech: ["Python", "NLP", "TensorFlow", "Firebase", "Machine Learning"],
      status: "Live",
      featured: true,
      link: "https://furinacompanion.site",
      github: "https://github.com/Adystar786",
      schema: {
        "@type": "SoftwareApplication",
        "name": "Furina AI",
        "description": "AI-powered mental health companion using machine learning",
        "applicationCategory": "HealthApplication",
        "programmingLanguage": ["Python", "TensorFlow"]
      }
    },
    {
      title: "Homie AI",
      subtitle: "Evolving AI Companion",
      description: "An innovative AI companion that gradually evolves through user interactions, adapting its personality and responses based on conversations. Homie AI learns from each interaction to provide increasingly personalized and meaningful experiences.",
      icon: <Brain className="h-6 w-6" />,
      tech: ["Python", "Machine Learning", "NLP", "AI", "Flask"],
      status: "Live",
      link: "https://homie-ai-companion.onrender.com",
      github: "https://github.com/Adystar786"
    },
    {
      title: "TripStar AI",
      subtitle: "Smart Travel Itinerary Generator",
      description: "An intelligent travel planning application that generates personalized itineraries using AI. TripStar analyzes your preferences, budget, and travel style to create detailed day-by-day plans, suggesting activities, restaurants, and optimal routes.",
      icon: <MapPin className="h-6 w-6" />,
      tech: ["React", "Python", "OpenAI API", "Firebase", "Data Science"],
      status: "Live",
      link: "https://tripstar-ai-based-itinerary-generator.onrender.com/",
      github: "https://github.com/Adystar786"
    },
    {
      title: "Marvin",
      subtitle: "AI Assistant with Computer Vision",
      description: "A voice-controlled AI assistant featuring advanced computer vision capabilities. Marvin can detect and identify objects in real-time, respond to voice commands, and provide intelligent assistance through seamless integration of speech recognition and visual processing.",
      icon: <Eye className="h-6 w-6" />,
      tech: ["Python", "OpenCV", "Speech Recognition", "Computer Vision", "AI"],
      status: "Live",
      link: "https://marvin-ai.netlify.app/",
      github: "https://github.com/Adystar786"
    }
  ]

  const researchProjects = [
    {
      title: "Speed of Eye (SOE)",
      subtitle: "Visual Processing Research",
      description: "Research project investigating human visual processing speed and perception patterns. This study explores how quickly the human eye can process and interpret visual information, with applications in UI/UX design and accessibility.",
      icon: <Eye className="h-6 w-6" />,
      tech: ["Research", "Data Analysis", "Psychology", "HCI", "Neuroscience"],
      status: "Research",
      github: "https://github.com/Adystar786"
    }
  ]

  const webProjects = [
    {
      title: "Shroom's Rain Cloud",
      subtitle: "E-commerce Platform",
      description: "A beautifully crafted e-commerce platform for artistic cloud-shaped rain lamps. Features a modern, responsive design with seamless checkout experience, product customization options, and integrated payment processing for unique lighting products.",
      icon: <ShoppingBag className="h-6 w-6" />,
      tech: ["React", "Node.js", "Stripe", "MongoDB", "Web Development"],
      status: "Live",
      link: "https://shrooms-rain-cloud.company.site/"
    },
    {
      title: "NeoBands",
      subtitle: "Wearable Tech E-commerce",
      description: "A sleek e-commerce platform specializing in modern wearable technology and smart bands. Built with React and featuring an intuitive shopping experience, product comparisons, and secure payment gateway integration for tech enthusiasts.",
      icon: <Zap className="h-6 w-6" />,
      tech: ["React", "Firebase", "Tailwind CSS", "Payment Gateway", "Web Development"],
      status: "Live",
      link: "https://neo-bands.company.site/"
    },
    {
      title: "Matrix Webpage",
      subtitle: "Visual Showcase",
      description: "An immersive visual experience featuring Matrix-inspired animations and effects. Built with pure JavaScript and Canvas API, this project showcases advanced animation techniques and creates the iconic digital rain effect with smooth performance.",
      icon: <Code className="h-6 w-6" />,
      tech: ["JavaScript", "CSS3", "Canvas API", "WebGL"],
      status: "Live",
      link: "https://singular-pony-ee4749.netlify.app"
    }
  ]

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <Card className={`group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 ${
      project.featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-card via-card to-primary/5' : 'bg-card'
    }`} style={{ animationDelay: `${index * 150}ms` }}>
      
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      {/* Geometric decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 transform rotate-45 translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500" />
      
      {project.featured && (
        <div className="absolute top-4 right-4 z-20">
          <Badge className="bg-gradient-primary text-primary-foreground shadow-glow animate-pulse">
            ⭐ Featured
          </Badge>
        </div>
      )}
      
      <CardHeader className="relative z-10 pb-4">
        <div className="flex items-start space-x-4">
          <div className="relative p-4 bg-gradient-primary rounded-xl shadow-glow group-hover:scale-110 transition-all duration-300">
            {project.icon}
            <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-30 animate-pulse" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300 font-heading">
              {project.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground font-medium code-style text-sm">
              {project.subtitle}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-6">
        <p className="text-muted-foreground leading-relaxed text-sm">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string, techIndex: number) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
              style={{ animationDelay: `${techIndex * 50}ms` }}
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${
              project.status === 'Live' 
                ? 'bg-success shadow-[0_0_10px_hsl(var(--success))] animate-pulse' 
                : 'bg-primary shadow-[0_0_8px_hsl(var(--primary))]'
            }`} />
            <span className="text-sm font-medium code-style">
              {project.status === 'Live' ? 'Live' : project.status === 'Research' ? 'Research' : 'In Progress'}
            </span>
          </div>
          
          <div className="flex space-x-2">
            {project.github && (
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-9 w-9 p-0 hover:bg-primary/20 hover:text-primary transition-all duration-300 rounded-lg"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.link && (
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-9 w-9 p-0 hover:bg-primary/20 hover:text-primary transition-all duration-300 rounded-lg"
                asChild
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="code-style text-primary text-sm animate-fade-in-up">
                <span className="text-muted-foreground">portfolio.</span>work()
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 shimmer-text font-heading">
              AI PORTFOLIO
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A curated collection of <span className="text-primary font-semibold">AI-powered solutions</span>, 
              <span className="text-primary font-semibold"> machine learning projects</span>, and 
              <span className="text-primary font-semibold"> creative web development applications</span> showcasing expertise in artificial intelligence and modern web technologies.
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-32 h-1 bg-gradient-primary rounded-full" />
            </div>
          </div>

          {/* AI Projects */}
          <div className="mb-20">
            <div className="flex items-center mb-12">
              <div className="p-3 bg-gradient-primary rounded-xl shadow-glow mr-4">
                <Brain className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground font-heading">
                  AI & Machine Learning Projects
                </h2>
                <p className="text-muted-foreground code-style text-sm">
                  // Intelligent AI chatbots and data science solutions
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiProjects.map((project, index) => (
                <div key={project.title} className="animate-fade-in-up">
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Research Projects */}
          <div className="mb-20">
            <div className="flex items-center mb-12">
              <div className="p-3 bg-gradient-accent rounded-xl shadow-glow mr-4">
                <Eye className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground font-heading">
                  Research Projects
                </h2>
                <p className="text-muted-foreground code-style text-sm">
                  // Academic research and experimental studies
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchProjects.map((project, index) => (
                <div key={project.title} className="animate-fade-in-up">
                  <ProjectCard project={project} index={index + aiProjects.length} />
                </div>
              ))}
            </div>
          </div>

          {/* Web Projects */}
          <div>
            <div className="flex items-center mb-12">
              <div className="p-3 bg-gradient-accent rounded-xl shadow-glow mr-4">
                <Code className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground font-heading">
                  Web Development Projects
                </h2>
                <p className="text-muted-foreground code-style text-sm">
                  // Modern e-commerce platforms and creative web applications
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webProjects.map((project, index) => (
                <div key={project.title} className="animate-fade-in-up">
                  <ProjectCard project={{...project, github: undefined}} index={index + aiProjects.length + researchProjects.length} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}