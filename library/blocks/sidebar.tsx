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
          className={cx(
            // base
            "absolute md:relative top-0 left-0 w-3xs min-h-screen border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#090E1A] p-6",
            // from Sidebar.Root
            className
          )}
          {...props}
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
  showCloseOnDesktop = false,
  children,
  ...props
}: {
  onClose: () => void;
  className?: string;
  showCloseOnDesktop?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <nav
        className={cx(
          // base
          "flex items-center justify-between font-bold text-gray-700 dark:text-gray-50",
          // from Sidebar.Title
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2">{children}</span>
        <XIcon
          onClick={onClose}
          className={cx("block", showCloseOnDesktop ? "" : "md:hidden")}
        />
      </nav>
    </>
  );
}

function Description({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <>
      <div
        className={cx(
          // base
          "my-8 flex flex-col gap-4 text-gray-500 dark:text-gray-400 text-sm",
          // from Sidebar.Description
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

function Footer({
  className,
  children,
  ...props
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
      {...props}
    >
      {children}
    </footer>
  );
}

export const Sidebar = { Root, Title, Description, Footer };
