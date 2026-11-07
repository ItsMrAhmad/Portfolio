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
  Headphones,
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
  role: "Founder & CEO at Techsist Labs | Full Stack Developer",
  company: "Techsist Labs",
  companyLocation: "Lahore, Pakistan",
  companyUrl: "https://techsistlabs.com",
  tagline:
    "Founder & CEO of Techsist Labs (Lahore, Pakistan) & Full Stack Developer engineering scalable, high-performance web products and cloud solutions.",
  location: "Lahore, Pakistan",
  timezone: "PKT (GMT+5)",
  email: "me.ahmadasghar@gmail.com",
  phone: "+92 324 9387047",
  github: "https://github.com/ItsMrAhmad",
  linkedin: "https://www.linkedin.com/in/muhammad-ahmad025/",
  website: "https://its-mr-ahmad.vercel.app",
  about:
    "Founder & CEO of Techsist Labs, based in Lahore, Pakistan. Full Stack Developer and BSCS graduate from Lahore Garrison University with extensive experience building production-grade web applications, responsive user interfaces, modular REST APIs, and resilient database architectures. Focused on delivering high-impact digital solutions that combine modern engineering standards with exceptional user experiences.",
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
    role: "Founder & CEO",
    company: "Techsist Labs",
    location: "Lahore, Pakistan",
    url: "https://techsistlabs.com",
    period: "May 2026 – Present",
    type: "Leadership & Engineering",
    description:
      "Directing technical operations and digital product development. Architecting high-speed Next.js and full-stack web applications, leading international client solutions, and overseeing cloud hosting, AI automations, and modern web architectures."
  },
  {
    role: "Customer Services Representative & Developer",
    company: "SMP Solutions Inc",
    location: "Remote",
    url: "https://smpsolutionsinc.com/",
    period: "2023 – 2026",
    type: "Support & Development",
    description:
      "Managed customer support and client communications while developing technical web solutions, internal operational tools, and automated customer service workflows for SMP Solutions Inc."
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
    id: "techsist",
    name: "Techsist Labs",
    tagline: "Digital Studio & Technology Firm",
    badge: "Featured Digital Studio",
    roleBadge: "Founder & CEO",
    description:
      "Full-service digital studio based in Lahore, Pakistan. Engineering bespoke web applications, high-performance Next.js architectures, AI automations, and scalable cloud solutions for global clients.",
    tech: ["Next.js", "React", "Tailwind CSS", "Cloudflare", "AWS", "AI Automations", "UI/UX"],
    status: "Live",
    live: "https://techsistlabs.com",
    metrics: [
      { label: "Leadership", value: "Founder & CEO" },
      { label: "Core Stack", value: "Next.js · AWS · Cloudflare" },
      { label: "Client Base", value: "Global Operations" }
    ],
    features: [
      "Bespoke High-Performance Web Applications",
      "Next.js App Router & Cloudflare Edge Deployment",
      "Custom AI Workflow & Cloud Integrations",
      "Executive Technical Direction & Architecture"
    ]
  },
  {
    id: "socialsilico",
    name: "SocialSilico",
    tagline: "Social Media Manager & Automation Suite",
    badge: "SaaS Platform",
    domain: "socialsilico.pages.dev",
    customDomain: "socialsilico.com",
    description:
      "All-in-one social media management platform to schedule, publish, and analyze content across Twitter/X, Facebook, Instagram, and LinkedIn with unified metrics and multi-account workflows.",
    tech: ["React", "Node.js", "Express.js", "Cloudflare Pages", "REST APIs", "Analytics"],
    status: "Live",
    live: "https://socialsilico.pages.dev/",
    accent: "saas"
  },
  {
    id: "dotmatic",
    name: "DotMatic Printing & Packaging",
    tagline: "Custom Printing & Packaging Solutions",
    badge: "Manufacturing & Commerce",
    domain: "dotmaticprinter.com",
    description:
      "Commercial printing and custom packaging digital platform featuring corrugated mailer boxes, luxury rigid packaging, custom merchandise, dynamic quoting, and direct factory workflows.",
    tech: ["Full Stack", "Responsive UI/UX", "Product Catalog", "Workflow Systems"],
    status: "Live",
    live: "https://dotmaticprinter.com",
    accent: "commerce"
  },
  {
    id: "virtualstack",
    name: "VirtualStack",
    tagline: "B2B Outsourcing, Support & Infrastructure",
    badge: "Enterprise Operations",
    domain: "virtualstack.us",
    description:
      "Enterprise customer care and back-office digital platform operating 24/7/365 with 200+ workstation capacity, high-reliability SLA tracking, and digital delivery workflows.",
    tech: ["Full Stack", "Enterprise Systems", "Operations Platform", "UI/UX"],
    status: "Live",
    live: "https://virtualstack.us",
    accent: "enterprise"
  }
];

const stats = [
  { value: "Full Stack", label: "Core Specialization" },
  { value: "Founder & CEO", label: "Techsist Labs" },
  { value: "BSCS", label: "Computer Science" },
  { value: "3+ Years", label: "Professional Exp" }
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
        subtext: "Best for direct replies & project inquiries"
      },
      {
        label: "LinkedIn",
        value: "in/muhammad-ahmad025",
        href: profile.linkedin,
        icon: Linkedin,
        subtext: "Connect professionally"
      },
      {
        label: "GitHub",
        value: "ItsMrAhmad",
        href: profile.github,
        icon: Github,
        subtext: "Code repositories & work"
      },
      {
        label: "Phone / WhatsApp",
        value: profile.phone,
        href: "tel:+923249387047",
        icon: Phone,
        subtext: "Call or WhatsApp message"
      },
      {
        label: "Company",
        value: "techsistlabs.com",
        href: profile.companyUrl,
        icon: Globe,
        subtext: "Techsist Labs (Lahore)"
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

      const contentType = response.headers.get("content-type") || "";
      let result = null;

      if (contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();
        if (!response.ok) {
          throw new Error("API service returned an unexpected response. Please reach out via direct email below.");
        }
        result = { success: true, message: "Message sent successfully!" };
      }

      if (!response.ok || (result && result.success === false)) {
        throw new Error(result?.message || "Message could not be sent.");
      }

      setFormState({ name: "", email: "", message: "" });
      setFormStatus({
        type: "success",
        message: result?.message || "Message sent successfully! I will get back to you shortly."
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
            className="icon-button header-social-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub ItsMrAhmad"
            title="GitHub: ItsMrAhmad"
          >
            <Github size={17} />
          </a>
          <a
            className="icon-button header-social-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn: muhammad-ahmad025"
          >
            <Linkedin size={17} />
          </a>
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
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setMenuOpen((currentValue) => !currentValue)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero-section section-pad" id="home">
          <div className="hero-copy">
            <div className="hero-badge-wrap">
              <span className="eyebrow">
                <MapPin size={14} />
                {profile.location}
              </span>
              <span className="timezone-tag">
                <Radio size={12} className="live-dot-icon" />
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
                <Rocket size={17} />
                Explore Projects
              </a>
              <a className="button button-secondary" href="#contact">
                <Send size={17} />
                Contact Me
              </a>
              <a
                className="button button-outline"
                href={profile.companyUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Building2 size={17} />
                Techsist Labs
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="hero-social-strip">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                title="LinkedIn Profile"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                title="GitHub: ItsMrAhmad"
              >
                <Github size={15} />
                <span>GitHub (ItsMrAhmad)</span>
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
              <img src="/muhammad-ahmad-profile.jpg" alt="Muhammad Ahmad - Founder & CEO of Techsist Labs" />
              <div className="portrait-backdrop-glow" />
            </div>
            <div className="availability-pill">
              <span className="pulsing-dot" />
              <span>Available for high-impact projects</span>
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
                  <Globe size={18} className="highlight-icon" />
                  <div>
                    <h4>Global Remote Operations</h4>
                    <p>
                      Collaborating seamlessly with clients and cross-functional teams across Australia,
                      North America, the Middle East, and Asia.
                    </p>
                  </div>
                </div>
                <div className="highlight-item">
                  <Sparkles size={18} className="highlight-icon" />
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
                <Building2 size={22} className="exec-icon" />
                <div>
                  <h3>Techsist Labs</h3>
                  <span className="exec-badge">Founder & CEO</span>
                </div>
              </div>
              <p className="exec-text">
                Serving as Founder & CEO of Techsist Labs in Lahore, Pakistan.
                Leading digital solutions, Next.js engineering, client roadmaps, and full-stack software
                delivery.
              </p>
              <div className="exec-footer">
                <span className="exec-time">May 2026 – Present · Lahore, Pakistan</span>
                <a
                  href={profile.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="exec-link"
                >
                  Visit techsistlabs.com <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & BACKGROUND SECTION */}
        <section className="section-pad content-section" id="experience">
          <div className="section-heading wide-heading">
            <span className="section-kicker">Career Timeline</span>
            <h2>Experience & Work History</h2>
          </div>

          <div className="experience-timeline">
            {experienceList.map((exp, index) => (
              <article className="experience-card" key={index}>
                <div className="exp-meta">
                  <span className="exp-type-tag">{exp.type}</span>
                  <span className="exp-period">
                    <Calendar size={13} />
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
                        {exp.company} <ExternalLink size={13} />
                      </a>
                    ) : (
                      <span className="exp-company-static">{exp.company}</span>
                    )}
                  </div>
                  <div className="exp-location">
                    <MapPin size={12} />
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
              <Terminal size={16} />
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
                      <Icon size={18} />
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>
                        <CheckCircle2 size={13} className="skill-check" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* PROJECTS SECTION - MODERN BENTO GRID */}
        <section className="section-pad content-section" id="projects">
          <div className="section-heading wide-heading">
            <span className="section-kicker">Portfolio & Showcase</span>
            <h2>Selected projects & production deployments.</h2>
            <p className="section-subtext">
              A curated selection of live client projects, digital platforms, full-stack web applications,
              and enterprise systems.
            </p>
          </div>

          <div className="bento-grid">
            {/* FEATURED 2-COLUMN FLAGSHIP CARD: TECHSIST LABS */}
            <article className="bento-card bento-card-featured">
              <div className="bento-card-topbar">
                <div className="bento-pill-group">
                  <span className="status-badge status-live">
                    <span className="pulsing-dot-small" />
                    Live Digital Studio
                  </span>
                  <span className="bento-highlight-pill">{projects[0].roleBadge}</span>
                </div>
                <a
                  href={projects[0].live}
                  target="_blank"
                  rel="noreferrer"
                  className="bento-top-link"
                  title="Visit techsistlabs.com"
                >
                  <span>techsistlabs.com</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="bento-featured-body">
                <div className="bento-featured-main">
                  <div className="bento-title-row">
                    <div className="bento-icon-wrapper">
                      <Building2 size={24} />
                    </div>
                    <div>
                      <h3>{projects[0].name}</h3>
                      <p className="bento-tagline">{projects[0].tagline}</p>
                    </div>
                  </div>

                  <p className="bento-description">{projects[0].description}</p>

                  <div className="bento-metrics-strip">
                    {projects[0].metrics.map((m) => (
                      <div key={m.label} className="bento-metric-item">
                        <span className="bento-metric-val">{m.value}</span>
                        <span className="bento-metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="tech-list bento-tech-list">
                    {projects[0].tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  <div className="bento-actions">
                    <a
                      href={projects[0].live}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-primary bento-action-btn"
                    >
                      <Globe size={16} />
                      Visit techsistlabs.com
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="bento-featured-aside">
                  <div className="bento-mockup-window">
                    <div className="mockup-header">
                      <span className="preview-dot red" />
                      <span className="preview-dot yellow" />
                      <span className="preview-dot green" />
                      <span className="mockup-domain">techsistlabs.com</span>
                    </div>
                    <div className="mockup-body">
                      <span className="mockup-kicker">ENGINEERING CAPABILITIES</span>
                      <ul className="mockup-feature-list">
                        {projects[0].features.map((feature, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={13} className="mockup-check-icon" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mockup-status-footer">
                        <span className="mockup-status-dot" />
                        <span>Production · SSL Secured · Edge Routed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* THREE ASYMMETRIC TILES: SOCIALSILICO, DOTMATIC, VIRTUALSTACK */}
            <div className="bento-subgrid">
              {projects.slice(1).map((project) => (
                <article
                  key={project.id}
                  className={`bento-card bento-subcard bento-${project.accent}`}
                >
                  <div className="bento-card-topbar">
                    <span className="status-badge status-live">
                      <span className="pulsing-dot-small" />
                      Live Application
                    </span>
                    <span className="bento-badge-accent">{project.badge}</span>
                  </div>

                  <div className="bento-subcard-body">
                    <div className="bento-subcard-header">
                      <h3>{project.name}</h3>
                      <p className="bento-subcard-tagline">{project.tagline}</p>
                      {project.domain ? (
                        <div className="bento-domain-bar">
                          <Globe size={12} />
                          <code>{project.domain}</code>
                          {project.customDomain ? (
                            <span className="custom-domain-chip">{project.customDomain}</span>
                          ) : null}
                        </div>
                      ) : null}
                    </div>

                    <p className="bento-subcard-desc">{project.description}</p>

                    <div className="tech-list bento-tech-list">
                      {project.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bento-subcard-footer">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-outline bento-tile-btn"
                    >
                      <ExternalLink size={14} />
                      Launch Platform
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
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
                      <Icon size={18} />
                    </div>
                    <div className="contact-card-details">
                      <strong>{link.label}</strong>
                      <span className="contact-card-value">{link.value}</span>
                      {link.subtext ? (
                        <small className="contact-card-subtext">{link.subtext}</small>
                      ) : null}
                    </div>
                    <ArrowUpRight size={15} className="contact-arrow" />
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
                  rows="4"
                  required
                />
              </label>

              <button
                className="button button-primary form-button"
                type="submit"
                disabled={formStatus.type === "loading"}
              >
                <Send size={16} />
                {formStatus.type === "loading" ? "Sending..." : "Send Message"}
              </button>

              {formStatus.message ? (
                <div className={`form-status ${formStatus.type}`} role="status">
                  <CheckCircle2 size={15} />
                  <span>{formStatus.message}</span>
                  {formStatus.type === "error" ? (
                    <div style={{ marginTop: "8px" }}>
                      <a
                        href={`mailto:${profile.email}?subject=${encodeURIComponent("Portfolio Inquiry from " + (formState.name || "Visitor"))}&body=${encodeURIComponent(formState.message || "")}`}
                        className="button button-secondary"
                        style={{ fontSize: "0.82rem", padding: "6px 14px" }}
                      >
                        <Mail size={14} /> Send via Direct Email
                      </a>
                    </div>
                  ) : null}
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
          <span>Full Stack Developer</span>
        </div>
        <div className="footer-right">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub (ItsMrAhmad)
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.companyUrl} target="_blank" rel="noreferrer">
            techsistlabs.com
          </a>
        </div>
      </footer>
    </div>
  );
}
