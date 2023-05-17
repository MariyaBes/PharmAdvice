
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#6B4EE6',
        dark: '#0C4DCB',
      },
      pink: {
        light: '#E1DCFA',
        DEFAULT: '#BEB0F2',
        dark: '#ED6C6C',
      },
      gray: {
        darkvar1: '#131313',
        darkvar2: '#444752',
        dark: '#333333',
        DEFAULT: '#000000',
        light: '#D9D9D9',
        lightest: '#9A9A9A',
      }
    },
  },
  plugins: [],
}
