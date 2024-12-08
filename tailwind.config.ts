import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "mute-gray": "#E8E8E8",
        "light-gray": "#666666",
        "shock-orange": "#F03603"
      },
      fontFamily: {
        "pp-neue-montreal": ["var(--font-pp-neue-montreal)", "sans"],
        "pp-supply-sans": ["var(--font-pp-supply-sans)", "sans"],
      },
    },
  },
  plugins: [],
} satisfies Config;
