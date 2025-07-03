import { Facebook, Instagram, Twitter, MessageCircle, Linkedin, Github } from "lucide-react";
import heroImage from "@/assets/Banner.svg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-0">
              <div className="text-5xl lg:text-6xl font-normal text-foreground leading-tight">
                Hello I'am <span className="font-bold">Pratham Mehta</span>
              </div>
              <div className="text-5xl lg:text-6xl font-bold text-foreground">
                Full-Stack{" "}
                <span
                  className="ml-2"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px black",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Developer
                </span>
              </div>
              <div className="text-5xl lg:text-6xl font-normal text-foreground">
                Based In <span className="font-bold">India.</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              As a dedicated web developer, I specialize in creating dynamic and responsive websites tailored 
              to your needs. With expertise in HTML, CSS, JavaScript, and various frameworks, I transform ideas into 
              visually appealing and functional digital experiences. My passion for coding and attention to detail ensures 
              high-quality solutions that enhance user engagement and drive business success.
            </p>

            <div className="flex space-x-4">
              
              <a href="https://www.instagram.com/pratham_773_/" target="_blank" rel="noopener noreferrer" className="p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a href="https://www.linkedin.com/in/prathammehta773/" target="_blank" rel="noopener noreferrer" className="p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a href="https://github.com/pratham7723" target="_blank" rel="noopener noreferrer" className="p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a href="https://wa.me/917016498352" target="_blank" rel="noopener noreferrer" className="p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                <MessageCircle className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-slide-up relative h-full min-h-[400px]">
            <img
              src={heroImage}
              alt="Developer illustration"
              className="max-w-2xl w-full h-auto"
            />
            {/* Optional: Add a line at the bottom if you want */}
            {/* <div className="absolute bottom-0 left-0 w-full border-b-2 border-black"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;