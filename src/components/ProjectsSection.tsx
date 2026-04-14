import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "TripNest",
    type: "Full Stack Web Application",
    description:
      "Collaborative logistics management platform for group expeditions — itinerary planning, resource sharing, and team coordination. RESTful backend with Spring Boot and responsive SPA frontend in React.js.",
    stack: ["Spring Boot", "React.js", "PostgreSQL", "REST API", "Git"],
  },
  {
    title: "Gym App",
    type: "Mobile Application",
    description:
      "Cross-platform fitness coaching app featuring personalized workout programs, session tracking, and calorie calculation. Firebase for real-time data sync and auth across iOS and Android.",
    stack: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Library Management System",
    type: "Full Stack Web Application",
    description:
      "Digitized municipal library operations: book catalog, member management, loan tracking, and return workflows. Fully automated borrowing system that reduced tracking errors.",
    stack: ["Spring Boot", "Thymeleaf", "MySQL", "Java"],
  },
];

const ProjectsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">_04</p>
        <h2 className="section-heading">Projects</h2>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden rounded-2xl">
            <div className="flex">
              {projects.map((p, i) => (
                <div key={p.title} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_80%] lg:flex-[0_0_50%] px-3">
                  <div className="card-surface relative p-6 h-full glass-glow border-l-4 border-l-primary">
                    <p className="text-xs font-mono text-muted-foreground mb-1">{p.type}</p>
                    <h3 className="font-mono text-lg text-foreground font-semibold mb-3">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="badge-outlined">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="glass-card p-2 rounded-full text-muted-foreground hover:text-primary disabled:opacity-30 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === selected ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="glass-card p-2 rounded-full text-muted-foreground hover:text-primary disabled:opacity-30 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
