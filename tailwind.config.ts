import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"mesh-background":
					"radial-gradient(at 23% 9%, hsla(321,100%,64%,1) 0px, transparent 50%),radial-gradient(at 53% 77%, hsla(341,100%,77%,1) 0px, transparent 50%),radial-gradient(at 77% 93%, hsla(39,100%,66%,1) 0px, transparent 50%),radial-gradient(at 20% 38%, hsla(13,100%,69%,1) 0px, transparent 50%),radial-gradient(at 23% 25%, hsla(67,100%,70%,1) 0px, transparent 50%),radial-gradient(at 78% 75%, hsla(32,100%,72%,1) 0px, transparent 50%),radial-gradient(at 20% 21%, hsla(283,100%,64%,1) 0px, transparent 50%);",
			},
			backgroundColor: {
				"blue-light": "#99fffd",
			},
			animation: {
				gradient: "gradient 7s ease infinite",
			},
			keyframes: {
				gradient: {
					"0%": {
						"background-position": "0% 20%",
					},
					"25%": {
						"background-position": "100% 50%",
					},
					"50%": {
						"background-position": "50% 70%",
					},
					"100%": {
						"background-position": "0% 20%",
					},
				},
			},

		},
	},
	plugins: [],
};
export default config;
