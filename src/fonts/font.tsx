import { Antonio, Libre_Baskerville } from "next/font/google";

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-libre_baskerville",
});

const sohneBold = localFont({
  src: "../fonts/sohne/test-soehne-buch.woff2",
  fallback: ["system-ui", "sohneBold"],
  display: "fallback",
  variable: "--font-sohneBold",
});

const migraLight = localFont({
  src: "../fonts/FontsFree-Net-Migra-Extralight.ttf",
  fallback: ["system-ui", "migraLight"],
  display: "fallback",
  variable: "--font-migraLight",
});


const antonio = Antonio({
  subsets: ["latin"],
  fallback: ["antonio"],
  variable: "--font-antonio",
});



export const fonts = {
  antonio,
  sohneBold,
  migraLight,
  libre_baskerville,
};
