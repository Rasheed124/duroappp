import Layout from "@/components/site/Navbars/NavbarLayout";
import { Metadata } from "next";
import { getContact } from "../../../sanity/utils/sanity.utils";
import ContactPageComp from "@/components/site/Contact/ContactPage";


export const metadata: Metadata = {
  title: "Contact ",

  description: "Creating useful Content ",

  openGraph: {
    title: "Contact",
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
    canonical: "/contact",
    languages: {
      "en-CA": `en-CA`,
    },
  },
};
export const revalidate = 60; // revalidate this page every 60 seconds


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
