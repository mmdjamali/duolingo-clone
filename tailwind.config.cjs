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
        "slide-left-fade-out" : "slide-left-fade-out 400ms ease-in-out forwards",
        "slide-left-fade-in" : "slide-left-fade-in 400ms ease-in-out forwards",
        "open" : "open 500ms ease-in-out forwards",
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
        "slide-left-fade-out" : {
          "0%" : {transform : "translateX(0)",opacity : 1},
          "100%" : {transform : "translateX(-100%)", opacity : 0},
        },
        "slide-left-fade-in" : {
          "0%" : {transform : "translateX(0)",opacity : 0},
          "100%" : {transform : "translateX(-100%)", opacity : 1},
        },
        "open" : {
          "0%" : {
            maxHeight : "0px"
          },
          "100%" : {
            maxHeight : "100%"
          }
        }
      }
    },
  },
  plugins: [],
}
