"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reversed && "lg:[&>*:first-child]:order-2"
      )}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="group relative block overflow-hidden rounded-2xl border border-border bg-surface"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.name} website screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-background/80 text-primary opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </div>
      </a>

      <div>
        <p className="eyebrow">{project.industry}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-4 max-w-md leading-relaxed text-secondary">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-white/[0.02] px-3 py-1 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-5">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            Visit Live Site <ArrowUpRight size={15} />
          </a>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-primary"
          >
            <FileText size={15} /> Read Case Study
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
