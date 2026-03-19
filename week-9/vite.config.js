import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      exclude: ['**/*.test.ts', '**/*.spec.ts'],
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['cjs', 'es'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: false,
    rollupOptions: {
      external: [
        'fs',
        'fs/promises',
        'path',
        'os',
      ],
      output: {
        esModule: true,
        exports: 'named',
        generatedCode: {
          constBindings: true,
          objectShorthand: true,
        },
      },
    },
    target: 'node18',
  },
  server: {
    open: false,
  },
  ssr: {
    target: 'node',
    noExternal: [], 
  },
});