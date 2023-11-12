import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "deep-black": "#272727",
        "light-white": "#DCD7D2",
        "light-overlay": "#c2aeb1",
        "deep-overlay-black": "#2a2a2a",
        "deep-overlay": "#dedfb0",
        "contact-dark-overlay": "#837875",
        "header-dark-overlay": "#D4AF37",
      },

      fontFamily: {
        "libre-baskerville": ["var(--font-libre_baskerville)"],
        Antonio: ["var(--font-antonio)"],
        "Sohne-Bold": ["var(--font-sohneBold)"],
        "migra-light": ["var(--font-migraLight)"],
      },

      maxWidth: {
        "8xl": "15001px",
      },
    },
  },

  plugins: [],
}
export default config
