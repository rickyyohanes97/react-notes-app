import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  base: '/react-notes-app/', //
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
})