"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Code2,
  Cpu,
  Linkedin,
  Link2,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type Service = {
  title: string;
  description: string;
  icon: "briefcase" | "code" | "cpu" | "link";
};

type Project = {
  id: string;
  title: string;
  role: string;
  client?: string;
  description: string;
  responsibilities: string[];
  tech: string[];
  image: string;
  fullContent: {
    problem: string;
    solution: string;
    impact: string[];
  };
};

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    title: "Salesforce Consulting",
    description:
      "Expert guidance across Sales Cloud, Service Cloud, and enterprise CRM architecture.",
    icon: "briefcase",
  },
  {
    title: "Custom Development",
    description:
      "Scalable Apex, LWC, and Aura implementation designed for long-term maintainability.",
    icon: "code",
  },
  {
    title: "AI & Agentforce",
    description:
      "Agentforce dataset and AI automation strategy tailored to Salesforce workflows.",
    icon: "cpu",
  },
  {
    title: "System Integration",
    description:
      "Secure REST/SOAP integrations with ERPs, payment systems, and external platforms.",
    icon: "link",
  },
];

const PROJECTS: Project[] = [
  {
    id: "agentforce",
    title: "Agentforce AI Platform",
    role: "Delivery Manager & LLM Data Curator",
    client: "Salesforce (via Turing)",
    description:
      "Training Salesforce's next-gen intelligent assistant using generative AI and structured datasets.",
    responsibilities: [
      "Led a 33-member team for prompt creation and quality assurance.",
      "Optimized technical prompts for Apex, LWC, and SOQL workflows.",
      "Designed metadata-rich notebook structures for model training.",
    ],
    tech: ["GenAI", "LLM", "Apex", "LWC", "Agentforce"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    fullContent: {
      problem:
        "Salesforce needed a high-fidelity dataset to train Agentforce for complex Salesforce technical queries. General datasets lacked deep, reliable platform context.",
      solution:
        "I led a structured curation program with a 33-engineer team, defining evaluation frameworks and metadata patterns to improve context-aware code generation accuracy.",
      impact: [
        "Delivered 10,000+ high-quality annotated prompts and responses.",
        "Improved technical code-generation accuracy by 24% in internal testing.",
        "Transitioned the project to long-term delivery with documented standards.",
      ],
    },
  },
  {
    id: "ecommerce",
    title: "Headless E-Commerce",
    role: "Team Lead & Salesforce Developer",
    description:
      "A Salesforce-backed commerce platform with dynamic UI controls and global payment integrations.",
    responsibilities: [
      "Designed object models for admin-controlled page composition.",
      "Integrated PayPal and Authorize.net for international payments.",
      "Implemented tax and shipping engines for multi-region operations.",
    ],
    tech: ["Visualforce", "Apex", "PayPal API", "Force.com"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200",
    fullContent: {
      problem:
        "The retailer required developer support for every storefront change and needed consistent support for multiple payment providers.",
      solution:
        "I built a headless architecture where UI behavior was driven from Salesforce records and metadata, plus a modular payment integration layer in Apex.",
      impact: [
        "Reduced marketing UI update time from 5 days to 20 minutes.",
        "Supported over $2M in transaction volume in the first quarter post launch.",
        "Delivered 99.9% uptime during seasonal traffic peaks.",
      ],
    },
  },
  {
    id: "quotation",
    title: "Construction Quotation Engine",
    role: "Salesforce Developer",
    description:
      "Converted manual quote calculations into a Lightning-based, high-accuracy quoting tool.",
    responsibilities: [
      "Built dynamic checkbox grids with Aura components.",
      "Developed calculation engines for material and labor pricing.",
      "Managed CI/CD workflows with Bamboo and Bitbucket.",
    ],
    tech: ["Aura", "SOQL", "Bamboo", "Record Triggered Flows"],
    image:
      "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=1200",
    fullContent: {
      problem:
        "Sales teams used manual spreadsheets that caused pricing errors and delayed quote turnaround.",
      solution:
        "I built a Salesforce quotation engine with real-time material pricing logic and automated PDF generation for client-ready documents.",
      impact: [
        "Cut quote generation time from 3 hours to 10 minutes.",
        "Eliminated major pricing errors and improved margin consistency.",
        "Increased sales team adoption through a cleaner, faster UI.",
      ],
    },
  },
];

const EXPERIENCES: Experience[] = [
  {
    company: "Turing",
    role: "LLM Data Curator / Delivery Manager",
    period: "Dec 2024 - Present",
    description:
      "Leading AGI-oriented Salesforce datasets and quality systems for enterprise-grade model outputs.",
  },
  {
    company: "Upwork Inc.",
    role: "Salesforce Developer / Consultant",
    period: "Jan 2023 - Present",
    description:
      "Delivering consulting and development engagements for global clients across multiple industries.",
  },
  {
    company: "Tata Consultancy Services",
    role: "Salesforce Developer",
    period: "Nov 2021 - Jan 2023",
    description:
      "Built and maintained large-scale Salesforce solutions for enterprise transformation programs.",
  },
  {
    company: "MV Clouds Private Limited",
    role: "Salesforce Developer",
    period: "Aug 2018 - Nov 2021",
    description:
      "Focused on cloud delivery, custom platform development, and client-side implementation support.",
  },
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 z-0 site-bg-vignette" />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-80 site-bg-grid" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 h-[860px] w-[860px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[200px]" />
        <div className="absolute bottom-0 right-0 h-[700px] w-[700px] rounded-full bg-blue-600/20 blur-[200px]" />
      </div>

      <div className="relative z-10">
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 px-6 py-5 backdrop-blur-xl md:px-20">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-wide md:text-xl">
            Akshay Chauhan
          </a>
          <div className="hidden gap-10 text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/20 px-4 py-2 md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-b border-white/10 bg-slate-900/95 px-6 pb-6 pt-3 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3 text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg border border-white/10 px-4 py-3 hover:border-cyan-400/50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <section className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-7xl"
        >
          Scale Your Business Through
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Salesforce Development
          </span>
        </motion.h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
          Senior Salesforce engineer focused on Agentforce, Apex architecture, and
          enterprise-grade LWC systems. I help teams deliver faster, cleaner, and
          more reliable CRM outcomes.
        </p>

        <div className="mt-10 flex flex-wrap gap-6">
          <a
            href="#projects"
            className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/20 transition-transform duration-300 hover:scale-105"
          >
            Explore Case Studies
          </a>
          <a
            href="#contact"
            className="rounded-2xl border border-white/20 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:border-cyan-300 hover:text-cyan-200"
          >
            Start Your Project <ArrowRight className="ml-2 inline" size={18} />
          </a>
        </div>

        <div className="mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            { metric: "8+ Years", label: "Salesforce Engineering" },
            { metric: "33 Engineers", label: "Delivery Leadership" },
            { metric: "Enterprise Scale", label: "Architecture & Integrations" },
          ].map((item) => (
            <div key={item.metric} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-semibold">{item.metric}</p>
              <p className="mt-1 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="site-section-glow border-t border-white/10 px-6 py-24 md:px-20">
        <h2 className="mb-16 text-4xl font-bold md:text-6xl">Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                {service.icon === "briefcase" && <Briefcase size={22} />}
                {service.icon === "code" && <Code2 size={22} />}
                {service.icon === "cpu" && <Cpu size={22} />}
                {service.icon === "link" && <Link2 size={22} />}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="leading-relaxed text-slate-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="site-section-glow border-t border-white/10 bg-slate-950 px-6 py-24 md:px-20">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold md:text-6xl">Case Studies</h2>
            <p className="mt-4 text-lg text-slate-300">
              Salesforce projects with measurable delivery, reliability, and adoption outcomes.
            </p>
          </div>
          <a
            href="https://linkedin.com/in/akshay-chauhan-b98455129/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-300 hover:text-cyan-200"
          >
            View LinkedIn Activity
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition hover:border-cyan-400/40"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-cyan-300">{project.role}</p>
                {project.client && <p className="text-sm text-slate-400">{project.client}</p>}
                <p className="mt-4 text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 w-full rounded-xl border border-white/15 px-4 py-3 font-semibold transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  View Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="site-section-glow border-t border-white/10 bg-slate-950 px-6 py-24 md:px-20">
        <h2 className="mb-12 text-4xl font-bold md:text-6xl">Experience</h2>
        <div className="grid gap-5">
          {EXPERIENCES.map((exp) => (
            <div key={`${exp.company}-${exp.period}`} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.company}</h3>
                  <p className="text-slate-300">{exp.role}</p>
                </div>
                <p className="text-sm font-semibold text-cyan-300">{exp.period}</p>
              </div>
              <p className="mt-4 leading-relaxed text-slate-300">{exp.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
                  Enterprise Architecture
                </span>
                <span className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
                  Team Leadership
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="site-section-glow border-t border-white/10 px-6 py-24 md:px-20">
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 md:p-12">
          <h2 className="text-4xl font-bold md:text-5xl">
            Ready to elevate your Salesforce platform?
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
            Available for global remote consulting, architecture reviews, modernization,
            and end-to-end Salesforce development.
          </p>

          <div className="mt-8 flex flex-col gap-4 text-slate-200 md:flex-row md:items-center md:gap-8">
            <a href="mailto:akshaychauhan.ac4@gmail.com" className="flex items-center gap-2 hover:text-cyan-200">
              <Mail size={18} /> akshaychauhan.ac4@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/akshay-chauhan-b98455129/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-200"
            >
              <Linkedin size={18} /> LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Akshay Chauhan Consulting. All rights reserved.
      </footer>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <button
            aria-label="Close modal"
            className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-950">
            <div className="relative h-56 md:h-72">
              <img src={selectedProject.image} alt={selectedProject.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 rounded-full border border-white/20 bg-slate-900/60 p-2"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-semibold text-cyan-300">Case Study</p>
                <h3 className="text-3xl font-bold md:text-4xl">{selectedProject.title}</h3>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className="font-semibold text-slate-300">{selectedProject.role}</p>
              {selectedProject.client && <p className="text-slate-400">{selectedProject.client}</p>}

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Challenge</h4>
                    <p className="mt-2 leading-relaxed text-slate-300">{selectedProject.fullContent.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Approach</h4>
                    <p className="mt-2 leading-relaxed text-slate-300">{selectedProject.fullContent.solution}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Impact</h4>
                  <ul className="mt-4 space-y-3">
                    {selectedProject.fullContent.impact.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span key={`modal-${selectedProject.id}-${tech}`} className="rounded-lg bg-cyan-500/15 px-3 py-1 text-xs text-cyan-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
