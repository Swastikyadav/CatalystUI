import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { mdxComponents } from "@/components/mdxComponents";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function getMdxContent(slug: string) {
  const res = await fetch(`${BASE_URL}/content/${slug}.mdx`);

  if (!res.ok) {
    throw new Error(`MDX file not found at /content/${slug}.mdx`);
  }

  const raw = await res.text();

  const { content, frontmatter } = await compileMDX({
    source: raw,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, { theme: "catppuccin-latte" }]],
      },
    },
  });

  return {
    content,
    frontmatter,
  };
}
