import Layout from "@/components/site/Navbars/NavbarLayout";
import PortfolioProject from "@/components/site/Portfolio/PortfolioProject";

import { Metadata } from "next";
import { getAllRequiredProjects } from "../../../sanity/utils/sanity.utils";

export const metadata: Metadata = {
  title: "Portfolio",

  description: "Creating useful Content ",

  alternates: {
    canonical: "/portfolio",
    languages: {
      "en-CA": `en-CA`,
    },
  },
};

export default async function PortfolioPage() {
  const allProjects = await getAllRequiredProjects();

  return (
    <>
      <div className=" ">
        <Layout route="/all">
          <PortfolioProject portfolioPage={allProjects} />
        </Layout>
      </div>
    </>
  );
}
