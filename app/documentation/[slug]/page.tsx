"use client";

import React, { useState } from "react";

import { Sidebar } from "@/library/blocks/sidebar";
import { PanelLeftIcon } from "lucide-react";
import Link from "next/link";

const docLinks = {
  Introduction: [
    { name: "Why", path: "/documentation/why" },
    { name: "Design System", path: "/design-system" },
  ],
  UI: [
    { name: "Avatar", path: "/documentation/avatar" },
    { name: "Button", path: "/documentation/button" },
    { name: "Card", path: "/documentation/card" },
    { name: "Popover", path: "/documentation/popover" },
    { name: "Switch", path: "/documentation/switch" },
    { name: "Table", path: "/documentation/table" },
  ],
  Visualization: [
    { name: "Line Chart", path: "/documentation/line-chart" },
    { name: "Bar Chart", path: "/documentation/bar-chart" },
  ],
  Blocks: [
    { name: "Bento Grid", path: "/documentation/bento-grid" },
    { name: "KPI Card", path: "/documentation/kpi-card" },
    { name: "profileCard", path: "/documentation/profile-card" },
    { name: "Sidebar", path: "/documentation/sidebar" },
    { name: "Top Products Card", path: "/documentation/top-products-card" },
  ],
  Templates: [
    { name: "Sales Overview", path: "/documentation/sales-overview" },
  ],
};

function Documentation() {
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
                <p className="text-gray-800">{key}</p>
                {docLinks[sectionKey].map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="block px-4 py-2"
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

export default Documentation;
