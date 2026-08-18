import '../components/css/Footer.css'
function Logo() {
  return (
    <a href="#home" className="brand">
      <span className="brand-icon">
        <i />
        <i />
        <i />
      </span>

      <span className="brand-text">
        <strong>CRYPTON</strong>
        <small>FUTURE MEDIA</small>
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP GLOW */}
      <div className="footer-glow" />

      <div className="container">

        {/* MAIN FOOTER */}
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">

            <Logo />

            <p className="footer-tagline">
              Building Future With Technology.
            </p>

            <p className="footer-description">
              Engineering modern software, AI systems and digital products
              built for the future.
            </p>

            <a
              className="footer-email"
              href="mailto:hello@cryptonfuturemedia.com"
            >
              hello@cryptonfuturemedia.com
              <span>↗</span>
            </a>

          </div>


          {/* NAVIGATE */}
          <div className="footer-column">
            <h4>Navigate</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#mission">Mission</a>
            <a href="#services">Services</a>
            <a href="#whyus">Why Us</a>
          </div>


          {/* COMPANY */}
          <div className="footer-column">
            <h4>Company</h4>

            <a href="#team">Team</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
            <a href="mailto:hello@cryptonfuturemedia.com">
              Email
            </a>
          </div>


          {/* SOCIAL */}
          <div className="footer-column">
            <h4>Social</h4>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span>↗</span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span>↗</span>
            </a>
          </div>

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Crypton Future Media.
            All rights reserved.
          </span>

          <span className="footer-status">
            <i />
            Building Future With Technology.
          </span>

        </div>

      </div>
    </footer>
  );
}