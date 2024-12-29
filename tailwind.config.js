/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/frontend/**/*.{vue,js,ts,jsx,tsx}",
        "./app/views/**/*.{erb,html}",
        ],
        theme: {
        extend: {
            colors: {
            primary: {
                DEFAULT: '#C69C93',
                hover: '#B68D84',
                light: '#E4B5AA'
            },
            background: {
                DEFAULT: '#FFF9F5',
                alt: '#F7ECE6'
            },
            text: {
                DEFAULT: '#2C1810',
                light: '#5C4D47'
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