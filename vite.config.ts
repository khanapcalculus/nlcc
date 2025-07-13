import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/lccrtc/' : '/',
  build: {
    outDir: 'dist'
  },
  server: {
    host: true,
    proxy: {
      '/ws': {
        target: 'ws://192.168.31.158:3001',
        ws: true,
      },
    },
  },
})
