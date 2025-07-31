import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Globe, Users, Star, Github, Linkedin, Mail } from "lucide-react";
import spaceParticles from "@/assets/space-particles.jpg";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Mission Director", 
      expertise: "Astrophysics",
      bio: "Lead NASA scientist with 15+ years in space exploration",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      social: { github: "#", linkedin: "#", email: "#" }
    },
    {
      name: "Ahmed Hassan",
      role: "Technical Lead",
      expertise: "Software Engineering", 
      bio: "Full-stack developer passionate about space technology",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      social: { github: "#", linkedin: "#", email: "#" }
    },
    {
      name: "Maria Rodriguez",
      role: "Data Science Mentor",
      expertise: "Machine Learning",
      bio: "AI researcher specializing in satellite data analysis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", 
      social: { github: "#", linkedin: "#", email: "#" }
    },
    {
      name: "Dr. Michael Park",
      role: "Innovation Advisor",
      expertise: "Space Engineering",
      bio: "Former NASA engineer, current innovation consultant",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      social: { github: "#", linkedin: "#", email: "#" }
    }
  ];

  const highlights = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Part of NASA's worldwide Space Apps Challenge with 25,000+ participants across 150+ countries"
    },
    {
      icon: Rocket,
      title: "Real Innovation",
      description: "Past solutions have been adopted by NASA and contributed to actual space missions"
    },
    {
      icon: Users,
      title: "Expert Network", 
      description: "Direct access to NASA scientists, engineers, and space industry professionals"
    },
    {
      icon: Star,
      title: "Port Said Hub",
      description: "First-ever NASA Space Apps event in Port Said, bringing space innovation to Egypt"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${spaceParticles})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-space font-bold text-primary mb-6">
              About Our Mission
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              NASA Space Apps Challenge is the world's largest global hackathon, 
              bringing together innovators to solve challenges related to space exploration and Earth science.
            </p>
          </div>
        </div>
      </section>

      {/* NASA Space Apps Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-space font-bold text-primary mb-6">
                NASA Space Apps Challenge
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over a decade, NASA Space Apps has been empowering global communities to 
                come together and use NASA's open data to address real-world problems on Earth and in space.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Participants work in teams to develop solutions using NASA's vast datasets, 
                with winning solutions often being implemented by NASA and its partners.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-space font-bold text-primary">25,000+</div>
                  <div className="text-sm text-muted-foreground">Global Participants</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-space font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <Card className="bg-surface-gradient border-primary/20 shadow-glow-surface">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">What Makes It Special?</h3>
                  <div className="space-y-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Port Said Event */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-space font-bold text-primary mb-6">
              NASA Space Apps Port Said
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're proud to bring NASA Space Apps to Port Said for the first time, 
              creating a hub of innovation in Egypt's technological landscape.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-surface-gradient border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Innovation Focus</h3>
                  <p className="text-muted-foreground">
                    Emphasizing cutting-edge solutions for space exploration and Earth observation challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-surface-gradient border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Community Building</h3>
                  <p className="text-muted-foreground">
                    Fostering a vibrant community of space enthusiasts, developers, and innovators in Egypt.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-surface-gradient border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Global Connection</h3>
                  <p className="text-muted-foreground">
                    Connecting local talent with the global NASA Space Apps network and opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-space font-bold text-primary mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of NASA scientists, engineers, and local innovators 
              is here to guide you through your space exploration journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="bg-surface-gradient border-primary/20 hover:shadow-glow-surface transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-accent mb-3 font-medium">{member.expertise}</p>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-3">
                    <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.social.email} className="text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;