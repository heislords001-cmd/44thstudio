"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const groups = [
  {
    label: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
      "Performance Optimization",
      "Cross-Browser Compatibility",
    ],
  },
  {
    label: "Design",
    items: [
      "UI Design",
      "UX Design",
      "Brand Identity",
      "Logo Design",
      "Typography",
      "Layout Design",
      "Visual Communication",
    ],
  },
  {
    label: "Workflow",
    items: [
      "Git & GitHub",
      "VS Code",
      "Figma",
      "Canva",
      "Adobe Photoshop",
      "Netlify",
      "Formspree",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-28 sm:py-32">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Tools I use to ship, not just design.
          </h2>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {groups.map((group, gi) => (
            <div key={group.label}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                {group.label}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: gi * 0.05 + i * 0.03,
                    }}
                  >
                    <Badge variant="chip">{item}</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
