import { MapPin, Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "CodeAlpha",
    location: "India (Remote)",
    period: "Feb 2026",
    status: "In Progress",
    logo: "/experience/codealpha-logo.jpg",
    bullets: [
      "Developed and maintained full stack web applications using React.js for the frontend and Spring Boot for the backend.",
      "Designed and consumed RESTful APIs to connect frontend interfaces with backend services efficiently.",
      "Collaborated remotely with an international team, following agile workflows and Git-based version control.",
    ],
    stack: ["React.js", "Spring Boot", "REST API", "PostgreSQL", "Git"],
  },
  {
    title: "End-of-Years Internship — LLM-Based Report Generation",
    company: "FST Settat",
    location: "Settat, Morocco",
    period: "Dec 2025 – Jan 2026",
    status: "Completed",
    logo: "/experience/fsts-logo.png",
    bullets: [
      "Built an automated pipeline to generate structured technical reports from raw log files using an LLM.",
      "Significantly reduced manual log analysis time by producing clean, human-readable reports automatically.",
    ],
    stack: ["Python", "LLM", "Log Processing", "Structured Text Generation"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="max-w-5xl mx-auto px-6">
      <p className="section-label">_03</p>
      <h2 className="section-heading">Experience</h2>

      <div className="relative pl-8 border-l border-primary/20">
        {experiences.map((exp, i) => (
          <div key={i} className="relative mb-12 last:mb-0">
            <div className="absolute -left-[calc(2rem+5px)] top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsla(263,70%,58%,0.5)]" />

            <div className="card-surface relative p-6 glass-glow">

              {/* Top row: logo + status */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {exp.logo ? (
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-primary/20 bg-muted flex items-center justify-center shrink-0">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl border border-primary/20 bg-muted flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6 text-muted-foreground/40" />
                    </div>
                  )}
                </div>

                {exp.status && (
                  <span className="text-xs font-mono text-muted-foreground border border-border rounded-lg px-3 py-1">
                    {exp.status}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-mono text-lg text-foreground font-semibold mb-3">
                {exp.title}
              </h3>

              {/* Company / Location / Date */}
              <div className="flex flex-col gap-1.5 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary shrink-0" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-4">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((s) => (
                  <span key={s} className="badge-outlined">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;