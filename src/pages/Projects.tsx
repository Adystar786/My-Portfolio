import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Brain, Globe, Lightbulb, Heart, MapPin, Shield } from "lucide-react"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      category: "ai",
      title: "Furina AI",
      subtitle: "Mental Health Companion",
      description: "An intelligent AI chatbot designed to provide emotional support and mental health guidance. Features mood tracking, personalized conversations, and therapeutic techniques.",
      longDescription: "Advanced natural language processing system that provides empathetic responses and mental health support through machine learning algorithms.",
      tech: ["Python", "TensorFlow", "Natural Language Processing", "Flask", "React"],
      icon: <Heart className="h-8 w-8" />,
      status: "completed",
      github: "https://github.com/adnan/furina-ai",
      live: "https://furina-ai.demo.com",
      color: "from-pink-500 to-rose-600"
    },
    {
      category: "ai",
      title: "Marvin",
      subtitle: "Virtual Assistant with Computer Vision",
      description: "Voice-controlled AI assistant with object detection capabilities. Combines speech recognition with computer vision for enhanced user interaction.",
      longDescription: "Multi-modal AI system integrating voice commands with real-time object detection using OpenCV and machine learning models.",
      tech: ["Python", "OpenCV", "Computer Vision", "Speech Recognition", "Machine Learning"],
      icon: <Brain className="h-8 w-8" />,
      status: "completed",
      github: "https://github.com/adnan/marvin-ai",
      color: "from-blue-500 to-purple-600"
    },
    {
      category: "ai",
      title: "Raiden AI",
      subtitle: "Academic Assistant",
      description: "AI-powered academic companion that helps students organize resources, answer questions, and summarize educational content efficiently.",
      longDescription: "Educational AI system designed to enhance student learning through intelligent content organization and question-answering capabilities.",
      tech: ["Python", "Natural Language Processing", "Educational APIs", "React", "Node.js"],
      icon: <Lightbulb className="h-8 w-8" />,
      status: "completed",
      github: "https://github.com/adnan/raiden-ai",
      color: "from-yellow-500 to-orange-600"
    },
    {
      category: "ai",
      title: "TripStar AI",
      subtitle: "Travel Itinerary Generator",
      description: "Smart AI-powered travel planning application that creates personalized itineraries based on user preferences and real-time data.",
      longDescription: "Intelligent travel planning system using machine learning to analyze user preferences and generate optimized travel itineraries.",
      tech: ["Python", "Machine Learning", "APIs", "Data Science", "React"],
      icon: <MapPin className="h-8 w-8" />,
      status: "in-progress",
      github: "https://github.com/adnan/tripstar-ai",
      color: "from-green-500 to-teal-600"
    },
    {
      category: "ai",
      title: "Halal It",
      subtitle: "AI Order Checker",
      description: "Automated food delivery verification system using computer vision to ensure Halal compliance for food orders.",
      longDescription: "Computer vision application that analyzes food images and ingredients to verify Halal compliance in real-time.",
      tech: ["Python", "Computer Vision", "Image Processing", "Machine Learning", "API Integration"],
      icon: <Shield className="h-8 w-8" />,
      status: "in-progress",
      color: "from-emerald-500 to-green-600"
    },
    {
      category: "web",
      title: "Shroom's Rain Cloud",
      subtitle: "Artistic Lamps E-commerce",
      description: "Modern e-commerce platform specializing in artistic lighting solutions with creative design and smooth user experience.",
      longDescription: "Full-stack e-commerce application featuring custom lighting products with advanced filtering and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Responsive Design"],
      icon: <Globe className="h-8 w-8" />,
      status: "completed",
      live: "https://shroomsraincloud.com",
      color: "from-indigo-500 to-purple-600"
    },
    {
      category: "web",
      title: "NeoBands",
      subtitle: "Wearables E-commerce",
      description: "Sleek e-commerce shop for modern wearable technology with intuitive product browsing and secure checkout experience.",
      longDescription: "Contemporary e-commerce platform focused on wearable technology with modern UI/UX design principles.",
      tech: ["React", "Firebase", "Payment Gateway", "Responsive Design", "PWA"],
      icon: <Globe className="h-8 w-8" />,
      status: "completed",
      live: "https://neobands.shop",
      color: "from-cyan-500 to-blue-600"
    },
    {
      category: "web",
      title: "Matrix Webpage",
      subtitle: "Interactive Visual Showcase",
      description: "Creative web experience featuring Matrix-inspired animations and interactive elements showcasing advanced CSS and JavaScript skills.",
      longDescription: "Experimental web project demonstrating advanced animation techniques and interactive design elements.",
      tech: ["JavaScript", "CSS Animations", "WebGL", "Interactive Design", "Creative Coding"],
      icon: <Globe className="h-8 w-8" />,
      status: "completed",
      github: "https://github.com/adnan/matrix-webpage",
      live: "https://matrix-demo.com",
      color: "from-green-500 to-emerald-600"
    }
  ]

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const filters = [
    { key: "all", label: "All Projects", count: projects.length },
    { key: "ai", label: "AI Projects", count: projects.filter(p => p.category === "ai").length },
    { key: "web", label: "Web Development", count: projects.filter(p => p.category === "web").length }
  ]

  return (
    <div className="page-transition min-h-screen py-24">
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <h1>AI Projects & Web Development Portfolio - Adnan</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <span className="code-style text-primary text-sm animate-fade-in-up">
              <span className="text-muted-foreground">projects.</span>showcaseWork()
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text font-heading">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Exploring the intersection of AI, creativity, and practical solutions through innovative projects
          </p>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.key 
                  ? "bg-gradient-primary shadow-glow" 
                  : "border-border/50 hover:border-primary/50 glass-morphism"
              }`}
            >
              {filter.label}
              <Badge variant="secondary" className="ml-2 text-xs">
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="group border-border/50 hover:border-primary/50 transition-all duration-500 card-3d skill-orb animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${project.color} rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    {project.status === "in-progress" && (
                      <Badge variant="secondary" className="text-xs bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                        In Progress
                      </Badge>
                    )}
                    {project.github && (
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-colors font-heading">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-primary font-medium">{project.subtitle}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      {project.category === "ai" ? "AI Project" : "Web Development"}
                    </span>
                    <div className="flex space-x-2">
                      {project.github && (
                        <Button size="sm" variant="outline" className="h-8 px-3 text-xs" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            Code
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button size="sm" className="h-8 px-3 text-xs bg-gradient-primary" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <Card className="max-w-4xl mx-auto border-border/50 glass-morphism">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6 gradient-text font-heading">
                Let's Build Something Amazing
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Have an idea for an AI project or need help with web development? 
                I'm always excited to work on innovative solutions.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow px-8 py-3">
                Start a Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}