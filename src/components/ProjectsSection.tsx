import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

import giftShopImg from "@/assets/shopycloud.jpg";
import arRestaurantImg from "@/assets/flavourfusion.jpg";
import stockMarketImg from "@/assets/stockmarket.jpg";
import pdfSenderImg from "@/assets/sharemypdf.jpg";
import scaninImg from "@/assets/Scanin.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: "01",
      title: "Scan in",
      description:"Multi-tenant app supporting QR-based student check-ins and RBAC for classrooms and timetables. Delivered real-time dashboards, exportable reports, and bulk ID card generation via CSV upload, saving 10+ hours/week in admin work.Designed student ID card generation system with bulk CSV upload for easy printing",
      image: scaninImg,
      technologies: ["Next.js"],
      githubUrl: "https://github.com/pratham7723/",
      liveUrl: "https://scanin-psi.vercel.app",
    },
    {
      id: "02",
      title: "AR Based Restaurant Management System",
      description:
        "Developed an AR-based dining app using React, Node.js, and MongoDB. Users scan QR codes to view animated 3D models of dishes with plating, portion sizes, and dietary info. Built a real-time dashboard for restaurants to manage live orders and track progress.",
      image: arRestaurantImg,
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/pratham7723/foodqr",
    },
    {
      id: "03",
      
      title: "Gift Shop Website",
      description:
        "Developed a gift shop website using HTML, CSS, and Java, featuring a clean, intuitive design with responsive layouts and user-friendly navigation. Focused on delivering an engaging user experience and showcasing products effectively.",
      image: giftShopImg,
      technologies: ["HTML", "CSS", "Java"],
      githubUrl: "https://github.com/pratham7723/shopycloud",
    },
    {
      id: "04",
      title: "PDF Bulk Sender",
      description:
        "An app designed to help businesses efficiently manage and send multiple PDFs. Built using React Native, this app allows users to select a category, and it automatically sends all associated PDFs via WhatsApp with just one click.",
      image: pdfSenderImg,
      technologies: ["React Native", "JavaScript", "WhatsApp API"],
      githubUrl: "https://github.com/pratham7723/sharemypdf",
    },
    {
      id: "05",
      title: "Virtual Stock Market",
      description:
        "Developed a virtual stock market simulation using Google Sheets and Google Forms, integrated with Apps Script (JavaScript), allowing users to view stock prices, buy/sell stocks, and track their portfolio and bank balance.",
      image: stockMarketImg,
      technologies: ["Google Apps Script", "Sheets", "Forms"],
      githubUrl: "https://github.com/pratham7723/",
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
          My Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Text */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center space-x-4">
                  <span className="text-6xl font-bold text-muted-foreground/30">
                    {project.id}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="group inline-flex items-center space-x-2 border border-border px-4 py-2 rounded-md text-sm text-foreground transition-all duration-200 hover:bg-black hover:text-white"
                  >
                    <Github className="w-4 h-4 group-hover:text-white transition-colors" />
                    <span>Source Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center space-x-2 border border-border px-4 py-2 rounded-md text-sm text-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:text-primary-foreground transition-colors" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative group overflow-hidden rounded-xl shadow-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
