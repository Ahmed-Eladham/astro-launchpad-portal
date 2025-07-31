import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Calendar, Users, Trophy, ArrowRight, Satellite, Globe, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import heroSpace from "@/assets/hero-space.jpg";

const Index = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Participants" },
    { icon: Trophy, value: "48hrs", label: "Duration" },
    { icon: Satellite, value: "25+", label: "Challenges" },
    { icon: Globe, value: "Global", label: "Impact" },
  ];

  const features = [
    {
      icon: Rocket,
      title: "Innovation Hub",
      description: "Collaborate with brilliant minds to solve real NASA challenges and push the boundaries of space exploration."
    },
    {
      icon: Zap,
      title: "Real Impact",
      description: "Your solutions could be implemented by NASA and contribute to actual space missions and Earth observation projects."
    },
    {
      icon: Users,
      title: "Expert Mentorship", 
      description: "Learn from NASA scientists, engineers, and industry experts who will guide you throughout the bootcamp."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroSpace})` }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-space font-bold text-primary mb-6 leading-tight">
              NASA SPACE APPS
              <span className="block text-3xl md:text-5xl text-accent font-normal mt-2">
                BOOTCAMP 2024
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the ultimate space exploration hackathon in Port Said. 
              Collaborate with innovators to solve NASA's most pressing challenges 
              and shape the future of space exploration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/signup">
                <Button variant="cosmic" size="xl" className="w-full sm:w-auto">
                  <Rocket className="w-5 h-5 mr-2" />
                  Join the Mission
                </Button>
              </Link>
              <Link to="/challenges">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Explore Challenges
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Event Details */}
            <div className="bg-card/80 backdrop-blur-sm rounded-xl border border-primary/20 p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-primary mr-2" />
                <span className="text-foreground font-semibold">December 7-8, 2024</span>
              </div>
              <p className="text-muted-foreground">
                Port Said University • 48 Hours of Innovation • Global Impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-space font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-space font-bold text-primary mb-4">
              Why Join Our Mission?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the thrill of space innovation while making a real impact on humanity's greatest exploration challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-surface-gradient border-primary/20 hover:shadow-glow-surface transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cosmic-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-space font-bold text-white mb-6">
            Ready to Explore the Unknown?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to be part of NASA's global innovation network. 
            Register now and begin your journey to the stars.
          </p>
          <Link to="/signup">
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
