/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // Bright indigo
        secondary: '#c026d3', // Bright fuchsia/purple
        accent: '#ef4444', // Bright red
        dark: {
          100: '#1a1a1a',
          200: '#141414',
          300: '#121212',
          400: '#0a0a0a',
          900: '#000000', // True black for OLED
        },
        light: {
          100: '#ffffff',
          200: '#fafafa',
          300: '#f4f4f5',
          400: '#e4e4e7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 