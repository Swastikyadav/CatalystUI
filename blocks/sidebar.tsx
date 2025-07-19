import { cx } from "@/lib/utils";
import { XIcon } from "lucide-react";
import React, { ReactNode } from "react";

function Root({
  open,
  className,
  children,
  ...props
}: {
  open: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <>
      {open && (
        <aside
          {...props}
          className={cx(
            // base
            "absolute md:relative top-0 left-0 w-3xs h-screen border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#090E1A] p-6",
            // from Sidebar.Root
            className
          )}
        >
          {children}
        </aside>
      )}
    </>
  );
}

function Title({
  onClose,
  className,
  children,
}: {
  onClose: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <>
      <nav
        className={cx(
          // base
          "flex items-center justify-between font-bold text-gray-800 dark:text-gray-50",
          // from Sidebar.Title
          className
        )}
      >
        <span className="flex items-center gap-2">{children}</span>
        <XIcon onClick={onClose} className="block md:hidden" />
      </nav>
    </>
  );
}

function Description({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <>
      <div
        className={cx(
          // base
          "my-6 flex flex-col gap-4 text-gray-500 dark:text-gray-400 text-sm",
          // from Sidebar.Description
          className
        )}
      >
        {children}
      </div>
    </>
  );
}

function Footer({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <footer
      className={cx(
        // from Sidebar.Footer
        className
      )}
    >
      {children}
    </footer>
  );
}

export const Sidebar = { Root, Title, Description, Footer };
