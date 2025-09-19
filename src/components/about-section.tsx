export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm <span className="font-semibold text-foreground">Adnan</span>, a developer who blends 
              <span className="font-semibold gradient-text"> AI</span>, 
              <span className="font-semibold gradient-text"> design</span>, and 
              <span className="font-semibold gradient-text"> creativity</span> to build tools that make life smarter.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              From mental health companions to intelligent travel planners, I enjoy solving problems 
              while keeping the <span className="font-semibold text-foreground">human side of technology</span> in focus.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Passionate About</h3>
              <div className="flex flex-wrap gap-3">
                {["Artificial Intelligence", "Storytelling", "Directing", "Space Exploration"].map((passion) => (
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
          
          <div className="relative animate-slide-in-right">
            <div className="relative z-10 p-8 bg-card border border-border rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 card-hover">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full pulse-glow" />
                  <span className="text-sm font-medium text-muted-foreground">Currently Building</span>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-secondary rounded-lg border border-border/50">
                    <h4 className="font-semibold text-foreground mb-2">TripStar AI</h4>
                    <p className="text-sm text-muted-foreground">AI-powered travel planning platform</p>
                  </div>
                  
                  <div className="p-4 bg-gradient-secondary rounded-lg border border-border/50">
                    <h4 className="font-semibold text-foreground mb-2">Halal It</h4>
                    <p className="text-sm text-muted-foreground">Automated food delivery verification</p>
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