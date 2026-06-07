import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Send,
  Server,
  Sun,
  X
} from "lucide-react";

const profile = {
  name: "Muhammad Ahmad",
  role: "Full Stack Developer",
  tagline: "Building clean, structured, and scalable web applications.",
  location: "Lahore, Pakistan",
  timezone: "PKT / GMT+5",
  email: "itsmrahmadasghar@gmail.com",
  phone: "+92 324 9387047",
  github: "https://github.com/ItsMrAhmad",
  linkedin: "https://www.linkedin.com/in/muhammad-ahmad025/",
  website: "https://its-mr-ahmad.vercel.app",
  about:
    "BSCS graduate from Lahore Garrison University with a strong focus on full-stack web development. I work across frontend interfaces, backend APIs, and database structures to create practical web products that stay clean as they grow.",
  experience:
    "Intermediate-level developer with freelance experience across a few web projects, focused on full-stack web application development and database management.",
  education: "Bachelor of Computer Science, 16 years of education"
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Wix Studio", "Webflow"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Server Architecture"]
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: ["MongoDB", "Database Management", "Git", "Shopify", "Squareup"]
  },
  {
    title: "Core Strengths",
    icon: Layers3,
    skills: ["Full-stack development", "Structured code", "Scalable features", "Project delivery"]
  }
];

const projects = [
  {
    name: "SocialBee",
    description: "A comprehensive social media management platform.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    status: "Case study",
    live: "",
    github: ""
  },
  {
    name: "Habit Tracker",
    description: "A platform where users track daily habits and maintain consistency.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    status: "Live",
    live: "https://track-your-daily-habits.vercel.app/",
    github: "https://github.com/ItsMrAhmad/HabitTracker"
  },
  {
    name: "Crypto Class",
    description: "A vibe-coded crypto course platform for learning crypto fundamentals.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    status: "Live",
    live: "https://crypto-class.vercel.app/",
    github: "https://github.com/ItsMrAhmad/CryptoClass"
  },
  {
    name: "Weather Web App",
    description: "A simple React.js frontend weather forecast app powered by a weather API.",
    tech: ["React.js", "Weather API", "Frontend"],
    status: "Live",
    live: "https://your-city-forecast.vercel.app/",
    github: "https://github.com/ItsMrAhmad/WeatherApp"
  }
];

const stats = [
  { value: "MERN", label: "Primary Stack" },
  { value: "BSCS", label: "Academic Background" },
  { value: "GMT+5", label: "Working Timezone" }
];

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({ type: "idle", message: "" });

  const contactLinks = useMemo(
    () => [
      { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
      { label: "Phone", value: profile.phone, href: "tel:+923249387047", icon: Phone },
      { label: "GitHub", value: "github.com/ItsMrAhmad", href: profile.github, icon: Github },
      { label: "LinkedIn", value: "muhammad-ahmad025", href: profile.linkedin, icon: Linkedin }
    ],
    []
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle("is-menu-open", menuOpen);
  }, [menuOpen]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  function updateField(event) {
    const { name, value } = event.target;
    setFormState((currentState) => ({ ...currentState, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFormStatus({ type: "loading", message: "Sending message..." });

    try {
      const apiBase = import.meta.env.VITE_API_URL?.replace(/\/$/, "") ?? "";
      const response = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Message could not be sent.");
      }

      setFormState({ name: "", email: "", message: "" });
      setFormStatus({
        type: "success",
        message: "Message sent. I will get back to you soon."
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: error.message || "Something went wrong. Please use email instead."
      });
    }
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-mark" href="#home" aria-label="Muhammad Ahmad home">
          <span>MA</span>
        </a>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setMenuOpen((currentValue) => !currentValue)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section section-pad" id="home">
          <div className="hero-copy">
            <span className="eyebrow">
              <MapPin size={16} />
              {profile.location} · {profile.timezone}
            </span>
            <h1>{profile.name}</h1>
            <p className="role-line">{profile.role}</p>
            <p className="hero-lede">{profile.tagline}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                <Code2 size={18} />
                View Work
              </a>
              <a className="button button-secondary" href="#contact">
                <Send size={18} />
                Contact
              </a>
            </div>

            <div className="stat-strip" aria-label="Professional quick facts">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Portrait of Muhammad Ahmad">
            <div className="portrait-frame">
              <img src="/muhammad-ahmad-profile.png" alt="Muhammad Ahmad wearing a black suit" />
            </div>
            <div className="availability-pill">
              <CheckCircle2 size={17} />
              Available for freelance web projects
            </div>
          </div>
        </section>

        <section className="section-pad content-section" id="about">
          <div className="section-heading">
            <span className="section-kicker">About</span>
            <h2>Focused on practical full-stack systems.</h2>
          </div>
          <div className="two-column">
            <p className="section-copy">{profile.about}</p>
            <div className="timeline-list">
              <div className="timeline-item">
                <BriefcaseBusiness size={20} />
                <div>
                  <h3>Experience</h3>
                  <p>{profile.experience}</p>
                </div>
              </div>
              <div className="timeline-item">
                <GraduationCap size={20} />
                <div>
                  <h3>Education</h3>
                  <p>{profile.education}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad content-section" id="skills">
          <div className="section-heading wide-heading">
            <span className="section-kicker">Skills</span>
            <h2>MERN foundations with modern web tooling.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="skill-card" key={group.title}>
                  <div className="skill-heading">
                    <span className="skill-icon">
                      <Icon size={20} />
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-pad content-section" id="projects">
          <div className="section-heading wide-heading">
            <span className="section-kicker">Projects</span>
            <h2>Selected work built around product utility.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-preview" aria-hidden="true">
                  <div className="preview-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="preview-content">
                    <span>{project.name}</span>
                    <strong>{project.status}</strong>
                  </div>
                </div>
                <div className="project-body">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={`${project.name}-${tech}`}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <ExternalLink size={17} />
                        Live
                      </a>
                    ) : (
                      <span className="muted-link">Private preview</span>
                    )}
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github size={17} />
                        Code
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad contact-section" id="contact">
          <div className="contact-copy">
            <span className="section-kicker">Contact</span>
            <h2>Let’s build something clean and useful.</h2>
            <p>
              I am open to freelance MERN projects, portfolio builds, dashboard work, and practical
              full-stack web applications.
            </p>

            <div className="contact-list">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <Icon size={19} />
                    <span>
                      <strong>{link.label}</strong>
                      {link.value}
                    </span>
                    <ArrowUpRight size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={updateField}
                minLength="2"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={updateField}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={formState.message}
                onChange={updateField}
                minLength="10"
                rows="5"
                required
              />
            </label>
            <button className="button button-primary form-button" type="submit" disabled={formStatus.type === "loading"}>
              <Send size={18} />
              {formStatus.type === "loading" ? "Sending" : "Send Message"}
            </button>
            {formStatus.message ? (
              <p className={`form-status ${formStatus.type}`} role="status">
                {formStatus.message}
              </p>
            ) : null}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Muhammad Ahmad</span>
        <a href={profile.website} target="_blank" rel="noreferrer">
          {profile.website.replace("https://", "")}
        </a>
      </footer>
    </div>
  );
}
