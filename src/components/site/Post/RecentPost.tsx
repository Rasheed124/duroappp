"use client"
import Layout from "@/components/site/Navbars/NavbarLayout";

import type { Metadata } from "next";

import ClientSideRoute from "../ClientSideRoute";
import Image from "next/image";
import { motion } from "framer-motion";
import { BiMessageAlt } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import urlFor from "../../../../sanity/lib/image";



export default  function RecentPost( ) {

  const [recentPosts, setRecentPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchRecentPosts() {
      const query = groq`
        *[_type == 'post' ] {
          ...,
           author->,
      "comments": *[_type == "comment" && references(^._id) && approved == true],
      categories[]->
        }
      `;

      const relatedData = await client.fetch(query);

      setRecentPosts(relatedData);
    }

    fetchRecentPosts();
  }, []);


  return (
    <>
      {recentPosts?.map((post) => (
        <div key={post._id}>
          <div className="flex flex-col justify-center text-left">
            <motion.div
              className="grid grid-cols-1 gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="pb-4">
                <ClientSideRoute route={`/post/${post.slug.current}`}>
                  <div className="relative h-[200px] w-full">
                    <Image
                      className=" max-w-full lg:object-center"
                      src={urlFor(post.mainImage).url()}
                      alt={post.alt}
                      fill
                    />
                  </div>
                </ClientSideRoute>
              </div>

              <div className="">
                <div className="border-b pb-5  ">
                  <div className="flex gap-8 mb-5">
                    <span>
                      {new Date(`${post._createdAt}`).toLocaleDateString(
                        "en-Us",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        },
                      )}
                    </span>

                    <span>{post.reads} min reads</span>
                  </div>
                  <ClientSideRoute route={`/post/${post.slug.current}`}>
                    <h3 className="text-xl md:text-2xl  font-Antonio transition-colors hover:duration-700 hover:text-header-dark-overlay">
                      {post.title}
                    </h3>
                  </ClientSideRoute>
                </div>

                <div className="flex w-full  mt-5">
                  {/* Views Update */}
                  <div className="flex justify-center items-center mr-5 transition-colors hover:duration-700 hover:text-header-dark-overlay">
                    <BsEye className="mr-2" />
                    <span>{post.views} views</span>
                  </div>
                  {/* Comment Update */}
                  <div className="flex justify-center items-center mr-5">
                    <ClientSideRoute route={`/post/${post.slug.current}`}>
                      <div className="flex justify-center items-center transition-colors hover:duration-700 hover:text-header-dark-overlay ">
                        <BiMessageAlt className="mr-2" />
                        <span className="block"> {post.comment}</span>
                      </div>
                    </ClientSideRoute>
                  </div>
                  {/* Like Update */}
                  <div className="flex justify-center items-center self-end ">
                    <ClientSideRoute route={`/post/${post.slug.current}`}>
                      <div className="flex justify-center items-center transition-colors hover:duration-700 hover:text-header-dark-overlay ">
                        <AiOutlineHeart className="mr-2  transition-colors hover:duration-700 hover:text-header-dark-overlay" />
                        <span>{post.likes}</span>
                      </div>
                    </ClientSideRoute>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </>
  );
}
