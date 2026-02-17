"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Akshay = {
  title: "Akshay Chauhan | Salesforce Developer",
  description:
    "Salesforce Developer specializing in AI-integrated CRM systems, Apex architecture, LWC engineering, and scalable customer infrastructure. Bridging AI and enterprise CRM to build intelligent, future-ready platforms.",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden">
      {/* Background Mesh Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/20 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-600/20 blur-[200px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-6">
        <div className="text-xl font-bold tracking-wide">Akshay Chauhan</div>
        <div className="hidden md:flex gap-10 text-gray-300">
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#vision" className="hover:text-white transition">Vision</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden border border-white/20 px-4 py-2 rounded-lg"
        >
          Menu
        </button>
      </nav>

      {/* HERO */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-20 max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-extrabold leading-[1.05] tracking-tight"
        >
          Architecting
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI × CRM Systems
          </span>
          <br />
          For Modern Enterprises
        </motion.h1>

        <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl">
          Delivery Manager building intelligent infrastructure at the intersection of Salesforce engineering and AI systems design.
          Leading 33 engineers. Designing scalable customer ecosystems.
        </p>

        <div className="mt-10 flex flex-wrap gap-6">
          <a
            href="#work"
            className="px-8 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20"
          >
            Explore Systems
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl text-lg font-semibold border border-white/20 hover:border-purple-400 hover:text-purple-300 transition-all duration-300"
          >
            Start a Conversation <ArrowRight className="inline ml-2" size={18} />
          </a>
        </div>
      </section>

      {/* SERVICES STYLE SECTION */}
      <section id="work" className="py-28 px-6 md:px-20 border-t border-white/10">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">Core Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "AI Infrastructure",
              desc: "LLM dataset architecture, prompt systems, lifecycle simulation, conversational intelligence design.",
            },
            {
              title: "Salesforce Engineering",
              desc: "Apex logic design, LWC component systems, API orchestration, enterprise data modeling.",
            },
            {
              title: "Customer System Architecture",
              desc: "Order lifecycle automation, omnichannel service flows, CRM optimization & operational intelligence.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition-all duration-300 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VISION SECTION */}
      <section id="vision" className="py-32 px-6 md:px-20 border-t border-white/10 max-w-5xl">
        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          Building the Future of
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Intelligent Customer Platforms
          </span>
        </h2>

        <p className="mt-10 text-xl text-gray-300 leading-relaxed">
          My vision is to launch a global consulting firm focused on AI-integrated CRM ecosystems — where automation, intelligence, and business logic operate as one scalable infrastructure layer.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 md:px-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h3 className="text-3xl font-bold">Let’s Build Something Intelligent.</h3>
          <p className="text-gray-400 mt-3">Open for consulting & strategic collaborations.</p>
        </div>
        <div className="flex gap-8 text-gray-400">
          <Mail className="hover:text-white cursor-pointer" />
          <a href="https://www.linkedin.com/in/akshay-chauhan-b98455129/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="hover:text-white cursor-pointer" />
          </a>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Akshay Chauhan
      </footer>
    </div>
  );
}
