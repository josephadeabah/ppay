import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

// Get the current file name and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // Modify Webpack cache settings with an absolute path
    config.cache = {
      type: "filesystem",
      cacheDirectory: resolve(__dirname, ".next/cache/webpack"),
      buildDependencies: {
        config: [__filename],
      },
      compression: false, // Disables string compression to avoid the warning
    };

    return config;
  },
};

export default config;
