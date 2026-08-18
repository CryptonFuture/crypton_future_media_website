import '../components/css/Team.css'
const team = [
  [
    "MA",
    "Muhammad Asad Ali Akbar",
    "CEO & Full Stack Engineer",
    "Founder / Engineering",
  ],
  [
    "AI",
    "AI Engineering",
    "AI / LLM Specialists",
    "RAG • Agents • Automation",
  ],
  [
    "FE",
    "Frontend Engineering",
    "React / Next.js Developers",
    "UI • UX • Web Apps",
  ],
  [
    "BE",
    "Backend Engineering",
    "Node.js / API Developers",
    "APIs • Databases • Cloud",
  ],
];

export default function Team() {
  return (
    <section id="team" className="section section-dark team-section">
      <div className="container">

        {/* HEADER */}
        <div className="heading team-heading">
          <div>
            <span className="kicker">04 / TEAM</span>

            <h2>
              People behind the{" "}
              <span>technology.</span>
            </h2>
          </div>

          <p>
            A multidisciplinary engineering mindset focused on turning ideas
            into dependable digital products.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="team-grid">
          {team.map(([initials, name, role, area], index) => (
            <article className="team-card" key={name}>

              {/* TOP */}
              <div className="team-top">
                <span className="team-index">
                  0{index + 1}
                </span>

                <span className="team-status">
                  <i />
                  ACTIVE
                </span>
              </div>

              {/* AVATAR */}
              <div className="avatar-wrapper">
                <div className="avatar">
                  <span>{initials}</span>
                </div>

                <div className="avatar-ring ring-one" />
                <div className="avatar-ring ring-two" />
              </div>

              {/* CONTENT */}
              <div className="team-content">

                <small>{area}</small>

                <h3>{name}</h3>

                <p>{role}</p>

              </div>

              {/* FOOTER */}
              <div className="team-footer">
                <span>Crypton Future Media</span>

                <span className="team-arrow">
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