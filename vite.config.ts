import { vitePlugin as remix } from "@remix-run/dev"
import { remixRoutes } from "remix-routes/vite"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    remix({
      ssr: false,
    }),
    tsconfigPaths(),
    remixRoutes({
      strict: true,
    }),
  ],
})
