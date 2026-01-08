/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "diamond-blue": {
          50: "#e6f2ff",
          100: "#b3d9ff",
          200: "#80bfff",
          300: "#4da6ff",
          400: "#1a8cff",
          500: "#0073e6",
          600: "#0059b3",
          700: "#004080",
          800: "#00264d",
          900: "#000d1a",
        },
        "tech-cyan": {
          50: "#e0f7fa",
          100: "#b2ebf2",
          200: "#80deea",
          300: "#4dd0e1",
          400: "#26c6da",
          500: "#00bcd4",
          600: "#00acc1",
          700: "#0097a7",
          800: "#00838f",
          900: "#006064",
        },
      },
      boxShadow: {
        csbtn: "2px 2px 24.3px 0px #B3B3B340",
        roundgrad: "1.68px 1.68px 11.51px 0px #72727240",
        shadowin: "4px 4px 16.4px 0px  inset #FFFFFF",
        cube: "0 8px 32px rgba(0, 115, 230, 0.3)",
        "cube-glow":
          "0 0 20px rgba(0, 188, 212, 0.5), 0 0 40px rgba(0, 115, 230, 0.3)",
        tech: "0 4px 20px rgba(0, 188, 212, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "cube-pattern":
          "linear-gradient(45deg, rgba(0, 115, 230, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(0, 115, 230, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(0, 115, 230, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(0, 115, 230, 0.1) 75%)",
        "tech-grid":
          "linear-gradient(rgba(0, 188, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 188, 212, 0.1) 1px, transparent 1px)",
        "diamond-gradient":
          "linear-gradient(135deg, #0073e6 0%, #00bcd4 50%, #0073e6 100%)",
        "tech-gradient":
          "linear-gradient(135deg, rgba(0, 115, 230, 0.1) 0%, rgba(0, 188, 212, 0.1) 100%)",
      },
      backgroundSize: {
        cube: "20px 20px",
        grid: "50px 50px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "cube-rotate": "cube-rotate 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 188, 212, 0.5)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 115, 230, 0.8)" },
        },
        "cube-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
