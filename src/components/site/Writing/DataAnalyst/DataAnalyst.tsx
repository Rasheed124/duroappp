"use client";


import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import urlFor from "../../../../../sanity/lib/image";





type Props = {
  datawriting: MarketWritings[];
};

const DataAnalystWritings = ({ datawriting }: Props) => {

  return (
    <>
      <section className="  ">
        <div className=" ">
          <header className="px-5 py-16 bg-light-white ">
            <div className=" max-w-6xl mx-auto mt-24 lg:mt-16">
              <h2 className="uppercase font-extrabold font-Antonio text-5xl lg:text-6xl  mb-1 ">
                Data Analyst
              </h2>

              <div className="space-x-1">
                <Link href={"/"}>Home</Link>
                <span>/</span>
                <Link href={"/portfolio"} className="capitalize">
                  {" "}
                  Portfolio
                </Link>
              </div>
            </div>
          </header>

          <div className="bg-white px-5 py-16">
            {datawriting.map((marketwriting) => (
              <div
                key={marketwriting._id}
                className="grid grid-cols-1  sm:grid-cols-3  max-w-6xl mx-auto "
              >
                <div className="mt-10">
                  <h3 className="font-bold text-2xl font-Antonio lg:text-4xl uppercase pb-2 ">
                    {marketwriting.title}
                  </h3>
                  <h4 className="font-semibold capitalize text-lg ">
                    {marketwriting.subTitle}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 sm:col-start-2 sm:col-end-4 gap-9 my-10  ">
                  {marketwriting.writings &&
                    marketwriting.writings.map((writing) => (
                      <div
                        key={writing._id}
                        className="space-y-3  flex flex-col"
                      >
                        <div className="relative h-[200px] w-full">
                          <Image
                            className="object-cover max-w-full"
                            src={urlFor(writing.image).url()}
                            alt={writing.alt}
                            fill
                          />
                        </div>

                        <h3 className="font-bold font-Antonio text-2xl">
                          {writing.title}
                        </h3>
                        <p className="mb-4">{writing.description}</p>
                        <Link
                          className="mt-6 pt-2 pb-0.5 border-b-0 border-deep-black block self-start  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-1000 after:bg-deep-black hover:after:w-full hover:after:h-0.5 font-semibold"
                          href={`${writing.url}`}
                        >
                          Read More
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default DataAnalystWritings;
