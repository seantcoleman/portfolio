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
    }, 80);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-32 h-32 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-indigo-400 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white transition-all duration-300">
            {text}
            <span className="animate-pulse">|</span>
          </h1>
        </div>

        <div className="opacity-0 animate-[fadeIn_0.8s_ease-in-out_2s_forwards]">
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            Web Developer | UI/UX Enthusiast | Problem Solver
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
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
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Avatar Section */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                <div className="w-56 h-56 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <div className="text-5xl">👨‍💻</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a passionate web developer with a keen eye for design and
                  a love for creating seamless user experiences. With a strong
                  foundation in modern web technologies, I bring ideas to life
                  through clean, efficient code and intuitive interfaces.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new
                  technologies, making music, traveling, hiking, or enjoying a
                  good cup of coffee while sketching out my next big idea.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium transform hover:scale-105 transition-all duration-300 shadow-md"
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
      tech: ["Electron", "React", "Supabase"],
      color: "from-purple-500 to-pink-500",
      github: "https://github.com/seantcoleman/tunetasker",
      live: "https://tunetasker.com",
    },
    {
      title: "Web Production Manager",
      description:
        "Currently managing digital production workflows, coordinating cross-functional teams, and ensuring high-quality deliverables across web projects",
      tech: ["Project Management", "Team Leadership"],
      color: "from-green-400 to-blue-500",
      github: null,
    },
    {
      title: "Password Generator",
      description:
        "A secure password generator application that creates random, strong passwords with customizable options",
      tech: ["JavaScript", "CSS", "HTML"],
      color: "from-blue-400 to-indigo-500",
      github: "https://github.com/seantcoleman/Password-Generator",
      live: "https://seantcoleman.github.io/Password-Generator",
    },
    {
      title: "Chester Creek Trail",
      description:
        "A WordPress website for the Chester Creek Trail community featuring trail information, events, and resources",
      tech: ["WordPress", "PHP", "CSS"],
      color: "from-green-500 to-emerald-500",
      live: "https://chestercreektrail.org",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Experience & Projects
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of my recent work experiences and projects that showcase
          my skills and passion for web development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div
                className={`h-48 bg-gradient-to-r ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors duration-300"
                    >
                      View Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 font-medium hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
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
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear from you and I'm always open
          to discussing new opportunities, creative projects, or just having a
          chat about technology.
        </p>

        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:scoleman2296@gmail.com"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-10 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/seantcoleman/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 py-4 px-10 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
