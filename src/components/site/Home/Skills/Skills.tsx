"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

import { motion } from "framer-motion";
import urlFor from "../../../../../sanity/lib/image";

type Props = {
  skills: Skills[];
};

const Skills = ({ skills }: Props) => {
  return (
    <section className="py-16 lg:py-20 ">
      {skills && skills.map((skill) => (
        <div key={skill._id} className="flex flex-col max-w-6xl mx-auto   ">
          <div className="  text-center py-7 px-5 ">
            <h2 className="font-Sohne-Bold text-lg pb-3 mb-5 xl:mb-0 uppercase">
              {skill.heading}
            </h2>
            <div className="   hidden xl:block xl:mb-16 xl:px-2">
              <h3 className="font-migra-light italic font-thin text-3xl xl:text-6xl">
                {skill.subHeading.split(" ").slice(0, 1)}
                <span className="text-light-overlay">
                  {" "}
                  {skill.subHeading.split(" ").slice(1, 2)}
                </span>{" "}
                {skill.subHeading.split(" ").slice(2, 7).join(" ")}{" "}
                <span className="text-light-overlay">
                  {skill.subHeading.split(" ").slice(7, 8).join(" ")}
                </span>{" "}
                {skill.subHeading.split(" ").slice(8)}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-10 w-full px-5 ">
              {skill.skillsDetails.map((skillDetail) => (
                <motion.div
                  key={skillDetail._id}
                  className=" mb-5 md:mb-0  "
                  initial="visible"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.6, delay: 0 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="mb-5 relative w-[150px] h-[100px]">
                    {skillDetail.image && (
                      <Image
                        src={urlFor(skillDetail.image).url()}
                        alt={skillDetail.alt}
                        fill
                        className="w-full absolute top-0 left-0 max-w-full"
                      />
                    )}
                  </div>
                  <div className="space-y-5 ">
                    <h4 className="font-Antonio text-lg text-left xl:text-xl font-bold uppercase">
                      {skillDetail.title}
                    </h4>

                    <p className="text-lg text-left">
                      {skillDetail.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <Link href={"/contact"} className="self-center mt-10   ">
            <div className="group cursor-pointer font-Antonio inline-flex">
              <div className="mr-2 uppercase text-xl transition duration-700 group-hover:text-header-dark-overlay">
                Get in touch
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
      ))}
    </section>
  );
};

export default Skills;
