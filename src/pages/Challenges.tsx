import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Satellite, 
  Globe, 
  Cpu, 
  Database, 
  Search, 
  Filter,
  ArrowRight,
  Clock,
  Users,
  Trophy
} from "lucide-react";
import spaceParticles from "@/assets/space-particles.jpg";

const Challenges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Challenges", count: 25 },
    { id: "earth", name: "Earth Science", count: 8 },
    { id: "space", name: "Space Exploration", count: 7 },
    { id: "data", name: "Data Science", count: 6 },
    { id: "engineering", name: "Engineering", count: 4 }
  ];

  const challenges = [
    {
      id: 1,
      title: "Artemis Mission Planning",
      category: "space",
      difficulty: "Advanced",
      description: "Design mission parameters and resource allocation for NASA's Artemis program to establish sustainable lunar exploration.",
      tags: ["Mission Planning", "Resource Management", "Lunar Exploration"],
      participants: 45,
      timeLeft: "2 days",
      icon: Satellite,
      color: "text-blue-400"
    },
    {
      id: 2,
      title: "Climate Change Visualization",
      category: "earth",
      difficulty: "Intermediate", 
      description: "Create interactive visualizations using NASA's climate data to help communicate climate change impacts to the public.",
      tags: ["Data Visualization", "Climate Science", "Public Outreach"],
      participants: 62,
      timeLeft: "2 days",
      icon: Globe,
      color: "text-green-400"
    },
    {
      id: 3,
      title: "AI-Powered Satellite Imagery Analysis",
      category: "data",
      difficulty: "Advanced",
      description: "Develop machine learning models to automatically detect and classify land use changes from satellite imagery.",
      tags: ["Machine Learning", "Computer Vision", "Satellite Data"],
      participants: 38,
      timeLeft: "2 days", 
      icon: Cpu,
      color: "text-purple-400"
    },
    {
      id: 4,
      title: "Mars Habitat Design",
      category: "engineering",
      difficulty: "Advanced",
      description: "Design sustainable living habitats for Mars colonization considering radiation, atmosphere, and resource constraints.",
      tags: ["Engineering", "Habitat Design", "Mars Exploration"],
      participants: 29,
      timeLeft: "2 days",
      icon: Database,
      color: "text-red-400"
    },
    {
      id: 5,
      title: "Space Debris Tracking System",
      category: "space",
      difficulty: "Intermediate",
      description: "Create a real-time tracking system for space debris to protect satellites and spacecraft.",
      tags: ["Space Safety", "Tracking Systems", "Data Analysis"],
      participants: 51,
      timeLeft: "2 days",
      icon: Satellite,
      color: "text-yellow-400"
    },
    {
      id: 6,
      title: "Earth Observation for Disaster Response",
      category: "earth",
      difficulty: "Beginner",
      description: "Use satellite data to create early warning systems for natural disasters and emergency response planning.",
      tags: ["Disaster Management", "Emergency Response", "Earth Observation"],
      participants: 73,
      timeLeft: "2 days",
      icon: Globe,
      color: "text-orange-400"
    }
  ];

  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         challenge.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         challenge.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || challenge.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Advanced": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${spaceParticles})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-space font-bold text-primary mb-6">
              Mission Challenges
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore NASA's real-world challenges and contribute to groundbreaking 
              solutions that will shape the future of space exploration and Earth science.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search challenges, technologies, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-input/50 border-primary/20 focus:border-primary"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground whitespace-nowrap">Filter by:</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-xs"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <p className="text-muted-foreground">
                Showing {filteredChallenges.length} of {challenges.length} challenges
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredChallenges.map((challenge, index) => (
                <Card 
                  key={challenge.id}
                  className="bg-surface-gradient border-primary/20 hover:shadow-glow-surface transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`bg-primary/10 rounded-full p-3 ${challenge.color}`}>
                        <challenge.icon className="w-6 h-6" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={getDifficultyColor(challenge.difficulty)}
                      >
                        {challenge.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {challenge.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {challenge.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {challenge.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="outline" 
                          className="text-xs border-primary/20 text-primary"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-primary/10">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{challenge.participants}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{challenge.timeLeft}</span>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-primary/80 p-2"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredChallenges.length === 0 && (
              <div className="text-center py-16">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No challenges found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filter criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cosmic-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Trophy className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-space font-bold text-white mb-4">
              Ready to Take on the Challenge?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Choose your mission and start building solutions that could change the world. 
              Remember, the best solutions may be implemented by NASA!
            </p>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Start Your Mission
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenges;