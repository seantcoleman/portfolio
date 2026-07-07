import { useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Hello, I'm Sean Coleman. I create amazing web experiences.";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-violet-600 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-500 rounded-full opacity-8 blur-3xl animate-pulse" style={{ animationDelay: "0.8s" }}></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="text-center relative z-10 px-4">
        <div className="mb-2">
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-4 inline-block">
            — Welcome to my portfolio —
          </span>
        </div>
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
            {text}
            <span className="text-cyan-400 animate-pulse">|</span>
          </h1>
        </div>

        <div className="opacity-0 animate-[fadeIn_0.8s_ease-in-out_2s_forwards]">
          <p className="text-lg md:text-xl mb-10 text-slate-400 tracking-wide">
            Web Professional&nbsp;&nbsp;·&nbsp;&nbsp;UI/UX Enthusiast&nbsp;&nbsp;·&nbsp;&nbsp;Problem Solver
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const skills = [
    "React",
    "Electron",
    "JavaScript",
    "CSS",
    "HTML",
    "Tailwind CSS",
    "WordPress",
    "Supabase",
    "SEO",
    "AI Tools",
    "Project Management",
  ];

  return (
    <section
      id="about"
      className="py-24 bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 justify-center mb-12">
          <div className="h-px w-12 bg-cyan-500 opacity-60"></div>
          <h2 className="text-4xl font-bold text-center text-white">
            About Me
          </h2>
          <div className="h-px w-12 bg-cyan-500 opacity-60"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Avatar Section */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-64 h-64 rounded-full p-1 bg-gradient-to-br from-cyan-500 to-violet-600 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <p className="text-lg mb-6 text-slate-300 leading-relaxed">
                  I'm a passionate web professional with a keen eye for design and
                  a love for creating seamless digital experiences. With a strong
                  foundation in modern web technologies, I bring ideas to life
                  through clean, efficient code and intuitive interfaces.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new
                  technologies, making music, traveling, hiking, or enjoying a
                  good cup of coffee while sketching out my next big idea.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-5 text-white tracking-wide">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 text-slate-300 bg-slate-800 hover:bg-slate-800/80 px-4 py-1.5 rounded-full text-sm font-medium transform hover:scale-105 transition-all duration-300 cursor-default"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: "slideInUp 0.6s ease-out forwards",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "TuneTasker",
      description:
        "A comprehensive desktop task management and productivity platform with music integration for enhanced focus",
      tech: ["Electron", "React", "Tailwind CSS", "Supabase"],
      color: "from-violet-600 to-cyan-500",
      github: "https://github.com/seantcoleman/tunetasker",
      live: "https://tunetasker.com",
    },
    {
      title: "Web Production Manager",
      description:
        "Currently managing digital production workflows, coordinating cross-functional teams, and ensuring high-quality deliverables across web projects",
      tech: [
        "HTML",
        "CSS",
        "SEO",
        "WordPress",
        "Team Leadership",
        "Project Management",
      ],
      color: "from-teal-500 to-cyan-600",
      github: null,
    },
    {
      title: "Password Generator",
      description:
        "A secure password generator application that creates random, strong passwords with customizable options",
      tech: ["JavaScript", "CSS", "HTML"],
      color: "from-cyan-500 to-sky-600",
      github: "https://github.com/seantcoleman/Password-Generator",
      live: "https://seantcoleman.github.io/Password-Generator",
    },
    {
      title: "Chester Creek Trail",
      description:
        "A WordPress website for the Chester Creek Trail community featuring trail information, events, and resources",
      tech: ["WordPress", "CSS"],
      color: "from-teal-400 to-emerald-600",
      live: "https://chestercreektrail.org",
    },
    {
      title: "Quizical",
      description:
        "An interactive quiz application that provides engaging questions and tracks user progress with a modern, responsive design",
      tech: ["React", "CSS"],
      color: "from-violet-500 to-purple-700",
      github: "https://github.com/seantcoleman/Quizical",
      live: "https://seantcoleman.github.io/Quizical/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 justify-center mb-4">
          <div className="h-px w-12 bg-cyan-500 opacity-60"></div>
          <h2 className="text-4xl font-bold text-center text-white">
            Experience & Projects
          </h2>
          <div className="h-px w-12 bg-cyan-500 opacity-60"></div>
        </div>
        <p className="text-base text-center text-slate-400 mb-14 max-w-2xl mx-auto">
          Here are some of my recent work experiences and projects that showcase
          my skills and passion for web and digital production
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div
                className={`h-44 bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-slate-950 bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-950 bg-opacity-70 backdrop-blur-sm text-slate-200 px-2 py-0.5 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      View Live ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-cyan-500 opacity-5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-4 justify-center mb-4">
          <div className="h-px w-12 bg-cyan-500 opacity-60"></div>
          <h2 className="text-4xl font-bold text-center text-white">
            Get In Touch
          </h2>
          <div className="h-px w-12 bg-cyan-500 opacity-60"></div>
        </div>
        <p className="text-base text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear from you. I'm always open
          to discussing new opportunities, creative projects, or just having a
          chat about technology.
        </p>

        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:scoleman2296@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-3.5 px-10 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/seantcoleman/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 py-3.5 px-10 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
