import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Home, User, Briefcase, Code, FileText, Mail } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export function EnhancedNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4" /> },
    { name: "About", path: "/about", icon: <User className="h-4 w-4" /> },
    { name: "Projects", path: "/projects", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Skills", path: "/skills", icon: <Code className="h-4 w-4" /> },
    { name: "Resume", path: "/resume", icon: <FileText className="h-4 w-4" /> },
    { name: "Contact", path: "/contact", icon: <Mail className="h-4 w-4" /> }
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg shadow-glow group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold font-heading gradient-text">Adnan</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <Button
                  variant="ghost"
                  className={`px-4 py-2 transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                    isActive(item.path) 
                      ? 'text-primary bg-primary/5 border border-primary/20' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </span>
                </Button>
              </Link>
            ))}
          </div>

          {/* Theme toggle and mobile menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-primary/10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0 border-border/50">
                <div className="flex flex-col h-full bg-gradient-secondary">
                  {/* Mobile header */}
                  <div className="flex items-center justify-between p-6 border-b border-border/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-lg shadow-glow flex items-center justify-center">
                        <span className="text-white font-bold">A</span>
                      </div>
                      <span className="text-lg font-bold font-heading gradient-text">Adnan</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="hover:bg-primary/10"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Mobile navigation */}
                  <div className="flex-1 py-8">
                    <div className="space-y-2 px-6">
                      {navItems.map((item, index) => (
                        <Link 
                          key={item.name} 
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block animate-fade-in-up"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className={`flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-300 ${
                            isActive(item.path)
                              ? 'bg-primary text-primary-foreground shadow-glow'
                              : 'hover:bg-card hover:shadow-card text-muted-foreground hover:text-foreground'
                          }`}>
                            {item.icon}
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile footer */}
                  <div className="p-6 border-t border-border/50">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">
                        AI Developer & Creative Technologist
                      </p>
                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card rounded-full border border-border/50">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-xs text-muted-foreground">Available for projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}