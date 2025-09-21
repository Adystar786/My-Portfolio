import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Palette, Rocket, Heart, Zap } from "lucide-react"

export default function About() {
  const passions = [
    { icon: <Brain className="h-6 w-6" />, name: "Artificial Intelligence", color: "from-blue-500 to-purple-600" },
    { icon: <Code className="h-6 w-6" />, name: "Machine Learning", color: "from-green-500 to-teal-600" },
    { icon: <Palette className="h-6 w-6" />, name: "Creative Technology", color: "from-pink-500 to-violet-600" },
    { icon: <Rocket className="h-6 w-6" />, name: "Space Technology", color: "from-orange-500 to-red-600" },
    { icon: <Heart className="h-6 w-6" />, name: "Human-Centered Design", color: "from-rose-500 to-pink-600" },
    { icon: <Zap className="h-6 w-6" />, name: "Innovation", color: "from-yellow-500 to-orange-600" }
  ]

  return (
    <div className="page-transition min-h-screen py-24">
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <h1>About Adnan - AI Developer & Machine Learning Engineer</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <span className="code-style text-primary text-sm animate-fade-in-up">
              <span className="text-muted-foreground">about.</span>getPersonality()
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text font-heading">
            About Me
          </h1>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
          {/* Main content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                I'm <strong className="text-foreground gradient-text">Adnan</strong>, an{" "}
                <strong className="text-primary">AI Developer and Machine Learning Engineer</strong> who 
                blends cutting-edge artificial intelligence with creative design thinking. As a{" "}
                <strong className="text-foreground">Computer Science student</strong>, 
                I specialize in building <strong className="text-primary">AI chatbots</strong>,{" "}
                <strong className="text-primary">intelligent applications</strong>, 
                and <strong className="text-primary">data science solutions</strong> that solve real-world problems.
              </p>
              
              <p className="text-muted-foreground">
                From developing <strong className="text-primary">mental health AI companions</strong> to creating{" "}
                <strong className="text-primary">smart travel planners</strong>, 
                I enjoy crafting technology that enhances human experiences. My expertise spans{" "}
                <strong className="text-foreground">Python development</strong>,{" "}
                <strong className="text-foreground">React applications</strong>,{" "}
                <strong className="text-foreground">machine learning algorithms</strong>, 
                and <strong className="text-foreground">modern web development</strong>.
              </p>
              
              <p className="text-muted-foreground">
                When I'm not coding <strong className="text-primary">AI portfolio projects</strong>, you'll find me exploring the intersection of{" "}
                <strong className="text-foreground">storytelling</strong>,{" "}
                <strong className="text-foreground">directing</strong>, and{" "}
                <strong className="text-foreground">space technology</strong> — always seeking to push the boundaries of what's possible.
              </p>
            </div>

            <div className="p-8 bg-gradient-secondary rounded-2xl glass-morphism">
              <h3 className="text-2xl font-semibold mb-4 text-foreground font-heading">My Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To bridge the gap between complex AI technology and human needs, creating solutions that are not just intelligent, but also intuitive and meaningful.
              </p>
            </div>
          </div>

          {/* Current projects card */}
          <div className="relative animate-slide-in-right">
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 card-3d glass-morphism">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-primary rounded-full pulse-glow" />
                    <span className="text-lg font-medium text-foreground">Currently Building</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-6 bg-card border border-border/50 rounded-xl hover:border-primary/30 transition-all duration-300 card-hover">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">TripStar AI</h4>
                      <p className="text-muted-foreground">AI-powered travel planning with machine learning recommendations</p>
                    </div>
                    
                    <div className="p-6 bg-card border border-border/50 rounded-xl hover:border-primary/30 transition-all duration-300 card-hover">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">Halal It</h4>
                      <p className="text-muted-foreground">Computer vision for automated food verification systems</p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-xl hover:border-primary/30 transition-all duration-300 card-hover">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">Next-Gen Portfolio</h4>
                      <p className="text-muted-foreground">Pushing the boundaries of creative web development</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Passions section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text font-heading">
            What Drives Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Exploring the intersection of technology, creativity, and human potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {passions.map((passion, index) => (
            <div 
              key={passion.name}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 card-3d skill-orb h-full">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${passion.color} rounded-xl shadow-glow mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {passion.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">
                    {passion.name}
                  </h3>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Personal touch */}
        <div className="mt-20 text-center">
          <Card className="max-w-4xl mx-auto border-border/50 glass-morphism">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6 gradient-text font-heading">
                Beyond the Code
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not immersed in AI development, you'll find me experimenting with{" "}
                <strong className="text-primary">creative storytelling</strong>, exploring{" "}
                <strong className="text-primary">space technology innovations</strong>, or{" "}
                <strong className="text-primary">directing creative projects</strong>. 
                I believe the best technology solutions come from understanding both the technical possibilities 
                and the human stories behind them.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}