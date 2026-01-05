import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom'],
    tsconfig: 'tsconfig.build.json',
    // Ensure we don't bundle the Next.js app code
    ignoreWatch: ['app/**/*', 'public/**/*'],
});
