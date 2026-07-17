/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'node:url';

const workspaceRoot = fileURLToPath(new URL('.', import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: workspaceRoot,
  },
};

export default nextConfig;