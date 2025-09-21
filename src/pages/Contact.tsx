import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Github, Linkedin, Send, MapPin, MessageSquare, Rocket } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Message sent! 🚀",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })
    
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactLinks = [
    {
      name: "Email",
      value: "adnan@example.com",
      href: "mailto:adnan@example.com",
      icon: <Mail className="h-5 w-5" />,
      description: "Drop me a line anytime",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "GitHub",
      value: "github.com/adnan",
      href: "https://github.com/adnan",
      icon: <Github className="h-5 w-5" />,
      description: "Check out my latest code",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/adnan",
      href: "https://linkedin.com/in/adnan",
      icon: <Linkedin className="h-5 w-5" />,
      description: "Let's connect professionally",
      color: "from-blue-600 to-blue-800"
    }
  ]

  const projectTypes = [
    {
      title: "AI Development",
      description: "Custom AI chatbots, machine learning models, and intelligent applications",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Web Applications",
      description: "Modern, responsive websites and e-commerce platforms",
      icon: <MapPin className="h-6 w-6" />,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Creative Projects",
      description: "Innovative digital experiences and interactive installations",
      icon: <Rocket className="h-6 w-6" />,
      color: "from-orange-500 to-red-600"
    }
  ]

  return (
    <div className="page-transition min-h-screen py-24">
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <h1>Contact Adnan - AI Developer & Machine Learning Engineer</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <span className="code-style text-primary text-sm animate-fade-in-up">
              <span className="text-muted-foreground">contact.</span>initializeConnection()
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text font-heading">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Have an exciting project in mind? Looking to collaborate on AI solutions? 
            Or just want to say hello? I'd love to hear from you.
          </p>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 glass-morphism">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center font-heading gradient-text">
                  <Send className="h-8 w-8 text-primary mr-4" />
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Ready to bring your ideas to life? Let's discuss your project.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="border-border/50 focus:border-primary bg-card/50 backdrop-blur"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-border/50 focus:border-primary bg-card/50 backdrop-blur"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="border-border/50 focus:border-primary bg-card/50 backdrop-blur"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea, or just say hello..."
                      rows={6}
                      required
                      className="border-border/50 focus:border-primary resize-none bg-card/50 backdrop-blur"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow ripple py-6 text-lg font-medium"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Rocket className="h-5 w-5 mr-2" />
                        Launch Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact info and links */}
          <div className="space-y-8">
            {/* Contact links */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 glass-morphism">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center font-heading">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-card border border-border/50 rounded-xl hover:border-primary/50 hover:bg-card-hover transition-all duration-300 group card-3d"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 bg-gradient-to-r ${link.color} rounded-lg shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {link.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                        <p className="text-xs text-primary font-mono">{link.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Project types */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 glass-morphism">
              <CardHeader>
                <CardTitle className="text-2xl font-heading gradient-text">
                  What I Can Help With
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {projectTypes.map((type, index) => (
                  <div 
                    key={type.title}
                    className="p-4 bg-gradient-secondary rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 bg-gradient-to-r ${type.color} rounded-lg shadow-glow flex-shrink-0`}>
                        {type.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{type.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Availability status */}
            <Card className="border-border/50 glass-morphism">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-primary rounded-full mb-4 shadow-glow">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-white">Available for New Projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting exciting opportunities and collaborations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ section */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-border/50 glass-morphism">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6 gradient-text font-heading">
                Frequently Asked Questions
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to messages within 24 hours during business days.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Project Timeline</h4>
                  <p className="text-sm text-muted-foreground">
                    Project timelines vary based on complexity, but I'll provide clear estimates upfront.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Budget Range</h4>
                  <p className="text-sm text-muted-foreground">
                    I work with various budgets and can discuss options that fit your needs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Collaboration Style</h4>
                  <p className="text-sm text-muted-foreground">
                    I believe in transparent communication and iterative development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}