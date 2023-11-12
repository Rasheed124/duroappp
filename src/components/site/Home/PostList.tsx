"use client";

import Image from "next/image";
import Link from "next/link";
import { BiMessageAlt } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import { motion } from "framer-motion";
import ClientSideRoute from "../ClientSideRoute";
import urlFor from "@/lib/urlFor";
import { HiArrowNarrowRight } from "react-icons/hi";

type Props = {
  postList: Post[];
};

const PostList = ({ postList }: Props) => {
  return (
    <>
      <section className="py-16 lg:py-20  ">
        <div className="flex flex-col max-w-6xl mx-auto  ">
          <div className=" px-5 text-center">
            <h4 className="font-Antonio text-2xl ">Recent Blog Posts</h4>

            <div className="my-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 ">
              {/* Recent Post */}

              {postList.map((post) => (
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
                              className="object-cover object-left lg:object-center"
                              src={urlFor(post.mainImage).url()}
                              alt={post.title}
                              fill
                            />
                          </div>
                        </ClientSideRoute>
                      </div>

                      <div className="">
                        <div className="border-b pb-5  ">
                          <div className="flex gap-8 mb-5">
                            <span>
                              {new Date(
                                `${post._createdAt}`,
                              ).toLocaleDateString("en-Us", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
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
                            <ClientSideRoute
                              route={`/post/${post.slug.current}`}
                            >
                              <div className="flex justify-center items-center transition-colors hover:duration-700 hover:text-header-dark-overlay ">
                                <BiMessageAlt className="mr-2" />
                                <span className="block"> {post.comment}</span>
                              </div>
                            </ClientSideRoute>
                          </div>
                          {/* Like Update */}
                          <div className="flex justify-center items-center self-end ">
                            <ClientSideRoute
                              route={`/post/${post.slug.current}`}
                            >
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
            </div>

            <Link href={"/blog"} className="self-center mt-10   ">
              <div className="group cursor-pointer font-Antonio inline-flex">
                <div className="mr-2 uppercase text-xl transition duration-700 group-hover:text-header-dark-overlay">
                  View more
                </div>
                <div className="relative group-hover:text-header-dark-overlay self-end p-4 py-3 overflow-hidden font-medium transition duration-700 ease-out  text-2xl">
                  <div className="">
                    <span className="absolute inset-0 flex items-center justify-end w-full h-full text-white duration-500 group-hover:translate-x-[100%] bg-transparent -translate-x-[20%] ease">
                      <div className="relative btn overflow-x-hidden flex justify-center items-center gap-3 text-lg ">
                        <span>
                          <HiArrowNarrowRight className="text-3xl text-white group-hover:text-header-dark-overlay" />
                        </span>
                      </div>
                    </span>
                    <span className="absolute inset-0 flex items-center justify-end w-full h-full text-white duration-500 -translate-x-[100%]  bg-transparent group-hover:translate-x-0 ease">
                      <div className="relative btn overflow-x-hidden flex justify-center items-center gap-3 text-lg font-Antonio">
                        <span>
                          <HiArrowNarrowRight className="text-3xl text-white group-hover:text-header-dark-overlay " />
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostList;
