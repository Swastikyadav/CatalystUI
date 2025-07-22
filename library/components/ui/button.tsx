import React, { ReactNode } from "react";

import { cx } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";

const buttonVariants = {
  base: [
    // base
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-md border px-3 py-2 text-center text-sm font-medium shadow-xs",
    // disabled
    "disabled:pointer-event-none disabled:shadow-none",
  ],
  variants: {
    primary: [
      // border
      "border-transparent",
      // text color
      "text-white dark:text-white",
      // background color
      "bg-blue-500 dark:bg-blue-500",
      // hover color
      "hover:bg-blue-600 dark:hover:bg-blue-600",
      // disabled
      "disabled:bg-blue-300 disabled:text-white",
      "dark:disabled:bg-blue-800 dark:disabled:text-blue-400",
    ],
    secondary: [
      // border
      "border-gray-300 dark:border-gray-800",
      // text color
      "text-gray-900 dark:text-gray-50",
      // background color
      "bg-white dark:bg-gray-950",
      // hover color
      "hover:bg-gray-50 dark:hover:bg-gray-900/60",
      // disabled
      "disabled:text-gray-400",
      "dark:disabled:text-gray-600",
    ],
    ghost: [
      // base
      "shadow-none",
      // border
      "border-transparent",
      // text color
      "text-gray-900 dark:text-gray-50",
      // hover color
      "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800/80",
      // disabled
      "disabled:text-gray-400",
      "dark:disabled:text-gray-600",
    ],
    destructive: [
      // base
      "text-white",
      // border
      "border-transparent",
      // background color
      "bg-red-600 dark:bg-red-700",
      // hover color
      "hover:bg-red-700 dark:hover-red-600",
      // disabled
      "disabled:bg-red-300 disabled:text-white",
      "dark:disabled:bg-red-950 dark:disabled:text-red-400",
    ],
  },
  defaultVariant: "primary",
};

interface ButtonProps {
  isLoading?: boolean;
  className?: string;
  disabled?: false;
  variant?: keyof typeof buttonVariants.variants;
  children: ReactNode;
}

function Button({
  isLoading = false,
  className,
  disabled = false,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(
        ...buttonVariants.base,
        ...buttonVariants.variants[variant],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="pointer-events-none flex shrink-0 items-center gap-1.5">
          <Loader2Icon
            className="size-4 shrink-0 animate-spin"
            aria-hidden={true}
          />
          <span>Loading...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
}

Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };
