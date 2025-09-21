import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react"

export default function Resume() {
  const education = {
    degree: "Bachelor's of Computer Applications (BCA)",
    institution: "University Name",
    period: "2022 - 2025",
    status: "Final Year",
    gpa: "8.5/10",
    location: "City, Country",
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning & AI",
      "Database Management Systems",
      "Web Development",
      "Software Engineering",
      "Computer Networks"
    ]
  }

  const achievements = [
    {
      title: "AI Portfolio Development",
      description: "Built comprehensive collection of AI projects including mental health companions, virtual assistants, and academic tools",
      date: "2023 - Present",
      icon: <Award className="h-5 w-5" />,
      highlights: [
        "5+ AI chatbot applications deployed",
        "Advanced NLP and computer vision implementation",
        "User-centered design approach"
      ]
    },
    {
      title: "E-commerce Platform Success",
      description: "Developed and launched multiple successful e-commerce platforms for creative products and wearables",
      date: "2023",
      icon: <Award className="h-5 w-5" />,
      highlights: [
        "Full-stack development expertise",
        "Payment gateway integration",
        "Responsive design implementation"
      ]
    },
    {
      title: "Creative Technology Projects",
      description: "Created innovative web experiences combining art, technology, and interactive design",
      date: "2022 - 2024",
      icon: <Award className="h-5 w-5" />,
      highlights: [
        "Matrix-inspired interactive animations",
        "Advanced CSS and JavaScript techniques",
        "Creative coding exploration"
      ]
    }
  ]

  const experience = [
    {
      title: "AI Developer & Researcher",
      company: "Personal Projects",
      period: "2023 - Present",
      location: "Remote",
      type: "Project Development",
      description: "Developing cutting-edge AI applications focused on mental health, education, and travel planning",
      responsibilities: [
        "Designed and implemented AI chatbots using Python and TensorFlow",
        "Integrated computer vision capabilities with OpenCV",
        "Created user-friendly interfaces with React and modern web technologies",
        "Deployed applications with focus on scalability and performance"
      ],
      technologies: ["Python", "TensorFlow", "React", "OpenCV", "Flask", "MongoDB"]
    },
    {
      title: "Full-Stack Web Developer",
      company: "E-commerce Projects",
      period: "2022 - 2023",
      location: "Remote",
      type: "Freelance",
      description: "Built modern e-commerce platforms with emphasis on user experience and business functionality",
      responsibilities: [
        "Developed responsive e-commerce websites from concept to deployment",
        "Implemented secure payment processing and user authentication",
        "Optimized for performance and search engine visibility",
        "Collaborated with clients to translate business requirements into technical solutions"
      ],
      technologies: ["React", "Node.js", "Firebase", "Stripe", "MongoDB", "CSS3"]
    }
  ]

  const certifications = [
    "Machine Learning Fundamentals",
    "Python for Data Science",
    "React Development",
    "Computer Vision Basics",
    "Web Development Best Practices"
  ]

  return (
    <div className="page-transition min-h-screen py-24">
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <h1>Resume - Adnan | AI Developer & Computer Science Student</h1>
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <span className="code-style text-primary text-sm animate-fade-in-up">
              <span className="text-muted-foreground">resume.</span>getCareerPath()
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text font-heading">
            Education & Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Academic foundation in Computer Science with hands-on experience in AI development and web technologies
          </p>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow px-8 py-3"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume PDF
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column - Education & Certifications */}
          <div className="lg:col-span-1 space-y-8">
            {/* Education */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 card-3d">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-heading">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{education.degree}</h3>
                    <p className="text-primary font-medium">{education.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Calendar className="h-4 w-4" />
                      {education.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {education.location}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gradient-secondary rounded-lg">
                    <span className="text-sm font-medium">Current Status</span>
                    <Badge className="bg-primary text-primary-foreground">{education.status}</Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 text-foreground">Key Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {education.coursework.map((course) => (
                        <Badge key={course} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 card-3d">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-heading">
                  <Award className="h-6 w-6 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div 
                      key={cert}
                      className="flex items-center gap-3 p-3 bg-card border border-border/50 rounded-lg hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column - Experience & Achievements */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-heading gradient-text">
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l-2 border-border/50 last:border-l-0 last:pb-0">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="text-primary font-medium">{exp.company}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      
                      <div>
                        <h4 className="font-medium mb-2 text-foreground">Key Responsibilities</h4>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2 text-foreground">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-heading gradient-text">
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="p-6 bg-gradient-secondary rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gradient-primary rounded-lg shadow-glow flex-shrink-0">
                        {achievement.icon}
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.date}</p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                        <div>
                          <h4 className="font-medium mb-2 text-foreground">Highlights</h4>
                          <ul className="space-y-1">
                            {achievement.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <Card className="max-w-4xl mx-auto border-border/50 glass-morphism">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6 gradient-text font-heading">
                Ready to Collaborate?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, or collaborative ventures in AI and web development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow px-8 py-3">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Projects
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-3">
                  <Download className="mr-2 h-5 w-5" />
                  Download Full CV
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}