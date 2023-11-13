
import Layout from "@/components/site/Navbars/NavbarLayout";
import MarketWriting from "@/components/site/Writing/Marketing/ContentWriting";



import { Metadata } from "next";
import { getMarketWriting } from "../../../sanity/utils/sanity.utils";




export const metadata: Metadata = {
  title: "Digital Marketing ",

  description: "Creating useful Content ",

  openGraph: {
    title: "Digital Marketing ",
    description:
      "Digital Marketing & Design Expert | Data Analytics & Growth Strategy",
    url: "durodolaabdulhad.com",
    siteName: "Durodola Abdulhad",
    images: [
      {
        url: "Durodola",
        width: 1200,
        height: 800,
      },
    ],
  },

  alternates: {
    canonical: "/digital-marketing",
    languages: {
      "en-CA": `en-CA`,
    },
  },
};


export const revalidate = 60; // revalidate this page every 60 seconds

export default async function DigitalMarketing() {
  

  const marketwriting = await getMarketWriting();

  return (
    <div className="  ">
      <Layout route="/all">
        <MarketWriting marketwritings={marketwriting} />
      </Layout>
    </div>
  );

}

