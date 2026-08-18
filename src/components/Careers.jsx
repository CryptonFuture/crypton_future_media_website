import '../components/css/Careers.css'
const roles = [
  [
    "01",
    "Frontend Developer",
    "React / Next.js",
    "Build polished, responsive and high-performance digital experiences.",
  ],
  [
    "02",
    "Backend Developer",
    "Node.js / APIs",
    "Design scalable APIs, databases and production-ready backend systems.",
  ],
  [
    "03",
    "AI Engineer",
    "LLM / RAG / Agents",
    "Create intelligent applications using LLMs, RAG and agentic workflows.",
  ],
];

export default function Careers() {
  return (
    <section id="careers" className="section careers-section">
      <div className="container">

        {/* HEADER */}
        <div className="heading careers-heading">
          <div>
            <span className="kicker">05 / CAREERS</span>

            <h2>
              Build the future{" "}
              <span>with us.</span>
            </h2>
          </div>

          <p>
            Join a technology-focused team where you can work on modern
            software, AI and ambitious digital products.
          </p>
        </div>


        {/* CAREER CARDS */}
        <div className="career-grid">
          {roles.map(([number, title, stack, text]) => (
            <article className="career-card" key={title}>

              {/* TOP */}
              <div className="career-top">
                <span className="career-number">
                  {number}
                </span>

                <span className="career-type">
                  FULL TIME
                </span>
              </div>


              {/* CONTENT */}
              <div className="career-content">

                <small className="career-stack">
                  {stack}
                </small>

                <h3>{title}</h3>

                <p>{text}</p>

              </div>


              {/* APPLY */}
              <a
                className="career-apply"
                href="mailto:careers@cryptonfuturemedia.com?subject=Career Application"
              >
                <span>Apply Now</span>
                <span className="career-arrow">↗</span>
              </a>

            </article>
          ))}
        </div>


        {/* OPEN APPLICATION */}
        <div className="open-application">

          <div className="open-content">
            <span className="kicker">
              DON'T SEE YOUR ROLE?
            </span>

            <h3>
              Send us your profile anyway.
            </h3>

            <p>
              We are always interested in meeting talented engineers,
              designers and AI builders.
            </p>
          </div>

          <a
            className="open-application-btn"
            href="mailto:careers@cryptonfuturemedia.com?subject=Open Application"
          >
            <span>Send CV / Resume</span>
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}