"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { motion } from "framer-motion";


import Layout from "@/components/site/Navbars/NavbarLayout";

import ShareButtons from "@/components/site/ShareButtons";

import { MdOutlineCancel } from "react-icons/md";

import useSWR from "swr";

import PostComponent from "@/components/site/Blog/Post";
import urlFor from "../../../../sanity/lib/image";



const fetchPosts = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

const SearchPage = () => {
  const [IsShowShareIcons, setIsShowShareIcons] = useState(false);

  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const router = useRouter();

  const [IsSpinnerLoading, setIsSpinnerLoading] = useState(false);

  const encodedSearchQuery = encodeURI(searchQuery || "");

  const { data, isLoading } = useSWR(
    `/api/search?q=${encodedSearchQuery}`,
    fetchPosts,
    { revalidateOnFocus: false },
  );

  if (!encodedSearchQuery) {
    router.push("/");
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <Layout route="/all">
        <div>
          <header className="px-5 py-16 bg-light-white ">
            <div className=" max-w-6xl mx-auto mt-24 lg:mt-16">
              <h2 className="uppercase font-extrabold font-Antonio text-6xl mb-1 ">
                Blog
              </h2>
            </div>
          </header>

          <div className="bg-white px-5 py-16">
            <div className=" grid grid-cols-1 gap-10 text-center max-w-6xl mx-auto  ">
              <div className="bg-white px-5 py-16">
                <div className=" grid grid-cols-1 gap-10 text-center max-w-4xl mx-auto  ">
                  {data.length === 0 ? (
                    <div className="max-w-md mx-auto text-center">
                      <h3 className="text-3xl font-semibold">
                        No Results Found
                      </h3>

                      <p className="text-md py-2 px-10">
                        {" "}
                        Looks like we couldn’t find what you’re looking for. Try
                        another search.
                      </p>
                    </div>
                  ) : (
                    data.map((post: any) => (
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
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SearchPage;
