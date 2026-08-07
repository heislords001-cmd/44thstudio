import { projects } from "@/lib/projects";
import ProjectCard from "@/components/project-card";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-28 sm:py-32">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="eyebrow">Selected Work</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Seven live sites, seven different industries.
          </h2>
          <p className="mt-4 leading-relaxed text-secondary">
            Every project below is coded, refined, and deployed to
            production. I build, customize, and ship real sites that
            businesses use every day.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-24 sm:gap-28">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
