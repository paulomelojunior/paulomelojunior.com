import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    tailwindcss(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  esbuild: {
    loader: 'ts',
    include: /\.ts$/,
  },
  build: {
    outDir: 'docs',
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      treeshake: 'recommended',
      input: {
        404: '404.html',
        main: 'index.html',
        projects: 'projects.html',
        lastProject: 'last-project.html',
      },
      output: {
        hashCharacters: 'hex',
        assetFileNames: 'src/[hash:6].[ext]',
        chunkFileNames: 'src/[hash:6].js',
        entryFileNames: 'src/[hash:6].js',
        manualChunks: {
          gsap: ['gsap'],
          lenis: ['lenis'],
          i18n: ['i18next'],
        },
      },
    },
  },
  server: {
    port: 2121,
    open: true,
    host: true,
  },
})
