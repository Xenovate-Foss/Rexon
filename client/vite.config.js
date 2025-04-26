import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../app",
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/api/": "/",
      "/socket.io": {
        target: "/", // Your Socket.io server address
        changeOrigin: true,
        ws: true, // Important: This enables WebSocket proxying
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/hooks": path.resolve(__dirname, "./hooks"),
      "@components": path.resolve(__dirname, "./components"),
    },
  },
});
