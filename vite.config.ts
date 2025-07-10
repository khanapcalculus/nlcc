import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Changed from '/lccrtc/' to '/' for Render.com
  server: {
    host: true,
    proxy: {
      '/ws': {
        target: process.env.WEBSOCKET_URL || 'ws://localhost:3001', // Use environment variable
        ws: true,
      },
    },
  },
})
