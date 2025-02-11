import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
    minify: 'esbuild',
    cssMinify: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@tsparticles/engine', '@tsparticles/react', '@tsparticles/slim']
  },
  server: {
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
})
