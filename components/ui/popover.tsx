import React, { ReactNode } from "react";

import { Popover as PopoverPrimitive } from "radix-ui";
import { cx } from "@/lib/utils";

const PopoverRoot = ({ children, ...props }: { children: ReactNode }) => {
  return <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>;
};

PopoverRoot.displayName = "PopoverRoot";

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <PopoverPrimitive.Trigger
      ref={forwardedRef}
      className={cx(className)}
      {...props}
      asChild
    >
      {children}
    </PopoverPrimitive.Trigger>
  );
});

PopoverTrigger.displayName = "PopoverTrigger";

const PopoverPortal = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <PopoverPrimitive.Portal {...props}>{children}</PopoverPrimitive.Portal>
  );
};

PopoverPortal.displayName = "PopoverPortal";

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <PopoverPrimitive.Content
      ref={forwardedRef}
      className={cx(className)}
      {...props}
    >
      {children}
    </PopoverPrimitive.Content>
  );
});

PopoverContent.displayName = "PopoverContent";

export { PopoverRoot, PopoverTrigger, PopoverPortal, PopoverContent };
