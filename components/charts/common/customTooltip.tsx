import { CardDescription, CardRoot, CardTitle } from "@/components/ui/card";
import { cx } from "@/lib/utils";
import React from "react";
import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

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
      <CardTitle>{payload[0].payload.name}</CardTitle>
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

export { CustomTooltip };
