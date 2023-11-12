import Layout from "@/components/site/Navbars/NavbarLayout";
import Image from "next/image";
import { getContact } from "../../sanity/utils/sanity.utils";
import Banner from "@/components/site/Home/HomeBanner/Banner";

export default async function Home() {

   const contactData = await getContact();
  return (
    <>
      <div className="bg-deep-black text-light-white  xl:px-0">
        <Layout route="/">
          <Banner contacts={contactData} />
        </Layout>
      </div>
    </>
  );
}
