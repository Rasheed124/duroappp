"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { HiOutlineShare } from "react-icons/hi";

import { MdOutlineCancel } from "react-icons/md";


import Link from "next/link";
import { RichTextComponents } from "@/components/site/RichComponentText";

import ShareButtons from "@/components/site/ShareButtons";

import { BiDotsVerticalRounded } from "react-icons/bi";
import ClientSideRoute from "@/components/site/ClientSideRoute";

import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";

import { signIn, useSession, signOut } from "next-auth/react";
import SearchInput from "@/components/site/SearchInput";

import RecentPost from "./RecentPost";
import { client } from "../../../../sanity/lib/client";
import urlFor from "../../../../sanity/lib/image";

type Props = {
  params: {
    slug: string;
  };
};

type Inputs = {
  _id: string;
  name: string;
  email: string;
  comment: string;
};

async function fetchPostData(slug: string): Promise<Post> {
  const query = groq`
    *[_type == 'post' && slug.current == $slug][0]
    {
      ...,
      tags,
      // views: 0,
      author->,
       "comments": *[_type == "comment" && references(^._id) && approved == true],
      categories[]->
    }
  `;

  const post: Post = await client.fetch(query, { slug });

  return post;
}

function PostPage({ params: { slug } }: Props) {
  const [post, setPost] = useState<Post | null>(null);

  const [viewCount, setViewCount] = useState<number>(0);

  const [liked, setLiked] = useState<boolean>(false);
  const [disliked, setDisliked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const [submitted, setSubmitted] = useState(false);
  const [useErr, setUseError] = useState("");
  const [showFunction, setShowFunction] = useState(true);

  const [ShowSharePost, setIsShowSharePost] = useState(false);
  const [IsOpenShareIcons, setIsOpenShareIcons] = useState(false);
  const shareRef = useRef<HTMLDivElement | null>(null);

  const { data: session } = useSession();

  // Removing Click On Body
  useEffect(() => {
    let removehandler = (e: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setIsShowSharePost(false);
      }
    };

    document.addEventListener("mousedown", removehandler);

    return () => {
      document.removeEventListener("mousedown", removehandler);
    };
  }, []);

  useEffect(() => {
    if (showFunction) {
      const timeout = setTimeout(() => {
        setShowFunction(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showFunction]);

  // FORM SUBMIT
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // FORM SUBMIT API HANDLER
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify({ slug, data }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(false);
      }
    } catch (error) {
      setSubmitted(false);
    }
  };

  // Onsubmit Handler
  const handleuserError = () => {
    if (!session) {
      setUseError("Please sign in to Comment");
    } else {
      setUseError("");
    }
  };

  // LIKES
  const handleLike = async () => {
    if (liked) {
      // If the post is already liked, remove it from likedPosts
      const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
      const updatedLikedPosts = likedPosts.filter(
        (postSlug: string) => postSlug !== slug,
      );
      localStorage.setItem("likedPosts", JSON.stringify(updatedLikedPosts));

      setLiked(false); // Update the liked state to false
    } else {
      try {
        const response = await fetch("/api/like", {
          method: "POST",
          body: JSON.stringify({ slug, action: "like" }),
        });

        if (response && response.ok) {
          const postData = await response.json();
          setLikes(postData.likes);

          const likedPosts = JSON.parse(
            localStorage.getItem("likedPosts") || "[]",
          );
          likedPosts.push(slug);
          localStorage.setItem("likedPosts", JSON.stringify(likedPosts));

          setLiked(true);

          // If the user has disliked the post before, reset the disliked state
          if (disliked) {
            setDisliked(false);
          }
        } else {
          console.error("Error liking post: Response is not ok");
        }
      } catch (error) {
        console.error("Error liking post:", error);
      }
    }
  };

  const handleDislike = async () => {
    if (disliked) {
      // If the post is already disliked, reset the like state and remove it from dislikedPosts
      const dislikedPosts = JSON.parse(
        localStorage.getItem("dislikedPosts") || "[]",
      );
      const updatedDislikedPosts = dislikedPosts.filter(
        (postSlug: string) => postSlug !== slug,
      );
      localStorage.setItem(
        "dislikedPosts",
        JSON.stringify(updatedDislikedPosts),
      );

      setDisliked(false); // Reset the disliked state
    } else {
      try {
        const response = await fetch("/api/dislike", {
          method: "POST",
          body: JSON.stringify({ slug, action: "dislike" }),
        });

        if (response && response.ok) {
          const postData = await response.json();
          setDislikes(postData.dislikes);

          const dislikedPosts = JSON.parse(
            localStorage.getItem("dislikedPosts") || "[]",
          );
          dislikedPosts.push(slug);
          localStorage.setItem("dislikedPosts", JSON.stringify(dislikedPosts));

          setDisliked(true);

          // If the user has liked the post before, remove it from likedPosts and reset the like state
          if (liked) {
            const likedPosts = JSON.parse(
              localStorage.getItem("likedPosts") || "[]",
            );
            const updatedLikedPosts = likedPosts.filter(
              (postSlug: any) => postSlug !== slug,
            );
            localStorage.setItem(
              "likedPosts",
              JSON.stringify(updatedLikedPosts),
            );
            setLiked(false);
          }
        } else {
          console.error("Error disliking post: Response is not ok");
        }
      } catch (error) {
        console.error("Error disliking post:", error);
      }
    }
  };

  // UseEffect to initialize liked and disliked states
  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    const dislikedPosts = JSON.parse(
      localStorage.getItem("dislikedPosts") || "[]",
    );
    setLiked(likedPosts.includes(slug));
    setDisliked(dislikedPosts.includes(slug));
  }, [slug]);

  // RENDER VIEWS PER POST
  useEffect(() => {
    async function fetchData() {
      try {
        const postData = await fetchPostData(slug);
        setPost(postData);

        const response = await fetch("/api/views", {
          method: "POST",
          body: JSON.stringify({ slug }),
        });
        const data = await response.json();
        setViewCount(data.views);
      } catch (err) {
        console.log("Fetch Error", err);
      }
    }

    fetchData();
  }, [slug]);

  // FORM ONSUBMIT
  useEffect(() => {
    if (useErr) {
      const timeout = setTimeout(() => {
        setUseError("");
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [useErr]);

  if (!post) {
    return <p></p>;
  }

  return (
    <>
      <article className="pb-20  ">
        <section className="pb-14  ">
          <div className="   ">
            <div className=" pb-5  ">
              {/* Post banner */}
              <div className="py-16 bg-light-white  px-10  ">
                <div className="max-w-5xl mx-auto pt-10 flex flex-col md:flex-row mt-16  space-y-5 md:space-y-0 justify-between ">
                  <div className=" ">
                    <ul className="flex flex-col lg:flex-row  space-x-5 ">
                      <li className="text-lg font-Antonio  font-bold self-start transition-colors duration-700 ">
                        <Link
                          href={"/blog"}
                          className="block  whitespace-nowrap"
                        >
                          All Posts
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className=" w-full lg:max-w-[450px]   block md:flex md:justify-end md:items-end ">
                    <SearchInput />
                  </div>
                </div>
              </div>

              {/* Post */}
              <div className="mt-16  max-w-4xl  shadow-sm mx-auto   p-3.5 px-10  ">
                <div className="flex justify-between items-center ">
                  <div className="flex  space-x-5 ">
                    <div className="flex justify-center items-center">
                      <Image
                        className="rounded-full object-cover mr-2"
                        src={urlFor(post.author.image).url()}
                        alt={post.author.name}
                        width={30}
                        height={30}
                      />

                      <span className=" font-bold  text-lg whitespace-nowrap ">
                        {post.author.name}
                      </span>
                    </div>

                    <div className="flex justify-center items-center">
                      <span className="whitespace-nowrap">
                        {new Date(post._createdAt).toLocaleDateString("en-Us", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span className="font-semibold ml-5 whitespace-nowrap">
                        8 min Read
                      </span>
                    </div>
                  </div>

                  <div className="ml-3 flex flex-wrap max-w-md">
                    <span className="block cursor-pointer relative">
                      <BiDotsVerticalRounded
                        onClick={() => setIsShowSharePost(!ShowSharePost)}
                      />

                      {ShowSharePost && (
                        <div
                          ref={shareRef}
                          className="absolute top-3 right-6 shadow-lg py-3 px-5 w-[200px] bg-white border flex justify-center items-center space-x-3"
                          onClick={() => setIsOpenShareIcons(!IsOpenShareIcons)}
                        >
                          <HiOutlineShare />
                          <p className="text-lg font-semibold">Share Post</p>
                        </div>
                      )}
                    </span>
                  </div>
                </div>

                <div className="my-2 p-2 ">
                  <h3 className="font-semibold text-xl font-Sohne-Bold mb-3">
                    {post.title}
                  </h3>

                  <p>
                    {" "}
                    <span className="mr-2 font-semibold">Updated at: </span>
                    {new Date(post._updatedAt).toLocaleDateString("en-Us", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="py-3 mt-5 max-w-4xl  mx-auto   px-10   ">
                <div className="font-Sohne-Bold">
                  <PortableText
                    value={post.body}
                    components={RichTextComponents}
                  />
                </div>

                <div className="py-3 mt-5 ">
                  <div className="space-x-3 mb-3">
                    <h2 className="font-Antonio text-base my-2">Tags</h2>
                    <div className="flex gap-5 flex-wrap ">
                      {post.tags && post.tags.map((tag) => (
                        <div
                          key={tag}
                          className="border text-base cursor-pointer border-black hover:border-header-dark-overlay hover:transition-all hover:duration-200  p-2.5"
                        >
                          <ClientSideRoute
                            route={`/blog/tags/${tag
                             .toLowerCase() // Convert to lowercase
                            .trim() // Remove leading and trailing spaces
                            .split(" ") // Split the string into an array of words based on spaces
                            .join("-") // Join the words with hyphens
                            
                            }`}
                          >
                            {tag}
                          </ClientSideRoute>
                        </div>
                      ))}
                    </div>
                    {}
                  </div>
                  <div className="space-x-3 mb-3">
                    <h2 className="font-Antonio text-base my-2">Categories</h2>
                    <div className="flex gap-5 flex-wrap ">
                      {post.categories && post.categories.map((cat, index) => (
                        <div
                          key={index}
                          className="border  cursor-pointer  text-base border-black hover:border-header-dark-overlay hover:transition-all hover:duration-200 p-2.5"
                        >
                          <ClientSideRoute
                            route={`/blog/categories/${cat.title
                            .toLowerCase() // Convert to lowercase
                            .trim() // Remove leading and trailing spaces
                            .split(" ") // Split the string into an array of words based on spaces
                            .join("-") // Join the words with hyphens
                              
                            }`}
                          >
                            {cat.title}
                          </ClientSideRoute>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="">
                    <div className="py-3 mt-5 border-t border-b">
                      <div className="flex justify-between items-center space-y-2">
                        <div>
                          <ShareButtons title={post.title} url={origin} />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center space-y-2">
                      <div className="space-x-3 flex ">
                        <p>{post.views} views</p>

                        <p>{post.comments.length} comments</p>
                      </div>

                      <div className="relative">
                        <p>
                          {" "}
                          {/* Like button */}
                          {liked ? (
                            <button onClick={handleDislike}>
                              <span>
                                <AiTwotoneHeart className="text-red-900" />
                              </span>
                              {/* {dislikes} Dislike */}
                            </button>
                          ) : (
                            <button onClick={handleLike}>
                              <span>
                                <AiOutlineHeart />
                              </span>
                            </button>
                          )}
                          <sub className="font-bold ml-1">{post.likes}</sub>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {IsOpenShareIcons && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="min-h-screen  fixed top-0 left-0  bg-black bg-opacity-40 bg-blend-overlay w-full flex justify-center items-center z-[100]"
              >
                <div className="">
                  <div className="flex flex-col ">
                    <span className="block  absolute top-3  right-3">
                      <MdOutlineCancel
                        className="w-14 cursor-pointer h-14 font-bold hover:bg-header-dark-overlay text-white"
                        onClick={() => setIsOpenShareIcons(!IsOpenShareIcons)}
                      />
                    </span>
                    <div
                      onClick={() => setIsOpenShareIcons(IsOpenShareIcons)}
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

            {/* RECENT POST START */}
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="font-Antonio text-3xl font-semibold">
                Recent Post
              </h2>
              <div className="mt-10 grid grid-cols-1 px-5 gap-10 sm:grid-cols-2 md:grid-cols-3 ">
                <RecentPost />
              </div>

              {/* COMMENTS */}
              <div className="mt-10 py-2 max-w-xl">
                {submitted ? (
                  <div className="flex flex-col justify-center items-center py-10 gap-2 bg-header-dark-overlay text-black mx-auto">
                    <h3 className="text-xl font-bold">
                      Thank you for submitting your comment
                    </h3>
                    <p>Once it has been approved, it will appear here</p>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-3xl pb-7  font-Antonio font-bold">
                      Speak Your Mind
                    </h2>

                    <hr />

                    <input
                      {...register("_id")}
                      type="hidden"
                      name="_id"
                      value={post._id}
                    />
                    <form
                      action=""
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-3"
                    >
                      <div>
                        <textarea
                          {...register("comment", { required: true })}
                          placeholder="Write a comment"
                          rows={6}
                          className="w-full py-5 px-2 focus-within:shadow-lg transition duration-700 outline-none border-2"
                        ></textarea>

                        {/* Error comment */}
                        {errors.comment && (
                          <p className="text-header-dark-overlay text-lg font-bold py-2">
                            ! <span>Comment is required</span>
                          </p>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <input
                            {...register("name", { required: true })}
                            className="w-full py-3 px-2 focus-within:shadow-lg transition duration-700 outline-none border-2 border-gray-300 "
                            type="text"
                            placeholder="Name"
                          />

                          {/* Error name */}
                          {errors.name && (
                            <p className="text-header-dark-overlay text-lg font-bold py-2">
                              ! <span>Name is required</span>
                            </p>
                          )}
                        </div>
                        <div>
                          <input
                            {...register("email", { required: true })}
                            type="email"
                            placeholder="Email Address"
                            className="w-full py-3 px-2 focus-within:shadow-lg transition duration-700 outline-none border-2"
                          />
                          {/* Error email */}
                          {errors.email && (
                            <p className="text-header-dark-overlay text-lg font-bold py-2">
                              ! <span>Email is required</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {session && (
                        <div>
                          <div className="flex w-full justify-end items-end mt-4">
                            <button
                              type="submit"
                              className="text-header-dark-overlay transition hover:bg-header-dark-overlay duration-700 border border-header-dark-overlay hover:text-white p-3 text-sm uppercase"
                            >
                              Post a comment
                            </button>
                          </div>

                          <div>
                            <p className="mt-4  p-4 text-center text-lg font-bold font-migra-light bg-header-dark-overlay text-black">
                              <p className=" text-black font-Antonio">
                                Click{" "}
                                <button
                                  className="border-b-2 pb-1"
                                  onClick={() => signOut()}
                                >
                                  here
                                </button>{" "}
                                to Sigh Out
                              </p>
                            </p>
                          </div>
                        </div>
                      )}
                    </form>
                    {!session && (
                      <div className="flex w-full justify-end items-end mt-4">
                        <button
                          onClick={handleuserError}
                          type="submit"
                          className="text-header-dark-overlay transition hover:bg-header-dark-overlay duration-700 border border-header-dark-overlay hover:text-white p-3 text-sm uppercase"
                        >
                          Post a comment
                        </button>
                      </div>
                    )}
                    {useErr && (
                      <p className="mt-4  p-4 text-center text-lg font-bold font-migra-light bg-header-dark-overlay text-black">
                        {useErr}

                        <p className="mt-4 text-black font-Antonio">
                          Click{" "}
                          <button
                            className="border-b-2 pb-1"
                            onClick={() => signIn()}
                          >
                            here
                          </button>{" "}
                          to Sigh In
                        </p>
                      </p>
                    )}

                    {/* Approved Comments */}
                    <div className="mt-5 ">
                      <h2 className="text-2xl font-Antonio font-bold pb-3">
                        Comments
                      </h2>
                      <hr />
                      {post.comments.length == 0 ? (
                        <div className="mt-4 ">
                          <h3 className="font-semibold font-Sohne-Bold">
                            No Comments available
                          </h3>
                        </div>
                      ) : (
                        <div className="shadow-lg p-6">
                          {post.comments.map((comment) => (
                            <div
                              key={comment._id}
                              className="my-4 space-y-3   "
                            >
                              <h3 className="text-2xl font-Sohne-Bold font-bold capitalize ">
                                {comment.name}
                              </h3>

                              <p className="">{comment.comment}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default PostPage;
