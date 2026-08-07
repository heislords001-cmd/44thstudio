"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-28 sm:py-32">
      <div className="section-container grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/10 blur-3xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src="/about/headshot.png"
              alt="Portrait of Uchechukwu Emmanuel Chibueze"
              fill
              sizes="(max-width: 1024px) 90vw, 400px"
              className="object-cover"
              priority={false}
            />
          </div>
        </motion.div>

        <div>
          <p className="eyebrow">About Me</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Design and code, refined into one experience.
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 space-y-5 leading-relaxed text-secondary"
          >
            <p>
              I specialize in building websites that balance aesthetics,
              usability, and performance. From real estate and hospitality to
              restaurants and automotive businesses, I&apos;ve worked on
              refining and deploying responsive web experiences tailored to
              different industries.
            </p>
            <p>
              My workflow blends hands-on coding with modern design tools,
              letting me move quickly while making sure every project is
              carefully built, customized, optimized, and production-ready.
            </p>
            <p>
              Beyond web development, I also work as a graphic designer,
              creating brand identities, logos, marketing materials, and
              digital assets that help businesses present themselves
              professionally across both web and print.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
