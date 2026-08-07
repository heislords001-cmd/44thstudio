import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, getProject } from "@/lib/projects";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.name} Case Study`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pt-32">
      <div className="section-container">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft size={15} /> All Projects
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="eyebrow">{project.industry}</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg text-secondary">{project.location}</p>
        </div>

        <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
          <Image
            src={project.image}
            alt={`${project.name} website hero screenshot`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                My Role
              </h3>
              <ul className="mt-4 space-y-2.5">
                {project.role.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-secondary"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                Technology
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a href={project.url} target="_blank" rel="noreferrer">
              <Button variant="primary" className="w-full sm:w-auto">
                Visit Live Website <ArrowUpRight size={16} />
              </Button>
            </a>
          </aside>

          <div className="space-y-14">
            <section>
              <h2 className="text-2xl font-semibold text-primary">Overview</h2>
              <p className="mt-4 leading-relaxed text-secondary">
                {project.overview}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary">
                The Challenge
              </h2>
              <p className="mt-4 leading-relaxed text-secondary">
                {project.challenge}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary">
                The Solution
              </h2>
              <p className="mt-4 leading-relaxed text-secondary">
                {project.solution}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary">
                Key Features
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-xl border border-border bg-surface p-4 text-sm leading-relaxed text-secondary"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary">Gallery</h2>
              <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-xl border border-border">
                <Image
                  src={project.image}
                  alt={`${project.name} additional screenshot`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top"
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="mt-24 border-t border-border">
        <div className="section-container grid grid-cols-2 divide-x divide-border">
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col gap-1 py-8 pr-6"
          >
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted">
              <ArrowLeft size={13} /> Previous
            </span>
            <span className="text-lg font-medium text-primary transition-colors group-hover:text-accent">
              {prev.name}
            </span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col items-end gap-1 py-8 pl-6 text-right"
          >
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted">
              Next <ArrowRight size={13} />
            </span>
            <span className="text-lg font-medium text-primary transition-colors group-hover:text-accent">
              {next.name}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
