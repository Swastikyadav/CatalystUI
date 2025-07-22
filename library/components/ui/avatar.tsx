import React from "react";

import { Avatar as AvatarPrimitive } from "radix-ui";
import { cx } from "@/lib/utils";

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <AvatarPrimitive.Root
      ref={forwardedRef}
      className={cx(className)}
      {...props}
    >
      {children}
    </AvatarPrimitive.Root>
  );
});

AvatarRoot.displayName = "AvatarRoot";

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & {
    imgUrl: string;
  }
>(({ imgUrl, className, ...props }, forwardedRef) => {
  return (
    <AvatarPrimitive.Image
      ref={forwardedRef}
      className={cx(
        // base
        "w-[26px] h-[26px] rounded-full cursor-pointer",
        // className prop
        className
      )}
      src={imgUrl}
      alt="Colm Tuite"
      {...props}
    />
  );
});

AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <AvatarPrimitive.Fallback
      ref={forwardedRef}
      className={cx(
        // base
        "cursor-pointer border border-gray-200 rounded-full p-1",
        // className prop
        className
      )}
      delayMs={600}
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  );
});

AvatarFallback.displayName = "AvatarFallback";

export { AvatarRoot, AvatarImage, AvatarFallback };
