import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue': "var(--custom-blue)",
        'custom-purple': "var(--custom-purple)",
        'custom-pink': "var(--custom-pink)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
