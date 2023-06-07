module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007aff",
        accent: "#ff9800",
        lightgray: "#F2F2F2",
        lightBlue: "#e6f0ff",
        gray: "#A3A3A3",
        darkgray: "#555555",
        white: "#FFFFFF",
        
      
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Inter', 'serif'],
    },
  },
  plugins: [],
};
