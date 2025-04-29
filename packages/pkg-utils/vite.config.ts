import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'node:path'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      root: path.resolve(__dirname, 'test'),
    }
  } else {
    return {
      build: {
        lib: {
          entry: 'src/index.ts',
          name: 'PkgUtils',
          formats: ['es', 'cjs'],
          fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
          external: [],
          output: {
            globals: {}
          }
        }
      },
      plugins: [
        dts({
          include: ['src/'],
          outDir: 'dist',
        })
      ]
    }
  }
})
