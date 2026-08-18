
import { useState } from "react";
import '../components/css/Navbar.css'

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["mission", "Mission"],
  ["services", "Services"],
  ["whyus", "Why Us"],
  ["team", "Team"],
  ["careers", "Careers"],
  ["contact", "Contact"],
];

function Logo() {
  return (
    <a href="#home" className="brand" aria-label="Crypton Future Media">
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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`navbar ${open ? "menu-active" : ""}`}>
      <div className="container nav-inner">

        <Logo />

        <button
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            <span>Start a Project</span>
            <b>↗</b>
          </a>
        </nav>

      </div>
    </header>
  );
}



