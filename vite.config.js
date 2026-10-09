import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ghazipur: resolve(__dirname, 'ghazipur/index.html'),
                varanasi: resolve(__dirname, 'varanasi/index.html'),
            },
        },
    },
});
