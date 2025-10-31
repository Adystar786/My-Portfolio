export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl geometric-float" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl geometric-float" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <span className="code-style text-primary text-sm animate-fade-in-up">
                <span className="text-muted-foreground">about.</span>getPersonality()
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text font-heading">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                I'm <strong className="text-foreground">Adnan</strong>, an <strong className="text-primary">AI Developer and Machine Learning Engineer</strong> who 
                blends cutting-edge artificial intelligence with creative design thinking. As a <strong className="text-foreground">Computer Science graduate</strong>, 
                I specialize in building <strong className="text-primary">AI chatbots</strong>, <strong className="text-primary">intelligent applications</strong>, 
                and <strong className="text-primary">data science solutions</strong> that solve real-world problems.
              </p>
              
              <p className="text-muted-foreground">
                From developing <strong className="text-primary">mental health AI companions</strong> to creating <strong className="text-primary">smart travel planners</strong>, 
                I enjoy crafting technology that enhances human experiences. My expertise spans <strong className="text-foreground">Python development</strong>, 
                <strong className="text-foreground">React applications</strong>, <strong className="text-foreground">machine learning algorithms</strong>, 
                and <strong className="text-foreground">modern web development</strong>.
              </p>
              
              <p className="text-muted-foreground">
                When I'm not coding <strong className="text-primary">AI portfolio projects</strong>, you'll find me exploring the intersection of 
                <strong className="text-foreground"> storytelling</strong>, <strong className="text-foreground">directing</strong>, and 
                <strong className="text-foreground">space technology</strong> — always seeking to push the boundaries of what's possible.
              </p>
            </div>
            
            <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground font-heading">Passionate About</h3>
              <div className="flex flex-wrap gap-3">
                {["Artificial Intelligence", "Machine Learning", "Data Science", "Storytelling", "Space Technology"].map((passion) => (
                  <span 
                    key={passion}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-card-foreground hover:border-primary/50 transition-colors"
                  >
                    {passion}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Current Projects */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10 p-8 bg-card border border-border rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 card-hover">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full pulse-glow" />
                  <span className="text-sm font-medium text-muted-foreground">Currently Building AI Solutions</span>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-secondary rounded-lg border border-border/50">
                    <h4 className="font-semibold text-foreground mb-2">TripStar AI</h4>
                    <p className="text-sm text-muted-foreground">AI-powered travel planning with machine learning</p>
                  </div>
                  
                  <div className="p-4 bg-gradient-secondary rounded-lg border border-border/50">
                    <h4 className="font-semibold text-foreground mb-2">Halal It</h4>
                    <p className="text-sm text-muted-foreground">Computer vision for automated food verification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}