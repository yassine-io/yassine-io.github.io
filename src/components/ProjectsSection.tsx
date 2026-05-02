import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Github, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

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

const ProjectsSection = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [modal, setModal] = useState<Project | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  const p = projects[current];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">_04</p>
        <h2 className="section-heading">Featured Projects</h2>

        {/* Carousel card */}
        <div className="relative flex items-center gap-4">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="shrink-0 w-10 h-10 rounded-full glass-card border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Main card */}
          <div className="flex-1 card-surface glass-glow overflow-hidden rounded-2xl">
            <div className="flex flex-col md:flex-row min-h-[380px]">

              {/* Left — text */}
              <div className="flex-1 p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-muted-foreground">{p.type}</span>
                    <span className="text-xs font-mono bg-primary/10 border border-primary/30 text-primary px-2 py-0.5 rounded-lg">
                      {p.year}
                    </span>
                  </div>
                  <h3 className="font-mono text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                    {p.description}
                  </p>
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="badge-outlined text-xs">{s}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground/10 border border-border text-foreground text-sm font-mono hover:bg-foreground/20 transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                  <button
                    onClick={() => setModal(p)}
                    className="text-sm font-mono text-primary hover:underline transition-all duration-200"
                  >
                    Key Accomplishments →
                  </button>
                </div>
              </div>

              {/* Right — image */}
              <div className="md:w-[45%] h-56 md:h-auto relative overflow-hidden bg-muted">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-mono text-sm">
                    No preview
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="shrink-0 w-10 h-10 rounded-full glass-card border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-8" : "bg-muted-foreground/30 w-2"
              }`}
            />
          ))}
        </div>

        {/* See all projects */}
        <div className="flex justify-center mt-10">
          <a
            onClick={() => navigate("/projects")}
            className="flex items-center gap-2 font-mono text-sm px-8 py-3 rounded-full glass-card border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            See all the Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Accomplishments Modal */}
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
    </section>
  );
};

export default ProjectsSection;