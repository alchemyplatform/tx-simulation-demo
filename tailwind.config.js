/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        bannerShadow:
          "0px 0px 0px 0px rgba(132, 230, 192, 0.10), 0px 44px 97px 0px rgba(132, 230, 192, 0.10), 0px 176px 176px 0px rgba(132, 230, 192, 0.09), 0px 396px 238px 0px rgba(132, 230, 192, 0.05), 0px 704px 282px 0px rgba(132, 230, 192, 0.01), 0px 1100px 308px 0px rgba(132, 230, 192, 0.00);",
      },
    },
  },
  daisyui: {
    themes: [
      "business", "retro", "cupcake", "corporate", "forest", "synthwave", "light", "bumblebee", "garden", "night"
    ],
  },
  plugins: [require("daisyui")],
};
