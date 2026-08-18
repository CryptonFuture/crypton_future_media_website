import vrGirl from "../assets/vr-girl.png";
import "../components/css/About.css";

const values = [
  [
    "01",
    "Product Mindset",
    "We focus on useful software and measurable business outcomes.",
  ],
  [
    "02",
    "Modern Engineering",
    "Clean architecture, automation and scalable foundations.",
  ],
  [
    "03",
    "AI-First Thinking",
    "We use AI, RAG and intelligent agents where they create real value.",
  ],
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* ================= HEADING ================= */}
        <div className="heading about-heading">

  <div className="about-heading-left">

    <span className="kicker">
      <span className="kicker-dot" />
      01 / ABOUT US
    </span>

    <h2>
      Technology
      <span> with a purpose.</span>
    </h2>

    {/* TEXT HEADING KE NEECHE */}
    <p>
      We combine engineering, product thinking and emerging AI to turn
      complex ideas into reliable digital experiences.
    </p>

  </div>

</div>

        {/* ================= ABOUT LAYOUT ================= */}
        <div className="about-layout">

          {/* ================= LEFT IMAGE ================= */}
          <div className="about-image">

            <div className="about-image-glow" />

            <div className="about-orbit orbit-one" />
            <div className="about-orbit orbit-two" />

            <div className="about-image-number">
              <span>01</span>
              <small>FUTURE</small>
            </div>

            <div className="about-image-status">
              <span />
              SYSTEM ACTIVE
            </div>

            <img
              src={vrGirl}
              alt="Future Technology"
            />

            <div className="about-image-line" />

            <div className="image-corner corner-top" />
            <div className="image-corner corner-bottom" />

          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="about-content">

            <div className="about-label">
              <span>CRYPTON FUTURE MEDIA</span>
              <span>EST. 2026</span>
            </div>

            <h3 className="about-title">
              Where technology
              <br />
              <span>meets imagination.</span>
            </h3>

            <p className="about-description">
              We design and engineer modern digital products that combine
              powerful software, intelligent systems and exceptional user
              experiences.
            </p>

            {/* ================= VALUES ================= */}
            <div className="value-list">

              {values.map(([number, title, text]) => (
                <article className="value" key={number}>

                  <span className="value-number">
                    {number}
                  </span>

                  <div className="value-main">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>

                  <span className="value-arrow">
                    ↗
                  </span>

                </article>
              ))}

            </div>

            {/* ================= TECH TAGS ================= */}
            <div className="about-tags">
              <span>SOFTWARE</span>
              <span>AI</span>
              <span>RAG</span>
              <span>AGENTS</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}