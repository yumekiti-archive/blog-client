/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-in-elliptic-top-fwd": "slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
      },
      keyframes: {
          "slide-in-elliptic-top-fwd": {
              "0%": {
                  transform: "translateY(-500px) rotateX(-30deg) scale(0)",
                  "transform-origin": "50% 100%",
                  opacity: "0"
              },
              to: {
                  transform: "translateY(0) rotateX(0) scale(1)",
                  "transform-origin": "50% 600px",
                  opacity: "1"
              }
          }
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
