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
        brand: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        surface: {
          white: '#FFFFFF',
          soft:  '#F8FAFC',
          muted: '#F1F5F9',
          border: '#E2E8F0',
        },
        ink: {
          900: '#0F172A',
          700: '#1E293B',
          500: '#334155',
          400: '#475569',
          300: '#64748B',
          200: '#94A3B8',
          100: '#CBD5E1',
        },
        success: { DEFAULT: '#059669', light: '#D1FAE5' },
        warn:    { DEFAULT: '#D97706', light: '#FEF3C7' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card:  '0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04)',
        hover: '0 10px 30px rgba(30,64,175,.12), 0 4px 8px rgba(0,0,0,.06)',
        blue:  '0 8px 24px rgba(30,64,175,.22)',
      },
    },
  },
  plugins: [],
}
export default config
