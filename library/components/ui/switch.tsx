"use client";

import React, { useEffect, useState } from "react";

import { Switch as SwitchPrimitive } from "radix-ui";
import { cx } from "@/lib/utils";

const SwitchRoot = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, children, ...props }, forwardedRef) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("mode") === "dark") {
      setIsDark(true);
    }
  }, []);

  return (
    <SwitchPrimitive.Root
      ref={forwardedRef}
      className={cx(
        // base
        "w-8 h-4 bg-gray-200 border border-gray-600 rounded-4xl relative flex items-center justify-start cursor-pointer",
        // checked
        "data-[state=checked]:bg-blue-200",
        // className prop
        className
      )}
      checked={isDark}
      autoFocus={false}
      onCheckedChange={(checked) => {
        setIsDark(checked);
        if (checked) {
          localStorage.setItem("mode", "dark");
          document.documentElement.classList.add("dark");
        } else {
          localStorage.setItem("mode", "light");
          document.documentElement.classList.remove("dark");
        }
      }}
      {...props}
    >
      {children}
    </SwitchPrimitive.Root>
  );
});

SwitchRoot.displayName = "SwitchRoot";

const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Thumb>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Thumb>
>(({ className, ...props }, forwardedRef) => {
  return (
    <SwitchPrimitive.Thumb
      ref={forwardedRef}
      className={cx(
        // base
        "block w-4 h-4 bg-white border border-gray-600 rounded-full",
        // transition and color
        "data-[state=checked]:translate-x-4 data-[state=checked]:bg-blue-600",
        // className prop
        className
      )}
      {...props}
    />
  );
});

SwitchThumb.displayName = "SwitchThumb";

export { SwitchRoot, SwitchThumb };
