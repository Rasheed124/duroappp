import Layout from "@/components/site/Navbars/NavbarLayout";
import { Metadata } from "next";
import { getContact } from "../../../sanity/utils/sanity.utils";
import ContactPageComp from "@/components/site/Contact/ContactPage";


export const metadata: Metadata = {
  title: "Contact ",

  description: "Creating useful Content ",

  alternates: {
    canonical: "/contact",
    languages: {
      "en-CA": `en-CA`,
    },
  },
};

export default async function Contact() {

   const contacts = await getContact();
  return (
    <>
      <>
        <Layout route="/all">
          {<ContactPageComp contactPage={contacts} />}
        </Layout>
      </>
    </>
  );
}
