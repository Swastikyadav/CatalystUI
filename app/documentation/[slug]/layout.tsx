import DocsPage from "@/components/docsPage";
import Header from "@/components/header";
import React, { ReactNode } from "react";

function DocsLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug: string };
}) {
  return (
    <>
      <Header />
      <DocsPage params={params}>{children}</DocsPage>
    </>
  );
}

export default DocsLayout;
