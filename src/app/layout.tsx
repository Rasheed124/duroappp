import type { Metadata } from 'next'
import { fonts } from "../fonts/font";
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://durodolaportfolio.pages.dev"),
  title: {
    default: "Durodola Abdulhad",
    template: `%s - Durodola Abdulhad`,
  },
  description: "Am a GRAPHICS & PRODUCT DESIGN",
  verification: {
    //   google: "google-site-verification=878787878",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={`${fonts.antonio.variable} ${fonts.sohneBold.variable} ${fonts.migraLight.variable} ${fonts.libre_baskerville.variable} bg-transparent `}
      >
        <main className="bg-transparent ">
          <div className="max-w-8xl mx-auto ">
             {children}
          </div>
        </main>
        
        </body>
    </html>
  )
}
