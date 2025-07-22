import React, { ReactNode } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltip } from "@/library/components/charts/common/customTooltip";
import { cx } from "@/lib/utils";

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
  showTick = true,
}: {
  primaryStroke?: string;
  secondaryStroke?: string;
  showPrimaryLine?: boolean;
  showSecondaryLine?: boolean;
  primaryDataKey: string;
  secondaryDataKey: string;
  showTick?: boolean;
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
        className="text-gray-200"
      />
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        tick={showTick ? { fontSize: 12, fill: "#4a5565" } : false} // dark: "#99a1af"
        tickMargin={20}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        tick={showTick ? { fontSize: 12, fill: "#4a5565" } : false} // dark: "#99a1af"
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
    <div
      className={cx(
        // base
        "absolute -top-4 right-0 mt-2 mr-4 flex gap-4 text-sm"
      )}
    >
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

export { LineChartRoot, LineChartContent, Legend as LineLegend };
