import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    container: {
      center: true
    },
    extend: {
      ringWidth: {
          'none': '0px'
      },
      colors: {
        vermilion: {
          50: '#fff5ec',
          100: '#ffe9d3',
          200: '#ffcea5',
          300: '#ffac6d',
          400: '#ff7d32',
          500: '#ff5a0a',
          600: '#ff3f00',
          700: '#cc2a02',
          800: '#a1220b',
          900: '#821f0c',
          950: '#460c04',
        },
        woodsmoke: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#161616',
        },

      }
    },
  },
  plugins: [],
} satisfies Config

