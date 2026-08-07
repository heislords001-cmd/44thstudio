import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-secondary">
          The page you&apos;re looking for may have been moved or never existed.
          Let&apos;s get you back on track.
        </p>
        <Link href="/" className="mt-8 inline-block">
          <Button variant="primary">
            <ArrowLeft size={16} /> Back to Home
          </Button>
        </Link>
      </div>
    </section>
  );
}
