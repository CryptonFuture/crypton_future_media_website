
import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Layers3,
  Code2,
  BrainCircuit,
  MapPinned,
  ShoppingCart,
  ShieldCheck,
  ListTodo,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Matrix from "../assets/Matrix.png";
import Medical from "../assets/Medical.png";
import Gaming from "../assets/gaming.png";
import Aether from "../assets/Aether.png";
import Rag from "../assets/RagChat.png";
import Taxi from "../assets/Taxi_App.png";
import Driver from "../assets/Driver_App.png";
import Bus from "../assets/Bus.png";
import Tracking from "../assets/Tracking.png";
import Train from "../assets/train.png";
import Flight from "../assets/flight.png";
import Patient from "../assets/patient.png";
import Expense from "../assets/expense.png";
import Masjid from "../assets/masjid.png";
import Inventory from "../assets/inventory.png";

import "./css/Projects.css";

// =====================================================
// FILTERS
// =====================================================

const filters = [
  "All",
  "AI",
  "Tracking System",
  "Booking System",
  "Nearby System",
  "Management System",
  "E-commerce",
  "Authentication",
  "Task System",
];

// =====================================================
// PROJECTS
// =====================================================

const projects = [
  // =====================================================
  // AI PROJECTS
  // =====================================================

  {
    id: 1,
    title: "AI CyberBot Matrix",
    description:
      "AI-powered report generation platform that transforms user requirements into structured, professional reports with export and analytics capabilities.",
    category: "AI",
    categoryLabel: "AI Platform",
    featured: true,
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
    title: "AI Homeopathic Inventory",
    description:
      "AI-powered medicine inventory system that intelligently identifies medicines and displays real-time availability using smart status indicators.",
    category: "AI",
    categoryLabel: "AI + Healthcare",
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
    demo: "https://ai-homeopathic-inventory-frontend.vercel.app/",
  },

  {
    id: 3,
    title: "RAG AI Chat System",
    description:
      "Retrieval-Augmented Generation based AI assistant capable of searching contextual knowledge and generating intelligent responses.",
    category: "AI",
    categoryLabel: "Generative AI",
    image: Rag,
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

  // =====================================================
  // TRACKING / BOOKING
  // =====================================================

  {
    id: 4,
    title: "Taxi Booking Application",
    description:
      "Real-time ride and delivery tracking platform that allows users to track drivers, vehicles and active trips with live location updates.",
    category: "Booking System",
    categoryLabel: "Booking",
    image: Taxi,
    icon: <MapPinned size={30} />,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "LLM",
      "Socket.io",
      "Google Maps",
    ],
    github: "#",
    demo: "#",
  },

  {
    id: 5,
    title: "Driver Booking Application",
    description:
      "AI-powered report generation platform that transforms user requirements into structured, professional reports with export and analytics capabilities.",
    category: "Booking System",
    categoryLabel: "Booking",
    featured: true,
    image: Driver,
    icon: <BrainCircuit size={30} />,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "LLM",
      "Socket.io",
      "Google Maps",
    ],
    github: "#",
    demo: "#",
  },

  // =====================================================
  // E-COMMERCE
  // =====================================================

  {
    id: 6,
    title: "Nexus Gear E-commerce",
    description:
      "Full-stack e-commerce platform with product management, shopping cart, authentication, orders, payments and scalable backend APIs.",
    category: "E-commerce",
    categoryLabel: "E-commerce Platform",
    image: Gaming,
    icon: <ShoppingCart size={30} />,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
    ],
    github: "#",
    demo: "#",
  },

  // =====================================================
  // AUTHENTICATION
  // =====================================================

  {
    id: 7,
    title: "Secure Authentication System",
    description:
      "Production-ready authentication system with registration, login, JWT authentication, role-based access control, password security and protected routes.",
    category: "Authentication",
    categoryLabel: "Security & Authentication",
    image: Aether,
    icon: <ShieldCheck size={30} />,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
    ],
    github: "#",
    demo: "#",
  },

  // =====================================================
  // TASK SYSTEM
  // =====================================================

  {
    id: 8,
    title: "Task Management System",
    description:
      "Modern task management platform for creating, assigning and tracking tasks with priorities, statuses, deadlines and team collaboration.",
    category: "Task System",
    categoryLabel: "Task Management",
    image: Matrix,
    icon: <ListTodo size={30} />,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "REST API",
    ],
    github: "#",
    demo: "#",
  },

  // =====================================================
  // EXTRA CREATIVE PROJECT
  // =====================================================

  {
    id: 9,
    title: "Aether Medicine",
    description:
      "Modern interactive web experience featuring immersive animations, responsive UI and creative visual elements.",
    category: "All",
    categoryLabel: "Creative Development",
    image: Aether,
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

  {
    id: 10,
    title: "Bus Ticketing Application",
    description:
      "AI-powered report generation platform that transforms user requirements into structured, professional reports with export and analytics capabilities.",
    category: "Booking System",
    categoryLabel: "Booking",
    featured: true,
    image: Bus,
    icon: <BrainCircuit size={30} />,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "LLM",
    ],
    github: "#",
    demo: "https://busticketfrontend.vercel.app/",
  },

  {
    id: 11,
    title: "Driver Tracking Application",
    description:
      "AI-powered report generation platform that transforms user requirements into structured, professional reports with export and analytics capabilities.",
    category: "Tracking System",
    categoryLabel: "Booking",
    featured: true,
    image: Tracking,
    icon: <BrainCircuit size={30} />,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "LLM",
      "Socket.io",
      "Google Map",
    ],
    github: "#",
    demo: "#",
  },

  {
    id: 12,
    title: "Train Ticketing Application",
    description:
      "AI-powered report generation platform that transforms user requirements into structured, professional reports with export and analytics capabilities.",
    category: "Booking System",
    categoryLabel: "Booking",
    featured: true,
    image: Train,
    icon: <BrainCircuit size={30} />,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "LLM",
    ],
    github: "#",
    demo: "https://trainticketfrontend.vercel.app/",
  },

  {
    id: 13,
    title: "Flight Ticketing Application",
    description:
      "AI-powered report generation platform that transforms user requirements into structured, professional reports with export and analytics capabilities.",
    category: "Booking System",
    categoryLabel: "Booking",
    featured: true,
    image: Flight,
    icon: <BrainCircuit size={30} />,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "LLM",
    ],
    github: "#",
    demo: "https://flightticketfrontend.vercel.app/",
  },

    {
    id: 14,
    title: "Patient Tracker Application",
    description:
      "AI-powered report generation platform that transforms user requirements into structured, professional reports with export and analytics capabilities.",
    category: "Tracking System",
    categoryLabel: "tracking",
    featured: true,
    image: Patient,
    icon: <BrainCircuit size={30} />,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Flask",
      "FastApi",
      "LLM",
    ],
    github: "#",
    demo: "https://patienttrackerfrontend.vercel.app/",
  },

     {
    id: 15,
    title: "Expense Tracker Application",
    description:
      "AI-powered report generation platform that transforms user requirements into structured, professional reports with export and analytics capabilities.",
    category: "Tracking System",
    categoryLabel: "tracking",
    featured: true,
    image: Expense,
    icon: <BrainCircuit size={30} />,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Flask",
      "FastApi",
      "LLM",
    ],
    github: "#",
    demo: "https://expensetrackerfrontend-nine.vercel.app/",
  },

      {
    id: 16,
    title: "Masjid Nearby Application",
    description:
      "AI-powered report generation platform that transforms user requirements into structured, professional reports with export and analytics capabilities.",
    category: "Nearby System",
    categoryLabel: "nearby",
    featured: true,
    image: Masjid,
    icon: <BrainCircuit size={30} />,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Flask",
      "LLM"
    ],
    github: "#",
    demo: "https://masjidnearbyfrontend.vercel.app/",
  },

   {
    id: 17,
    title: "Inventory Management System",
    description:
      "AI-powered report generation platform that transforms user requirements into structured, professional reports with export and analytics capabilities.",
    category: "Management System",
    categoryLabel: "management",
    featured: true,
    image: Inventory,
    icon: <BrainCircuit size={30} />,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "FastApi",
      "LLM"
    ],
    github: "#",
    demo: "https://invfrontend.vercel.app/",
  },
];

// =====================================================
// PROJECT CARD
// =====================================================

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
            {project.categoryLabel}
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
          <span key={tech}>{tech}</span>
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
          target="_blank"
          rel="noopener noreferrer"
          className="project-link secondary"
        >
          <Code2 size={16} />
          <span>GitHub</span>
        </a>
      </div>
    </article>
  );
}

// =====================================================
// PAGINATION
// =====================================================

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 4) {
      pages.push("...");
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(
      totalPages - 1,
      currentPage + 1
    );

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 3) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="projects-pagination">
      <button
        type="button"
        className="pagination-arrow"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        <ChevronLeft size={19} />
      </button>

      <div className="pagination-pages">
        {getPageNumbers().map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`dots-${index}`}
                className="pagination-dots"
              >
                •••
              </span>
            );
          }

          return (
            <button
              type="button"
              key={page}
              className={`pagination-number ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {String(page).padStart(2, "0")}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="pagination-arrow"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        <ChevronRight size={19} />
      </button>
    </div>
  );
}

// =====================================================
// MAIN PROJECTS COMPONENT
// =====================================================

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Projects per page
  const projectsPerPage = 6;

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  // Total pages
  const totalPages = Math.ceil(
    filteredProjects.length / projectsPerPage
  );

  // Current page projects
  const startIndex =
    (currentPage - 1) * projectsPerPage;

  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  // Safety: if current page becomes invalid
  useEffect(() => {
    if (
      totalPages > 0 &&
      currentPage > totalPages
    ) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // Scroll projects section to top when pagination changes
  const handlePageChange = (page) => {
    setCurrentPage(page);

    setTimeout(() => {
      const section =
        document.getElementById("projects");

      if (section) {
        const top =
          section.getBoundingClientRect().top +
          window.scrollY -
          80;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* Heading */}
        <div className="projects-heading">

          <div className="section-label">
            <span className="label-line" />
            <span>OUR PROJECTS</span>
            <span className="label-line" />
          </div>

          <h2>
            Building Digital{" "}
            <span>Experiences That Matter.</span>
          </h2>

          <p>
            From AI-powered applications to scalable backend
            systems, real-time tracking platforms and modern
            business applications, we build technology designed
            to solve real-world problems.
          </p>
        </div>

        {/* Filters */}
        <div className="projects-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="projects-grid">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            <Code2 size={40} />

            <h3>No projects found</h3>

            <p>
              Projects for this category will be added soon.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="projects-bottom">

          <div>
            <span>Have a project in mind?</span>

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

