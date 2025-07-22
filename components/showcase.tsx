"use client";

import React from "react";

import KpiCard from "@/library/blocks/kpiCard";
import { ProfilePopoverContent } from "@/library/blocks/profileCard";
import TopProductCard from "@/library/blocks/topProductsCard";
import { CardRoot, CardTitle } from "@/library/components/ui/card";
import { DollarSignIcon } from "lucide-react";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "@/library/components/ui/avatar";
import { Button } from "@/library/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableData,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/library/components/ui/table";
import { ChartContainer } from "@/library/components/charts/common/chartContainer";
import {
  LineChartContent,
  LineChartRoot,
} from "@/library/components/charts/lineChart";
import {
  BarGraphContent,
  BarGraphRoot,
} from "@/library/components/charts/barChart";

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

function ShowCase() {
  return (
    <section>
      <CardRoot>
        <CardTitle className="text-lg">Some Components Example</CardTitle>

        <div className="flex items-start gap-4 justify-around my-12 flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-4/12 flex flex-col items-start gap-4">
            <KpiCard
              kpi={{
                title: "Monthly Revenue",
                description: "$29,332",
                growth: 23,
                icon: <DollarSignIcon />,
              }}
            />
            <div className="flex items-center">
              <AvatarRoot>
                <AvatarImage imgUrl="https://avatars.githubusercontent.com/u/44374494" />
                <AvatarFallback>SW</AvatarFallback>
              </AvatarRoot>
              <AvatarRoot className="relative right-2">
                <AvatarImage imgUrl="https://avatars.githubusercontent.com/u/44374495" />
                <AvatarFallback>SW</AvatarFallback>
              </AvatarRoot>
              <AvatarRoot className="relative right-4">
                <AvatarImage imgUrl="https://avatars.githubusercontent.com/u/44378498" />
                <AvatarFallback>SW</AvatarFallback>
              </AvatarRoot>
              <AvatarRoot className="relative right-6">
                <AvatarImage imgUrl="https://avatars.githubusercontent.com/u/44372499" />
                <AvatarFallback>SW</AvatarFallback>
              </AvatarRoot>
              <AvatarRoot className="relative right-8">
                <AvatarImage imgUrl="https://avatars.githubusercontent.com/u/24374498" />
                <AvatarFallback>SW</AvatarFallback>
              </AvatarRoot>
              <Button>Read Docs</Button>
            </div>
            <div className="relative w-full h-[280px]">
              <ChartContainer>
                <LineChartRoot data={data}>
                  <LineChartContent
                    showSecondaryLine={true}
                    primaryDataKey="online"
                    secondaryDataKey="cod"
                  />
                </LineChartRoot>
              </ChartContainer>
            </div>
          </div>
          <div className="">
            <ProfilePopoverContent />
            <div className="relative h-[200px] mt-4">
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
            </div>
          </div>
          <TopProductCard className="w-full lg:w-4/12" products={products} />
        </div>
        <CardRoot>
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
                    <TableData>{data.sales.toLocaleString("en-US")}</TableData>
                    <TableData>${data.value.toLocaleString("en-US")}</TableData>
                    <TableData>{data.bounce}</TableData>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableRoot>
        </CardRoot>
      </CardRoot>
    </section>
  );
}

export default ShowCase;
