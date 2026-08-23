import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-fg hover:bg-accent/90 shadow-sm",
        secondary:
          "bg-bg-elevated text-ink border border-line hover:border-line-strong",
        ghost: "text-ink hover:bg-accent-soft",
        danger: "bg-bad text-white hover:bg-bad/90",
      },
      size: {
        sm: "h-9 px-3 text-sm rounded-[8px]",
        md: "h-11 px-4 text-sm rounded-[12px]",
        lg: "h-12 px-5 text-base rounded-[14px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
