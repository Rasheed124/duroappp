
import GraphicsProjects from "@/components/site/Design/Graphics/GraphicsProjects";
import Layout from "@/components/site/Navbars/NavbarLayout";


import { Metadata } from "next";
import { getGraphicVisualDs } from "../../../sanity/utils/sanity.utils";


export const metadata: Metadata = {
  title: "Graphics Visual Design ",

  description: "Creating useful Content ",

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
