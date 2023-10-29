/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";
export default {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}