"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import ClientSideRoute from "@/components/site/ClientSideRoute";
import { HiArrowNarrowRight } from "react-icons/hi";

type Props = {
  projects: Projects[];
};


const Projects =  ({ projects}: Props) => {


  return (
    <section className="py-16 lg:py-20  ">
      <div className="flex flex-col max-w-6xl mx-auto  ">
        <motion.div
          className="text-center  mb-10  px-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className=" text-sm md:text-base pb-3 xl:mb-0 ">SELECT PROJECT</h2>
        </motion.div>

        {projects.map((project) => (
          <div key={project._id} className="grid grid-cols-1  w-full px-5 ">
            {/*  ANALYST */}
            {project._type == "dataAnalyst" && (
              <ClientSideRoute key={project._id} route={` /data-analyst `}>
                <div className=" ">
                  <motion.div
                    className=" mb-5 md:flex md:flex-col md:justify-center md:items-center "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    variants={{
                      hidden: { opacity: 0, y: 60 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className="flex flex-row">
                      <span className="self-start mr-3 mt-3">
                        {"0"}
                        {projects.indexOf(project) < 1
                          ? projects.indexOf(project) + 1
                          : projects.indexOf(project) + 1}
                      </span>

                      <h4 className="font-Antonio font-bold text-6xl lg:text-8xl uppercase relative after:content-[''] after:absolute after:-bottom-4 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-1 ">
                        {project.title}
                      </h4>
                    </div>
                  </motion.div>
                </div>
              </ClientSideRoute>
            )}
            {/*  DIGITAL MARKETING */}
            {project._type == "marketWriting" && (
              <ClientSideRoute key={project._id} route={` /digital-marketing `}>
                <div className=" ">
                  <motion.div
                    className=" mb-5 md:flex md:flex-col md:justify-center md:items-center "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    variants={{
                      hidden: { opacity: 0, y: 60 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className="flex flex-row">
                      <span className="self-start mr-3 mt-3">
                        {"0"}
                        {projects.indexOf(project) < 1
                          ? projects.indexOf(project) + 1
                          : projects.indexOf(project) + 1}
                      </span>

                      <h4 className="font-Antonio font-bold text-7xl lg:text-8xl uppercase relative after:content-[''] after:absolute after:-bottom-4 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-1 ">
                        {project.title}
                      </h4>
                    </div>
                  </motion.div>
                </div>
              </ClientSideRoute>
            )}
            {/*  DIGITAL GRAPHICS VISUAL DESIGN */}
            {project._type == "graphicsVisualDesign" && (
              <ClientSideRoute
                key={project._id}
                route={` /graphics-visual-design/${project.slug?.current} `}
              >
                <div className=" ">
                  <motion.div
                    className=" mb-5 md:flex md:flex-col md:justify-center md:items-center "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    variants={{
                      hidden: { opacity: 0, y: 60 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className="flex flex-row">
                      <span className="self-start mr-3 mt-3">
                        {"0"}
                        {projects.indexOf(project) < 1
                          ? projects.indexOf(project) + 1
                          : projects.indexOf(project) + 1}
                      </span>

                      <h4 className="font-Antonio font-bold text-7xl lg:text-8xl uppercase relative after:content-[''] after:absolute after:-bottom-4 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-1 ">
                        {project.title}
                      </h4>
                    </div>
                  </motion.div>
                </div>
              </ClientSideRoute>
            )}
            {/*  PRODUCT DESIGN */}

            {project._type == "productUiUxs" && (
              <ClientSideRoute
                key={project._id}
                route={` /ui-ux-product-design/${project.slug?.current} `}
              >
                <div className=" ">
                  <motion.div
                    className=" mb-5 md:flex md:flex-col md:justify-center md:items-center "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    variants={{
                      hidden: { opacity: 0, y: 60 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className="flex flex-row">
                      <span className="self-start mr-3 mt-3">
                        {"0"}
                        {projects.indexOf(project) < 1
                          ? projects.indexOf(project) + 1
                          : projects.indexOf(project) + 1}
                      </span>

                      <h4 className="font-Antonio font-bold text-4xl lg:text-8xl uppercase relative after:content-[''] after:absolute after:-bottom-4 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-1 ">
                        {project.title}
                      </h4>
                    </div>
                  </motion.div>
                </div>
              </ClientSideRoute>
            )}
          </div>
        ))}

   

        <Link href={"/portfolio"} className="self-center mt-10   ">
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
    </section>
  );
}; 

export default Projects;

