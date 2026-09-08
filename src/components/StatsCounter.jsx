
import { useEffect, useRef, useState } from "react";
import {
  BriefcaseBusiness,
  Users,
  Award,
  Code2,
} from "lucide-react";
import "./css/StatsCounter.css";

const stats = [
  {
    number: 50,
    suffix: "+",
    label: "Projects Completed",
    icon: BriefcaseBusiness,
  },
  {
    number: 30,
    suffix: "+",
    label: "Happy Clients",
    icon: Users,
  },
  
  {
    number: 99,
    suffix: "+",
    label: "Client Satisfaction",
    icon: Code2,
  },
];

function Counter({ target, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1800;
    const incrementTime = 30;
    const increment = target / (duration / incrementTime);

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, start]);

  return (
    <span className="stats-counter-number">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-container">
        <div className="stats-heading">
          <span className="stats-badge">OUR ACHIEVEMENTS</span>

          <h2>
            Turning Ideas Into
            <span> Digital Success</span>
          </h2>

          <p>
            Delivering innovative technology solutions and building
            long-term relationships with our clients.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                className="stat-card"
                key={stat.label}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="stat-icon">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <Counter
                  target={stat.number}
                  suffix={stat.suffix}
                  start={started}
                />

                <div className="stat-label">
                  {stat.label}
                </div>

                <div className="stat-line" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

