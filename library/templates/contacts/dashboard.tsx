"use client";

import React, { useState } from "react";
import { Sidebar } from "@/library/blocks/sidebar";
import {
  BookOpenIcon,
  ChartNetworkIcon,
  ChevronsUpDownIcon,
  ContactIcon,
  MailCheckIcon,
  MailIcon,
  MegaphoneIcon,
  PanelLeftIcon,
  PanelsTopLeftIcon,
} from "lucide-react";
import NavLink from "./navLinks";
import { CardRoot } from "@/library/components/ui/card";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "../../components/ui/avatar";
import { ProfilePopoverRoot } from "./profileCard";

const navLinks = [
  { icon: <ContactIcon />, value: "Contacts", link: "#", active: true },
  { icon: <PanelsTopLeftIcon />, value: "Sites", link: "#" },
  { icon: <BookOpenIcon />, value: "Stories", link: "#" },
  { icon: <MegaphoneIcon />, value: "Campaigns", link: "#" },
  { icon: <MailCheckIcon />, value: "Pitches", link: "#" },
  { icon: <ChartNetworkIcon />, value: "Coverage", link: "#" },
];

function ContactsDashboard() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <Sidebar.Root open={open} className="z-100 dark relative">
        <Sidebar.Title onClose={() => setOpen(false)}>
          <MailIcon />
        </Sidebar.Title>
        <Sidebar.Description>
          {navLinks.map((link) => (
            <NavLink key={link.value} link={link} />
          ))}
        </Sidebar.Description>

        <ProfilePopoverRoot>
          <CardRoot className="text-gray-200 text-sm absolute left-0 bottom-0 dark:bg-blue-950 rounded-none flex items-center justify-between cursor-pointer">
            <div className="flex gap-2">
              <AvatarRoot>
                <AvatarImage
                  imgUrl="https://dummyjson.com/icon/emilys/129"
                  className="w-10 h-10"
                />
                <AvatarFallback>SW</AvatarFallback>
              </AvatarRoot>
              <div>
                <p>Swastik Yadav</p>
                <small>Admin</small>
              </div>
            </div>
            <ChevronsUpDownIcon className="w-4 h-4" />
          </CardRoot>
        </ProfilePopoverRoot>
      </Sidebar.Root>

      <main className="w-full min-h-screen bg-white">
        <header className="flex items-center gap-4 border-b border-gray-200 text-gray-800 p-6">
          <PanelLeftIcon
            width={18}
            onClick={() => setOpen((ps) => !ps)}
            className="cursor-pointer"
          />
          <p>Contacts</p>
        </header>
      </main>
    </div>
  );
}

export default ContactsDashboard;
