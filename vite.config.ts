import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure Vite looks for files in the root directory since we aren't using a src/ folder
  root: '.',
  build: {
    outDir: 'dist',
  }
})