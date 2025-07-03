import aboutImage from "@/assets/my-about-illustration.svg"; // your SVG path

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-12">
          
          {/* Left: SVG Image */}
          <div className="w-full flex justify-center">
            <img
              src={aboutImage}
              alt="About Illustration"
              className="max-w-sm md:max-w-md"
            />
          </div>

          {/* Right: About Me Text */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
            <p>I’m a passionate <strong>full-stack developer</strong> dedicated to building clean, responsive, and high-performing web applications. I specialize in modern technologies like <strong>HTML, CSS, JavaScript</strong>, and <strong>Java</strong>, crafting solutions that are both scalable and user-centric.</p>

<p>On the frontend, I harness the power of <strong>React.js</strong> to create seamless, interactive interfaces. On the backend, I work extensively with <strong>Node.js</strong> and <strong>MongoDB</strong>, delivering robust, API-driven architectures that prioritize speed, efficiency, and maintainability.</p>

<p>Beyond web development, I leverage tools like <strong>Google Apps Script</strong> to automate business workflows within the Google Workspace ecosystem, increasing productivity and streamlining operations.</p>

<p>I also explore the creative side of tech—integrating <strong>AI-powered tools</strong> like <strong>Midjourney</strong> and <strong>Canva</strong> to design visually engaging dashboards, landing pages, and full-stack platforms.</p>

<p>Whether you need a custom dashboard, a dynamic web app, or a complete platform from scratch, I bring a strong blend of technical depth, creative thinking, and a commitment to quality that aligns with your vision and business goals.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
