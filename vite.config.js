
import { defineConfig } from 'vite'

export default defineConfig({
  logLevel: 'error',
  build: {
    outDir: './static',
    rollupOptions: {
      output: {
        chunkFileNames: '[name].js',
        entryFileNames: '[name].js',
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? '')) {
            return 'main.css'
          }
          
          return 'assets/[name][extname]'
        },
      },
      
      input: {
        main: './src/client/scripts/main.js',
        css: './src/client/styles/style.css'
      }
    }
  }
})