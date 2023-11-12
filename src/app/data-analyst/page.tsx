import Layout from "@/components/site/Navbars/NavbarLayout";
import DataAnalystWritings from "@/components/site/Writing/DataAnalyst/DataAnalyst";


import { Metadata } from "next";
import { getDataAnalyst } from "../../../sanity/utils/sanity.utils";

export const metadata: Metadata = {
  title: "Data Analyst ",

  description: "Creating useful Content ",

  alternates: {
    canonical: "/data-analyst",
    languages: {
      "en-CA": `en-CA`,
    },
  },
};

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
