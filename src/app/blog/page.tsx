


import Layout from "@/components/site/Navbars/NavbarLayout";

import { Metadata } from "next";
import { getBlogList } from "../../../sanity/utils/sanity.utils";
import BlogList from "@/components/site/Blog/BlogList";



export const metadata: Metadata = {
  title: "Blog",

  description: "Creating useful Content ",

  openGraph: {
    title: "Blog",
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
    canonical: "/blog",
    languages: {
      "en-CA": `en-CA`,
    },
  },
};

export const revalidate = 60; // revalidate this page every 60 seconds


export default async function BlogPage() {
  const blogList = await getBlogList();

  return (
    <>
      <div className=" ">
        <Layout route="/all">
          <BlogList blogs={blogList}/>
        </Layout>
      </div>
    </>
  );
}
