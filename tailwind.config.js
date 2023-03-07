/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "brown-light": "#3c3022",
                "brown-medium": "#2d241c",
                "brown-dark": "#1a120f",
                "orange-strong": "#DE541E",
                "cream": "#ffffb3",
                "orange-light": "#d39054",
                "blue-light": "#51a0ad"
            }
        },
    },
    plugins: [],
}
