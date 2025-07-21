import React, { ReactElement, ReactNode } from "react";

import { cx } from "@/lib/utils";

function TableRoot({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactElement;
}) {
  return (
    <div>
      <div
        // scrol on mobile
        className={cx("w-full overflow-auto whitespace-nowrap", className)}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
TableRoot.displayName = "Table";

function Table({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <table
      className={cx(
        // base
        "w-full caption-bottom border-b",
        // border color
        "border-gray-200 dark:border-gray-800",
        className
      )}
      {...props}
    >
      {children}
    </table>
  );
}
Table.displayName = "Table";

function TableHead({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <thead className={cx(className)} {...props}>
      {children}
    </thead>
  );
}
TableHead.displayName = "TableHead";

function TableHeaderCell({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <th
      className={cx(
        // base
        "border-b px-4 py-3.5 text-left text-sm font-semibold",
        // text-color
        "text-gray-900 dark:text-gray-50",
        // border color
        "border-gray-200 dark:border-gray-800",
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
}
TableHeaderCell.displayName = "TableHead";

function TableBody({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <tbody
      className={cx(
        // base
        "divide-y",
        // divide color
        "divide-gray-200 dark:divide-gray-800",
        className
      )}
      {...props}
    >
      {children}
    </tbody>
  );
}
TableBody.displayName = "TableBody";

function TableRow({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <tr
      className={cx(
        "[&_td:last-child]:pr-4 [&_th:last-child]:pr-4",
        "[&_td:first-child]:pl-4 [&_th:first-child]:pl-4",
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
}
TableRow.displayName = "TableRow";

function TableData({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <td
      className={cx(
        //base
        "p-4 text-sm",
        // text color
        "text-gray-600 dark:text-gray-400",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
}
TableData.displayName = "TableData";

function TableFoot({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <tfoot
      className={cx(
        // base
        "border-t text-left font-medium",
        // text color
        "text-gray-900 dark:text-gray-50",
        // border color
        "border-gray-200 dark:border-gray-800",
        className
      )}
      {...props}
    >
      {children}
    </tfoot>
  );
}
TableFoot.displayName = "TableFoot";

function TableCaption({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <caption
      className={cx(
        // base
        "mt-3 px-3 text-center text-sm",
        // text color
        "text-gray-500 dark:text-gray-500",
        className
      )}
      {...props}
    >
      {children}
    </caption>
  );
}
TableCaption.displayName = "TableCaption";

export {
  TableRoot,
  Table,
  TableHead,
  TableHeaderCell,
  TableRow,
  TableData,
  TableBody,
  TableFoot,
  TableCaption,
};
