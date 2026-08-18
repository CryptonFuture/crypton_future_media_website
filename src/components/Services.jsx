import '../components/css/Services.css'

const services = [
  [
    "⌘",
    "Web Development",
    "High-performance websites, dashboards and business platforms.",
  ],
  [
    "◈",
    "AI & Machine Learning",
    "LLM-powered products, AI assistants and intelligent automation.",
  ],
  [
    "◉",
    "RAG & AI Agents",
    "Context-aware RAG systems, agentic workflows and AI experiences.",
  ],
  [
    "▣",
    "Backend & APIs",
    "Scalable Node.js, Express, NestJS, REST and gRPC APIs.",
  ],
  [
    "⬡",
    "Cloud & DevOps",
    "Docker, CI/CD pipelines, deployment and production infrastructure.",
  ],
  [
    "✦",
    "Custom Software",
    "End-to-end engineering for startups and growing businesses.",
  ],
];

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="services-glow services-glow-one" />
      <div className="services-glow services-glow-two" />

      <div className="container">

        {/* HEADER */}
        <div className="services-heading">

          <div className="services-title">
            <div className="services-kicker">
              <span className="services-kicker-line" />
              <span>03 / SERVICES</span>
            </div>

            <h2>
              What we <em>build.</em>
            </h2>
          </div>

          <div className="services-intro">
            <span className="intro-line" />

            <p>
              From focused MVPs to complete digital ecosystems, we provide
              engineering capabilities across the product lifecycle.
            </p>
          </div>

        </div>

        {/* SERVICES GRID */}
        <div className="service-grid">

          {services.map(([icon, title, text], index) => (
            <article className="service-card" key={title}>

              <div className="service-card-bg" />

              <div className="service-top">

                <div className="service-icon">
                  {icon}
                </div>

                <span className="service-number">
                  0{index + 1}
                </span>

              </div>

              <div className="service-content">

                <h3>{title}</h3>

                <p>{text}</p>

              </div>

              <div className="service-bottom">

                <span className="service-link">
                  Explore service
                </span>

                <span className="service-arrow">
                  ↗
                </span>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}