import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  /*
    For local development, "/" is perfect.

    If you later deploy this to GitHub Pages, change this to:
    base: "/GSC_Explore_Webpage/",

    Or if your repo name is different, use:
    base: "/your-repo-name/",
  */
  base: "/gsc_explore_webpage/"
});