const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="max-w-5xl mx-auto px-6">
      <p className="section-label">_01</p>
      <h2 className="section-heading">About</h2>
      <div className="card-surface relative p-6 md:p-8">
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          Computer Science Engineering student with hands-on experience in full stack development,
          mobile applications, and AI-powered systems. Proven ability to design and deliver
          end-to-end software solutions using Java/Spring Boot, React.js, Flutter, and Python.
          Holder of an OCP Java SE 17 certification. Actively seeking an internship to contribute
          to impactful software projects.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="badge-outlined flex items-center gap-2">
            <span className="text-primary">→</span> Based in Morocco
          </span>
          <span className="badge-outlined flex items-center gap-2">
            <span className="text-primary">→</span> Arabic · French · English
          </span>
          <span className="badge-outlined flex items-center gap-2">
            <span className="text-primary">→</span> OCP Java SE 17
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
