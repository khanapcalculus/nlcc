import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lccrtc/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
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
