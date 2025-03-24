import * as React from "react"

import { cn } from "@/lib/utils"

const cardVariants = {
  default: "bg-card hover:shadow-lg",
  gradient: "bg-gradient-to-br from-primary/5 via-accent/5 to-chart-3/5",
  outline: "border-2 bg-card/50 backdrop-blur-sm",
  elevated: "bg-card shadow-xl hover:shadow-2xl",
}

function Card({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: keyof typeof cardVariants
}) {
  return (
    <div
      data-slot="card"
      className={cn(
        "relative flex flex-col gap-6 rounded-xl border transition-all duration-300",
        "shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.15)]",
        "hover:-translate-y-1",
        "dark:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.25)]",
        cardVariants[variant],
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2.5 p-6",
        "has-[data-slot=card-action]:grid-cols-[1fr_auto]",
        "[.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-xl font-semibold leading-none tracking-tight",
        "bg-gradient-to-r from-primary via-accent to-chart-3 bg-clip-text text-transparent",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-muted-foreground text-sm leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-6 text-base leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center gap-4 px-6",
        "[.border-t]:pt-6",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
