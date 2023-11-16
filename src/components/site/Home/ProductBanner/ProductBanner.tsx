"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

import { motion } from "framer-motion";

import urlFor from "../../../../../sanity/lib/image";


type Props = {
  products: ProductMarketing[];
};

const ProductBanner = ({ products }: Props) => {
  return (
    <section className="py-16 lg:py-20 ">
      <div className="flex flex-col max-w-6xl mx-auto   ">
        {products.map((product) => (
          <div key={product._id} className="  py-7 px-5 ">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2  gap-14  w-full px-5 "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-full flex flex-col justify-center order-1 ">
                {product.image && (
                  <div className="max-w-lg relative lg:max-w-xl mx-auto">
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.alt}
                      width={500}
                      height={500}
                      className="max-w-full  "
                    />
                  </div>
                )}
              </div>

              {product.video && (
                <div className="relative w-full md:order-2">
                  <iframe
                    width={560}
                    height={315}
                    src={`${product.video}`}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={"Youtube video"}
                    className="aspect-[16/9] h-full w-full p-0"
                  />
                </div>
              )}

              <div className="flex flex-col text-left space-y-3 md:order-1 ">
                <h2 className="font-Sohne-Bold  text-lg uppercase">
                  {product.title && product.title}
                </h2>
                <h3 className=" font-bold font-libre-baskerville  text-2xl">
                  {product.text && product.text}
                  {/* <span>Get More Trafic </span> <br />{" "}
                  <span className="font-Sohne-Bold text-xl lg:text-2xl ">
                    On Your Website
                  </span>{" "} */}
                </h3>
                <p className="py-3 text-base text-justify lg:text-lg">
                  {product.content && product.content}
                </p>

                {product.strategies && (
                  <div className="grid grid-cols-2  gap-4 py-4 ">
                    {Array.from(product.strategies).map((strategy, id) => (
                      <h4
                        key={id}
                        className=" text-lg flex  flex-wrap gap-1 items-center"
                      >
                        <span className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-circle-check-filled text-header-dark-overlay"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path
                              d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                              strokeWidth="0"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>

                        <span className="font-medium whitespace-normal xl:whitespace-nowrap">
                          {strategy}
                        </span>
                      </h4>
                    ))}
                  </div>
                )}

                {product.slug && product.slugtitle && (
                  <Link href={`${product.slug.current}`} className="self-start   ">
                    <div className="group cursor-pointer font-Antonio inline-flex ">
                      <div className="mr-2 uppercase text-xl transition duration-700 group-hover:text-header-dark-overlay">
                        {product.slugtitle}
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
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductBanner;
