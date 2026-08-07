"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border py-28 sm:py-32"
    >
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="eyebrow">Experience</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Where the work has been happening.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-2xl border border-border bg-surface p-8 sm:p-10"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-xl font-semibold text-primary">
              Independent Front-End Developer &amp; Graphic Designer
            </h3>
            <p className="text-sm text-muted">2026 to Present</p>
          </div>

          <div className="mt-5 max-w-2xl space-y-4 text-secondary">
            <p className="leading-relaxed">
              I have coded, customized, refined, and deployed business
              websites across multiple industries, turning early drafts and
              prototypes into polished, production-ready digital
              experiences.
            </p>
            <p className="leading-relaxed">
              My work focuses on responsive design, interface refinement,
              branding consistency, performance optimization, and creating
              visually engaging websites that are ready for production.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
