/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./assets/components/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#C0C1C8',
        'purple-light': '#626BCB',
        'purple-vivid': '#4F15F6',
        'purple-dark': '#41229A',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      screens: {
        'xs':'376px',
        'sm':'576px',
        'lg':'960px',
        'xl':'1200px',
        '1.5xl':'1600px',
        '2xl':'1920px',
      }
    },
  },
  plugins: [],
}
