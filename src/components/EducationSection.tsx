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

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">_05</p>
        <h2 className="section-heading">Education</h2>

        <div className="space-y-6">
          {education.map((e, i) => (
            <div key={i} className="card-surface relative p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="font-mono text-foreground font-semibold">
                  {e.degree}
                  {e.status && (
                    <span className="text-primary text-xs ml-2">({e.status})</span>
                  )}
                </h3>
                <span className="text-xs font-mono text-muted-foreground">{e.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {e.school} · {e.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;