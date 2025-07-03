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
              <p>
                I’m a passionate full-stack developer skilled in crafting responsive, user-friendly web applications
                using modern technologies. With strong proficiency in HTML, CSS, JavaScript, and Java, I focus on building
                dynamic and scalable websites that look great and perform even better.
              </p>
              <p>
                I work extensively with React.js for frontend development and Node.js with MongoDB for efficient,
                high-performance backends. I also utilize tools like Google Apps Script to automate tasks and enhance
                workflows within the Google Workspace ecosystem.
              </p>
              <p>
                Apart from coding, I explore AI-driven tools like Midjourney and Canva to deliver creative design solutions.
                Whether it’s developing a custom dashboard, designing a landing page, or building a complete web platform,
                I’m committed to delivering professional results that align with user needs and business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
