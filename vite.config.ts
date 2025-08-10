import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      
      onwarn(warning, warn) {
        // Exibe todos os avisos do Rollup na build
        console.warn("[ROLLUP WARNING]", warning.message)
      }
    },
  }
})
