"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MacbookMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="relative mx-auto w-full max-w-[560px] animate-float"
    >
      {/* glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-accent/20 blur-[80px]" />

      {/* laptop lid */}
      <div className="relative rounded-t-xl border border-white/10 bg-[#1c1c1e] p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-surface">
          <div className="absolute inset-x-0 top-0 z-10 flex h-6 items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-black/60" />
          </div>
          <Image
            src="/projects/walkers-place.png"
            alt="Walker's Place website preview shown on a laptop screen"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 560px"
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* base */}
      <div className="relative h-[14px] rounded-b-lg border border-t-0 border-white/10 bg-gradient-to-b from-[#2a2a2c] to-[#1c1c1e]">
        <div className="absolute left-1/2 top-0 h-[4px] w-24 -translate-x-1/2 rounded-b-md bg-black/40" />
      </div>
      <div className="mx-auto h-[6px] w-[85%] rounded-b-2xl bg-[#0c0c0d]" />
    </motion.div>
  );
}
