import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { nodePolyfills } from "vite-plugin-node-polyfills"

export default defineConfig({
  build: {
    lib: {
      entry: ["./src/index.ts"],
      formats: ["es"],
    },
    outDir: "dist",
    minify: true,
    emptyOutDir: true,
  },
  plugins: [dts(), nodePolyfills({ protocolImports: true })],
})
