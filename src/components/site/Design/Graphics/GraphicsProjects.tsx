"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ClientSideRoute from "@/components/site/ClientSideRoute";
import urlFor from "../../../../../sanity/lib/image";


type Props = {
  graphicprojects: Projects[];
};

const GraphicsProjects = ({ graphicprojects }: Props) => {
  return (
    <>
      <section className="  ">
        <div className=" ">
          <header className="px-5 py-16 bg-light-white ">
            <div className=" max-w-6xl mx-auto mt-24 lg:mt-16">
              <h2 className="uppercase max-w-2xl font-extrabold font-Antonio text-6xl mb-1 ">
                Graphics & Visual Design
              </h2>

              <div className="space-x-1">
                <Link href={"/"}>Home</Link>
                <span>/</span>
                <Link href={"/graphics-visual-design"}>Portfolio</Link>
              </div>
            </div>
          </header>

          <div className="bg-white px-5 py-16 text-light-white ">
            <div className=" ">
              <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 ">
                {graphicprojects.map((project) => (
                  <ClientSideRoute
                    key={project._id}
                    route={`/graphics-visual-design/${project.slug?.current}`}
                  >
                    <motion.div
                      className={`min-h-screen z-10 cursor-pointer overflow-hidden  relative bg-cover  transition duration-700 bg-no-repeat bg-center bg-black bg-blend-overlay bg-opacity-40 hover:bg-opacity-30`}
                      style={{
                        backgroundImage: `url(${urlFor(
                          project.projectImage,
                        ).url()})`,
                      }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                    >
                      <div className="absolute z-10 left-10 bottom-10 ">
                        <h1 className="font-Antonio text-2xl transition-all duration-500 hover:underline font-bold">
                          {project.title}
                        </h1>
                      </div>
                    </motion.div>
                  </ClientSideRoute>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GraphicsProjects;
