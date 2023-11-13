
import GraphicsProjects from "@/components/site/Design/Graphics/GraphicsProjects";
import Layout from "@/components/site/Navbars/NavbarLayout";


import { Metadata } from "next";
import { getGraphicVisualDs } from "../../../sanity/utils/sanity.utils";



export const revalidate = 60; // revalidate this page every 60 seconds


export const metadata: Metadata = {
  title: "Graphics Visual Design ",

  description: "Creating useful Content ",

  openGraph: {
    title: "Graphics Visual Design ",
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
    canonical: "/graphics-visual-design",
    languages: {
      "en-CA": `en-CA`,
    },
  },
};

export default async function GraphicsVisualPage() {

  const graphicVisualD = await getGraphicVisualDs();

  return (
    <>
      <div>
        <Layout route="/all">
          <GraphicsProjects graphicprojects={graphicVisualD} />
        </Layout>
      </div>
    </>
  );
}
