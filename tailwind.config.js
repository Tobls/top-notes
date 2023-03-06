/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "light-brown": "#2d241c",
                "medium-brown": "#3c3022",
                "dark-brown": "#1a120f",
                "light-orange": "#DE541E"
            }
        },
    },
    plugins: [],
}
