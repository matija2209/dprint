import React from 'react'
import { cn } from '@/lib/utils'
import GridLines from '../visuals-patterns/grid-lines'

interface ContainedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  id?: string
  sectionClassName?: string
  containerClassName?: string
}

function ContainedSection({
  children,
  className,
  id,
  sectionClassName,
  containerClassName,
  ...props
}: ContainedSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative',
        sectionClassName
      )}
    >
      <GridLines />
      <div
        className={cn(
          "w-full mx-auto px-4", // Responsive padding
          "max-w-7xl", // Default max-width
          containerClassName, // Allow class overriding
          className
        )}
        {...props}
      >
        {children}
      </div>
    </section>
  )
}

export default ContainedSection