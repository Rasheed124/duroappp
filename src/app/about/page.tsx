import Layout from "@/components/site/Navbars/NavbarLayout";
import { getAbout, getAwards, getContact } from "../../../sanity/utils/sanity.utils";
import AboutContainer from "@/components/site/About/AboutContainer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Creating useful Content ",
};

export const revalidate = 60; // revalidate this page every 60 seconds


export default async function About() {

    const aboutContainer = await getAbout();

    const contactInfo = await getContact();

    const awwardproject = await getAwards();

  return (
    <>
      <div className="">
        <Layout route="/about">
          <AboutContainer
            contactPage={contactInfo}
            abouts={aboutContainer}
            awards={awwardproject}
          />
        </Layout>
      </div>
    </>
  );
}
