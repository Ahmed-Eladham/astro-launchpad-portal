import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Clock, 
  Trophy, 
  AlertTriangle, 
  CheckCircle, 
  Shield,
  BookOpen,
  Globe,
  Code
} from "lucide-react";
import spaceParticles from "@/assets/space-particles.jpg";

const Rules = () => {
  const quickRules = [
    {
      icon: Users,
      title: "Team Size",
      description: "2-6 members per team",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      title: "Duration", 
      description: "48 hours of coding",
      color: "text-green-400"
    },
    {
      icon: Trophy,
      title: "Prizes",
      description: "Multiple categories",
      color: "text-yellow-400"
    },
    {
      icon: Globe,
      title: "Open Source",
      description: "All solutions must be open",
      color: "text-purple-400"
    }
  ];

  const rules = [
    {
      category: "Team Formation & Registration",
      icon: Users,
      color: "text-blue-400",
      items: [
        "Teams must consist of 2-6 members maximum",
        "Team formation can happen during the event or before registration",
        "All team members must be registered for the event",
        "One team member must be designated as the team leader for communication",
        "Team changes are allowed only within the first 6 hours of the event"
      ]
    },
    {
      category: "Project Development Guidelines",
      icon: Code,
      color: "text-green-400", 
      items: [
        "Projects must address at least one of the official NASA Space Apps challenges",
        "All development work must be done during the 48-hour event period",
        "Pre-existing code libraries and frameworks are allowed",
        "Teams may use any programming language, platform, or technology",
        "NASA's open data sources must be utilized where applicable"
      ]
    },
    {
      category: "Submission Requirements",
      icon: BookOpen,
      color: "text-purple-400",
      items: [
        "All projects must be submitted through the official portal before the deadline",
        "Source code must be available on a public repository (GitHub recommended)",
        "A working demo or prototype must be presented",
        "Project documentation must include clear setup and usage instructions",
        "Video demonstration (max 3 minutes) is required for final judging"
      ]
    },
    {
      category: "Judging Criteria",
      icon: Trophy,
      color: "text-yellow-400",
      items: [
        "Impact & Innovation: How well does the solution address the challenge?",
        "Technical Implementation: Quality of code and use of technology",
        "Use of NASA Data: Effective utilization of NASA's open datasets",
        "Presentation: Clarity and effectiveness of the team's presentation",
        "Feasibility: Potential for real-world implementation and sustainability"
      ]
    },
    {
      category: "Code of Conduct",
      icon: Shield,
      color: "text-red-400",
      items: [
        "Respect all participants, mentors, and organizers",
        "No harassment, discrimination, or inappropriate behavior will be tolerated",
        "Collaborate respectfully and help create an inclusive environment",
        "Follow the venue rules and maintain a clean workspace", 
        "Report any concerns to event organizers immediately"
      ]
    },
    {
      category: "Resources & Support",
      icon: CheckCircle,
      color: "text-cyan-400",
      items: [
        "NASA datasets and APIs are available through the official portal",
        "Mentors will be available throughout the event for guidance",
        "Technical support will be provided for platform and tool issues",
        "Internet connectivity and basic development tools will be provided",
        "Food and refreshments will be available during the event"
      ]
    }
  ];

  const prohibitions = [
    "Submitting pre-developed solutions or significant pre-existing work",
    "Working on projects outside the designated event timeframe",
    "Plagiarizing or copying solutions from other teams or sources",
    "Using closed or proprietary datasets without proper authorization",
    "Inappropriate content, hate speech, or offensive material in projects",
    "Violating any applicable laws or regulations",
    "Sharing false or misleading information about your project"
  ];

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
              Mission Rules
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Follow these guidelines to ensure a fair, innovative, and successful 
              space exploration hackathon experience for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Rules Overview */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-space font-bold text-primary text-center mb-12">
              Quick Overview
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickRules.map((rule, index) => (
                <Card 
                  key={index}
                  className="bg-surface-gradient border-primary/20 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className={`bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center ${rule.color}`}>
                      <rule.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{rule.title}</h3>
                    <p className="text-muted-foreground">{rule.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Rules */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-space font-bold text-primary text-center mb-12">
              Detailed Guidelines
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {rules.map((section, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-primary/20 rounded-lg bg-surface-gradient"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center space-x-4">
                      <div className={`bg-primary/10 rounded-full p-2 ${section.color}`}>
                        <section.icon className="w-5 h-5" />
                      </div>
                      <span className="text-left font-semibold text-foreground">
                        {section.category}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Prohibitions */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h2 className="text-3xl font-space font-bold text-destructive mb-4">
                Prohibited Activities
              </h2>
              <p className="text-muted-foreground">
                The following activities are strictly forbidden and may result in disqualification:
              </p>
            </div>

            <Card className="bg-surface-gradient border-destructive/20">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {prohibitions.map((prohibition, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{prohibition}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-space font-bold text-primary mb-6">
              Questions About the Rules?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you have any questions about the rules or need clarification on any guideline, 
              don't hesitate to reach out to our organizing team.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-surface-gradient border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Event Day Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Organizers will be available throughout the event for immediate assistance
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-surface-gradient border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Pre-Event Questions</h3>
                  <p className="text-muted-foreground text-sm">
                    Contact us via email or Discord for any pre-event rule clarifications
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;