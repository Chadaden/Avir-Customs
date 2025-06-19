import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Netlify-specific Vite configuration for static-only builds
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist-static"),
    emptyOutDir: true,
    // Ensure proper base path for static deployment
    base: "/",
    // Generate manifest for better caching
    manifest: true,
    // Optimize for production
    minify: true,
    sourcemap: false,
  },
  // Remove server configuration for static build
  define: {
    // Replace any server-dependent environment variables
    'import.meta.env.VITE_API_URL': JSON.stringify(''),
  },
});