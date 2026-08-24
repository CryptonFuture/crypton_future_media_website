import {
  ArrowUpRight,
  Sparkles,
  Layers3,
  Code2,
  BrainCircuit,
} from "lucide-react";

import Matrix from "../assets/Matrix.png";
import Medical from "../assets/Medical.png";

import "./css/Projects.css";

const projects = [
  {
    id: 1,
    title: "AI CyberBot Matrix",
    description:
      "AI-powered report generation platform that transforms user requirements into structured, professional reports with export and analytics capabilities.",
    category: "AI Platform",
    featured: true,

    // Matrix image
    image: Matrix,

    icon: <BrainCircuit size={30} />,

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "LangChain",
      "LangGraph",
    ],

    github: "#",
    demo: "https://ai-platform-robotics.vercel.app/",
  },

  {
    id: 2,
    title: "AI Interview Platform",
    description:
      "Interactive AI interview platform designed to conduct technical interviews, evaluate responses and provide intelligent feedback.",
    category: "Artificial Intelligence",

    image: "/projects/ai-interview.jpg",

    icon: <Sparkles size={30} />,

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "AI",
      "REST API",
    ],

    github: "#",
    demo: "#",
  },

  {
    id: 3,
    title: "AI Homeopathic Inventory",
    description:
      "AI-powered medicine inventory system that intelligently identifies medicines and displays real-time availability using green and red status indicators.",
    category: "AI + Healthcare",

    image: Medical,

    icon: <Layers3 size={30} />,

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "LangChain",
      "LangGraph",
    ],

    github: "#",
    demo: "#",
  },

  {
    id: 4,
    title: "E-Commerce API",
    description:
      "Scalable backend API for an e-commerce platform with authentication, products, orders, payments and database management.",
    category: "Backend",

    image: "/projects/ecommerce.jpg",

    icon: <Code2 size={30} />,

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
    ],

    github: "#",
    demo: "#",
  },

  {
    id: 5,
    title: "RAG AI Chat System",
    description:
      "Retrieval-Augmented Generation based AI assistant capable of searching contextual knowledge and generating intelligent responses.",
    category: "Generative AI",

    image: "/projects/rag-ai.jpg",

    icon: <BrainCircuit size={30} />,

    technologies: [
      "Node.js",
      "LangChain",
      "LangGraph",
      "MongoDB",
      "Redis",
      "RAG",
    ],

    github: "#",
    demo: "#",
  },

  {
    id: 6,
    title: "3D Interactive Portfolio",
    description:
      "Modern interactive portfolio experience featuring 3D visual elements, animations, particles and responsive UI.",
    category: "Creative Development",

    image: "/projects/3d-portfolio.jpg",

    icon: <Layers3 size={30} />,

    technologies: [
      "React",
      "Vite",
      "Three.js",
      "Framer Motion",
      "CSS",
    ],

    github: "#",
    demo: "#",
  },
];

function ProjectCard({ project }) {
  return (
    <article
      className={`project-card ${
        project.featured ? "featured-project" : ""
      }`}
    >
      <div className="project-glow" />

      {/* Project Image */}
      <div className="project-image-wrapper">

        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />

        <div className="project-image-overlay" />

        <div className="project-image-top">

          <span className="project-category">
            {project.category}
          </span>

          {project.featured && (
            <span className="featured-badge">
              <Sparkles size={12} />
              Featured
            </span>
          )}

        </div>

        <div className="project-image-icon">
          {project.icon}
        </div>

      </div>

      {/* Content */}
      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

      </div>

      {/* Technologies */}
      <div className="project-tech">

        {project.technologies.map((tech) => (
          <span key={tech}>
            {tech}
          </span>
        ))}

      </div>

      {/* Footer */}
      <div className="project-footer">

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link primary"
        >
          <span>Live Demo</span>
          <ArrowUpRight size={17} />
        </a>

        <a
          href={project.github}
          className="project-link secondary"
        >
          <Code2 size={16} />
          <span>GitHub</span>
        </a>

      </div>

    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="projects-container">

        {/* Heading */}
        <div className="projects-heading">

          <div className="section-label">

            <span className="label-line" />

            <span>
              OUR PROJECTS
            </span>

            <span className="label-line" />

          </div>

          <h2>
            Building Digital

            <span>
              Experiences That Matter.
            </span>
          </h2>

          <p>
            From AI-powered applications to
            scalable backend systems and
            immersive digital experiences,
            we build technology designed
            to solve real-world problems.
          </p>

        </div>

        {/* Projects */}
        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

        {/* CTA */}
        <div className="projects-bottom">

          <div>

            <span>
              Have a project in mind?
            </span>

            <h3>
              Let's build something
              extraordinary.
            </h3>

          </div>

          <a
            href="#contact"
            className="projects-cta"
          >
            Start a Project
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>
    </section>
  );
}