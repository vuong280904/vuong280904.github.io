import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm font-body font-medium transition-all duration-200 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-gradient bg-[length:160%_160%] text-white shadow-glow-sm hover:shadow-glow hover:bg-right",
        outline:
          "border border-ink/15 dark:border-white/15 bg-transparent text-ink dark:text-white hover:border-transparent hover:bg-brand-gradient hover:bg-[length:160%_160%] hover:text-white",
        ghost:
          "bg-transparent text-ink dark:text-white hover:bg-ink/5 dark:hover:bg-white/5",
      },
      size: {
        default: "h-[52px] px-8 text-[0.95rem]",
        sm: "h-10 px-5 text-sm",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * Base button primitive. Variants map directly to the design spec's
 * "primary" (solid gradient) and "secondary/outline" (glass) button
 * treatments (§3, §14) — hover states shift the gradient and add glow.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
