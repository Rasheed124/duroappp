
import { Metadata } from "next";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";

export const metadata: Metadata = {
  title: "Resume ",

  description: "Creating useful Content ",

  alternates: {
    canonical: "/resume",
    languages: {
      "en-CA": `en-CA`,
    },
  },
};

export default async function Resume() {
  const resumequery = groq`
            *[_type == 'about' ]
{
            _id,
        
              "resume": resume.asset->url
           
             } `;

  const resume: Contact[] = await client.fetch(resumequery);
  return (
    <>
      <div className=" overflow-y-hidden w-full h-full ">
        <iframe
          className=" overflow-y-hidden"
          src={`${resume.map((reS) => reS.resume)}`}
          width="100%"
          height="800px"
        ></iframe>
      </div>
    </>
  );
}
