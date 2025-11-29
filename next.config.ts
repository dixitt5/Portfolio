import createMDX from "@next/mdx";
import { NextConfig } from "next";
import { remarkPlugins } from "@prose-ui/core";

const nextConfig : NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: remarkPlugins(),
  }
});

export default withMDX(nextConfig);
