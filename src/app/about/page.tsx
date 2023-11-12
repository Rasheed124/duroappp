import Layout from "@/components/site/Navbars/NavbarLayout";
import Image from "next/image";


export default async function About() {

  return (
    <>
      <div className="bg-deep-black text-light-white  xl:px-0">
        <Layout route="/about">

            <div>
                About
            </div>
        </Layout>
      </div>
    </>
  );
}
