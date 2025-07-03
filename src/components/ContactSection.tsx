import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_i940v1t",
        "template_32sedm5",
        form.current,
        "TwDedIlal6RTZdwPz"
      )
      .then(
        (result) => {
          alert("Message sent!");
        },
        (error) => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
          Contact Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to say hello, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <a
                    href="mailto:Prathammehta773@gmail.com"
                    className="text-muted-foreground hover:underline"
                  >
                    Prathammehta773@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <a
                    href="tel:+917016498352"
                    className="text-muted-foreground hover:underline"
                  >
                    +91 7016498352
                  </a>
                </div>
              </div>
              
              
        
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">India</div>
                </div>
              </div>
            </div>
          </div>
          
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-6 animate-slide-up"
          >
            <input type="hidden" name="email" value="prathammehta773@gmail.com" />
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input 
                  id="name" 
                  name="name"
                  placeholder="Your name"
                  className="border-skill-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="your.email@example.com"
                  className="border-skill-border focus:border-primary"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <Input 
                id="subject" 
                name="title"
                placeholder="Project inquiry"
                className="border-skill-border focus:border-primary"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea 
                id="message" 
                name="message"
                placeholder="Tell me about your project..."
                className="min-h-32 border-skill-border focus:border-primary"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;