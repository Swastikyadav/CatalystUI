"use client";

import React, { useState } from "react";

import { Sidebar } from "@/library/blocks/sidebar";
import { PanelLeftIcon } from "lucide-react";
import Link from "next/link";
import { cx } from "@/lib/utils";

const docLinks = {
  Introduction: [
    { name: "Why", path: "/documentation/why", slug: "why" },
    {
      name: "Design System",
      path: "/documentation/design-system",
      slug: "design-system",
    },
  ],
  UI: [
    { name: "Avatar", path: "/documentation/avatar", slug: "avatar" },
    { name: "Button", path: "/documentation/button", slug: "button" },
    { name: "Card", path: "/documentation/card", slug: "card" },
    { name: "Popover", path: "/documentation/popover", slug: "popover" },
    { name: "Switch", path: "/documentation/switch", slug: "switch" },
    { name: "Table", path: "/documentation/table", slug: "table" },
  ],
  Visualization: [
    {
      name: "Line Chart",
      path: "/documentation/line-chart",
      slug: "line-chart",
    },
    { name: "Bar Chart", path: "/documentation/bar-chart", slug: "bar-chart" },
  ],
  Blocks: [
    {
      name: "Bento Grid",
      path: "/documentation/bento-grid",
      slug: "bento-grid",
    },
    { name: "KPI Card", path: "/documentation/kpi-card", slug: "kpi-card" },
    {
      name: "Profile Settings Card",
      path: "/documentation/profile-card",
      slug: "profile-card",
    },
    {
      name: "Top Products Card",
      path: "/documentation/top-products-card",
      slug: "top-products-card",
    },
    {
      name: "Invite Members Card",
      path: "/documentation/invite-card",
      slug: "invite-card",
    },
  ],
  Templates: [
    {
      name: "Templates",
      path: "/documentation/templates",
      slug: "templates",
    },
  ],
};

function DocsSidebar({ slug }: { slug: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative">
      <Sidebar.Root open={open} className="z-100 w-[300px] px-8 lg:px-16 mt-0">
        <Sidebar.Title onClose={() => setOpen(false)} showCloseOnDesktop={true}>
          {""}
        </Sidebar.Title>
        <Sidebar.Description className="my-0">
          {Object.keys(docLinks).map((key: string) => {
            const sectionKey = key as keyof typeof docLinks;
            return (
              <div key={key}>
                <p className="text-gray-800 dark:text-gray-200">{key}</p>
                {docLinks[sectionKey].map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={cx(
                      "block px-4 py-2",
                      slug === link.slug ? "text-blue-600 font-bold" : ""
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            );
          })}
        </Sidebar.Description>
      </Sidebar.Root>
      <section className="py-6 px-8 pr-0 lg:px-16">
        <PanelLeftIcon
          width={18}
          onClick={() => setOpen((ps) => !ps)}
          className="cursor-pointer"
        />
      </section>
    </div>
  );
}

export default DocsSidebar;
