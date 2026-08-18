
import '../components/css/Mission.css';

export default function Mission() {
  return (
    <section id="mission" className="section mission-section">
      <div className="mission-bg-glow mission-bg-glow-1" />
      <div className="mission-bg-glow mission-bg-glow-2" />

      <div className="container mission-layout">

        {/* LEFT */}
        <div className="mission-heading">
          <div className="mission-kicker">
            <span className="kicker-line" />
            <span>03 / WHY US</span>
          </div>

          <h2>
            Engineering discipline meets <em>creative thinking.</em>
          </h2>
        </div>

        {/* RIGHT */}
        <div className="mission-copy">

          <p className="mission-lead">
            We build products designed to work today and scale tomorrow.
          </p>

          <p>
            Our approach combines strong engineering principles with
            creative problem-solving to build secure, scalable and
            meaningful digital products.
          </p>

          <div className="mission-points">

            <div className="mission-point">
              <span className="point-number">01</span>

              <div>
                <h3>Innovate</h3>
                <p>
                  Turning ambitious ideas into meaningful digital products.
                </p>
              </div>

              <span className="point-arrow">↗</span>
            </div>

            <div className="mission-point">
              <span className="point-number">02</span>

              <div>
                <h3>Engineer</h3>
                <p>
                  Building reliable, scalable and future-ready technology.
                </p>
              </div>

              <span className="point-arrow">↗</span>
            </div>

            <div className="mission-point">
              <span className="point-number">03</span>

              <div>
                <h3>Empower</h3>
                <p>
                  Helping businesses grow through intelligent technology.
                </p>
              </div>

              <span className="point-arrow">↗</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

