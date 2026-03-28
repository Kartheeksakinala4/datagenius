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
          dark: '#0F172A',
          card: '#1E293B',
          border: '#334155',
        },
        amber: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
