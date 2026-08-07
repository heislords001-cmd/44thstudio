import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Github, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import ProjectRequestForm from "@/components/project-request-form";

export const metadata: Metadata = {
  title: "Let's Talk",
  description:
    "Start a project with 44th Studio. Tell me what you need and I'll get back to you.",
};

const quickLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: siteConfig.phoneDisplay,
    href: siteConfig.whatsapp,
    icon: MessageCircle,
  },
  {
    label: "Call",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "@heislords001-cmd",
    href: siteConfig.github,
    icon: Github,
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: siteConfig.resumeUrl,
    icon: Download,
  },
];

export default function ContactPage() {
  return (
    <section className="pt-32 pb-28">
      <div className="section-container">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft size={15} /> Back to Home
        </Link>

        <div className="mt-8 max-w-2xl">
          <p className="eyebrow">Let&apos;s Talk</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            Tell me about your project.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-secondary">
            Fill out the form and I&apos;ll get back to you within a day or
            two, or reach out directly using any of the options below.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="space-y-4">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                download={link.label === "Resume" ? true : undefined}
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-white/20"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <link.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-muted">{link.label}</p>
                  <p className="break-all text-sm font-medium text-primary">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <ProjectRequestForm />
        </div>
      </div>
    </section>
  );
}
