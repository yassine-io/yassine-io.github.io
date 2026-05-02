import { Award, Calendar, ExternalLink, Eye, X } from "lucide-react";
import { useState } from "react";

const certifications = [
  {
    name: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle",
    date: "Mar 2026",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=807051823E2C9A7E55BA05B2C2DB740AD3C5ADBF4591C9EA00AB3331BB4BE292",
    logo: "/certifications/oracle-logo.png",
    preview: "/certifications/ocp-java-preview.jpg",
  },
  {
    name: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "Apr 2026",
    link: "https://www.hackerrank.com/certificates/iframe/a8ae58b638ab",
    logo: "/certifications/hackerrank-logo.png",
    preview: "/certifications/sql-hackerrank-preview.png",
  },
];

type Cert = typeof certifications[0];

const CertificationsSection = () => {
  const [selected, setSelected] = useState<Cert | null>(null);

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">_06</p>
        <h2 className="section-heading">Certifications</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <div
              key={i}
              // APRÈS
className="card-surface relative p-8 glass-glow flex flex-col gap-6 min-h-[280px] hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <h4 className="font-mono text-sm text-foreground font-semibold leading-snug">
                  {c.name}
                </h4>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-primary/20 bg-muted flex items-center justify-center shrink-0">
                    <img
                      src={c.logo}
                      alt={c.issuer}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">{c.issuer}</span>
                </div>

                <button
                  onClick={() => setSelected(c)}
                  className="w-9 h-9 rounded-full bg-muted/50 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
                  title="Preview certificate"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{c.date}</span>
              </div>

              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-mono text-sm font-semibold bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary transition-all duration-200"
              >
                Show Credential
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-background border border-primary/20 rounded-2xl shadow-2xl max-w-2xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            <img
              src={selected.preview}
              alt={selected.name}
              className="w-full rounded-xl object-contain max-h-[70vh]"
            />

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-mono text-sm text-foreground font-semibold">{selected.name}</p>
                <p className="text-xs text-muted-foreground">{selected.issuer} · {selected.date}</p>
              </div>
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-sm font-semibold bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-200"
              >
                Open <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;