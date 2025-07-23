import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { mdxComponents } from "@/components/mdxComponents";

export async function getMdxContent(slug: string) {
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");

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
