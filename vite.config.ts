import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: this must match your GitHub repo name exactly, wrapped in
// slashes — e.g. if your repo is github.com/you/tedx-site-v1, this stays
// "/tedx-site-v1/". If you rename the repo, update this to match, or the
// site will load with broken CSS/JS on GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: "/tedx-site-v1/",
});
