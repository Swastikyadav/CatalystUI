import { CardDescription, CardRoot, CardTitle } from "@/components/ui/card";
import { cx } from "@/lib/utils";
import React, { ReactElement } from "react";

function KpiCard({
  kpi,
}: {
  kpi: {
    title: string;
    description: string;
    growth: number;
    icon: ReactElement;
  };
}) {
  return (
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
  );
}

export default KpiCard;
