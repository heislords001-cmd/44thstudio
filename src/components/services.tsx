"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Layers } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Front-End Development",
    copy: "Building responsive, high-performance websites using modern frontend technologies and best practices.",
  },
  {
    icon: Layers,
    title: "Web Design",
    copy: "Designing clean, intuitive interfaces that prioritize usability, accessibility, and visual hierarchy.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    copy: "Creating logos, brand identities, social media graphics, and marketing materials that strengthen business branding.",
  },
  {
    icon: Rocket,
    title: "Deployment & Debugging",
    copy: "Shipping websites to production and fixing the real-world issues, like layout, contrast, and mobile breakpoints, until everything works.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-border py-28 sm:py-32"
    >
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="eyebrow">What I Do</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Four disciplines, one connected process.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-white/20"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <service.icon size={20} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {service.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
