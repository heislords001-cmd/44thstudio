import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-white/[0.03] text-secondary px-3 py-1.5",
        accent: "border-accent/30 bg-accent/10 text-accent px-3 py-1.5",
        chip: "border-border bg-surface text-secondary px-3.5 py-2 hover:border-white/20 hover:text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
