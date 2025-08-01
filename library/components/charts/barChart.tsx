import React, { ReactNode } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { CustomTooltip } from "@/library/components/charts/common/customTooltip";
import { cx } from "@/lib/utils";

function BarGraphRoot({
  width = 150,
  height = 40,
  data,
  children,
}: {
  width?: number;
  height?: number;
  data: { online: number; cod: number }[];
  children: ReactNode;
}) {
  return (
    <BarChart width={width} height={height} data={data}>
      {children}
    </BarChart>
  );
}

function BarGraphContent({
  showXAxisLine = true,
  showYAxisLine = true,
  primaryStroke = "#155dfc",
  secondaryStroke = "#00a63e",
  showPrimaryBar = true,
  showSecondaryBar = false,
  primaryDataKey,
  secondaryDataKey,
  showTooltip = true,
}: {
  showXAxisLine?: boolean;
  showYAxisLine?: boolean;
  primaryStroke?: string;
  secondaryStroke?: string;
  showPrimaryBar?: boolean;
  showSecondaryBar?: boolean;
  primaryDataKey: string;
  secondaryDataKey: string;
  showTooltip?: boolean;
}) {
  return (
    <>
      {showPrimaryBar && <Bar dataKey="online" fill={primaryStroke} />}
      {showSecondaryBar && <Bar dataKey="cod" fill={secondaryStroke} />}
      <CartesianGrid
        strokeDasharray="6 6"
        vertical={false}
        className="text-gray-"
      />
      {showXAxisLine && (
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#4a5565" }} // dark: "#99a1af"
          tickMargin={20}
        />
      )}
      {showYAxisLine && (
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#4a5565" }} // dark: "#99a1af"
          tickMargin={20}
        />
      )}
      {showTooltip && (
        <Tooltip
          cursor={{ fill: "#4a5565", opacity: 0.3 }} // dark opacity: 0.6
          content={(tooltipProps) => (
            <CustomTooltip
              {...tooltipProps}
              primaryDataKey={primaryDataKey}
              secondaryDataKey={secondaryDataKey}
            />
          )}
        />
      )}
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
        "absolute top-0 right-0 mt-2 mr-4 flex gap-4 text-sm"
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

export { BarGraphRoot, BarGraphContent, Legend as BarLegend };
