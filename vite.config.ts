import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path, { extname, relative } from 'path'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { glob } from 'glob'
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: ['main.ts', 'components'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, 'main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'framer-motion'],
      input: Object.fromEntries(
        glob
          .sync(['main.ts', 'components/**/*.{ts,tsx}'], {
            ignore: ['components/**/*.d.ts'],
          })
          .map((file) => {
            const parsed = path.parse(file)
            const newPath =
              parsed.dir === ''
                ? parsed.name
                : relative(
                    'components',
                    file.slice(0, file.length - extname(file).length)
                  )
            return [newPath, fileURLToPath(new URL(file, import.meta.url))]
          })
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
})
