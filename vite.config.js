import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/index.jsx',
            refresh: ['resources/js/**'],
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@API": "/resources/js/API",
            "@App": "/resources/js/App",
            "@Assets": "/resources/js/Assets",
            "@Components": "/resources/js/Components",
            "@Pages": "/resources/js/Pages",
            "@Providers": "/resources/js/Providers",
            "@Store": "/resources/js/Store",
            "@Styles": "/resources/js/Styles",
            "@Utilities": "/resources/js/Utilities",
        }
    }
});
