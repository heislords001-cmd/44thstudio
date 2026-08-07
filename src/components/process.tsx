"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    copy: "Learn the business, the audience, and what the site actually needs to accomplish before touching a single pixel.",
  },
  {
    number: "02",
    title: "Prototype",
    copy: "Sketch structure, copy, and layout direction quickly to find the right foundation before writing production code.",
  },
  {
    number: "03",
    title: "Customize",
    copy: "Refine typography, spacing, color, and interaction until the site feels handcrafted and on-brand.",
  },
  {
    number: "04",
    title: "Deploy",
    copy: "Optimize performance and accessibility, then ship to production with confidence.",
  },
];

export default function Process() {
  return (
    <section className="scroll-mt-20 border-t border-border py-28 sm:py-32">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="eyebrow">How I Work</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            A repeatable process built for speed and polish.
          </h2>
        </div>

        <div className="relative mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative"
            >
              <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold text-accent">
                {step.number}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-secondary">
                {step.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
