import React, { ReactElement } from "react";
import { ResponsiveContainer } from "recharts";

function ChartContainer({ children }: { children: ReactElement }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {children}
    </ResponsiveContainer>
  );
}

export { ChartContainer };
