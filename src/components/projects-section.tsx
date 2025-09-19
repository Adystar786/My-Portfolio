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
    <Card className={`group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 card-hover ${
      project.featured ? 'ring-2 ring-primary/20' : ''
    }`} style={{ animationDelay: `${index * 100}ms` }}>
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-primary text-primary-foreground">Featured</Badge>
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
            {project.icon}
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground font-medium">
              {project.subtitle}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              project.status === 'Live' ? 'bg-success animate-pulse' : 'bg-primary'
            }`} />
            <span className="text-sm text-muted-foreground">{project.status}</span>
          </div>
          
          <div className="flex space-x-2">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Github className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of AI-powered solutions and creative web experiences
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
        </div>

        {/* AI Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center">
            <Brain className="mr-3 h-6 w-6 text-primary" />
            AI & Machine Learning Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProjects.map((project, index) => (
              <div key={project.title} className="animate-fade-in-up">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Web Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center">
            <Code className="mr-3 h-6 w-6 text-primary" />
            Web Applications & Platforms
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project, index) => (
              <div key={project.title} className="animate-fade-in-up">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}