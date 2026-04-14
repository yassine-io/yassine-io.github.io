import { useState, useEffect } from "react";
import { User, Download, Mail } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "AI Engineer",
  "Software Engineering Student",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center dot-grid hero-glow">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full flex flex-col md:flex-row items-center gap-12">
        {/* Text content */}
        <div className="flex-1">
          <p className="section-label mb-4">_hello</p>
          <h1 className="font-mono text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Yassine
            <br />
            Moussa<span className="text-primary">.</span>
          </h1>
          <div className="font-mono text-lg md:text-xl text-muted-foreground mb-6 h-8">
            <span>{text}</span>
            <span className="text-primary animate-pulse">_</span>
          </div>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            A passionate software engineering student and full stack developer with a focus on building
            intelligent, scalable web applications. Experienced in Java, Spring Boot, React, and AI-driven
            solutions — always looking for the next challenge to solve.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-block font-mono text-sm px-6 py-3 rounded-xl glass-card glass-glow relative text-primary hover:text-primary-foreground hover:bg-primary/20 transition-all duration-300"
            >
              View my work →
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3 rounded-xl glass-card glass-glow relative text-primary hover:text-primary-foreground hover:bg-primary/20 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="mailto:moussa.yassine5032.fsts@uhp.ac.ma"
              className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3 rounded-xl glass-card glass-glow relative text-primary hover:text-primary-foreground hover:bg-primary/20 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
          </div>
        </div>

        {/* Picture frame */}
        <div className="picture-frame w-56 h-56 md:w-72 md:h-72 shrink-0">
          <div className="picture-frame-inner flex items-center justify-center">
            <User className="w-24 h-24 md:w-32 md:h-32 text-muted-foreground/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
