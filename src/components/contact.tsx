"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download, Github, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
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

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border py-28 sm:py-36"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow justify-center">Contact</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
            Let&apos;s build something great together.
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-secondary">
            Whether you&apos;re launching a new business, redesigning an
            existing website, or looking for a creative partner to bring your
            ideas to life, I&apos;d love to hear from you.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Start a Project <ArrowRight size={16} />
              </Button>
            </Link>
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg">
                <MessageCircle size={16} /> WhatsApp Me
              </Button>
            </a>
          </div>
        </motion.div>

        <div className="mx-auto mt-20 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              download={link.label === "Resume" ? true : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-center justify-between rounded-xl border border-border bg-surface p-5 transition-colors hover:border-white/20"
            >
              <div className="flex min-w-0 items-center gap-3">
                <link.icon size={18} className="shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="text-xs text-muted">{link.label}</p>
                  <p className="break-all text-sm font-medium text-primary">
                    {link.value}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="ml-2 shrink-0 text-muted transition-colors group-hover:text-primary"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
