"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import MacbookMockup from "@/components/macbook-mockup";
import { siteConfig } from "@/lib/utils";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="noise-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="section-container relative grid items-center gap-16 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.div variants={item}>
            <span className="eyebrow">{siteConfig.location} · Available for work</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-[2.25rem] font-semibold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-[3.1rem]"
          >
            {siteConfig.legalName}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 text-lg font-medium text-accent sm:text-xl"
          >
            {siteConfig.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-balance leading-relaxed text-secondary"
          >
            I design and code modern, responsive websites and compelling
            digital experiences, writing clean HTML, CSS, and
            JavaScript by hand and refining every detail until it&apos;s
            fast, accessible, and built to leave a lasting impression.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects <ArrowRight size={16} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail size={16} /> Contact Me
            </Button>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="lg">
                <Github size={16} /> GitHub
              </Button>
            </a>
            <a href={siteConfig.resumeUrl} download>
              <Button variant="ghost" size="lg">
                <Download size={16} /> Resume
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 flex items-center gap-8 border-t border-border pt-8"
          >
            <div>
              <p className="text-2xl font-semibold text-primary">6+</p>
              <p className="text-sm text-muted">Live client sites</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-semibold text-primary">100%</p>
              <p className="text-sm text-muted">Mobile responsive</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-semibold text-primary">Hands-On</p>
              <p className="text-sm text-muted">Every line customized</p>
            </div>
          </motion.div>
        </motion.div>

        <MacbookMockup />
      </div>
    </section>
  );
}
