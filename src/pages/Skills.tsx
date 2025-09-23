import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Database, Lightbulb, Palette, Zap } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      description: "Building intelligent systems and AI chatbots",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Natural Language Processing", "TensorFlow & PyTorch", "Computer Vision (OpenCV)", "Data Science & Analytics", "Machine Learning Algorithms", "AI Chatbot Development"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Web Development & Applications",
      description: "Creating modern web applications and e-commerce platforms",
      icon: <Code className="h-6 w-6" />,
      skills: ["React & Next.js Development", "Python Web Frameworks", "E-commerce Websites", "Personal Portfolio Websites", "Modern Web Development", "Responsive Design"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Programming & Development",
      description: "Expert in multiple programming languages and frameworks",
      icon: <Zap className="h-6 w-6" />,
      skills: ["Python Developer", "JavaScript & TypeScript", "React Developer", "SQL & Database Design", "Algorithm Development", "Software Engineering"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Data Science & Analytics",
      description: "Advanced data analysis and database management",
      icon: <Database className="h-6 w-6" />,
      skills: ["Data Analysis & Visualization", "MongoDB & Firebase", "SQL Database Design", "Big Data Processing", "Statistical Analysis", "Data Mining"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Problem Solving & Architecture",
      description: "System design and optimization expertise", 
      icon: <Lightbulb className="h-6 w-6" />,
      skills: ["Algorithm Design", "System Architecture", "Performance Optimization", "Technical Research", "Code Documentation", "Debugging & Testing"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Creative & Soft Skills",
      description: "Combining technical expertise with creative thinking",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Creative Developer Mindset", "Problem-solving & Analysis", "AI Portfolio Design", "User Experience Design", "Project Leadership", "Technical Communication"],
      color: "from-pink-500 to-violet-600"
    }
  ]

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-24 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="code-style text-primary text-sm animate-fade-in-up">
                <span className="text-muted-foreground">skills.</span>getTechnicalExpertise()
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text font-heading">Technical Expertise</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive skills in <span className="text-primary font-semibold">AI development</span>, 
              <span className="text-primary font-semibold"> machine learning</span>, and 
              <span className="text-primary font-semibold">modern web development</span>
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="group border-border/50 hover:border-primary/50 transition-all duration-500 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg shadow-glow`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors font-heading">
                        {category.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-card border border-border rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Continuously learning cutting-edge AI and web development technologies
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}