import { XIcon } from "lucide-react";
import React, { ReactNode } from "react";

function Root({
  open,
  children,
  ...props
}: {
  open: boolean;
  children: ReactNode;
}) {
  return (
    <>
      {open && (
        <aside
          {...props}
          className="absolute md:relative top-0 left-0 w-3xs h-screen border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#090E1A] p-6"
        >
          {children}
        </aside>
      )}
    </>
  );
}

function Title({
  onClose,
  children,
}: {
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <>
      <nav className="flex items-center justify-between font-bold text-gray-800 dark:text-gray-50">
        <span className="flex items-center gap-2">{children}</span>
        <XIcon onClick={onClose} className="block md:hidden" />
      </nav>
    </>
  );
}

function Description({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="my-6 flex flex-col gap-4 text-gray-500 dark:text-gray-400 text-sm">
        {children}
      </div>
    </>
  );
}

function Footer({ children }: { children: ReactNode }) {
  return <footer>{children}</footer>;
}

export const Sidebar = { Root, Title, Description, Footer };
