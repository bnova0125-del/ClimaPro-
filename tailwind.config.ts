import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 ClimaPro Color Palette
        navy: {
          DEFAULT: '#0a1628',
          mid: '#112244',
          light: '#0d2a4a',
        },
        ice: {
          DEFAULT: '#e8f4fd',
          dark: '#d0eaf9',
        },
        sky: {
          DEFAULT: '#2a8fd4',
          light: '#5bb3e8',
          dark: '#1a7abf',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#d4b76a',
        },
        // Aliases pour compatibilité avec le code existant
        primary: {
          50: '#e8f4fd',
          100: '#d0eaf9',
          200: '#a1d5f3',
          300: '#72c0ed',
          400: '#5bb3e8',
          500: '#2a8fd4',
          600: '#1a7abf',
          700: '#1a6aaa',
          800: '#112244',
          900: '#0a1628',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-climapro': 'linear-gradient(135deg, #0a1628 0%, #112244 50%, #0d2a4a 100%)',
        'gradient-sky': 'linear-gradient(135deg, #2a8fd4, #1a6aaa)',
      },
    },
  },
  plugins: [],
}
export default config
