import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Lightbulb, Palette, Zap } from "lucide-react"

export default function Skills() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleCards(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.skill-card')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      description: "Building intelligent systems and AI chatbots with cutting-edge technology",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Natural Language Processing", level: 90 },
        { name: "TensorFlow & PyTorch", level: 85 },
        { name: "Computer Vision (OpenCV)", level: 80 },
        { name: "Data Science & Analytics", level: 88 },
        { name: "Machine Learning Algorithms", level: 92 },
        { name: "AI Chatbot Development", level: 95 }
      ],
      color: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-600/10"
    },
    {
      title: "Web Development & Applications",
      description: "Creating modern web applications and e-commerce platforms",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "React & Next.js Development", level: 95 },
        { name: "Python Web Frameworks", level: 88 },
        { name: "E-commerce Websites", level: 90 },
        { name: "Personal Portfolio Websites", level: 98 },
        { name: "Modern Web Development", level: 92 },
        { name: "Responsive Design", level: 90 }
      ],
      color: "from-green-500 to-teal-600",
      bgGradient: "from-green-500/10 to-teal-600/10"
    },
    {
      title: "Programming & Development",
      description: "Expert in multiple programming languages and frameworks",
      icon: <Zap className="h-6 w-6" />,
      skills: [
        { name: "Python Developer", level: 95 },
        { name: "JavaScript & TypeScript", level: 90 },
        { name: "React Developer", level: 92 },
        { name: "SQL & Database Design", level: 85 },
        { name: "Algorithm Development", level: 88 },
        { name: "Software Engineering", level: 87 }
      ],
      color: "from-orange-500 to-red-600",
      bgGradient: "from-orange-500/10 to-red-600/10"
    },
    {
      title: "Data Science & Analytics",
      description: "Advanced data analysis and database management",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Data Analysis & Visualization", level: 88 },
        { name: "MongoDB & Firebase", level: 85 },
        { name: "SQL Database Design", level: 87 },
        { name: "Big Data Processing", level: 80 },
        { name: "Statistical Analysis", level: 83 },
        { name: "Data Mining", level: 82 }
      ],
      color: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/10 to-blue-600/10"
    },
    {
      title: "Problem Solving & Architecture",
      description: "System design and optimization expertise", 
      icon: <Lightbulb className="h-6 w-6" />,
      skills: [
        { name: "Algorithm Design", level: 90 },
        { name: "System Architecture", level: 85 },
        { name: "Performance Optimization", level: 83 },
        { name: "Technical Research", level: 88 },
        { name: "Code Documentation", level: 87 },
        { name: "Debugging & Testing", level: 90 }
      ],
      color: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-500/10 to-purple-600/10"
    },
    {
      title: "Creative & Innovation",
      description: "Combining technical expertise with creative thinking",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: "Creative Developer Mindset", level: 95 },
        { name: "Problem-solving & Analysis", level: 92 },
        { name: "AI Portfolio Design", level: 90 },
        { name: "User Experience Design", level: 85 },
        { name: "Project Leadership", level: 88 },
        { name: "Technical Communication", level: 90 }
      ],
      color: "from-pink-500 to-violet-600",
      bgGradient: "from-pink-500/10 to-violet-600/10"
    }
  ]

  return (
    <div className="page-transition min-h-screen py-24">
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <h1>Technical Skills - AI Developer & Machine Learning Engineer</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <span className="code-style text-primary text-sm animate-fade-in-up">
              <span className="text-muted-foreground">skills.</span>getTechnicalExpertise()
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text font-heading">
            Technical Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive skills in <span className="text-primary font-semibold">AI development</span>, 
            <span className="text-primary font-semibold"> machine learning</span>, and 
            <span className="text-primary font-semibold"> modern web development</span>
          </p>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              data-index={index}
              className={`skill-card group border-border/50 hover:border-primary/50 transition-all duration-500 card-3d skill-orb animate-fade-in-up overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors font-heading">
                      {category.title}
                    </CardTitle>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-border/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out ${
                          visibleCards.includes(index) ? 'progress-fill' : 'w-0'
                        }`}
                        style={{ 
                          '--progress-width': `${skill.level}%`,
                          animationDelay: `${skillIndex * 100}ms`
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional skills badges */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 gradient-text font-heading">
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
              "TensorFlow", "PyTorch", "OpenCV", "scikit-learn", "Pandas", "NumPy",
              "MongoDB", "Firebase", "PostgreSQL", "MySQL", "Redis", "Docker",
              "AWS", "Git", "GitHub", "VS Code", "Jupyter", "Figma",
              "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Sass", "WebGL"
            ].map((tech, index) => (
              <Badge 
                key={tech}
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 skill-orb animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Learning section */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-border/50 glass-morphism">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-3 h-3 bg-primary rounded-full pulse-glow mr-3" />
                <span className="text-lg font-medium text-foreground">Continuous Learning</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 gradient-text font-heading">
                Always Evolving
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The tech landscape evolves rapidly, and so do I. Currently exploring{" "}
                <strong className="text-primary">Large Language Models</strong>,{" "}
                <strong className="text-primary">Computer Vision advances</strong>, and{" "}
                <strong className="text-primary">cutting-edge web technologies</strong> to stay at the forefront of innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}