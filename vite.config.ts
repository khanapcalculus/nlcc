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
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || ''
          const info = name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name].[hash][extname]`
          }
          return `assets/[name].[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
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
