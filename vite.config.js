import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',       // should point to project root where index.html is
  build: {
    outDir: 'dist' // matches Netlify publish directory
  }
})
