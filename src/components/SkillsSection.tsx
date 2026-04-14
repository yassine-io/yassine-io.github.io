import {
  Code2, Coffee, Smartphone, Wind, Database, GitBranch,
  Monitor, Terminal, Globe, Brain, Layers, Server,
  Palette, Layout, Cpu, FileCode, Braces, AppWindow
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const skillIcons: Record<string, LucideIcon> = {
  "Java": Coffee,
  "JavaScript": Braces,
  "Python": Terminal,
  "Dart": Smartphone,
  "C": Cpu,
  "HTML/CSS": FileCode,
  "SQL / T-SQL": Database,
  "Spring Boot": Server,
  "React.js": Code2,
  "Flutter": AppWindow,
  "Bootstrap": Layout,
  "Tailwind CSS": Wind,
  "MySQL": Database,
  "PostgreSQL": Database,
  "Git": GitBranch,
  "IntelliJ IDEA": Monitor,
  "VS Code": Monitor,
  "PyCharm": Monitor,
  "PhpStorm": Monitor,
  "Eclipse": Monitor,
  "REST API": Globe,
  "LLM Integration": Brain,
  "UML": Layers,
  "Merise": Layers,
  "OOP": Braces,
  "MVC": Layers,
  "Linux": Terminal,
  "Windows": Monitor,
};

const skillGroups = [
  { category: "Languages", items: ["Java", "JavaScript", "Python", "Dart", "C", "HTML/CSS", "SQL / T-SQL"] },
  { category: "Frameworks", items: ["Spring Boot", "React.js", "Flutter", "Bootstrap", "Tailwind CSS"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL"] },
  { category: "Tools & DevOps", items: ["Git", "IntelliJ IDEA", "VS Code", "PyCharm", "PhpStorm", "Eclipse"] },
  { category: "Concepts", items: ["REST API", "LLM Integration", "UML", "Merise", "OOP", "MVC"] },
  { category: "OS", items: ["Linux", "Windows"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="max-w-5xl mx-auto px-6">
      <p className="section-label">_02</p>
      <h2 className="section-heading">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category} className="card-surface relative p-5">
            <h3 className="font-mono text-sm text-foreground mb-4 font-semibold">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const Icon = skillIcons[item] || Code2;
                return (
                  <span key={item} className="badge-outlined flex items-center gap-1.5">
                    <Icon className="w-3 h-3" />
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
