import { useMemo } from "react";
import vr from "../assets/vr.png";

export default function Hero() {
  const particles = useMemo(() => {
    return Array.from({ length: 70 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 5 + 4}s`,
      opacity: Math.random() * 0.7 + 0.2,
    }));
  }, []);

  return (
    <section id="home" className="hero">

      {/* ================= CUSTOM PARTICLES ================= */}
      <div className="custom-particles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="custom-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="hero-grid" />
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="container hero-inner">

        {/* ================= LEFT SIDE ================= */}

        <div className="hero-copy">

          <div className="eyebrow">
            <span />
            FUTURE-READY DIGITAL ENGINEERING
          </div>

          <h1>
            Building the <em>future</em> with technology.
          </h1>

          <p>
            Crypton Future Media creates modern software, AI solutions,
            intelligent digital products and scalable technology for
            ambitious businesses.
          </p>

          <div className="hero-actions">

            <a href="#services" className="btn btn-primary">
              Explore Services <b>↗</b>
            </a>

            <a href="#contact" className="btn btn-outline">
              Start a Project
            </a>

          </div>

          <div className="hero-highlights">

            <div>
              <strong>AI</strong>
              <span>AI & RAG</span>
            </div>

            <div>
              <strong>WEB</strong>
              <span>Full Stack</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Scalable</span>
            </div>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="hero-art" aria-hidden="true">

          <div className="vr-wrapper">

            <div className="vr-glow" />

            <div className="vr-orbit vr-orbit-1" />
            <div className="vr-orbit vr-orbit-2" />
            <div className="vr-orbit vr-orbit-3" />

            <img
              src={vr}
              alt="Virtual Reality Technology"
              className="vr-image"
            />

            <div className="vr-scan" />

          </div>


          {/* Floating VR Card */}

          <div className="vr-card vr-card-1">

            <div className="vr-card-icon">
              VR
            </div>

            <div>
              <strong>Virtual Reality</strong>
              <span>Immersive Experience</span>
            </div>

          </div>


          {/* Floating AI Card */}

          <div className="vr-card vr-card-2">

            <div className="vr-card-icon">
              AI
            </div>

            <div>
              <strong>Artificial Intelligence</strong>
              <span>Future Technology</span>
            </div>

          </div>


          {/* Floating 3D Card */}

          <div className="vr-card vr-card-3">

            <div className="vr-card-icon">
              3D
            </div>

            <div>
              <strong>3D Experience</strong>
              <span>Digital World</span>
            </div>

          </div>


          {/* Existing particles */}

          <span className="vr-particle particle-1" />
          <span className="vr-particle particle-2" />
          <span className="vr-particle particle-3" />
          <span className="vr-particle particle-4" />
          <span className="vr-particle particle-5" />

        </div>

      </div>


      {/* ================= SCROLL DOWN ================= */}

      <a
        className="scroll-cue"
        href="#about"
        aria-label="Scroll down to About section"
      >

        <span className="mouse">
          <span className="mouse-wheel" />
        </span>

        <span className="scroll-arrow">
          ↓
        </span>

      </a>

    </section>
  );
}