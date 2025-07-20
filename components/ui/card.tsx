import React, { ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";
import { cx } from "@/lib/utils";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, asChild, ...props }, forwardedRef) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        ref={forwardedRef}
        className={cx(
          // base
          "relative w-full rounded-lg border p-6 text-left shadow-xs",
          // bg color
          "bg-white dark:bg-[#090E1A]",
          // border
          "border-gray-200 dark:border-gray-800",
          // className prop
          className
        )}
        {...props}
      />
    );
  }
);

CardRoot.displayName = "CardRoot";

function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cx(
        // base
        "text-gray-800 dark:text-gray-100 text-sm",
        className
      )}
    >
      {children}
    </p>
  );
}

function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h2
      className={cx(
        //base
        "text-gray-700 dark:text-gray-200",
        className
      )}
    >
      {children}
    </h2>
  );
}

export { CardRoot, CardTitle, CardDescription, type CardProps };
