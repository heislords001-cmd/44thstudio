"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (isHome) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
      setOpen(false);
    },
    [isHome]
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight text-primary"
        >
          44th<span className="text-accent">.</span>studio
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.slice(1).map((link) => (
            <li key={link.href}>
              <a
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => handleClick(e, link.href)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  isHome && active === link.href
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                )}
              >
                {link.label}
                {isHome && active === link.href && (
                  <span className="absolute inset-x-3 -bottom-[1px] h-px bg-accent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover md:inline-flex"
        >
          Let&apos;s Talk
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="section-container flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => handleClick(e, link.href)}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base",
                    isHome && active === link.href
                      ? "bg-white/5 text-primary"
                      : "text-secondary"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-accent px-3 py-3 text-center text-base font-medium text-white"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
