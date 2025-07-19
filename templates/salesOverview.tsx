"use client";

import React, { ReactElement, useState } from "react";

import { Sidebar } from "@/blocks/sidebar";
import { SwitchRoot, SwitchThumb } from "@/components/ui/switch";
import {
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import Link from "next/link";
import {
  BellIcon,
  BookmarkMinusIcon,
  BoxesIcon,
  ChartLineIcon,
  LinkIcon,
  LogOutIcon,
  MoonIcon,
  PackageIcon,
  PanelLeftIcon,
  PresentationIcon,
  RocketIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import { Popover } from "radix-ui";
import { cx } from "@/lib/utils";

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

const profileLinks = [
  { icon: <UserIcon width={18} />, value: "Profile", link: "#" },
  { icon: <SettingsIcon width={18} />, value: "Account Settings", link: "#" },
  { icon: <LinkIcon width={18} />, value: "Integration", link: "#" },
  { icon: <MoonIcon width={18} />, value: "Dark Mode", link: "#" },
];

function SalesOverview() {
  const [open, setOpen] = useState(true);

  return (
    <div id="container" className="flex">
      <Sidebar.Root open={open}>
        <Sidebar.Title onClose={() => setOpen(false)}>
          <BoxesIcon /> <span>SoftUI</span>
        </Sidebar.Title>
        <Sidebar.Description>
          {navLinks.default.map((link) => (
            <NavLink key={link.value} link={link} />
          ))}

          <h2 className="font-bold mt-4 text-gray-700 dark:text-gray-50">
            Marketing
          </h2>
          {navLinks.marketing.map((link) => (
            <NavLink key={link.value} link={link} />
          ))}
        </Sidebar.Description>
      </Sidebar.Root>

      <main className="w-full min-h-screen bg-white dark:bg-[#090E1A]">
        <header className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-50 p-6">
          <PanelLeftIcon
            width={18}
            onClick={() => setOpen((ps) => !ps)}
            className="cursor-pointer"
          />
          <span className="flex gap-4 items-center">
            <UserIcon width={18} className="cursor-pointer" />
            <BellIcon width={18} className="cursor-pointer" />
            <div>
              <Popover.Root>
                <Popover.Trigger asChild>
                  <AvatarRoot>
                    <AvatarImage imgUrl="https://avatars.githubusercontent.com/u/44374494" />
                    <AvatarFallback>SW</AvatarFallback>
                  </AvatarRoot>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content
                    className="mr-4"
                    autoFocus={false}
                    sideOffset={10}
                  >
                    <ProfilePopoverContent />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </div>
          </span>
        </header>
      </main>
    </div>
  );
}

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

function ProfilePopoverContent() {
  return (
    <div className="border border-gray-200 dark:border-gray-800 py-2 w-3xs bg-white dark:bg-[#090E1A] rounded-lg text-sm">
      {profileLinks.map((link) => {
        if (link.value == "Dark Mode") {
          return (
            <div
              key="dark-mode-toggle"
              className="flex items-center justify-between pr-3 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <NavLink
                key={link.value}
                link={{
                  icon: link.icon,
                  value: link.value,
                  link: link.link,
                }}
                className="hover:bg-gray-100 dark:hover:bg-gray-600 p-1 dark:text-gray-100"
              />
              <SwitchRoot>
                <SwitchThumb />
              </SwitchRoot>
            </div>
          );
        }

        return (
          <NavLink
            key={link.value}
            link={{
              icon: link.icon,
              value: link.value,
              link: link.link,
            }}
            className="hover:bg-gray-100 dark:hover:bg-gray-600 p-1 dark:text-gray-100"
          />
        );
      })}
      <hr className="text-gray-200 my-3" />
      <NavLink
        key="signout"
        link={{
          icon: <LogOutIcon width={18} />,
          value: "Sign Out",
          link: "#",
        }}
        className="hover:bg-gray-100 dark:hover:bg-gray-600 p-1 dark:text-gray-100"
      />
    </div>
  );
}

export default SalesOverview;
