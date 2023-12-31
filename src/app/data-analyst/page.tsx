import Layout from "@/components/site/Navbars/NavbarLayout";
import DataAnalystWritings from "@/components/site/Writing/DataAnalyst/DataAnalyst";


import { Metadata } from "next";
import { getDataAnalyst } from "../../../sanity/utils/sanity.utils";

export const metadata: Metadata = {
  title: "Data Analyst ",

  description: "Creating useful Content ",

  openGraph: {
    title: "Data Analyst ",
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
    canonical: "/data-analyst",
    languages: {
      "en-CA": `en-CA`,
    },
  },
};

export const revalidate = 60; // revalidate this page every 60 seconds


export default async function DataAnalyst() {
  
  const dataAnalyst = await getDataAnalyst();

  return (
    <div className="  ">
      <Layout route="/all">
        <DataAnalystWritings datawriting={dataAnalyst} />
      </Layout>
    </div>
  );
}
