import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				serif: ['Prata', ...defaultTheme.fontFamily.serif],
			},
			boxShadow: {
				'glow': '0 0 0.25rem 0.25rem rgb(0 0 0 / 0.05)'
			}
		},
	},
	plugins: [],
	safelist: [
		'hover:bg-blue-400/40',
		'hover:shadow-blue-400/40',
		'hover:border-blue-400/40',
		'hover:text-blue-600',
		'hover:bg-red-400/40',
		'hover:shadow-red-400/40',
		'hover:border-red-400/40',
		'hover:text-red-600',
		'hover:bg-orange-400/40',
		'hover:shadow-orange-400/40',
		'hover:border-orange-400/40',
		'hover:text-orange-600',
		'hover:bg-sky-400/40',
		'hover:shadow-sky-400/40',
		'hover:border-sky-400/40',
		'hover:text-sky-600',
		'hover:bg-cyan-400/40',
		'hover:shadow-cyan-400/40',
		'hover:border-cyan-400/40',
		'hover:text-cyan-600',
	]
}
