/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/frontend/**/*.{vue,js,ts,jsx,tsx}",
        "./app/frontend/entrypoints/**/*.{js,ts}",
        "!./node_modules/**", // Exclude node_modules
    ],
    theme: {
        extend: {
        colors: {
            primary: {
                DEFAULT: '#C69C93', // Darker than #E4B5AA but still soft
                hover: '#B68D84',   // Darker version for hover
                light: '#E4B5AA'    // Using previous color as light version
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