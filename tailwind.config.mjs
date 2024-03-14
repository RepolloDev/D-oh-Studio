/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"geist": ['Geist Sans', "sans-serif"]
			},
			colors: {
				// Homer Simpson's colors
				"yellow-faded": "#f9e2af",
				"yellow": "#df8e1d",
				"brown": "#8b4513",
				"blue-faded": "#89b4fa",
				"blue": "#1e66f5",
				"base": "#303446",
				"base-light": "#737994",
			}
		},
	},
	plugins: [],
}

