import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/', // Set the base URL to the root of your application
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app/frontend')
    }
  },
  root: path.resolve(__dirname, 'app/frontend'), // Set the root directory for Vite
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Output directory for the build
    emptyOutDir: true, // Ensure the output directory is emptied before building
  },
  server: {
    port: 3000, // Set the development server port
    open: true, // Open the browser automatically
  }
})