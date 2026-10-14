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
                mainHi: resolve(__dirname, 'hi/index.html'),
                ghazipurHi: resolve(__dirname, 'hi/ghazipur/index.html'),
                varanasiHi: resolve(__dirname, 'hi/varanasi/index.html'),
            },
        },
    },
});
