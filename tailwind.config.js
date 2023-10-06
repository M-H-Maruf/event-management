/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'teko': ['Teko', 'sans-serif'],
      'mukta': ['Mukta', 'sans-serif'],
      'orbitron': ['Orbitron', 'sans-serif'],
    },
    extend: {
      colors: {
        "event-primary": "#09c9c5",
        "event-secondary": "#292929",
        "event-bg-social": "#313131",
        "event-bg-folio": "#343434",
        "event-bg-menu": "#212121",
        "event-dil": "#fff40",
        "event-text": "#99999",
      },
    },
  },
  plugins: [require("daisyui")],
}

