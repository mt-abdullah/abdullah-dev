import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // <-- 1. Import the 'path' module

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isProduction = mode === "production";

  return {
    base: isProduction ? `/${env.VITE_REPO_NAME}/` : "/",
    plugins: [react(), tailwindcss()],
    
    // v-- 2. ADD THIS ENTIRE 'resolve' BLOCK v--
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // ^-- END OF BLOCK TO ADD --^

    server: {
      open: true,
      host: true,
      proxy: {
        "/api": {
          target: "http://localhost:5173",
          changeOrigin: true,
          secure: true,
        },
      },
    },
  };
});