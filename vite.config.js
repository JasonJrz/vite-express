
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: './static',
    rollupOptions: {
      output: {
        chunkFileNames: 'd.js',
        entryFileNames: '[name].js',
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? '')) {
            return 'd.css'
          }
          
          return 'assets/[name][extname]'
        },
      },
      // input: './src/client/scripts/main.js',
      input: {
        main: './src/client/scripts/main.js',
        css: './src/client/styles/style.css'
      }
    }
  }
})