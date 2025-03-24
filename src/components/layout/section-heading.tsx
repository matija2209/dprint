import React from 'react';
import { cn } from '@/lib/utils';

// Define types for the sub-components
type TitleProps = React.HTMLAttributes<HTMLHeadingElement>;
type DescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

// Main component
function SectionHeading({
  children,
  className,
  titleClassName,
  descriptionClassName,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  // Clone children and pass props to them
  const childrenWithProps = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    // Cast child.type to any to compare with component functions
    const childType = child.type as any;

    if (childType === Title) {
      return React.cloneElement(child as React.ReactElement<TitleProps>, {
        className: cn(titleClassName, (child.props as TitleProps).className),
      });
    }

    if (childType === Description) {
      return React.cloneElement(child as React.ReactElement<DescriptionProps>, {
        className: cn(descriptionClassName, (child.props as DescriptionProps).className),
      });
    }

    return child;
  });

  return (
    <div
      className={cn(
        "text-center mb-8 space-y-4 max-w-4xl mx-auto",
        className
      )}
      {...props}
    >
      {childrenWithProps}
    </div>
  );
}

// Title sub-component
function Title({
  children,
  className,
  ...props
}: TitleProps) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-gray-800 dark:text-gray-100",
        "tracking-tight leading-tight",
        className
      )}
      style={{
        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
      }}
      {...props}
    >
      {children}
    </h2>
  );
}

// Description sub-component
function Description({
  children,
  className,
  ...props
}: DescriptionProps) {
  return (
    <p
      className={cn(
        "text-base text-accent text-left md:text-center opacity-90",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

// Attach sub-components to main component
SectionHeading.Title = Title;
SectionHeading.Description = Description;

export default SectionHeading;