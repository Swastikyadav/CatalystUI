import React, { ReactElement } from "react";

import DocsPage from "@/components/docsPage";
import Header from "@/components/header";
import { getMdxContent } from "@/lib/mdx";

// @ts-expect-error - Disables types checking for props of this component
async function DocsLayout({ children, params }: DocsLayoutProps) {
  const { slug } = await params;
  const { content, frontmatter } = (await getMdxContent(slug)) as {
    content: ReactElement;
    frontmatter: {
      title: string;
      description?: string;
    };
  };
  return (
    <>
      <Header />
      <DocsPage content={content} frontmatter={frontmatter}>
        {children}
      </DocsPage>
    </>
  );
}

export default DocsLayout;
