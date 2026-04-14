import { User } from "lucide-react";

const education = [
  {
    degree: "Engineering Degree in Computer Science",
    status: "in progress",
    period: "2024 – Present",
    school: "FST Settat — Université Hassan Premier",
    location: "Settat, Morocco",
  },
  {
    degree: "DEUG — Mathematics & Computer Science (SMI)",
    status: "",
    period: "2022 – 2024",
    school: "Faculty of Sciences, University Mohammed I",
    location: "Oujda, Morocco",
  },
];

const certifications = [
  { name: "Oracle Certified Professional: Java SE 17 Developer", issuer: "Oracle", date: "Mar 2026", link: "#" },
  { name: "SQL (Advanced)", issuer: "HackerRank", date: "Apr 2026", link: "#" },
];

const EducationSection = () => (
  <section id="education" className="py-24">
    <div className="max-w-5xl mx-auto px-6">
      <p className="section-label">_05</p>
      <h2 className="section-heading">Education</h2>

      <div className="space-y-6 mb-12">
        {education.map((e, i) => (
          <div key={i} className="card-surface relative p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="font-mono text-foreground font-semibold">
                {e.degree}
                {e.status && <span className="text-primary text-xs ml-2">({e.status})</span>}
              </h3>
              <span className="text-xs font-mono text-muted-foreground">{e.period}</span>
            </div>
            <p className="text-sm text-muted-foreground">{e.school} · {e.location}</p>
          </div>
        ))}
      </div>

      <p className="section-label">_certifications</p>
      <h3 className="font-mono text-xl text-foreground font-bold mb-6">Certifications</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <div key={i} className="card-surface relative p-5 glass-glow">
            <div className="flex items-start gap-4">
              <div className="picture-frame w-12 h-12 shrink-0">
                <div className="picture-frame-inner flex items-center justify-center">
                  <User className="w-6 h-6 text-muted-foreground/40" />
                </div>
              </div>
              <div className="flex-1">
                <span className="text-foreground text-sm font-medium block">{c.name}</span>
                <span className="text-muted-foreground text-xs">{c.issuer} · {c.date}</span>
                <div className="mt-3">
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-mono px-4 py-1.5 rounded-full glass-card text-primary hover:bg-primary/10 transition-all duration-200"
                  >
                    View Credential →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
