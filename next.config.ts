import createMDX from "@next/mdx";
import { NextConfig } from "next";
import { remarkPlugins } from "@prose-ui/core";

const nextConfig : NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: remarkPlugins(),
  }
});

export default withMDX(nextConfig);
