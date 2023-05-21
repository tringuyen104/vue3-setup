import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('./src', import.meta.url)),
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
              @import "./src/scss/variable.scss";
              @import "./src/scss/styles.scss";
            `,
            },
        },
    },
    define: {
      __API: JSON.stringify('http://localhost:8888/')
    }
});
