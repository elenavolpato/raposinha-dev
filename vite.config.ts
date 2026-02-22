import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import devtools from "solid-devtools/vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [devtools(), solidPlugin(), solid(), tailwindcss()],

  base: "/",
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
