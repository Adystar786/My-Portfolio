import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, GraduationCap, Award, Calendar } from "lucide-react"

export default function Resume() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl geometric-float" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl geometric-float" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="code-style text-primary text-sm animate-fade-in-up">
                <span className="text-muted-foreground">resume.</span>getCredentials()
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text font-heading">
              Education & Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Academic background and achievements in <span className="text-primary font-semibold">Computer Science</span>, 
              <span className="text-primary font-semibold"> Artificial Intelligence</span>, and 
              <span className="text-primary font-semibold">Machine Learning</span>
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <div className="flex items-center mb-12">
              <div className="p-3 bg-gradient-primary rounded-xl shadow-glow mr-4">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground font-heading">Education</h2>
                <p className="text-muted-foreground code-style text-sm">
                  // Academic foundation in computer science and AI
                </p>
              </div>
            </div>
            
            <Card className="group border-border/50 hover:border-primary/50 transition-all duration-500 card-hover animate-fade-in-up bg-gradient-to-br from-card via-card to-primary/5">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 bg-gradient-primary rounded-xl shadow-glow group-hover:scale-110 transition-all duration-300">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300 font-heading">
                        Bachelor's of Computer Applications (BCA)
                      </CardTitle>
                      <p className="text-muted-foreground font-medium text-lg">
                        Computer Science Major
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-4 md:mt-0">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <Badge className="bg-gradient-primary text-primary-foreground shadow-glow">
                      Class of 2025
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing <strong className="text-primary">Bachelor's of Computer Applications</strong> with a focus on 
                  <strong className="text-foreground"> Artificial Intelligence</strong>, <strong className="text-foreground">Machine Learning</strong>, 
                  and <strong className="text-foreground">Software Development</strong>. Graduated in 2025 with comprehensive knowledge in 
                  computer science fundamentals, programming languages, and advanced AI technologies.
                </p>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground font-heading">Core Subjects & Expertise</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Data Structures & Algorithms", 
                          "Artificial Intelligence", 
                          "Machine Learning", 
                          "Database Management",
                          "Software Engineering"
                        ].map((subject) => (
                          <Badge 
                            key={subject} 
                            variant="secondary" 
                            className="text-xs hover:bg-primary/20 hover:text-primary transition-colors"
                          >
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Web Development", 
                          "Python Programming", 
                          "Object-Oriented Programming", 
                          "Computer Networks",
                          "Operating Systems"
                        ].map((subject) => (
                          <Badge 
                            key={subject} 
                            variant="secondary" 
                            className="text-xs hover:bg-primary/20 hover:text-primary transition-colors"
                          >
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Achievements Section */}
          <div className="mb-16">
            <div className="flex items-center mb-12">
              <div className="p-3 bg-gradient-accent rounded-xl shadow-glow mr-4">
                <Award className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground font-heading">Key Achievements</h2>
                <p className="text-muted-foreground code-style text-sm">
                  // Notable accomplishments and recognitions
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI Project Portfolio",
                  description: "Developed and deployed multiple AI applications including mental health companions, computer vision systems, and intelligent chatbots.",
                  icon: <Award className="h-6 w-6" />,
                  highlight: "5+ AI Projects Live"
                },
                {
                  title: "Full-Stack Development",
                  description: "Built modern e-commerce platforms and web applications using React, Python, and modern development frameworks.",
                  icon: <Award className="h-6 w-6" />,
                  highlight: "3+ Web Applications"
                },
                {
                  title: "Machine Learning Expertise",
                  description: "Specialized in NLP, computer vision, and data science with practical implementations in real-world applications.",
                  icon: <Award className="h-6 w-6" />,
                  highlight: "Advanced ML Skills"
                },
                {
                  title: "Creative Problem Solving",
                  description: "Combined technical skills with storytelling and creative thinking to develop innovative solutions.",
                  icon: <Award className="h-6 w-6" />,
                  highlight: "Interdisciplinary Approach"
                }
              ].map((achievement, index) => (
                <Card 
                  key={achievement.title}
                  className="group border-border/50 hover:border-primary/50 transition-all duration-500 card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-accent rounded-xl shadow-glow group-hover:scale-110 transition-all duration-300">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 font-heading">
                          {achievement.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-2 text-xs">
                          {achievement.highlight}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Download Resume Section */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center space-y-6 px-8 py-8 bg-card border border-border rounded-2xl shadow-card">
              <div className="p-4 bg-gradient-primary rounded-full shadow-glow">
                <Download className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">
                  Download Full Resume
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Get the complete details of my education, projects, and technical expertise in PDF format.
                </p>
                <Button 
                  size="lg" 
                  className="group bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-xl px-8 py-3 text-lg font-medium"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Download PDF Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}