"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "Website Design & Development",
  "Website Customization / Refinement",
  "Graphic Design / Branding",
  "Something Else",
];

const budgets = ["Under ₦200k", "₦200k - ₦500k", "₦500k - ₦1m", "₦1m+", "Not sure yet"];

export default function ProjectRequestForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface p-12 text-center"
      >
        <CheckCircle2 size={40} className="text-accent" />
        <h3 className="mt-4 text-xl font-semibold text-primary">
          Message sent.
        </h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-secondary">
          Thanks for reaching out. I&apos;ll get back to you within a day or
          two.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-primary">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-primary placeholder:text-muted focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-primary">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-primary placeholder:text-muted focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-primary">
          Phone / WhatsApp{" "}
          <span className="text-muted">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+234..."
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-primary placeholder:text-muted focus:border-accent"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="projectType"
            className="text-sm font-medium text-primary"
          >
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-primary focus:border-accent"
          >
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="text-sm font-medium text-primary">
            Budget <span className="text-muted">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-primary focus:border-accent"
          >
            <option value="">Select one</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-primary">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me what you're building, your timeline, and anything else that matters."
          className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-primary placeholder:text-muted focus:border-accent"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong sending that. Please try again, or email me
          directly at {siteConfig.email}.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={16} /> Send Message
          </>
        )}
      </Button>
    </form>
  );
}
