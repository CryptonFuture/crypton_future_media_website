import React from "react";
import "../components/css/Client.css";

const clients = [
  {
    id: 1,
    name: "Tech Vision",
    logo: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Digital Labs",
    logo: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Innovation Hub",
    logo: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Future Tech",
    logo: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Smart Systems",
    logo: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "NextGen",
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Clients() {
  return (
    <section className="clients-section" id="clients">

      {/* Background Effects */}
      <div className="clients-bg-glow clients-glow-one" />
      <div className="clients-bg-glow clients-glow-two" />

      <div className="clients-container">

        {/* Heading */}
        <div className="clients-heading">

          <span className="clients-eyebrow">
            <span className="eyebrow-dot" />
            TRUSTED PARTNERS
          </span>

          <h2>
            Trusted by{" "}
            <span>Forward-Thinking</span>{" "}
            Brands
          </h2>

          <p>
            We collaborate with ambitious businesses and organizations
            to build powerful digital experiences and future-ready
            technology solutions.
          </p>

        </div>

        {/* Clients */}
        <div className="clients-showcase">

          <div className="clients-line clients-line-top" />

          <div className="clients-grid">

            {clients.map((client) => (
              <div
                className="client-card"
                key={client.id}
              >

                <div className="client-card-inner">

                  <div className="client-logo-wrapper">

                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="client-logo"
                      loading="lazy"
                    />

                  </div>

                  <span className="client-name">
                    {client.name}
                  </span>

                </div>

              </div>
            ))}

          </div>

          <div className="clients-line clients-line-bottom" />

        </div>

        {/* Bottom */}
        <div className="clients-bottom">

          <div className="trust-indicator">
            <span className="trust-pulse" />
            <span>
              Building long-term partnerships
            </span>
          </div>

          <div className="trust-divider" />

          <p>
            Your vision. Our technology. One future.
          </p>

        </div>

      </div>

    </section>
  );
}