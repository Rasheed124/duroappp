"use client";

import { BsEye } from "react-icons/bs";
import ClientSideRoute from "../ClientSideRoute";
import { BiMessageAlt } from "react-icons/bi";
import { SlLike } from "react-icons/sl";

import { motion } from "framer-motion";
import Image from "next/image";

import { AiOutlineHeart } from "react-icons/ai";

import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";


interface ToPost {
  imageAlt: string;
  image: any;
  slug: string;
  title: string;
  date: string;
  like: number;
  views: number;
  reads: number;
  comment: number;
  style: string;
}

const PostComponent = ({
  image,
  imageAlt,
  slug,
  date,
  title,
  like,
  comment,
  views,
  reads,
  style,
}: ToPost) => {


   const [IsShowShareIcons, setIsShowShareIcons] = useState(false);

   const [ClickedIndex, setClickedIndex] = useState([]);


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
  return (
    <>
      <div>
        <div className="flex flex-col justify-center text-left">
          <motion.div
            className={style}
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
              <ClientSideRoute route={`/blog/${slug}`}>
                <div className="relative h-[200px] w-full">
                  <Image
                    className="object-cover object-left lg:object-center"
                    src={image}
                    alt={imageAlt}
                    fill
                  />
                </div>
              </ClientSideRoute>
            </div>

            <div className="">
              <div className="border-b pb-5  ">
                <div className="flex gap-8 mb-5">
                  <span>
                    {new Date(`${date}`).toLocaleDateString("en-Us", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>

                  <span>{reads} min reads</span>
                </div>

                <ClientSideRoute route={`/post/${slug}`}>
                  <h3 className="text-xl md:text-2xl  font-Antonio transition-colors hover:duration-700 hover:text-header-dark-overlay">
                    {title}
                  </h3>
                </ClientSideRoute>
              </div>

              <div className="flex w-full  mt-5">
                {/* Views Update */}
                <div className="flex justify-center items-center mr-5 transition-colors hover:duration-700 hover:text-header-dark-overlay">
                  <BsEye className="mr-2" />
                  <span>{views} views</span>
                </div>
                {/* Comment Update */}
                <div className="flex justify-center items-center mr-5">
                  <ClientSideRoute route={`/post/${slug}`}>
                    <div className="flex justify-center items-center transition-colors hover:duration-700 hover:text-header-dark-overlay ">
                      <BiMessageAlt className="mr-2" />
                      <span className="block"> {comment}</span>
                    </div>
                  </ClientSideRoute>
                </div>
                {/* Like Update */}
                <div className="flex justify-center items-center self-end ">
                  <ClientSideRoute route={`/post/${slug}`}>
                    <div className="flex justify-center items-center transition-colors hover:duration-700 hover:text-header-dark-overlay ">
                      <AiOutlineHeart className="mr-2  transition-colors hover:duration-700 hover:text-header-dark-overlay" />
                      <span>{like}</span>
                    </div>
                  </ClientSideRoute>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

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
                    onClick={() => setIsShowShareIcons(!IsShowShareIcons)}
                  />
                </span>
                <div
                  onClick={() => setIsShowShareIcons(IsShowShareIcons)}
                  className="flex justify-center flex-col text-center max-w-3xl items-center py-10 px-6 space-x-3 bg-white  "
                >
                  <h4>Share Post</h4>
                  <div className="w-full flex  py-5 ">
                    <div>
                      {/* <ShareButtons title={post.title + "\n"} url={origin} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default PostComponent;
