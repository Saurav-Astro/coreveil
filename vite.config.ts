import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8090,
    // Security: Prevent accessing .env files
    fs: {
      strict: true,
      allow: [".", "node_modules"],
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.gltf", "**/*.glb"],
  build: {
    target: "esnext",
    minify: "terser",
    // Security: Enable source maps in development only
    sourcemap: mode === "development",
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["lucide-react"],
          aos: ["aos"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
}));
