import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import manifest from './public/manifest.json' assert { type: 'json' };

const manifestForPlugin = {
	workbox: {
		globPatterns: ['**/*'],
	},
	includeAssets: ['**/*'],
	manifest,
};

// https://vitejs.dev/config/
export default defineConfig({
	base: '/my-PWA-demo-app/',
	plugins: [react(), VitePWA(manifestForPlugin)],
});
