import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_4px_16px_-4px_var(--primary)] hover:shadow-[0_6px_20px_-4px_var(--primary)] hover:bg-primary/90 hover:-translate-y-[2px]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[0_4px_16px_-4px_var(--destructive)] hover:shadow-[0_6px_20px_-4px_var(--destructive)] hover:bg-destructive/90 hover:-translate-y-[2px]",
        outline:
          "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-md hover:-translate-y-[2px] dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_4px_16px_-4px_var(--secondary)] hover:shadow-[0_6px_20px_-4px_var(--secondary)] hover:bg-secondary/90 hover:-translate-y-[2px]",
        ghost:
          "hover:bg-accent/80 hover:text-accent-foreground dark:hover:bg-accent/50 hover:-translate-y-[2px]",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        gradient:
          "bg-gradient-to-r from-primary via-accent to-chart-3 text-white shadow-[0_4px_16px_-4px_var(--primary)] hover:shadow-[0_6px_20px_-4px_var(--primary)] hover:-translate-y-[2px] hover:opacity-90",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 text-xl rounded-xl px-10",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }