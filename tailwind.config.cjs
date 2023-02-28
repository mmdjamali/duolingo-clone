/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{tsx,ts,jsx,js}"
  ],
  theme: {
    extend: {
      animation : {
        "perfect" : "perfect 2000ms linear forwards",
        "fade-in" : "fade-in 500ms linear forwards",
        "slide-left" : "slide-left 400ms linear forwards",
        "slide-to-left" : "slide-to-left 400ms linear forwards",
      },
      keyframes : {
        "perfect" : {
          "0%" : {
            display : "inline",
            opacity : 0,
          },
          "25%" : {
            opacity : 1
          },
          "99%" : {
            opacity : 0,
          },
          "100%" : {
            display : "none",
            opacity : 0,
          }
        },
        "fade-in" : {
          "0%" : {opacity : 0},
          "100%" : {opacity : 1},
        },
        "slide-left" : {
          "0%" : {transform : "translateX(100%)",opacity : 0},
          "100%" : {transform : "translateX(0)", opacity : 1},
        },
        "slide-to-left" : {
          "0%" : {transform : "translateX(0)",opacity : 0},
          "100%" : {transform : "translateX(-100%)", opacity : 1},
        }
      }
    },
  },
  plugins: [],
}
