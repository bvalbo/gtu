/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Natural palette inspired by the trail run poster
        'forest': {
          50: '#f2f6f3',
          100: '#e0eae3',
          200: '#c1d5c8',
          300: '#9bbaaa',
          400: '#769c8a',
          500: '#5b8070',
          600: '#476858',
          700: '#3b5548',
          800: '#32453b',
          900: '#2b3b32',
          950: '#162119',
        },
        // Earthy brown tones
        'earth': {
          50: '#f9f6f2',
          100: '#f0e9e0',
          200: '#e2d3c1',
          300: '#d2b89d',
          400: '#c29c7a',
          500: '#b58661',
          600: '#a06b4f',
          700: '#855642',
          800: '#70483a',
          900: '#5f3e33',
          950: '#331f19',
        },
        // Trail color for paths
        'trail': {
          100: '#f0e4d6',
          200: '#e2ceb3',
          300: '#d2b390',
          400: '#c4996d',
          500: '#b17f4a',
          600: '#8c643b',
          700: '#6e4e2f',
          800: '#553b25',
          900: '#40301f',
        },
        // Slate for darker backgrounds
        'slate': {
          800: '#2d3748',
          850: '#222b3a',
          900: '#1a202c',
          950: '#0f141e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-trail': 'linear-gradient(to bottom, rgb(32, 46, 36), rgb(51, 31, 25))',
      },
      gridTemplateColumns: {
        'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
};