
import UiUxProductProjects from "@/components/site/Design/UiUx/UiUxProjects/UiUxProductProjects";
import Layout from "@/components/site/Navbars/NavbarLayout";

import { Metadata } from "next";
import { getUiUxProductDesigns } from "../../../sanity/utils/sanity.utils";


export const metadata: Metadata = {
  title: "Ui/Ux Product Design ",

  description: "Creating useful Content ",

  openGraph: {
    title: "Ui/Ux Product Design ",
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
    canonical: "/ui-ux-product-design",
    languages: {
      "en-CA": `en-CA`,
    },
  },
};

export default async function UiUxProductPage() {

  const uiuxproductD = await getUiUxProductDesigns();

  return (
    <div className="  ">
      <Layout route="/all">
        <UiUxProductProjects uiuxprodprojects={uiuxproductD} />
      </Layout>
    </div>
  );


}

