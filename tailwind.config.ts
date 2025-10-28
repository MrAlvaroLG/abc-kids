import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
        colors: {
            navy: {
            900: '#001D3D',
            },
            blue: {
            800: '#003566',
            },
            accent: {
            DEFAULT: '#FFC300',
            hover: '#FFD60A',
            },
            danger: '#DC562E',
            bg: '#EBEBEB',
            surface: '#FFFFFF',
            dark: '#0B1220',
            light: '#FFFFFF',
        },
        fontFamily: {
            sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
            display: ['var(--font-fredoka)', 'cursive'],
        },
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            'gradient-primary': 'linear-gradient(135deg, #001D3D 0%, #003566 100%)',
            'gradient-accent': 'linear-gradient(135deg, #FFC300 0%, #FFD60A 100%)',
        },
        },
    },
    plugins: [],
} satisfies Config;
