import Layout from "@/components/site/Navbars/NavbarLayout";
import PortfolioProject from "@/components/site/Portfolio/PortfolioProject";

import { Metadata } from "next";
import { getAllRequiredProjects } from "../../../sanity/utils/sanity.utils";

export const revalidate = 60; // revalidate this page every 60 seconds


export const metadata: Metadata = {
  title: "Portfolio",

  description: "Creating useful Content ",
  openGraph: {
    title: "Portfolio",
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
