import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      "@": path.resolve(__dirname, "./src"),
      "@Components": path.resolve(__dirname, "./src/components"),
      "@Pages": path.resolve(__dirname, "./src/pages"),
      "@Types": path.resolve(__dirname, "./src/types"),
      "@Utils": path.resolve(__dirname, "./src/utils"),
    }
  }
})
