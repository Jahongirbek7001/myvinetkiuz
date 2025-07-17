// tailwind.config.js
export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#e276aa',
                'dark-bg': '#121212',
                'accent-green': '#32CD32'
            },
        },
    },
    plugins: [],
}
