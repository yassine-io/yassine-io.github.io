const experiences = [
  {
    title: "End-of-Study Internship — LLM-Based Report Generation",
    company: "FST Settat",
    location: "Settat, Morocco",
    period: "Dec 2025 – Jan 2026",
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
              <p className="text-xs font-mono text-muted-foreground mb-1">{exp.period}</p>
              <h3 className="font-mono text-lg text-foreground font-semibold">{exp.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {exp.company} · {exp.location}
              </p>
              <ul className="space-y-2 mb-4">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
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
