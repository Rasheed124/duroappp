"use client";

import Image from "next/image";
import Link from "next/link";
import urlFor from "../../../../../sanity/lib/image";

type Props = {
  contacts: Contact[];
};

const Banner = ({ contacts }: Props) => {
  return (
    <>
      {contacts.map((contact) => (
        <div key={contact._id} className="flex flex-col pt-10   text-center ">
          {/* HEADER CONTENT */}

          <div className="max-w-sm sm:max-w-lg  md:max-w-3xl mx-auto  mb-10 p-2 lg:py-16">
            <div className="   leading-[10rem] flex justify-center items-center  ">
              <h2 className="text-[5rem] text-light-white sm:whitespace-nowrap sm:text-[4.0rem] lg:text-[7rem] xl:text-[10rem] sm:px-5 font-Antonio leading-[7rem] lg:tracking-[-0.5rem] uppercase ">
                {contact.logo}
              </h2>
            </div>
          </div>

          <div className="flex flex-col  justify-center md:flex-row md:justify-between space-y-2 md:space-y-0 md:space-x-3 mb-10 px-5 xl:px-20">
            <div className=" xl:w-full xl:max-w-lg xl:flex xl:flex-col xl:justify-start xl:items-start">
              <p className="text-xs uppercase">
                {" "}
                {contact.homeBannerAddress}
              </p>
            </div>
            <div className=" xl:w-full xl:max-w-lg xl:flex xl:flex-col xl:justify-start xl:items-center">
              <p className="text-xs space-x-3 uppercase">
                {contact.homeBannerSkills}
              </p>
            </div>
            <div className=" xl:w-full xl:max-w-lg xl:flex xl:flex-col xl:justify-center xl:items-end">
              <Link href={`${contact.slug.current}`}>
                <p className="text-xs uppercase">
                  {" "}
                  {contact.homeBannerHandleText}{" "}
                </p>
              </Link>
            </div>
          </div>

          {/* HEADER BANNER IMAGE */}
          <div className="hidden relative bg-cover bg-center bg-no-repeat min-h-[45vh] xl:flex justify-center items-center">
            <Image
              src={urlFor(contact.image).url()}
              alt={contact.alt}
              fill
              className="w-full "
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Banner;
