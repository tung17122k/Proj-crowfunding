module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif;"],
      },
      colors: {
        primary: "#1DC071",
        secondary: "#6F49FD",
        text1: "#171725",
        text2: "#4B5264",
        text3: "#808191",
        text4: "#B2B3BD",
        "icon-color": "#A2A2A8",
        white: "#ffffff",
        whiteSoft: "#FCFBFF",
        graySoft: "#FCFCFC",
        grayF3: "#f3f3f3",
        strock: "#F1F1F3",
        lite: "#FCFCFD",
        error: "#EB5757",
        darkBg: "#13131A",
        darkSecondary: "#1C1C24",
        softDark: "#22222C",
        darkSoft: "#24242C",
        darkStroke: "#3A3A43",
        darkRed: "#422C32",
        primaryIcon: "#F1FBF7",
      },
      boxShadow: {
        sdprimary: "10px 10px 20px rgba(218, 213, 213,0.15)",
      },
    },
  },
  plugins: [],
};
