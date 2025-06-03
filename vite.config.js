import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/elevate-animation/", // 👈 Add this line (your repo name here)
});
