import '../components/css/Contact.css'
export default function Contact() {
  const submit = (e) => {
    e.preventDefault();
    alert("Thank you! Connect this form to your backend or email service.");
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="contact-box">

          {/* =================================
              LEFT SIDE
          ================================= */}
          <div className="contact-copy">

            <div className="contact-label">
              <span className="kicker">06 / CONTACT</span>

              <span className="contact-dot">
                <i />
                AVAILABLE FOR PROJECTS
              </span>
            </div>

            <h2>
              Have an idea?
              <br />
              <em>Let's build it.</em>
            </h2>

            <p>
              Tell us what you're planning. We'll turn your idea into a
              practical technical direction and a scalable digital product.
            </p>


            {/* LINKS */}
            <div className="contact-links">

              <a href="mailto:hello@cryptonfuturemedia.com">
                <span className="link-icon">@</span>

                <span>
                  <small>Email</small>
                  hello@cryptonfuturemedia.com
                </span>

                <strong>↗</strong>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="link-icon">in</span>

                <span>
                  <small>Connect</small>
                  LinkedIn
                </span>

                <strong>↗</strong>
              </a>

            </div>
          </div>


          {/* =================================
              RIGHT SIDE FORM
          ================================= */}
          <form
            className="contact-form"
            onSubmit={submit}
          >

            <div className="form-header">
              <span>START A PROJECT</span>
              <small>01 — 04</small>
            </div>


            {/* NAME + EMAIL */}
            <div className="form-row">

              <label>
                <span>Name</span>

                <input
                  required
                  placeholder="Your name"
                />
              </label>

              <label>
                <span>Email</span>

                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                />
              </label>

            </div>


            {/* SERVICE */}
            <label>
              <span>Service</span>

              <select defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>

                <option>Web Development</option>
                <option>AI & Machine Learning</option>
                <option>RAG & AI Agents</option>
                <option>Backend & APIs</option>
                <option>Cloud & DevOps</option>
                <option>Custom Software</option>
              </select>
            </label>


            {/* MESSAGE */}
            <label>
              <span>Message</span>

              <textarea
                required
                rows="5"
                placeholder="Tell us about your project..."
              />
            </label>


            {/* SUBMIT */}
            <button
              className="contact-submit"
              type="submit"
            >
              <span>Send Project Inquiry</span>

              <span className="submit-arrow">
                ↗
              </span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}