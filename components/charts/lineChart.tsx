import React, { ReactElement, ReactNode } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  TooltipProps,
} from "recharts";
import { CardRoot, CardTitle, CardDescription } from "@/components/ui/card";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { cx } from "@/lib/utils";

function ChartContainer({ children }: { children: ReactElement }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {children}
    </ResponsiveContainer>
  );
}

function LineChartRoot({
  width = 300,
  height = 100,
  data,
  children,
}: {
  width?: number;
  height?: number;
  data: {
    name: string;
    cod: number;
    online: number;
    amt: number;
  }[];
  children: ReactNode;
}) {
  return (
    <LineChart width={width} height={height} data={data}>
      {children}
    </LineChart>
  );
}

function LineChartContent({
  primaryStroke = "#155dfc",
  secondaryStroke = "#00a63e",
  showPrimaryLine = true,
  showSecondaryLine = false,
  primaryDataKey,
  secondaryDataKey,
}: {
  primaryStroke?: string;
  secondaryStroke?: string;
  showPrimaryLine?: boolean;
  showSecondaryLine?: boolean;
  primaryDataKey: string;
  secondaryDataKey: string;
}) {
  return (
    <>
      {showPrimaryLine && (
        <Line
          type="monotone"
          dataKey={primaryDataKey}
          stroke={primaryStroke}
          strokeWidth={2}
        />
      )}
      {showSecondaryLine && (
        <Line
          type="monotone"
          dataKey={secondaryDataKey}
          stroke={secondaryStroke}
          strokeWidth={2}
        />
      )}
      <CartesianGrid
        strokeDasharray="6 6"
        vertical={false}
        className="text-gray-"
      />
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        tick={{ fontSize: 12, fill: "#4a5565" }} // dark: "#99a1af"
        tickMargin={20}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        tick={{ fontSize: 12, fill: "#4a5565" }} // dark: "#99a1af"
        tickMargin={20}
      />
      <Tooltip
        content={(tooltipProps) => (
          <CustomTooltip
            {...tooltipProps}
            primaryDataKey={primaryDataKey}
            secondaryDataKey={secondaryDataKey}
          />
        )}
      />
    </>
  );
}

function Legend({
  primaryLegendName,
  secondaryLengendName = "",
}: {
  primaryLegendName: string;
  secondaryLengendName?: string;
}) {
  return (
    <div className="absolute -top-4 right-0 mt-2 mr-4 flex gap-4 text-sm">
      <div className="flex items-center gap-2">
        <span className="block h-2 w-2 rounded-full bg-blue-500" />
        <span className="text-gray-700 dark:text-gray-200">
          {primaryLegendName}
        </span>
      </div>
      {secondaryLengendName && (
        <div className="flex items-center gap-2">
          <span className="block h-2 w-2 rounded-full bg-green-500" />
          <span className="text-gray-700 dark:text-gray-200">
            {secondaryLengendName}
          </span>
        </div>
      )}
    </div>
  );
}

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  primaryDataKey: string;
  secondaryDataKey: string;
}
const CustomTooltip = ({
  active,
  // @ts-expect-error - TODO: Add proper types for Recharts tooltip later
  payload,
  // @ts-expect-error - TODO: Add proper types for Recharts tooltip later
  label,
  primaryDataKey,
  secondaryDataKey,
}: CustomTooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <CardRoot>
      <CardTitle>{label}</CardTitle>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {payload.map((load: any) => (
        <CardDescription key={load.name} className="flex items-center gap-2">
          <span
            className={cx(
              // base
              "block h-2 w-2 rounded-full bg-blue-500",
              // primary stroke
              load.dataKey === primaryDataKey ? "bg-blue-500" : "",
              // secondary stroke
              load.dataKey === secondaryDataKey ? "bg-green-600" : ""
            )}
          />
          <span className="text-gray-700 dark:text-gray-200">
            ${load.value.toLocaleString("en-US")}
          </span>
        </CardDescription>
      ))}
    </CardRoot>
  );
};

export { ChartContainer, LineChartRoot, LineChartContent, Legend };
