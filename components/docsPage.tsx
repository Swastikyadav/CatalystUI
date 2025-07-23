import { ReactElement, ReactNode } from "react";

import { getMdxContent } from "@/lib/mdx";

export default function DocsPage({
  children,
  content,
  frontmatter,
}: {
  children: ReactNode;
  content: ReactElement;
  frontmatter: {
    title: string;
    description?: string;
  };
}) {
  return (
    <div className="flex">
      {children}
      <div className="w-full mx-auto">
        <article className="prose py-6 px-2 w-75 sm:w-full mx-auto">
          <h1 className="text-2xl lg:text-4xl">{frontmatter.title}</h1>
          <p>{content}</p>
        </article>
      </div>
    </div>
  );
}
