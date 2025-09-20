import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react"

export function EducationAchievements() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Education */}
          <div className="animate-fade-in-up">
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl font-bold gradient-text">Education</h2>
            </div>
            
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 card-hover">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">Bachelor of Science in Computer Science</CardTitle>
                    <p className="text-muted-foreground font-medium">Final Year Student</p>
                  </div>
                  <Badge className="bg-gradient-primary text-primary-foreground">Current</Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Expected Graduation: 2024</span>
                </div>
                
                <div className="p-4 bg-gradient-secondary rounded-lg border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Artificial Intelligence", "Data Science", "Software Engineering", "Algorithms"].map((spec) => (
                      <Badge key={spec} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
          </div>

          {/* Achievements */}
          <div className="animate-slide-in-right">
            <div className="flex items-center mb-8">
              <Award className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl font-bold gradient-text">Achievements</h2>
            </div>
            
            <div className="space-y-6">
              <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg shadow-glow flex-shrink-0">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">AI Portfolio Development</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Successfully built and deployed multiple AI chatbots, machine learning applications, and data science solutions across various domains
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {["Furina AI", "Marvin", "Raiden AI", "TripStar AI"].map((project) => (
                          <Badge key={project} variant="secondary" className="text-xs">
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-accent rounded-lg shadow-glow flex-shrink-0">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Advanced AI & ML Studies</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Pursuing advanced studies in Artificial Intelligence and Machine Learning for specialized expertise in AI development
                      </p>
                      <Badge className="bg-success text-success-foreground">Planning</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg shadow-glow flex-shrink-0">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Web Development Projects</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Developed and launched multiple e-commerce platforms and personal portfolio websites using modern web development technologies
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {["Shroom's Rain Cloud", "NeoBands", "Matrix Webpage"].map((project) => (
                          <Badge key={project} variant="secondary" className="text-xs">
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}