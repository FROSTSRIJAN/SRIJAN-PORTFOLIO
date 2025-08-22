import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Youtube, Send, Download, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "srijantripathi64@gmail.com",
      link: "mailto:srijantripathi64@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 7903385276",
      link: "tel:+917903385276"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "India",
      link: ""
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/SrijanManiTripathi",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/srijan-mani-tripathi-144b162a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/srijan_mani_tripathi/profilecard/?igsh=ZDU0Ym50NWxteDRs",
      color: "hover:text-pink-400"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      url: "https://youtu.be/U9BzVwb7bmk?feature=shared",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss opportunities? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info & Social */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Information */}
              <Card className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>Contact Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/20 transition-colors duration-300">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          {info.label}
                        </div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-sm font-medium hover:text-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-sm font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
                <CardHeader>
                  <CardTitle>Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-all duration-300 ${social.color} group`}
                      >
                        <div className="group-hover:scale-110 transition-transform duration-300">
                          {social.icon}
                        </div>
                        <span className="text-sm font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
                <CardContent className="p-6 space-y-4">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 shadow-glow"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://calendly.com/srijanmani', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
                <CardHeader>
                  <CardTitle className="text-xl">Send Me a Message</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Whether you have a project idea, job opportunity, or just want to say hello, 
                    I'm always excited to connect with fellow developers and innovators.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="bg-muted/10 border-glass-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-muted/10 border-glass-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="bg-muted/10 border-glass-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, opportunity, or just say hello..."
                        rows={6}
                        required
                        className="bg-muted/10 border-glass-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 shadow-glow"
                      size="lg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Availability Status */}
          <Card className="mt-12 bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                  Available for Opportunities
                </Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">Currently Open For</h3>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {["Full-time Positions", "Internships", "Freelance Projects", "Open Source Collaboration", "Mentorship"].map((item) => (
                  <Badge key={item} variant="outline" className="border-primary/30 text-primary">
                    {item}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm actively seeking opportunities to contribute to innovative projects and grow as a developer. 
                Whether you're a startup, established company, or fellow developer, let's explore how we can work together!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;