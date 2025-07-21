import { cx } from "@/lib/utils";
import Link from "next/link";
import React, { ReactElement } from "react";

function NavLink({
  link,
  className,
}: {
  link: { icon: ReactElement; link: string; active?: boolean; value: string };
  className?: string;
}) {
  return (
    <Link
      href={link.link}
      className={cx(
        // base
        "flex gap-2 items-center",
        // active
        link.active
          ? "text-gray-950 dark:text-gray-50"
          : "text-gray-500 dark:text-gray-400",
        // class props
        className
      )}
    >
      <span
        className={`p-1 rounded-lg ${
          link.active ? "text-white bg-blue-600" : ""
        }`}
      >
        {link.icon}
      </span>{" "}
      {link.value}
    </Link>
  );
}

export default NavLink;
