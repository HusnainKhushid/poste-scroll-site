import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE is set by the deploy workflow to "/<repo>/" for GitHub Pages
export default defineConfig({
  base: process.env.BASE || '/',
  plugins: [react()],
})
