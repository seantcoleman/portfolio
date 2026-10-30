const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const projects = [
  {
    title: "BuzzerBidder",
    kind: "Web app",
    description:
      "A live ShopGoodwill auction sniper that compares items to eBay sales and places bids in the final seconds.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Python"],
    image: asset("projects/buzzerbidder.jpg"),
    live: "https://buzzerbidder.com",
  },
  {
    title: "Osci",
    kind: "iOS app",
    description:
      "A waveform studio for creators. Design audio visualizers and export share-ready videos up to 4K from an iPhone.",
    tech: ["Swift", "SwiftUI", "AVFoundation"],
    images: [asset("projects/osci-1.jpg"), asset("projects/osci-2.jpg")],
    live: "https://fuzzyloops.com/osci",
  },
  {
    title: "TuneTasker",
    kind: "Desktop + web app",
    description:
      "A project manager for musicians that organizes Ableton, Pro Tools, and Logic sessions and syncs desktop with web.",
    tech: ["Electron", "React", "Tailwind CSS", "Supabase"],
    image: asset("projects/tunetasker.jpg"),
    live: "https://tunetasker.com",
    github: "https://github.com/seantcoleman/tunetasker",
  },
  {
    title: "Chester Creek Trail",
    kind: "Website",
    description:
      "WordPress site for a rail-trail community in Delaware County, PA, with trail info, events, and resources.",
    tech: ["WordPress", "CSS"],
    image: asset("projects/chestercreek.jpg"),
    live: "https://chestercreektrail.org",
  },
  {
    title: "Quizical",
    kind: "Web app",
    description:
      "A quiz app with customizable categories, difficulty, and question types, plus score tracking.",
    tech: ["React", "CSS"],
    image: asset("projects/quizical.jpg"),
    live: "https://seantcoleman.github.io/Quizical/",
    github: "https://github.com/seantcoleman/Quizical",
  },
];

const skills = [
  "Web Production",
  "Project Management",
  "Team Leadership",
  "React",
  "Next.js",
  "JavaScript",
  "HTML & CSS",
  "Tailwind CSS",
  "WordPress",
  "Supabase",
  "Swift",
  "SEO",
];

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-300 font-sans antialiased">
      <Nav />
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-white tracking-tight">
          Sean Coleman
        </a>
        <div className="flex items-center gap-6 text-sm">
          <a href="#work" className="text-slate-400 hover:text-white transition-colors">
            Work
          </a>
          <a href="#about" className="text-slate-400 hover:text-white transition-colors">
            About
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-white hover:bg-white/10 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-36">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[36rem] h-[36rem] bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -right-40 w-[30rem] h-[30rem] bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 animate-[fadeIn_0.8s_ease-out_forwards]">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          Open to new opportunities
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.05] max-w-4xl">
          I plan, build, and ship{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
            digital products
          </span>{" "}
          people use.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          I'm Sean Coleman, a web production manager who also builds: live web
          apps, an iOS app on the App Store, and sites for real organizations.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href="#work"
            className="inline-flex justify-center rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-7 py-3 font-semibold transition-colors shadow-[0_0_40px_rgba(34,211,238,0.25)]"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex justify-center rounded-full border border-white/15 hover:border-white/30 text-white px-7 py-3 font-semibold transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="text-sm font-medium text-cyan-400 mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      {children && <p className="mt-4 text-slate-400 leading-relaxed">{children}</p>}
    </div>
  );
}

function TechList({ tech }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ live, github }) {
  return (
    <div className="flex gap-5 text-sm font-medium">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Visit site ↗
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors"
        >
          GitHub ↗
        </a>
      )}
    </div>
  );
}

function ProjectImage({ project }) {
  if (project.images) {
    return (
      <div className="aspect-[16/10] flex justify-center gap-3 pt-5 px-6 bg-gradient-to-br from-fuchsia-600/25 via-violet-700/20 to-slate-900 overflow-hidden">
        {project.images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${project.title} screenshot ${i + 1}`}
            loading="lazy"
            className="w-[38%] self-start rounded-xl border border-white/10 shadow-xl shadow-black/50 transition-transform duration-500 group-hover:-translate-y-1"
          />
        ))}
      </div>
    );
  }
  return (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      loading="lazy"
      className="w-full aspect-[16/10] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
    />
  );
}

function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Projects" title="Things I've built and launched" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-slate-900/50 overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden border-b border-white/5"
              >
                <ProjectImage project={project} />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs font-mono text-slate-500 mb-2">{project.kind}</p>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="mt-auto space-y-5">
                  <TechList tech={project.tech} />
                  <ProjectLinks live={project.live} github={project.github} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-white/5 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-14">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="About" title="Production mindset, builder's hands" />
          <div className="space-y-5 text-lg leading-relaxed text-slate-300 -mt-6">
            <p>
              I work at the intersection of planning and making. Day to day I
              manage web production: coordinating teams, keeping launches on
              schedule, and making sure what ships is high quality.
            </p>
            <p>
              On my own time I build products end to end, from a ShopGoodwill
              bidding service to an iOS app for music visuals. That hands-on
              work makes me a better partner to designers and developers.
            </p>
            <p className="text-slate-400">
              Outside of work I make music, travel, hike, and drink a lot of
              coffee.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-10">
          <div>
            <h3 className="text-sm font-medium text-cyan-400 mb-5">Experience</h3>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h4 className="font-display text-lg font-semibold text-white">
                  Web Production Manager
                </h4>
                <span className="text-xs font-medium text-emerald-400 whitespace-nowrap">
                  Current
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Managing digital production workflows, coordinating
                cross-functional teams, and ensuring high-quality deliverables
                across web projects.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-cyan-400 mb-5">Skills</h3>
            <TechList tech={skills} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 px-8 py-16 md:px-16 md:py-20">
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
              Let's work together.
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              I'm open to new roles, freelance projects, or just a conversation
              about building for the web.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:scoleman2296@gmail.com"
                className="inline-flex justify-center rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-7 py-3 font-semibold transition-colors"
              >
                scoleman2296@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/seantcoleman/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border border-white/15 hover:border-white/30 text-white px-7 py-3 font-semibold transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row gap-4 justify-between text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Sean Coleman</p>
        <div className="flex gap-6">
          <a href="https://github.com/seantcoleman" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/seantcoleman/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
