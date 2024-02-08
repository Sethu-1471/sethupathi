import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import svgr from 'vite-plugin-svgr';

const filesNeedToExclude = ['ecosystem.config.js'];

const filesPathToExclude = filesNeedToExclude.map(src => {
	return fileURLToPath(new URL(src, import.meta.url));
});

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	plugins: [react(), svgr({ svgrOptions: { ref: true } })],
	build: {
		manifest: true,
		rollupOptions: {
			external: [...filesPathToExclude],
		},
	},
});
