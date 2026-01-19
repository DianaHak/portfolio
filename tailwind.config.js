/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      animation: {
        spin_slow: "spin 6s linear infinite",
      },
      colors: {
  // NO more pink/lavender
  lightHover: '#eef3f8',   // cool blue-gray
  darkHover: '#162238',    // deep navy
  darkTheme: '#0b1220',    // near-black blue tone

  // your brand anchor
  brand: '#18412c',
}
,
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
