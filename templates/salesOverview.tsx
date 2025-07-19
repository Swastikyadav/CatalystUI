"use client";

import React, { ReactElement, ReactNode, useState } from "react";

import { Sidebar } from "@/blocks/sidebar";
import { SwitchRoot, SwitchThumb } from "@/components/ui/switch";
import {
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
} from "@/components/ui/popover";
import Link from "next/link";
import {
  BellIcon,
  BookmarkMinusIcon,
  BoxesIcon,
  ChartLineIcon,
  CoinsIcon,
  FilesIcon,
  Globe2Icon,
  LinkIcon,
  LogOutIcon,
  MoonIcon,
  PackageIcon,
  PanelLeftIcon,
  PresentationIcon,
  RocketIcon,
  SettingsIcon,
  ShoppingCartIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import { cx } from "@/lib/utils";
import { Card } from "@/components/ui/card";

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

const kpis = [
  {
    title: "Today's Money",
    description: "$53,000",
    growth: 55,
    icon: <CoinsIcon />,
  },
  {
    title: "Today's Users",
    description: "2,300",
    growth: 3,
    icon: <Globe2Icon />,
  },
  {
    title: "New Clients",
    description: "+3,462",
    growth: -2,
    icon: <FilesIcon />,
  },
  {
    title: "Sales",
    description: "$103,430",
    growth: 5,
    icon: <ShoppingCartIcon />,
  },
];

function SalesOverview() {
  const [open, setOpen] = useState(true);

  return (
    <div id="container" className="flex">
      <Sidebar.Root open={open} className="z-100">
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
              <PopoverRoot>
                <PopoverTrigger asChild>
                  <AvatarRoot>
                    <AvatarImage imgUrl="https://avatars.githubusercontent.com/u/44374494" />
                    <AvatarFallback>SW</AvatarFallback>
                  </AvatarRoot>
                </PopoverTrigger>
                <PopoverPortal>
                  <PopoverContent
                    className="mr-4"
                    autoFocus={false}
                    sideOffset={10}
                  >
                    <ProfilePopoverContent />
                  </PopoverContent>
                </PopoverPortal>
              </PopoverRoot>
            </div>
          </span>
        </header>

        <section className="p-6 flex gap-2 flex-wrap lg:flex-nowrap">
          {kpis.map((kpi) => (
            <Card key={kpi.title} className="w-min-3/12">
              <article className="flex items-center justify-between">
                <div>
                  <CardTitle>{kpi.title}</CardTitle>
                  <CardDescription>
                    <p className="flex items-baseline gap-2">
                      {kpi.description}{" "}
                      <span
                        className={cx(
                          "text-xs text-green-600 dark:text-green-400",
                          kpi.growth < 0 ? "text-red-600 dark:text-red-400" : ""
                        )}
                      >
                        {`${kpi.growth > 0 ? "+" : ""}${kpi.growth}%`}
                      </span>
                    </p>
                  </CardDescription>
                </div>
                <span className="text-white bg-blue-600 w-[40px] h-[40px] flex items-center justify-center rounded-lg">
                  {kpi.icon}
                </span>
              </article>
            </Card>
          ))}
        </section>
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

function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cx(
        // base
        "text-gray-800 dark:text-gray-100 text-sm",
        className
      )}
    >
      {children}
    </p>
  );
}
function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h2
      className={cx(
        //base
        "text-gray-700 dark:text-gray-200 font-bold",
        className
      )}
    >
      {children}
    </h2>
  );
}

export default SalesOverview;
