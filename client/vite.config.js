import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures correct paths in production
  build: {
    outDir: "dist", // Ensure Vite builds to the correct folder
  },
  server: {
    proxy: {
      "/": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
