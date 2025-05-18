/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode variant based on class
  theme: {
    extend: {
      colors: {
        // Dual color palettes (dark and light versions)
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
          // Light theme variants
          'light-50': '#eaf6ee',
          'light-100': '#d5f0df',
          'light-200': '#b0e0c2',
          'light-300': '#8acca6',
          'light-400': '#65b88a',
          'light-500': '#40a46e',
          'light-600': '#338259',
          'light-700': '#2b6848',
          'light-800': '#275339',
          'light-900': '#214530',
          'light-950': '#0f261a',
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
          // Light theme variants
          'light-50': '#fcf9f6',
          'light-100': '#f7efe7',
          'light-200': '#ecddc8',
          'light-300': '#e0c9a9',
          'light-400': '#d4b38a',
          'light-500': '#c79c6b',
          'light-600': '#b07f4e',
          'light-700': '#906341',
          'light-800': '#734f35',
          'light-900': '#5e412d',
          'light-950': '#332415',
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
          // Light theme variants
          'light-100': '#f7f0e9',
          'light-200': '#eedecb',
          'light-300': '#e5cead',
          'light-400': '#d8ba8f',
          'light-500': '#cca671',
          'light-600': '#b98b4f',
          'light-700': '#96703e',
          'light-800': '#785932',
          'light-900': '#604829',
        },
        // Slate for darker backgrounds
        'slate': {
          800: '#2d3748',
          850: '#222b3a',
          900: '#1a202c',
          950: '#0f141e',
          // Light theme variants
          'light-800': '#e2e8f0',
          'light-850': '#edf2f7', 
          'light-900': '#f7fafc',
          'light-950': '#ffffff',
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
        'gradient-trail': 'linear-gradient(to bottom, var(--bg-gradient-from), var(--bg-gradient-to))',
      },
      gridTemplateColumns: {
        'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
};