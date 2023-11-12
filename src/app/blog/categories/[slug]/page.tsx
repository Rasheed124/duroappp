"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


import { groq } from "next-sanity";

import Link from "next/link";
import Layout from "@/components/site/Navbars/NavbarLayout";



import { MdOutlineCancel } from "react-icons/md";
import PostComponent from "@/components/site/Blog/Post";
import { client } from "../../../../../sanity/lib/client";
import urlFor from "../../../../../sanity/lib/image";
import ShareButtons from "@/components/site/ShareButtons";


type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; // revalidate this page every 60 seconds



function formatSlug(slug: string): string {
  const words = slug.split("-");
  const formattedSlug = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedSlug;
}
async function fetchPostData(slug: string): Promise<Post[]> {

 const formattedSlug = formatSlug(slug);

  const query = groq`

   *[_type == 'post' && $formattedSlug in categories[]->title]
    {
      ...,
      author->,
      "comments": *[_type == "comment" && references(^._id) && approved == true],
      categories[]->
    }
  
  `;

  const posts: Post[] = await client.fetch(query, { formattedSlug });

  
  return posts;
}

function Category({ params: { slug } }: Props) {
  const [IsShowShareIcons, setIsShowShareIcons] = useState(false);
  const [ClickedIndex, setClickedIndex] = useState<any | null>(null);


  const handleClick = (index: any) => () => {
    setClickedIndex((state: any) => {
      // Create a copy of the state
      const newState = { ...state };

      // Reset all other items to false

      for (const key in newState) {
        newState[key] = false;
      }

      // Set the clicked item to true
      //& remove current item when clicked
      newState[index] = !state[index];

      return newState;
    });
  };

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      const postsData = await fetchPostData(slug);
      setPosts(postsData);
    }

    fetchData();
  }, [slug]);



  return (
    <Layout route="/all">
      <section className="  ">
        <div className=" ">
          <header className="px-5 py-16 bg-light-white ">
            <div className=" max-w-6xl mx-auto mt-24 lg:mt-16">
              <h2 className="uppercase font-extrabold font-Antonio text-6xl mb-1 ">
                Blog
              </h2>

              <div className="space-x-1">
                <Link href={"/"}>Home</Link>
                <span>/</span>
                <Link className="capitalize" href={`/blog/categories/${slug}`}>
                  {slug}
                </Link>
              </div>
            </div>
          </header>

          <div className="bg-white px-5 py-16">
            <div className=" grid grid-cols-1 gap-10 text-center max-w-6xl mx-auto  ">
              <div className="bg-white px-5 py-16">
                <div className=" grid grid-cols-1 gap-10 text-center max-w-4xl mx-auto  ">

                  {posts.length !== 0 ? (  posts.map((post) => (
                    <div key={post._id}>
                      <PostComponent
                        slug={post.slug.current}
                        image={urlFor(post.mainImage).url()}
                        imageAlt={post.title}
                        title={post.title}
                        date={post._createdAt}
                        like={post.likes}
                        reads={post.reads}
                        views={post.views === 0 ? 0 : post.views}
                        style={"grid grid-cols-1 md:grid-cols-2 gap-5"}
                        comment={post.comments.length}
                      />

                      {IsShowShareIcons && (
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 0.6 }}
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          className="min-h-screen  fixed top-0 left-0  bg-black bg-opacity-30 bg-blend-overlay w-full flex justify-center items-center z-[100]"
                        >
                          <div className="">
                            <div className="flex flex-col ">
                              <span className="block  absolute top-3  right-3">
                                <MdOutlineCancel
                                  className="w-14 cursor-pointer h-14 font-bold text-white"
                                  onClick={() =>
                                    setIsShowShareIcons(!IsShowShareIcons)
                                  }
                                />
                              </span>
                              <div
                                onClick={() =>
                                  setIsShowShareIcons(IsShowShareIcons)
                                }
                                className="flex justify-center flex-col text-center max-w-3xl items-center py-10 px-6 space-x-3 bg-white  "
                              >
                                <h4>Share Post</h4>
                                <div className="w-full flex  py-5 ">
                                  <div>
                                    <ShareButtons
                                      title={post.title + "\n"}
                                      url={origin}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))) : (
                    <div>
                      <h2 className="text-lg font-semibold font-Sohne-Bold">No Post found </h2>
                    </div>
                  )}
                
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Category;
