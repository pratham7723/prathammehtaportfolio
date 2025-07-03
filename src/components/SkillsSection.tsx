import {
  Code,
  Database,
  Server,
  Brain,
  Palette,
  Settings,
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      name: "HTML",
      icon: Code,
      description: "Semantic and accessible markup using HTML5",
    },
    {
      name: "CSS",
      icon: Palette,
      description: "Responsive layouts and styling with modern CSS",
    },
    {
      name: "JavaScript",
      icon: Code,
      description: "Dynamic frontend scripting with ES6+ features",
    },
    {
      name: "Java",
      icon: Code,
      description: "Object-oriented backend development and logic building",
    },
    {
      name: "React.js",
      icon: Code,
      description: "Frontend development using component-based architecture",
    },
    {
      name: "Node.js",
      icon: Server,
      description: "JavaScript runtime environment for building backend APIs",
    },
    {
      name: "MongoDB",
      icon: Database,
      description: "NoSQL database for flexible and scalable data storage",
    },
    {
      name: "Google Apps Script",
      icon: Settings,
      description: "Automation and scripting for Google Workspace tools",
    },
    {
      name: "Git",
      icon: Code,
      description: "Version control and collaboration through Git & GitHub",
    },
    {
      name: "Midjourney",
      icon: Brain,
      description: "AI-generated visuals for design and creative ideas",
    },
    {
      name: "Canva",
      icon: Palette,
      description: "Graphic design and UI mockups with fast prototyping",
    },
    {
      name: "CorelDRAW",
      icon: Palette,
      description: "Vector-based graphic design for branding and layouts",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-skill-card border border-skill-border rounded-xl p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <skill.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {skill.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
