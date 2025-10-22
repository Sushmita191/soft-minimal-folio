import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">Contact Me</h1>
            <p className="text-lg text-foreground">
              Let's connect and discuss how we can work together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>Fill out the form and I'll respond as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-label="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-label="Your email address"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-label="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>Find me on these platforms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="mailto:sushmita.rai387@gmail.com"
                  className="flex items-center gap-3 p-4 bg-card rounded-lg hover:shadow-md transition-smooth group"
                  aria-label="Email Sushmita Rai"
                >
                  <Mail className="h-5 w-5 text-foreground group-hover:text-secondary transition-smooth" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-foreground">sushmita.rai387@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+14237737048"
                  className="flex items-center gap-3 p-4 bg-card rounded-lg hover:shadow-md transition-smooth group"
                  aria-label="Call Sushmita Rai"
                >
                  <Phone className="h-5 w-5 text-foreground group-hover:text-secondary transition-smooth" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-foreground">+1 (423) 773-7048</p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/sushmita-rai-906b06157"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-card rounded-lg hover:shadow-md transition-smooth group"
                  aria-label="LinkedIn profile of Sushmita Rai"
                >
                  <Linkedin className="h-5 w-5 text-foreground group-hover:text-secondary transition-smooth" />
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-sm text-foreground">linkedin.com/in/sushmita-rai-906b06157</p>
                  </div>
                </a>
                <a
                  href="https://github.com/sushmitaraii1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-card rounded-lg hover:shadow-md transition-smooth group"
                  aria-label="GitHub profile of Sushmita Rai"
                >
                  <Github className="h-5 w-5 text-foreground group-hover:text-secondary transition-smooth" />
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <p className="text-sm text-foreground">github.com/sushmitaraii1</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
