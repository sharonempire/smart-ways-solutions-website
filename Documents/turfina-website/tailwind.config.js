/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0D0F0C',
          800: '#1A1D18',
          700: '#252820',
        },
        cream: {
          DEFAULT: '#F4EFE6',
          dark: '#E8E1D6',
        },
        pitch: {
          DEFAULT: '#2A5C2A',
          light: '#3A7C3A',
          accent: '#4CAF50',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
