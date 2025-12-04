
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure Vite looks for files in the root directory
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // This splits the large "index.js" into smaller, separate files
        manualChunks(id) {
          // Put Google GenAI in its own file
          if (id.includes('@google/genai')) {
            return 'genai';
          }
          // Put React and other main libraries in a "vendor" file
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})