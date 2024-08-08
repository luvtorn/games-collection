import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			injectRegister: false,

			pwaAssets: {
				disabled: false,
				config: true,
			},

			manifest: {
				name: 'Luvtorn Games Collection',
				short_name: 'luvtorn-games',
				description: 'collection of luvtorn`s games',
				display: 'standalone',
				theme_color: '#333333',
				icons: [
					{
						src: '/512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: '/192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/72x72.png',
						sizes: '72x72',
						type: 'image/png',
					},
					{
						src: '/48x48.png',
						sizes: '48x48',
						type: 'image/png',
					},
				],
			},

			workbox: {
				globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
				cleanupOutdatedCaches: true,
				clientsClaim: true,
			},

			devOptions: {
				enabled: true,
				navigateFallback: 'index.html',
				suppressWarnings: true,
				type: 'module',
			},
		}),
	],
	base: '/games-collection',
})
