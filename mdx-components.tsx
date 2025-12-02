import { mdxComponents } from "@prose-ui/next";
import type { MDXComponents } from "mdx/types";

function Table(props: React.ComponentProps<"table">) {
  return (
    <div className="table-wrapper">
      <table {...props} />
    </div>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxComponents,
    table: Table,
  };
}
