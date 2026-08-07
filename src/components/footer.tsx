import { siteConfig } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href={siteConfig.github} className="hover:text-secondary" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={siteConfig.whatsapp} className="hover:text-secondary" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-secondary">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
