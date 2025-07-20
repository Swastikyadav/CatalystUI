"use client";

import React, { ReactElement, useState } from "react";
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

import { Sidebar } from "@/blocks/sidebar";
import TopProductCard from "@/blocks/topProductsCard";
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
import { CardRoot, CardTitle, CardDescription } from "@/components/ui/card";
import {
  ChartContainer,
  LineChartRoot,
  LineChartContent,
  Legend,
} from "@/components/charts/lineChart";
import {
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  GridContent,
  GridRoot,
} from "@/blocks/bentoGrid";

const data = [
  {
    name: "Jan",
    cod: 4000,
    online: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    cod: 3000,
    online: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    cod: 2000,
    online: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    cod: 2780,
    online: 3908,
    amt: 2000,
  },
  {
    name: "May",
    cod: 1890,
    online: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    cod: 2390,
    online: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    cod: 3490,
    online: 4300,
    amt: 2100,
  },
];

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

const products = [
  {
    id: 1,
    title: "Backpack, Fits 15 Laptops",
    price: 109.95,
    orders: "12,842",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Premium T-Shirts ",
    price: 22.3,
    orders: "2,421",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    orders: "5,921",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Fit",
    price: 15.99,
    orders: "921",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "Gold Chain Bracelet",
    price: 695,
    orders: "8,232",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
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
            <CardRoot key={kpi.title} className="w-min-3/12">
              <article className="flex items-center justify-between">
                <div>
                  <CardTitle>{kpi.title}</CardTitle>
                  <CardDescription className="font-bold">
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
            </CardRoot>
          ))}
        </section>

        {/* Desktop/Tablet Grid (lg and above) */}
        <section className="p-6">
          <GridRoot>
            <GridContent>
              <Grid1>
                <CardRoot>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription className="text-xs py-1 text-gray-700 dark:text-gray-200">
                    <span className="text-green-600 dark:text-green-400">
                      +
                    </span>
                    4% more in 2025
                  </CardDescription>

                  <div className="relative py-4 w-full h-[300px]">
                    <ChartContainer>
                      <LineChartRoot data={data}>
                        <LineChartContent
                          showSecondaryLine={true}
                          primaryDataKey="online"
                          secondaryDataKey="cod"
                        />
                      </LineChartRoot>
                    </ChartContainer>
                    <Legend
                      primaryLegendName="online"
                      secondaryLengendName="cod"
                    />
                  </div>
                </CardRoot>
              </Grid1>
              <Grid2>
                <TopProductCard products={products} />
              </Grid2>
              <Grid3>
                <CardRoot></CardRoot>
              </Grid3>
              <Grid4>
                <CardRoot></CardRoot>
              </Grid4>
            </GridContent>
          </GridRoot>
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

export default SalesOverview;
