import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Brain, Eye, BookOpen, MapPin, ShieldCheck, ShoppingBag, Zap, Code } from "lucide-react"

export function ProjectsSection() {
  const aiProjects = [
    {
      title: "Furina AI",
      subtitle: "Mental Health Companion",
      description: "An AI that listens, supports, and tracks moods to promote mental well-being.",
      icon: <Brain className="h-6 w-6" />,
      tech: ["Python", "NLP", "TensorFlow", "Firebase"],
      status: "Live",
      featured: true
    },
    {
      title: "Marvin",
      subtitle: "Virtual Assistant with Object Detection",
      description: "Your voice-controlled assistant that can also see the world around it.",
      icon: <Eye className="h-6 w-6" />,
      tech: ["Python", "OpenCV", "Speech Recognition", "Computer Vision"],
      status: "Live"
    },
    {
      title: "Raiden AI",
      subtitle: "Academic Assistant",
      description: "AI to help students organize resources, answer questions, and summarize content.",
      icon: <BookOpen className="h-6 w-6" />,
      tech: ["Python", "NLP", "Flask", "SQLite"],
      status: "Live"
    },
    {
      title: "TripStar AI",
      subtitle: "Travel Itinerary Generator",
      description: "Smart, AI-powered travel planning tailored to your preferences.",
      icon: <MapPin className="h-6 w-6" />,
      tech: ["React", "Python", "OpenAI API", "Firebase"],
      status: "In Progress"
    },
    {
      title: "Halal It",
      subtitle: "AI Order Checker",
      description: "Automated food delivery verification for Halal compliance.",
      icon: <ShieldCheck className="h-6 w-6" />,
      tech: ["React Native", "Python", "Computer Vision", "API"],
      status: "In Progress"
    }
  ]

  const webProjects = [
    {
      title: "Shroom's Rain Cloud",
      subtitle: "Ecommerce Platform",
      description: "Beautiful ecommerce site for artistic lamps with modern design and seamless UX.",
      icon: <ShoppingBag className="h-6 w-6" />,
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      status: "Live"
    },
    {
      title: "NeoBands",
      subtitle: "Wearables Shop",
      description: "Modern ecommerce platform for cutting-edge wearable technology.",
      icon: <Zap className="h-6 w-6" />,
      tech: ["React", "Firebase", "Tailwind CSS", "Payment Gateway"],
      status: "Live"
    },
    {
      title: "Matrix Webpage",
      subtitle: "Visual Showcase",
      description: "Interactive visual experience with Matrix-inspired animations and effects.",
      icon: <Code className="h-6 w-6" />,
      tech: ["JavaScript", "CSS3", "Canvas API", "WebGL"],
      status: "Live"
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
              {project.status === 'Live' ? '🟢 Live' : '🚧 In Progress'}
            </span>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              variant="ghost" 
              className="h-9 w-9 p-0 hover:bg-primary/20 hover:text-primary transition-all duration-300 rounded-lg"
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              className="h-9 w-9 p-0 hover:bg-primary/20 hover:text-primary transition-all duration-300 rounded-lg"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="code-style text-primary text-sm animate-fade-in-up">
              <span className="text-muted-foreground">portfolio.</span>work()
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 shimmer-text font-heading">
            MY WORK
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of <span className="text-primary font-semibold">AI-powered solutions</span> and 
            <span className="text-primary font-semibold"> creative web experiences</span> that push the boundaries of technology.
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
              <h3 className="text-3xl font-bold text-foreground font-heading">
                AI & Machine Learning
              </h3>
              <p className="text-muted-foreground code-style text-sm">
                // Intelligent solutions for real-world problems
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

        {/* Web Projects */}
        <div>
          <div className="flex items-center mb-12">
            <div className="p-3 bg-gradient-accent rounded-xl shadow-glow mr-4">
              <Code className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground font-heading">
                Web Applications & Platforms
              </h3>
              <p className="text-muted-foreground code-style text-sm">
                // Modern web experiences with cutting-edge design
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <div key={project.title} className="animate-fade-in-up">
                <ProjectCard project={project} index={index + aiProjects.length} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}