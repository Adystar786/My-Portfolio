import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
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
                <span className="text-muted-foreground">contact.</span>connect()
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text font-heading">
              Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on <span className="text-primary font-semibold">AI projects</span>, 
              <span className="text-primary font-semibold"> innovative web applications</span>, or discuss 
              <span className="text-primary font-semibold">new opportunities</span>? Let's create something amazing together.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <Card className="group border-border/50 hover:border-primary/50 transition-all duration-500 card-hover animate-fade-in-up">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl font-heading">Send Message</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Project collaboration, job opportunity, etc." 
                      className="border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project, ideas, or how we can work together..." 
                      rows={6}
                      className="border-border/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-xl text-lg font-medium"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information & Social Links */}
            <div className="space-y-8 animate-slide-in-right">
              
              {/* Direct Contact */}
              <Card className="border-border/50 bg-gradient-to-br from-card via-card to-primary/5">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-accent rounded-xl shadow-glow">
                      <Mail className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-heading">Direct Contact</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-secondary rounded-lg border border-border/50">
                    <p className="text-sm text-muted-foreground mb-1">Email Address</p>
                    <p className="text-foreground font-medium code-style">adnan.developer@email.com</p>
                  </div>
                  
                  <div className="p-4 bg-gradient-secondary rounded-lg border border-border/50">
                    <p className="text-sm text-muted-foreground mb-1">Response Time</p>
                    <p className="text-foreground font-medium">Usually within 24 hours</p>
                  </div>
                  
                  <div className="p-4 bg-gradient-secondary rounded-lg border border-border/50">
                    <p className="text-sm text-muted-foreground mb-1">Available For</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["AI Projects", "Web Development", "Freelance Work", "Collaborations"].map((item) => (
                        <span 
                          key={item}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-border/50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-heading">Connect on Social Media</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Follow my journey in AI development and web technologies
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: <Github className="h-5 w-5" />, label: "GitHub", handle: "@adnan-dev" },
                      { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", handle: "/in/adnan-ai" },
                      { icon: <Twitter className="h-5 w-5" />, label: "Twitter", handle: "@adnan_ai_dev" }
                    ].map((social) => (
                      <Button 
                        key={social.label}
                        variant="outline" 
                        className="flex flex-col items-center space-y-2 h-auto py-4 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      >
                        {social.icon}
                        <div className="text-center">
                          <p className="text-xs font-medium">{social.label}</p>
                          <p className="text-xs text-muted-foreground code-style">{social.handle}</p>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <div className="flex items-center justify-center space-x-3 p-4 bg-card border border-border rounded-lg">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse shadow-[0_0_10px_hsl(var(--success))]" />
                <span className="text-sm font-medium text-muted-foreground">
                  Available for new projects and opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}