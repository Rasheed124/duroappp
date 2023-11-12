

import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/site/Navbars/NavbarLayout";
import { BsCheck } from "react-icons/bs";
import { Metadata } from "next";
import urlFor from "../../../../sanity/lib/image";
import { getSingleGraphicVisualDs } from "../../../../sanity/utils/sanity.utils";



type Props = {
  params: {
    slug: string;
  };
};




export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getSingleGraphicVisualDs(params.slug);

  if (!project)
    return {
      title: "Not Found",

      description: "This page is not found",
    };

  return {
    title: project.title,
    description: project.description,
     alternates: {
        canonical: `/project/${project.slug}`,
        languages: {
          "en-CA": `en-CA/project/${project.slug}`,
        },
      },
  };
}


async function GraphicsProject({ params }: Props) {

   let project = null;

   try {
     project = await getSingleGraphicVisualDs(params.slug);
   } catch (error) {
     console.error("Error loading project:", error);
   }

    if (!project) {
      return (
        <Layout route="/all">
          <div className="bg-white">
            <p>Project not found.</p>
          </div>
        </Layout>
      );
    }

 

  return (
    <Layout route="/all">
      <div className="bg-white ">
        <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-5 py-10 px-4 mt-16">
          {/* IMAGES & VIDEOS */}

          <div>
            <div>
              {project.projectContent && project.projectContent.map((project) => (
                <div key={project._id}>
                  <div className="space-y-5 flex flex-col justify-center items-center">
                    {project.image && (
                      <div className="space-y-5">
                        <Image
                          className="mb-5"
                          src={urlFor(project.image).url()}
                          width={500}
                          height={500}
                          alt={project.title}
                        />
                      </div>
                    )}

                    {project.video && (
                      <div className="space-y-5">
                        <video
                          src={`${project.video}`}
                          width={500}
                          height={500}
                          controls
                        ></video>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <div className="space-y-5 px-5 sticky top-32 ">
              {/* Title */}
              <h2 className="text-6xl font-Antonio uppercase  text-deep-black font-bold ">
                {project.title}
              </h2>
              <div className="space-y-3">
                <h4 className="text-xl uppercase text-deep-black font-bold font-Antonio">
                  {project.shortdescription}
                </h4>
                <p>{project.description}</p>
              </div>
              <div className=" grid grid-cols-2 gap-5 place-items-start  max-w-[380px] mb-5  ">
                {project.skillsTitle &&
                  Array.from(project.skillsTitle).map((skill, index) => (
                    <p
                      key={index}
                      className="text-lg flex justify-center items-start "
                    >
                      <span className="block ">
                        {" "}
                        <BsCheck className="block font-bold text-2xl mt-1" />
                      </span>
                      <span className="block self-center text-lg">{skill}</span>
                    </p>
                  ))}
              </div>

              {/* KEY RESULT */}

              {project.keyResult && (
                <div>
                  <h3 className="text-2xl uppercase text-deep-black font-bold font-Antonio mb-3">
                    KEY RESULTS
                  </h3>

                  <div className=" grid grid-cols-1 space-y-5   place-items-start  max-w-md  ">
                    {Array.from(project.keyResult).map((result, index) => (
                      <p
                        key={index}
                        className="text-lg border-b border-dotted border-light-overlay pb-3 "
                      >
                        {" "}
                        <span></span> {result}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* TESTIMONIAL */}

              {project.testimonials && (
                <div>
                  <h3 className="text-2xl uppercase text-deep-black font-bold font-Antonio mb-3">
                    CLIENT TESTIMONIAL
                  </h3>
                  <p className="text-lg pb-3 "> {project.testimonials}</p>
                </div>
              )}

              {/* TESTIMONIAL INFO */}

              <div className="font-Antonio">
                {project.projectlink && (
                  <div>
                    <h4 className="text-md font-bold pb-3 ">
                      {" "}
                      CLIENT:
                      <span className="ml-2">
                        <Link
                          href={`
                                ${
                                  !project.projectlink
                                    ? "#/" + ""
                                    : project.projectlink
                                }
                          
                          `}
                          className="underline"
                        >
                          <span>{project.title}</span>
                        </Link>
                      </span>
                    </h4>
                  </div>
                )}

                <div>
                  <h4 className="text-md font-bold pb-3 ">
                    {" "}
                    DATE:
                    <span className="ml-2">
                      {new Date(project._createdAt).toLocaleDateString(
                        "en-Us",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        },
                      )}
                    </span>
                  </h4>
                </div>

                {project.shareProject && (
                  <div>
                    <h4 className="text-md font-bold pb-3 font-Antonio ">
                      {" "}
                      SHARE:
                      {Array.from(project.shareProject).map((share, id) => (
                        <span
                          key={id}
                          className="font-Sohne-Bold text-xs ml-2 space-x-1"
                        >
                          {share.length > 1 && share.includes("twitter") && (
                            <Link href={`${share}`} className="underline">
                              <span>Twitter</span>
                            </Link>
                          )}
                          {share.length > 1 && share.includes("facebook") && (
                            <Link href={`${share}`} className="underline">
                              <span>Facebook</span>
                            </Link>
                          )}
                          {share.length > 1 && share.includes("linkedin") && (
                            <Link href={`${share}`} className="underline">
                              <span>Linkedin</span>
                            </Link>
                          )}
                        </span>
                      ))}
                    </h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GraphicsProject;
