"use client";

import ClientSideRoute from "@/components/site/ClientSideRoute";
import { motion } from "framer-motion";

import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";


type Props = {
  uiuxprodprojects: Projects[];
};

const ProjectsGraphics = ({ uiuxprodprojects }: Props) => {
  return (
    <section className="py-16 lg:py-20  ">
      <div className="flex flex-col max-w-6xl mx-auto  ">
        <motion.div
          className="text-center  px-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className=" text-sm pb-3 mb-5 xl:mb-0">SELECT PROJECT</h2>
        </motion.div>

        {uiuxprodprojects.map((project) => (
          <div key={project._id} className="grid grid-cols-1  w-full px-5 ">
            <ClientSideRoute
              key={project._id}
              route={` /graphics-visual-design/${project.slug.current} `}
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
                      {uiuxprodprojects.indexOf(project) < 1
                        ? uiuxprodprojects.indexOf(project) + 1
                        : uiuxprodprojects.indexOf(project) + 1}
                    </span>

                    <h4 className="font-Antonio font-bold text-7xl lg:text-8xl uppercase relative after:content-[''] after:absolute after:-bottom-4 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-1 ">
                      {project.title}
                    </h4>
                  </div>
                </motion.div>
              </div>
            </ClientSideRoute>
          </div>
        ))}

        <Link
          className="block hover:transition-colors duration-500 self-center mt-10 "
          id="btn-link"
          href={"/portfolio"}
        >
          <div className="flex justify-center items-center gap-3 text-lg font-Antonio">
            <div className="uppercase">View more</div>
            <div className="relative btn overflow-x-hidden">
              <span>
                <HiArrowNarrowRight className="text-3xl hover:transform hover:-translate-x-full hover:transition-transform hover:duration-500" />
              </span>
              <span className="absolute top-0 left-0 transform -translate-x-full transition-transform duration-500">
                <HiArrowNarrowRight className="text-3xl" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default ProjectsGraphics;
