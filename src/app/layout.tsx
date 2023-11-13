import type { Metadata } from 'next'
import { fonts } from "../fonts/font";
import './globals.css'
import Providers from "@/components/site/Providers";


export const metadata: Metadata = {
  metadataBase: new URL("https://durodolaabdulhad.com"),
  title: {
    default:
      "Durodola Abdulhad | Digital Marketing & Design Expert | Growth Strategy",
    template: `%s - Durodola Abdulhad - Digital Marketing & Design Expert | Data Analytics & Growth Strategy`,
  },
  description:
    "Durodola Abdulhad: Expert in Digital Marketing, Visual Design, Product Management, Data Analytics, and Growth Hacking, delivering creative and data-driven solutions for businesses of all sizes.",
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
            <Providers>{children}</Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
