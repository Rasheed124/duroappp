"use client";

import { useState, useEffect, useRef } from "react";



import Link from "next/link";

import { motion } from "framer-motion";

import { MdOutlineCancel } from "react-icons/md";

import { usePathname } from "next/navigation";

import { groq } from "next-sanity";

import PostComponent from "./Post";
import urlFor from "../../../../sanity/lib/image";

type Props = {
  blogs: Post[];
};


const BlogList = ({ blogs }: Props) => {
  return (
    <section className="  ">
      <div className=" ">
        <header className="px-5 py-16 bg-light-white ">
          <div className=" max-w-6xl mx-auto mt-24 lg:mt-16">
            <h2 className="uppercase font-extrabold font-Antonio text-5xl lg:text-6xl mb-1 ">
              Blog
            </h2>

            <div className="space-x-1">
              <Link href={"/"}>Home</Link>
              <span>/</span>
              <Link href={"/blog"}>Blog</Link>
            </div>
          </div>
        </header>

        <div className="bg-white px-5 py-16">
          <div className=" grid grid-cols-1 gap-10 text-center max-w-4xl  mx-auto  ">
            {blogs.map((post) => (
              <div key={post._id}>
                <PostComponent
                  slug={post.slug.current}
                  image={urlFor(post.mainImage).url()}
                  imageAlt={post.title}
                  title={post.title}
                  date={post._createdAt}
                  like={post.likes}
                  reads={post.reads}
                  views={post.views == 0 ? 0 : post.views}
                  style={"grid grid-cols-1 md:grid-cols-2 gap-5"}
                  comment={post.comments.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
