import { useState } from "react";
import { Github, ChevronRight, ArrowLeft, Mail, Linkedin, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "TripNest",
    type: "Full Stack Web Application",
    year: "2025",
    description:
      "Collaborative logistics management platform for group expeditions — itinerary planning, resource sharing, and team coordination. RESTful backend with Spring Boot and responsive SPA frontend in React.js.",
    image: "/projects/tripnest.png",
    github: "https://github.com/yassine-io/tripnest",
    stack: ["Spring Boot", "React.js", "PostgreSQL", "REST API", "Git"],
    accomplishments: [
      "Built full RESTful API with Spring Boot",
      "Responsive SPA with React.js",
      "Real-time team coordination features",
    ],
  },
  {
    title: "Gym App",
    type: "Mobile Application",
    year: "2025",
    description:
      "Cross-platform fitness coaching app featuring personalized workout programs, session tracking, and calorie calculation. Firebase for real-time data sync and auth across iOS and Android.",
    image: "/projects/gym-app.png",
    github: "https://github.com/yassine-io/gym-app",
    stack: ["Flutter", "Dart", "Firebase"],
    accomplishments: [
      "Cross-platform iOS & Android support",
      "Real-time data sync with Firebase",
      "Personalized workout programs",
    ],
  },
  {
    title: "Library Management System",
    type: "Full Stack Web Application",
    year: "2024",
    description:
      "Digitized municipal library operations: book catalog, member management, loan tracking, and return workflows. Fully automated borrowing system that reduced tracking errors.",
    image: "/projects/library.png",
    github: "https://github.com/yassine-io/library-system",
    stack: ["Spring Boot", "Thymeleaf", "MySQL", "Java"],
    accomplishments: [
      "Automated borrowing & return system",
      "Full book catalog management",
      "Reduced tracking errors significantly",
    ],
  },
  {
    title: "LLM Report Generator",
    type: "AI / Automation",
    year: "2026",
    description:
      "Automated pipeline to generate structured technical reports from raw log files using an LLM. Significantly reduced manual log analysis time by producing clean, human-readable reports automatically.",
    image: "/projects/llm-report.png",
    github: "https://github.com/yassine-io/llm-report-gen",
    stack: ["Python", "LLM", "Log Processing", "Structured Text Generation"],
    accomplishments: [
      "Automated log-to-report pipeline",
      "Reduced manual analysis time drastically",
      "Clean human-readable output",
    ],
  },
];

type Project = typeof projects[0];

const Projects = () => {
  const [modal, setModal] = useState<Project | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* Header */}
      <div className="relative py-24 dot-grid hero-glow">
        <div className="max-w-5xl mx-auto px-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-all duration-200 mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back
          </button>
          <div className="text-center">
            <p className="section-label mb-4">/ P R O J E C T S</p>
            <h1 className="font-mono text-5xl md:text-6xl font-bold text-foreground mb-6">
              Projects
            </h1>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Full stack web applications, mobile apps, and AI-powered solutions
              built end-to-end.
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-6 pb-24 w-full">
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((p, i) => (
            <div
              key={i}
              className="card-surface glass-glow flex flex-col overflow-hidden hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="relative w-full h-52 bg-muted overflow-hidden">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-mono text-sm">
                    No preview
                  </div>
                )}
                <span className="absolute top-3 right-3 font-mono text-xs bg-background/80 border border-primary/30 text-primary px-2 py-1 rounded-lg backdrop-blur-sm">
                  {p.year}
                </span>
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">{p.type}</p>
                  <h3 className="font-mono text-lg text-foreground font-bold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="badge-outlined text-xs">{s}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-auto pt-2 flex-wrap">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/10 border border-border text-foreground text-sm font-mono hover:bg-foreground/20 transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                  <button
                    onClick={() => setModal(p)}
                    className="flex items-center gap-1 text-sm font-mono text-primary hover:underline transition-all duration-200"
                  >
                    Key Accomplishments
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Let's Collaborate footer */}
      <div className="mt-auto border-t border-border">

        {/* Collaborate CTA */}
        <div className="py-20 text-center px-6 dot-grid">
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s{" "}
            <span className="text-primary">Collaborate</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto mb-10">
            Open to internship opportunities, collaborative projects, and building
            intelligent software solutions together.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:moussa.yassine5032.fsts@uhp.ac.ma"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-primary/30 text-foreground font-mono text-sm hover:text-primary hover:border-primary transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Send an Email
            </a>
            <a
              href="https://linkedin.com/in/yassine-moussa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-primary/30 text-foreground font-mono text-sm hover:text-primary hover:border-primary transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Connect + Contact columns */}
        <div className="border-t border-border py-12 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-12 sm:grid-cols-2">

            {/* CONNECT */}
            <div>
              <p className="font-mono text-xs text-muted-foreground tracking-widest mb-6 uppercase">Connect</p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://linkedin.com/in/yassine-moussa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yassine-io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all duration-200"
                >
                  <Github className="w-4 h-4 text-primary" />
                  GitHub
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <p className="font-mono text-xs text-muted-foreground tracking-widest mb-6 uppercase">Contact</p>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:moussa.yassine5032.fsts@uhp.ac.ma"
                  className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 break-all"
                >
                  moussa.yassine5032.fsts@uhp.ac.ma
                </a>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  Casablanca - Settat, Morocco
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border py-6 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            © 2026 Yassine Moussa. All rights reserved.
          </p>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="relative bg-background border border-primary/20 rounded-2xl shadow-2xl max-w-lg w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
            >
              ✕
            </button>
            <p className="text-xs font-mono text-muted-foreground mb-1">{modal.type}</p>
            <h3 className="font-mono text-xl text-foreground font-bold mb-6">{modal.title}</h3>
            <ul className="space-y-3">
              {modal.accomplishments.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 shrink-0">→</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <a
              href={modal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 w-full py-3 rounded-xl font-mono text-sm font-semibold bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;