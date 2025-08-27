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
  StarIcon,
} from "lucide-react";
import NavLink from "./navLinks";
import { CardRoot } from "@/library/components/ui/card";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "../../components/ui/avatar";
import { ProfilePopoverRoot } from "./profileCard";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/library/components/ui/table";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/library/components/ui/sheet";
import { Button } from "@/library/components/ui/button";

const navLinks = [
  { icon: <ContactIcon />, value: "Contacts", link: "#", active: true },
  { icon: <PanelsTopLeftIcon />, value: "Sites", link: "#" },
  { icon: <BookOpenIcon />, value: "Stories", link: "#" },
  { icon: <MegaphoneIcon />, value: "Campaigns", link: "#" },
  { icon: <MailCheckIcon />, value: "Pitches", link: "#" },
  { icon: <ChartNetworkIcon />, value: "Coverage", link: "#" },
];

const contacts = [
  {
    name: "Ava Patel",
    image: "https://i.pravatar.cc/150?img=1",
    email: "ava.patel@example.com",
    notes: 12,
    organization: "TechNova",
    profession: "Software Engineer",
  },
  {
    name: "Liam Chen",
    image: "https://i.pravatar.cc/150?img=2",
    email: "liam.chen@example.com",
    notes: 8,
    organization: "ByteFoundry",
    profession: "Journalist",
  },
  {
    name: "Sophia Nair",
    image: "https://i.pravatar.cc/150?img=3",
    email: "sophia.nair@example.com",
    notes: 23,
    organization: "PixelForge",
    profession: "Software Engineer",
  },
  {
    name: "Noah Kim",
    image: "https://i.pravatar.cc/150?img=4",
    email: "noah.kim@example.com",
    notes: 5,
    organization: "StackFlow Labs",
    profession: "Editor",
  },
  {
    name: "Mia Singh",
    image: "https://i.pravatar.cc/150?img=5",
    email: "mia.singh@example.com",
    notes: 19,
    organization: "LambdaWorks",
    profession: "Chief Marketing Officer",
  },
  {
    name: "Ethan Das",
    image: "https://i.pravatar.cc/150?img=6",
    email: "ethan.das@example.com",
    notes: 7,
    organization: "Nextware",
    profession: "SEO Expert",
  },
  {
    name: "Isabella Roy",
    image: "https://i.pravatar.cc/150?img=7",
    email: "isabella.roy@example.com",
    notes: 14,
    organization: "NeuroGrid",
    profession: "Chief Executive Officer",
  },
  {
    name: "Arjun Mehta",
    image: "https://i.pravatar.cc/150?img=8",
    email: "arjun.mehta@example.com",
    notes: 11,
    organization: "CodeSpire",
    profession: "Content Head",
  },
  {
    name: "Ella Verma",
    image: "https://i.pravatar.cc/150?img=9",
    email: "ella.verma@example.com",
    notes: 9,
    organization: "Designly",
    profession: "Design Head",
  },
  {
    name: "Ryan Kapoor",
    image: "https://i.pravatar.cc/150?img=10",
    email: "ryan.kapoor@example.com",
    notes: 16,
    organization: "FrontendHub",
    profession: "Senior Frontend Engineer",
  },
];

function ContactsDashboard() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <Sidebar.Root open={open} className="z-100 dark">
        <Sidebar.Title onClose={() => setOpen(false)}>
          <MailIcon />
        </Sidebar.Title>
        <Sidebar.Description>
          {navLinks.map((link) => (
            <NavLink key={link.value} link={link} />
          ))}
        </Sidebar.Description>

        <ProfilePopoverRoot>
          <CardRoot className="text-gray-200 dark:bg-blue-950 text-sm absolute left-0 bottom-0 rounded-none flex items-center justify-between cursor-pointer">
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

        <div className="p-6">
          <CardRoot className="w-full">
            <TableRoot>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Contact</TableHeaderCell>
                    <TableHeaderCell>Email</TableHeaderCell>
                    <TableHeaderCell>Notes</TableHeaderCell>
                    <TableHeaderCell>Organization</TableHeaderCell>
                    <TableHeaderCell>Details</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contacts.map((data, idx) => (
                    <TableRow key={data.image} className="hover:bg-gray-100">
                      <TableData className="flex gap-4">
                        <AvatarRoot>
                          <AvatarImage
                            imgUrl={data.image}
                            className="w-10 h-10 rounded-lg"
                          />
                          <AvatarFallback>SW</AvatarFallback>
                        </AvatarRoot>
                        <div>
                          <p>{data.name}</p>
                          <small className="text-bold">{data.profession}</small>
                        </div>
                      </TableData>
                      <TableData>{data.email}</TableData>
                      <TableData className="cursor-pointer underline">
                        {data.notes}
                      </TableData>
                      <TableData>{data.organization}</TableData>
                      <TableData className="cursor-pointer">
                        <div className="">
                          <Sheet>
                            <SheetTrigger asChild>
                              <p className="text-blue-600 underline">
                                View Details
                              </p>
                            </SheetTrigger>
                            <SheetContent className="sm:max-w-xl z-100">
                              <SheetHeader>
                                <SheetTitle>
                                  {idx + 1} of {contacts.length}
                                </SheetTitle>
                              </SheetHeader>
                              <SheetBody>
                                <div className="w-full flex gap-4 items-center mb-8">
                                  <AvatarRoot>
                                    <AvatarImage
                                      imgUrl={data.image}
                                      className="w-14 h-14 rounded-lg"
                                    />
                                    <AvatarFallback>SW</AvatarFallback>
                                  </AvatarRoot>
                                  <div>
                                    <p>{data.name}</p>
                                    <small className="text-bold flex gap-1 items-center">
                                      <StarIcon
                                        className="w-4 h-4"
                                        fill="yellow"
                                      />{" "}
                                      4/5 | {data.profession}
                                    </small>
                                  </div>
                                </div>

                                {new Array(5).fill(undefined).map((_, idx) => {
                                  return (
                                    <div
                                      key={idx}
                                      className="relative flex flex-col gap-2 p-4 border-l-4 border-blue-200"
                                    >
                                      <h4 className="text-gray-600 text-sm">
                                        Campaign sent by Hugo Felix | Jun 23 at
                                        16:00
                                      </h4>
                                      <p className="text-sm">
                                        Revolution in cosmos: Galileo new
                                        product to transform space missions
                                      </p>
                                      <small className="text-gray-600">
                                        To: {data.email}
                                      </small>
                                      <Button
                                        variant="secondary"
                                        className="text-sm w-full md:w-1/3 cursor-pointer"
                                      >
                                        Send follow-up email
                                      </Button>
                                      <MegaphoneIcon className="absolute -top-3 -left-3 p-1 bg-blue-200 rounded-full text-blue-800" />
                                    </div>
                                  );
                                })}
                              </SheetBody>
                            </SheetContent>
                          </Sheet>
                        </div>
                      </TableData>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableRoot>
          </CardRoot>
        </div>
      </main>
    </div>
  );
}

export default ContactsDashboard;
