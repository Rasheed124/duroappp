import Layout from "@/components/site/Navbars/NavbarLayout";



import type { Metadata } from "next";
import { getSinglePost } from "../../../../sanity/utils/sanity.utils";
import PostPage from "@/components/site/Post/PostPage";




type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; // revalidate every 30 seconds

export async function generateMetadata({ params }: Props ): Promise<Metadata> {
  const post = await getSinglePost(params.slug);

 

  const imageUrl = post.mainImage.asset._ref



  if (!post)
    return {
      title: "Not Found",
      description: "This page is not found",
    };


  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/post/${post.slug}`,
      languages: {
        "en-CA": `en-CA/post/${post.slug}`,
      },
    },
    openGraph: {
      images: [imageUrl],
    },
  };
}

export default function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <Layout route="/all">
    
        <PostPage params={{ slug }} />
 
    </Layout>
  );
}

