import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="max-w-5xl mx-auto px-6">
      <p className="section-label">_06</p>
      <h2 className="section-heading">Contact</h2>
      <div className="card-surface relative p-6 md:p-8">
        <p className="text-muted-foreground mb-8 text-base">
          Interested in working together? Feel free to reach out.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: Mail, label: "moussa.yassine5032.fsts@uhp.ac.ma", href: "mailto:moussa.yassine5032.fsts@uhp.ac.ma" },
            { icon: Phone, label: "+212 618 415 445", href: "tel:+212618415445" },
            { icon: Linkedin, label: "yassine-moussa", href: "https://linkedin.com/in/yassine-moussa" },
            { icon: Github, label: "yassine-io", href: "https://github.com/yassine-io" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-surface relative flex items-center gap-3 p-4 text-sm text-muted-foreground hover:text-primary glass-glow transition-all duration-200 group"
            >
              <c.icon className="w-4 h-4 text-primary shrink-0" />
              <span className="group-hover:underline truncate">{c.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
