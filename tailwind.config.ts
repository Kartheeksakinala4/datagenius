import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020d1a',
          900: '#060f1f',
          800: '#0a1628',
          700: '#0d1f3c',
          600: '#122448',
          500: '#1a3360',
          400: '#234a8a',
        },
        blue: {
          primary: '#1565c0',
          light: '#2196f3',
          bright: '#42a5f5',
          pale: '#90caf9',
        },
        silver: {
          100: '#f8fafc',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        },
        primary: {
          DEFAULT: '#1565C0',
          light: '#2196F3',
          dark: '#0D47A1',
        },
        accent: {
          DEFAULT: '#10B981',
          dark: '#059669',
        },
        surface: {
          dark: '#0a1628',
          card: '#0d1f3c',
          border: '#1e3a5f',
          hover: '#12284a',
        },
        amber: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 15% 15%, rgba(21, 101, 192, 0.5) 0%, transparent 50%), radial-gradient(ellipse at 85% 85%, rgba(13, 71, 161, 0.3) 0%, transparent 50%)',
        'card-gradient': 'linear-gradient(135deg, rgba(21, 101, 192, 0.1) 0%, rgba(10, 22, 40, 0) 100%)',
      },
    },
  },
  plugins: [],
}

export default config
