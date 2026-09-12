import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Calendar,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Palette,
  Phone,
  Radio,
  Rocket,
  Send,
  Server,
  Sparkles,
  Sun,
  Terminal,
  X
} from "lucide-react";

const profile = {
  name: "Muhammad Ahmad",
  role: "Full Stack Developer & Managing Director",
  company: "Techsist Labs",
  companyLocation: "Brisbane, Australia",
  companyUrl: "https://techsistlabs.com",
  tagline:
    "Managing Director (Remote) at Techsist Labs & Full Stack Developer engineering scalable, high-performance web products and cloud solutions.",
  location: "Lahore, Pakistan · Brisbane, Australia (Remote)",
  timezone: "PKT (GMT+5) · AEST (GMT+10)",
  email: "me.ahmadasghar@gmail.com",
  secondaryEmail: "me@ahmadasghar.com",
  phone: "+92 324 9387047",
  github: "https://github.com/ItsMrAhmad",
  linkedin: "https://www.linkedin.com/in/muhammad-ahmad025/",
  website: "https://its-mr-ahmad.vercel.app",
  about:
    "Full Stack Developer and Managing Director at Techsist Labs (Brisbane, Australia), working remotely across global timezones. BSCS graduate from Lahore Garrison University with extensive experience building production-grade web applications, responsive user interfaces, modular REST APIs, and resilient database architectures. Focused on delivering high-impact digital solutions that combine modern engineering standards with exceptional user experiences.",
  education: "Bachelor of Science in Computer Science (BSCS) — Lahore Garrison University"
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

const experienceList = [
  {
    role: "Managing Director (Remote) & Full Stack Lead",
    company: "Techsist Labs",
    location: "Brisbane, Australia",
    url: "https://techsistlabs.com",
    period: "May 2026 – Present",
    type: "Leadership & Engineering",
    description:
      "Directing technical operations and digital product development. Architecting high-speed Next.js and full-stack web applications, leading international client solutions, and overseeing cloud hosting, AI automations, and modern web architectures."
  },
  {
    role: "Full Stack Web Developer (Freelance)",
    company: "Independent Client Deliveries",
    location: "Remote / International",
    url: "",
    period: "2024 – Present",
    type: "Freelance",
    description:
      "Built custom full-stack solutions using the MERN stack, Next.js, and modern CSS/Tailwind frameworks. Developed REST APIs, third-party service integrations, and customized dashboard architectures."
  },
  {
    role: "BS Computer Science (16 Years of Education)",
    company: "Lahore Garrison University",
    location: "Lahore, Pakistan",
    url: "",
    period: "Graduated",
    type: "Education",
    description:
      "Comprehensive academic foundation in software engineering, algorithms, database management systems, web technologies, and computational architecture."
  }
];

// Complete tech stack badges reflecting the uploaded image + modern tech ecosystem
const techStackBadges = [
  { name: "C#", category: "lang", bg: "#239120", color: "#fff" },
  { name: "C++", category: "lang", bg: "#00599C", color: "#fff" },
  { name: "HTML5", category: "lang", bg: "#E34F26", color: "#fff" },
  { name: "JavaScript", category: "lang", bg: "#F7DF1E", color: "#000" },
  { name: "Python", category: "lang", bg: "#3776AB", color: "#fff" },
  { name: "TypeScript", category: "lang", bg: "#3178C6", color: "#fff" },
  { name: "AWS", category: "cloud", bg: "#FF9900", color: "#000" },
  { name: "Cloudflare", category: "cloud", bg: "#F38020", color: "#fff" },
  { name: "Firebase", category: "cloud", bg: "#039BE5", color: "#fff" },
  { name: "Vercel", category: "devops", bg: "#000000", color: "#fff" },
  { name: "Render", category: "devops", bg: "#46E3B7", color: "#000" },
  { name: "Google Cloud", category: "cloud", bg: "#4285F4", color: "#fff" },
  { name: "Netlify", category: "devops", bg: "#00C7B7", color: "#000" },
  { name: ".NET", category: "lang", bg: "#512BD4", color: "#fff" },
  { name: "Next.js", category: "front", bg: "#111111", color: "#fff" },
  { name: "Node.js", category: "back", bg: "#339933", color: "#fff" },
  { name: "React", category: "front", bg: "#20232A", color: "#61DAFB" },
  { name: "React Native", category: "front", bg: "#20232A", color: "#61DAFB" },
  { name: "Framer", category: "front", bg: "#0055FF", color: "#fff" },
  { name: "Canva", category: "design", bg: "#00C4CC", color: "#fff" },
  { name: "Adobe Photoshop", category: "design", bg: "#31A8FF", color: "#fff" },
  { name: "MongoDB", category: "back", bg: "#47A248", color: "#fff" },
  { name: "Express.js", category: "back", bg: "#303030", color: "#fff" },
  { name: "Tailwind CSS", category: "front", bg: "#06B6D4", color: "#fff" },
  { name: "Git & GitHub", category: "devops", bg: "#F05032", color: "#fff" }
];

const skillGroups = [
  {
    title: "Core Languages & Runtimes",
    icon: Terminal,
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C#", "C++", ".NET", "HTML5 & CSS3"]
  },
  {
    title: "Frontend & Mobile",
    icon: Code2,
    skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Framer", "Responsive UI/UX", "Vite"]
  },
  {
    title: "Backend & Cloud Services",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "AWS", "Google Cloud", "Firebase", "MongoDB"]
  },
  {
    title: "DevOps, Platforms & Design",
    icon: Cloud,
    skills: ["Vercel", "Cloudflare", "Render", "Netlify", "Git & GitHub", "Canva", "Adobe Photoshop"]
  }
];

const projects = [
  {
    name: "Techsist Labs",
    tagline: "Digital Studio & Technology Firm",
    description:
      "Full-service digital studio based in Brisbane, Australia. Engineered bespoke web applications, Next.js architecture, AI automations, and scalable cloud solutions for high-growth global clients.",
    tech: ["Next.js", "React", "Tailwind CSS", "Cloudflare", "AWS", "UI/UX"],
    status: "Live",
    highlight: "Featured Agency",
    live: "https://techsistlabs.com",
    github: ""
  },
  {
    name: "Virtual Stack",
    tagline: "Enterprise Outsourced Care & Operations",
    description:
      "Enterprise customer care and back-office digital platform operating with 200+ workstation capacity 24/7/365, delivering high-reliability operational solutions.",
    tech: ["Full Stack", "Web Development", "UI/UX", "Workflow Systems"],
    status: "Live",
    highlight: "Enterprise Client",
    live: "https://virtualstack.us",
    github: ""
  },
  {
    name: "Crypto Class",
    tagline: "Crypto Education & Learning Platform",
    description:
      "Interactive crypto learning platform crafted with clean UI and structured lessons for mastering cryptocurrency fundamentals and blockchain concepts.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    status: "Live",
    highlight: "EdTech",
    live: "https://crypto-class.vercel.app/",
    github: "https://github.com/ItsMrAhmad/CryptoClass"
  },
  {
    name: "Habit Tracker",
    tagline: "Daily Routine & Consistency Platform",
    description:
      "A goal-driven productivity application where users monitor daily habits, streak metrics, and maintain personal consistency over time.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    status: "Live",
    highlight: "Productivity",
    live: "https://habit-tracker-kohl-six.vercel.app/",
    github: "https://github.com/ItsMrAhmad/HabitTracker"
  },
  {
    name: "NodeMailer Email API",
    tagline: "Email Dispatch Microservice",
    description:
      "Secure and lightweight email dispatch microservice built with Node.js, Express, and Nodemailer with CORS authorization and API key safeguards.",
    tech: ["Node.js", "Express.js", "Nodemailer", "REST API", "Vercel"],
    status: "Live",
    highlight: "Microservice",
    live: "https://node-mailer-email-api.vercel.app",
    github: "https://github.com/ItsMrAhmad/NodeMailer-Email-API"
  },
  {
    name: "Weather Web App",
    tagline: "Live Meteorological Forecast Application",
    description:
      "Responsive weather web application providing real-time conditions, multi-day forecasts, atmospheric pressure, and humidity for any city worldwide.",
    tech: ["React.js", "Weather API", "CSS Grid", "Vite"],
    status: "Live",
    highlight: "Weather App",
    live: "https://weather-app-sigma-eosin-84.vercel.app/",
    github: "https://github.com/ItsMrAhmad/WeatherApp"
  },
  {
    name: "FIA Test Preparation",
    tagline: "Competitive Exam Preparation Portal",
    description:
      "Interactive quiz and preparation system with question banks, time-based mock exams, and instant score analysis for competitive test candidates.",
    tech: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    status: "Live",
    highlight: "Exam Portal",
    live: "https://fiabyahmad.vercel.app",
    github: "https://github.com/ItsMrAhmad/Fia-test-preparation"
  },
  {
    name: "SocialBee",
    tagline: "Social Media Workflow Suite",
    description:
      "Comprehensive multi-account social media management platform designed for post scheduling, audience analytics, and brand workflow automation.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    status: "In Development",
    highlight: "SaaS Platform",
    live: "",
    github: "https://github.com/ItsMrAhmad/SocialBee"
  }
];

const stats = [
  { value: "MD @ Techsist", label: "Leadership & Dev" },
  { value: "Full Stack", label: "MERN & Next.js" },
  { value: "BSCS", label: "Academic Degree" },
  { value: "PKT / AEST", label: "Global Availability" }
];

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return "dark";
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
      {
        label: "Primary Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
        icon: Mail,
        subtext: "Best for quick replies"
      },
      {
        label: "Domain Email",
        value: profile.secondaryEmail,
        href: `mailto:${profile.secondaryEmail}`,
        icon: Mail,
        subtext: "Direct business inquiries"
      },
      {
        label: "Phone / WhatsApp",
        value: profile.phone,
        href: "tel:+923249387047",
        icon: Phone,
        subtext: "Call or text"
      },
      {
        label: "GitHub",
        value: "github.com/ItsMrAhmad",
        href: profile.github,
        icon: Github,
        subtext: "Open source code & repos"
      },
      {
        label: "LinkedIn",
        value: "muhammad-ahmad025",
        href: profile.linkedin,
        icon: Linkedin,
        subtext: "Connect professionally"
      },
      {
        label: "Company",
        value: "techsistlabs.com",
        href: profile.companyUrl,
        icon: Globe,
        subtext: "Techsist Labs (Brisbane)"
      }
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
        message: "Message sent successfully! I will get back to you shortly."
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error.message || `Something went wrong. Please reach out directly to ${profile.email}`
      });
    }
  }

  return (
    <div className="site-shell">
      {/* Dynamic colorful ambient glow orbs */}
      <div className="ambient-glow ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-2" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-3" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-4" aria-hidden="true" />

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
          <a
            className="header-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </a>
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
        {/* HERO SECTION */}
        <section className="hero-section section-pad" id="home">
          <div className="hero-copy">
            <div className="hero-badge-wrap">
              <span className="eyebrow">
                <MapPin size={15} />
                {profile.location}
              </span>
              <span className="timezone-tag">
                <Radio size={13} className="live-dot-icon" />
                {profile.timezone}
              </span>
            </div>

            <h1>
              Muhammad <span className="text-gradient">Ahmad</span>
            </h1>

            <p className="role-line">
              <span>{profile.role}</span>
            </p>

            <p className="hero-lede">{profile.tagline}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                <Rocket size={18} />
                Explore Projects
              </a>
              <a className="button button-secondary" href="#contact">
                <Send size={18} />
                Contact Me
              </a>
              <a
                className="button button-outline"
                href={profile.companyUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Building2 size={18} />
                Techsist Labs
                <ArrowUpRight size={15} />
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
              <div className="portrait-backdrop-glow" />
            </div>
            <div className="availability-pill">
              <span className="pulsing-dot" />
              <span>Available for high-impact projects & consultations</span>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section-pad content-section" id="about">
          <div className="section-heading">
            <span className="section-kicker">About Me</span>
            <h2>Bridging technical architecture with product execution.</h2>
          </div>
          <div className="two-column">
            <div className="about-narrative">
              <p className="section-copy">{profile.about}</p>
              <div className="about-highlight-box">
                <div className="highlight-item">
                  <Globe size={20} className="highlight-icon" />
                  <div>
                    <h4>Global Remote Operations</h4>
                    <p>
                      Collaborating seamlessly with clients and cross-functional teams across Australia,
                      North America, the Middle East, and Asia.
                    </p>
                  </div>
                </div>
                <div className="highlight-item">
                  <Sparkles size={20} className="highlight-icon" />
                  <div>
                    <h4>End-to-End Delivery</h4>
                    <p>
                      From concept wireframes and Figma designs to cloud architecture, database design,
                      and production monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="executive-card">
              <div className="executive-card-header">
                <Building2 size={24} className="exec-icon" />
                <div>
                  <h3>Techsist Labs</h3>
                  <span className="exec-badge">Current Venture</span>
                </div>
              </div>
              <p className="exec-text">
                Serving as Managing Director (remotely) for Techsist Labs in Brisbane, Australia.
                Leading digital solutions, Next.js engineering, client roadmaps, and full-stack software
                delivery.
              </p>
              <div className="exec-footer">
                <span className="exec-time">May 2026 – Present</span>
                <a
                  href={profile.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="exec-link"
                >
                  Visit techsistlabs.com <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & BACKGROUND SECTION */}
        <section className="section-pad content-section" id="experience">
          <div className="section-heading wide-heading">
            <span className="section-kicker">Career Timeline</span>
            <h2>Experience & Leadership</h2>
          </div>

          <div className="experience-timeline">
            {experienceList.map((exp, index) => (
              <article className="experience-card" key={index}>
                <div className="exp-meta">
                  <span className="exp-type-tag">{exp.type}</span>
                  <span className="exp-period">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>

                <div className="exp-content">
                  <div className="exp-heading-row">
                    <h3>{exp.role}</h3>
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noreferrer"
                        className="exp-company-link"
                      >
                        {exp.company} <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="exp-company-static">{exp.company}</span>
                    )}
                  </div>
                  <div className="exp-location">
                    <MapPin size={13} />
                    {exp.location}
                  </div>
                  <p className="exp-description">{exp.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section-pad content-section" id="skills">
          <div className="section-heading wide-heading">
            <span className="section-kicker">Technical Expertise</span>
            <h2>Modern technology stack & toolset.</h2>
            <p className="section-subtext">
              Comprehensive toolkit spanning frontend frameworks, backend runtimes, cloud platforms,
              and design suites.
            </p>
          </div>

          {/* VISUAL TECH STACK BADGES (from user screenshot) */}
          <div className="tech-badge-showcase">
            <div className="badge-showcase-title">
              <Terminal size={17} />
              <span>Core Tech Stack Badges</span>
            </div>
            <div className="badge-flow-container">
              {techStackBadges.map((badge) => (
                <span
                  key={badge.name}
                  className="tech-pill-badge"
                  style={{
                    backgroundColor: badge.bg,
                    color: badge.color
                  }}
                >
                  {badge.name}
                </span>
              ))}
            </div>
          </div>

          {/* STRUCTURED SKILL CATEGORIES */}
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
                      <li key={skill}>
                        <CheckCircle2 size={14} className="skill-check" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section-pad content-section" id="projects">
          <div className="section-heading wide-heading">
            <span className="section-kicker">Portfolio & Showcase</span>
            <h2>Selected projects & production deployments.</h2>
            <p className="section-subtext">
              A curated selection of live client projects, digital platforms, full-stack web applications,
              and developer microservices.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-preview" aria-hidden="true">
                  <div className="preview-bar">
                    <span className="preview-dot red" />
                    <span className="preview-dot yellow" />
                    <span className="preview-dot green" />
                    <span className="preview-title">{project.name}</span>
                  </div>
                  <div className="preview-content">
                    <span className="preview-tagline">{project.tagline}</span>
                    <div className="preview-status-wrap">
                      {project.status === "Live" ? (
                        <span className="status-badge status-live">
                          <span className="pulsing-dot-small" />
                          Live Application
                        </span>
                      ) : (
                        <span className="status-badge status-dev">
                          {project.status}
                        </span>
                      )}
                      {project.highlight ? (
                        <span className="highlight-pill">{project.highlight}</span>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-main-info">
                    <div className="project-header-row">
                      <h3>{project.name}</h3>
                    </div>
                    <p>{project.description}</p>
                  </div>

                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={`${project.name}-${tech}`}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-button live-button"
                      >
                        <ExternalLink size={16} />
                        Visit Live
                      </a>
                    ) : (
                      <span className="muted-link">Private In-Progress</span>
                    )}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-button github-button"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section-pad contact-section" id="contact">
          <div className="contact-copy">
            <span className="section-kicker">Get In Touch</span>
            <h2>Let’s build something impactful together.</h2>
            <p>
              Whether you need full-stack web engineering, an agency partner at Techsist Labs, or want
              to discuss a custom web application, I’m ready to collaborate.
            </p>

            <div className="contact-list">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="contact-card-item"
                  >
                    <div className="contact-card-icon">
                      <Icon size={19} />
                    </div>
                    <div className="contact-card-details">
                      <strong>{link.label}</strong>
                      <span className="contact-card-value">{link.value}</span>
                      {link.subtext ? (
                        <small className="contact-card-subtext">{link.subtext}</small>
                      ) : null}
                    </div>
                    <ArrowUpRight size={17} className="contact-arrow" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send a Message</h3>
                <p>Fill out the form below and I'll respond within 24 hours.</p>
              </div>

              <label>
                <span>Your Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Morgan"
                  value={formState.name}
                  onChange={updateField}
                  minLength="2"
                  required
                />
              </label>

              <label>
                <span>Your Email Address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formState.email}
                  onChange={updateField}
                  required
                />
              </label>

              <label>
                <span>Project Message / Details</span>
                <textarea
                  name="message"
                  placeholder="Tell me about your project scope, goals, or timeline..."
                  value={formState.message}
                  onChange={updateField}
                  minLength="10"
                  rows="5"
                  required
                />
              </label>

              <button
                className="button button-primary form-button"
                type="submit"
                disabled={formStatus.type === "loading"}
              >
                <Send size={18} />
                {formStatus.type === "loading" ? "Sending..." : "Send Message"}
              </button>

              {formStatus.message ? (
                <div className={`form-status ${formStatus.type}`} role="status">
                  <CheckCircle2 size={16} />
                  <span>{formStatus.message}</span>
                </div>
              ) : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-left">
          <span className="footer-brand">Muhammad Ahmad</span>
          <span className="footer-divider">·</span>
          <span>Full Stack Developer & Managing Director</span>
        </div>
        <div className="footer-right">
          <span>© 2026 Muhammad Ahmad. All rights reserved.</span>
          <a href={profile.companyUrl} target="_blank" rel="noreferrer">
            techsistlabs.com
          </a>
        </div>
      </footer>
    </div>
  );
}
