/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E07A5F', // terracotta
          hover: '#CD6B52', // darker terracotta
          light: '#F2C4BA'  // light terracotta
        },
        background: {
          DEFAULT: '#FFF9F5', // soft cream
          alt: '#F7ECE6'     // slightly darker cream
        },
        accent: {
          DEFAULT: '#A44A3F', // deep rust
          light: '#C86B60'    // lighter rust
        },
        text: {
          DEFAULT: '#2C1810', // warm brown
          light: '#5C4D47'    // lighter brown
        }
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: [],
}