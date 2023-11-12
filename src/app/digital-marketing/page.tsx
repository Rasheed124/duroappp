
import Layout from "@/components/site/Navbars/NavbarLayout";
import MarketWriting from "@/components/site/Writing/Marketing/ContentWriting";



import { Metadata } from "next";
import { getMarketWriting } from "../../../sanity/utils/sanity.utils";


export const metadata: Metadata = {
  title: "Digital Marketing ",

  description: "Creating useful Content ",

  alternates: {
    canonical: "/digital-marketing",
    languages: {
      "en-CA": `en-CA`,
    },
  },
};

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

