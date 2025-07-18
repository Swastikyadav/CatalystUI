"use client";

import React, { ReactElement, useState } from "react";

import { Sidebar } from "@/blocks/sidebar";
import Link from "next/link";
import {
  BookmarkMinusIcon,
  BoxesIcon,
  ChartLineIcon,
  PackageIcon,
  PresentationIcon,
  RocketIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

const navLinks = {
  default: [
    { icon: <BookmarkMinusIcon />, value: "Overview", link: "#", active: true },
    { icon: <ChartLineIcon />, value: "Analytics", link: "#" },
    { icon: <PackageIcon />, value: "Orders", link: "#" },
    { icon: <SettingsIcon />, value: "Settings", link: "#" },
  ],
  marketing: [
    { icon: <UsersIcon />, value: "Affiliates", link: "#" },
    { icon: <PresentationIcon />, value: "Marketing", link: "#" },
    { icon: <RocketIcon />, value: "Campaign", link: "#" },
  ],
};

function SalesOverview() {
  const [open, setOpen] = useState(true);

  return (
    <div id="container" className="flex">
      <Sidebar.Root open={open}>
        <Sidebar.Title>
          <BoxesIcon /> <span>SoftUI</span>
        </Sidebar.Title>
        <Sidebar.Description>
          {navLinks.default.map((link) => (
            <NavLink key={link.value} link={link} />
          ))}

          <h2 className="font-bold mt-4 text-gray-900 dark:text-gray-50">
            Marketing
          </h2>
          {navLinks.marketing.map((link) => (
            <NavLink key={link.value} link={link} />
          ))}
        </Sidebar.Description>
      </Sidebar.Root>
      <span onClick={() => setOpen((ps) => !ps)}>toggle sidebar</span>
    </div>
  );
}

function NavLink({
  link,
}: {
  link: { icon: ReactElement; link: string; active?: boolean; value: string };
}) {
  return (
    <Link
      href={link.link}
      className={`flex gap-2 items-center ${
        link.active
          ? "text-gray-950 dark:text-gray-50"
          : "text-gray-500 dark:text-gray-400"
      }`}
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

export default SalesOverview;
