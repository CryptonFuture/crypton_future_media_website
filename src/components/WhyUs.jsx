import '../components/css/WhyUs.css'
const reasons = [
  [
    "01",
    "Modern Architecture",
    "Clean, modular systems that can evolve as your business grows.",
  ],
  [
    "02",
    "AI-Ready Products",
    "LLMs, RAG, AI agents and automation beyond simple chatbots.",
  ],
  [
    "03",
    "Performance",
    "Fast interfaces, efficient APIs, caching and scalable infrastructure.",
  ],
  [
    "04",
    "Security",
    "Authentication, authorization, validation and secure engineering practices.",
  ],
  [
    "05",
    "Transparent Delivery",
    "Clear communication, milestones and maintainable code.",
  ],
  [
    "06",
    "Long-Term Partnership",
    "Continuous improvement instead of one-off delivery.",
  ],
];

export default function WhyUs() {
  return (
    <section id="whyus" className="section why-section">
      <div className="container">

        {/* HEADER */}
        <div className="heading why-heading">
          <div>
            <span className="kicker">03 / WHY US</span>

            <h2>
              Why <span>Crypton?</span>
            </h2>
          </div>

          <p>
            Engineering discipline meets creative thinking. We build products
            designed to work today and scale tomorrow.
          </p>
        </div>

        {/* CARDS */}
        <div className="why-grid">
          {reasons.map(([number, title, text]) => (
            <article className="why-card" key={number}>

              <div className="why-card-top">
                <span className="why-number">{number}</span>

                <span className="why-arrow">
                  ↗
                </span>
              </div>

              <div className="why-content">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>

              <div className="why-card-line" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}