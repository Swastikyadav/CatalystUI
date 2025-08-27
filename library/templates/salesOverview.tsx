"use client";

import React, { ReactElement, useState } from "react";
import {
  BellIcon,
  BookmarkMinusIcon,
  BoxesIcon,
  ChartLineIcon,
  CoinsIcon,
  FilesIcon,
  Globe2Icon,
  PackageIcon,
  PanelLeftIcon,
  PresentationIcon,
  RocketIcon,
  SettingsIcon,
  ShoppingCartIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

import { Sidebar } from "@/library/blocks/sidebar";
import TopProductCard from "@/library/blocks/topProductsCard";
import {
  CardRoot,
  CardTitle,
  CardDescription,
} from "@/library/components/ui/card";
import { ChartContainer } from "@/library/components/charts/common/chartContainer";
import {
  LineChartRoot,
  LineChartContent,
  LineLegend,
} from "@/library/components/charts/lineChart";
import {
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  GridContent,
  GridRoot,
} from "@/library/blocks/bentoGrid";
import {
  BarGraphRoot,
  BarGraphContent,
  BarLegend,
} from "@/library/components/charts/barChart";
import {
  TableRoot,
  Table,
  TableHead,
  TableHeaderCell,
  TableRow,
  TableData,
  TableBody,
  TableCaption,
} from "@/library/components/ui/table";
import { ProfilePopoverRoot } from "@/library/blocks/profileCard";
import NavLink from "@/library/blocks/common/navLink";
import KpiCard from "@/library/blocks/kpiCard";

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

const kpis: Array<{
  title: string;
  description: string;
  growth: number;
  icon: ReactElement;
}> = [
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
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
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
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
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
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
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
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
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
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
];

const tableData: Array<{
  id: number;
  country: string;
  sales: number;
  value: number;
  bounce: number;
}> = [
  {
    id: 1,
    country: "United States",
    sales: 2500,
    value: 230900,
    bounce: 29.9,
  },
  {
    id: 2,
    country: "India",
    sales: 3900,
    value: 440000,
    bounce: 40.22,
  },
  {
    id: 3,
    country: "Germany",
    sales: 1400,
    value: 190700,
    bounce: 23.44,
  },
  {
    id: 4,
    country: "Brasil",
    sales: 562,
    value: 30900,
    bounce: 32.14,
  },
  {
    id: 5,
    country: "Britain",
    sales: 1627,
    value: 143960,
    bounce: 19.2,
  },
  {
    id: 6,
    country: "China",
    sales: 33023,
    value: 100223,
    bounce: 33.3,
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
              <ProfilePopoverRoot />
            </div>
          </span>
        </header>

        <section className="p-6 flex gap-2 flex-wrap lg:flex-nowrap">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.title} kpi={kpi} />
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
                    <LineLegend
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
                <CardRoot>
                  <CardTitle>Sales By Country</CardTitle>
                  <CardDescription>
                    <TableRoot>
                      <Table>
                        <TableCaption>Sales by country</TableCaption>
                        <TableHead>
                          <TableRow>
                            <TableHeaderCell>Country</TableHeaderCell>
                            <TableHeaderCell>Sales</TableHeaderCell>
                            <TableHeaderCell>Value</TableHeaderCell>
                            <TableHeaderCell>Bounce</TableHeaderCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {tableData.map((data) => (
                            <TableRow key={data.id}>
                              <TableData>{data.country}</TableData>
                              <TableData>
                                {data.sales.toLocaleString("en-US")}
                              </TableData>
                              <TableData>
                                ${data.value.toLocaleString("en-US")}
                              </TableData>
                              <TableData>{data.bounce}</TableData>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableRoot>
                  </CardDescription>
                </CardRoot>
              </Grid3>
              <Grid4>
                <CardRoot className="relative lg:-top-16">
                  <div className="w-full h-[200px]">
                    <ChartContainer>
                      <BarGraphRoot data={data}>
                        <BarGraphContent
                          showSecondaryBar
                          showXAxisLine={false}
                          showYAxisLine={false}
                          primaryDataKey="online"
                          secondaryDataKey="cod"
                        />
                      </BarGraphRoot>
                    </ChartContainer>
                    <BarLegend
                      primaryLegendName="online"
                      secondaryLengendName="cod"
                    />
                  </div>
                </CardRoot>
              </Grid4>
            </GridContent>
          </GridRoot>
        </section>
      </main>
    </div>
  );
}

export default SalesOverview;
