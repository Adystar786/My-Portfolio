import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Database, Lightbulb, Palette, Zap } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Natural Language Processing", "TensorFlow", "OpenCV", "Computer Vision", "Neural Networks", "Deep Learning"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Web & Applications",
      icon: <Code className="h-6 w-6" />,
      skills: ["React", "JavaScript", "TypeScript", "Flask", "Node.js", "Firebase", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Programming Languages",
      icon: <Zap className="h-6 w-6" />,
      skills: ["Python", "JavaScript", "C/C++", "SQL", "HTML/CSS", "Java"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data & Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["SQL", "MongoDB", "Firebase", "Data Analysis", "Algorithms", "Data Structures"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Problem Solving",
      icon: <Lightbulb className="h-6 w-6" />,
      skills: ["Algorithm Design", "System Architecture", "Debugging", "Performance Optimization", "Research", "Documentation"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Creative Edge",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Storytelling", "Directing", "UI/UX Design", "Futuristic Design Thinking", "Creative Problem Solving", "Innovation"],
      color: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <section id="skills" className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Blending technical expertise with creative thinking to build innovative solutions
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
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
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
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}