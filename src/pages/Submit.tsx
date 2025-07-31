import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Users, 
  Code, 
  Video, 
  Globe, 
  Plus, 
  X, 
  Upload,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import spaceParticles from "@/assets/space-particles.jpg";

const Submit = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    challenge: "",
    description: "",
    videoUrl: "",
    projectUrl: "",
    teamMembers: [""],
    skills: []
  });
  const [newSkill, setNewSkill] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const challenges = [
    { id: "artemis", name: "Artemis Mission Planning" },
    { id: "climate", name: "Climate Change Visualization" },
    { id: "ai-satellite", name: "AI-Powered Satellite Imagery Analysis" },
    { id: "mars-habitat", name: "Mars Habitat Design" },
    { id: "space-debris", name: "Space Debris Tracking System" },
    { id: "earth-observation", name: "Earth Observation for Disaster Response" }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.teamName.trim()) newErrors.teamName = "Team name is required";
    if (!formData.challenge) newErrors.challenge = "Please select a challenge";
    if (!formData.description.trim()) newErrors.description = "Project description is required";
    if (formData.description.length < 100) newErrors.description = "Description must be at least 100 characters";
    if (!formData.videoUrl.trim()) newErrors.videoUrl = "Demo video URL is required";
    if (!formData.projectUrl.trim()) newErrors.projectUrl = "Project URL is required";
    if (formData.teamMembers.filter(member => member.trim()).length < 2) {
      newErrors.teamMembers = "At least 2 team members are required";
    }
    if (formData.skills.length === 0) newErrors.skills = "Please add at least one skill/technology used";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in your submission before proceeding.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission process
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mission Submitted Successfully! 🚀",
        description: "Your project has been submitted for review. Good luck, astronaut!",
      });
      
      // Reset form
      setFormData({
        teamName: "",
        challenge: "",
        description: "",
        videoUrl: "",
        projectUrl: "",
        teamMembers: [""],
        skills: []
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const addTeamMember = () => {
    if (formData.teamMembers.length < 6) {
      setFormData(prev => ({
        ...prev,
        teamMembers: [...prev.teamMembers, ""]
      }));
    }
  };

  const removeTeamMember = (index: number) => {
    if (formData.teamMembers.length > 1) {
      setFormData(prev => ({
        ...prev,
        teamMembers: prev.teamMembers.filter((_, i) => i !== index)
      }));
    }
  };

  const updateTeamMember = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.map((member, i) => i === index ? value : member)
    }));
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill("");
      if (errors.skills) {
        setErrors(prev => ({ ...prev, skills: "" }));
      }
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${spaceParticles})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-space font-bold text-primary mb-6">
              Submit Your Mission
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to launch your solution? Submit your project and showcase 
              your innovative contribution to space exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-surface-gradient border-primary/20 shadow-glow-surface">
              <CardHeader>
                <CardTitle className="text-2xl font-space text-primary flex items-center">
                  <Rocket className="w-6 h-6 mr-3" />
                  Project Submission Portal
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out all required fields to submit your NASA Space Apps project. 
                  Make sure all information is accurate and complete.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Team Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground flex items-center">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      Team Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="teamName" className="text-foreground">
                          Team Name *
                        </Label>
                        <Input
                          id="teamName"
                          value={formData.teamName}
                          onChange={(e) => handleInputChange("teamName", e.target.value)}
                          placeholder="Enter your team name"
                          className={`bg-input/50 border-primary/20 focus:border-primary ${errors.teamName ? "border-destructive" : ""}`}
                        />
                        {errors.teamName && (
                          <p className="text-destructive text-sm flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.teamName}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="challenge" className="text-foreground">
                          Challenge *
                        </Label>
                        <Select 
                          value={formData.challenge} 
                          onValueChange={(value) => handleInputChange("challenge", value)}
                        >
                          <SelectTrigger className={`bg-input/50 border-primary/20 focus:border-primary ${errors.challenge ? "border-destructive" : ""}`}>
                            <SelectValue placeholder="Select a challenge" />
                          </SelectTrigger>
                          <SelectContent>
                            {challenges.map((challenge) => (
                              <SelectItem key={challenge.id} value={challenge.id}>
                                {challenge.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.challenge && (
                          <p className="text-destructive text-sm flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.challenge}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Team Members */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-foreground">Team Members * (2-6 members)</Label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={addTeamMember}
                          disabled={formData.teamMembers.length >= 6}
                          className="text-primary"
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Add Member
                        </Button>
                      </div>
                      
                      <div className="space-y-3">
                        {formData.teamMembers.map((member, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              value={member}
                              onChange={(e) => updateTeamMember(index, e.target.value)}
                              placeholder={`Team member ${index + 1} name`}
                              className="flex-1 bg-input/50 border-primary/20 focus:border-primary"
                            />
                            {formData.teamMembers.length > 1 && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => removeTeamMember(index)}
                                className="text-destructive border-destructive/30 hover:bg-destructive/10"
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                      {errors.teamMembers && (
                        <p className="text-destructive text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.teamMembers}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground flex items-center">
                      <Code className="w-5 h-5 mr-2 text-primary" />
                      Project Details
                    </h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-foreground">
                        Project Description * (minimum 100 characters)
                      </Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Describe your project, the problem it solves, your approach, and the impact it could have..."
                        rows={6}
                        className={`bg-input/50 border-primary/20 focus:border-primary resize-none ${errors.description ? "border-destructive" : ""}`}
                      />
                      <div className="flex justify-between text-sm">
                        <span className={`${formData.description.length < 100 ? "text-muted-foreground" : "text-primary"}`}>
                          {formData.description.length}/100 characters minimum
                        </span>
                        {errors.description && (
                          <span className="text-destructive flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.description}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Skills/Technologies */}
                    <div className="space-y-4">
                      <Label className="text-foreground">Skills & Technologies Used *</Label>
                      <div className="flex gap-2">
                        <Input
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Enter a skill or technology (e.g., Python, React, Machine Learning)"
                          className="flex-1 bg-input/50 border-primary/20 focus:border-primary"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={addSkill}
                          disabled={!newSkill.trim()}
                          className="text-primary"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {formData.skills.map((skill, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="border-primary/30 text-primary bg-primary/5 pr-1"
                          >
                            {skill}
                            <button
                              type="button"
                              onClick={() => removeSkill(skill)}
                              className="ml-2 hover:text-destructive"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                      {errors.skills && (
                        <p className="text-destructive text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.skills}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-primary" />
                      Project Links
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="videoUrl" className="text-foreground flex items-center">
                          <Video className="w-4 h-4 mr-2" />
                          Demo Video URL *
                        </Label>
                        <Input
                          id="videoUrl"
                          value={formData.videoUrl}
                          onChange={(e) => handleInputChange("videoUrl", e.target.value)}
                          placeholder="https://youtube.com/watch?v=..."
                          className={`bg-input/50 border-primary/20 focus:border-primary ${errors.videoUrl ? "border-destructive" : ""}`}
                        />
                        {errors.videoUrl && (
                          <p className="text-destructive text-sm flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.videoUrl}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectUrl" className="text-foreground flex items-center">
                          <Code className="w-4 h-4 mr-2" />
                          Project Repository/Live URL *
                        </Label>
                        <Input
                          id="projectUrl"
                          value={formData.projectUrl}
                          onChange={(e) => handleInputChange("projectUrl", e.target.value)}
                          placeholder="https://github.com/yourteam/project or live demo URL"
                          className={`bg-input/50 border-primary/20 focus:border-primary ${errors.projectUrl ? "border-destructive" : ""}`}
                        />
                        {errors.projectUrl && (
                          <p className="text-destructive text-sm flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.projectUrl}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submission Guidelines */}
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                        Submission Checklist
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Project addresses the selected NASA challenge</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>All code developed during the 48-hour event period</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Project repository is public and accessible</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Demo video is under 3 minutes and demonstrates the solution</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>NASA's open data sources are utilized where applicable</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-6">
                    <Button 
                      type="submit" 
                      variant="cosmic" 
                      size="xl"
                      disabled={isSubmitting}
                      className="min-w-48"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Launching Mission...
                        </>
                      ) : (
                        <>
                          <Upload className="w-5 h-5 mr-2" />
                          Submit Project
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Submit;