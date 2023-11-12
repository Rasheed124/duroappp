import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { groq } from "next-sanity";
import Link from "next/link";
import NewsLetterForm from "../Contact/NewsLetter";
import { client } from "../../../../sanity/lib/client";

async function fetchContactData(): Promise<Contact[]> {
  const query = groq`
    *[_type == 'contact' ]
    {
      id,
      logo,
      ...,

    }
  `;

  const contacts: Contact[] = await client.fetch(query);
  return contacts;
}

const Footer = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    async function fetchData() {
      const contactsData = await fetchContactData();
      setContacts(contactsData);
    }

    fetchData();
  }, []);

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {contacts.map((contact) => (
        <div key={contact._id}>
          <footer className="pb-14  bg-contact-dark-overlay text-deep-black relative ">
            <div className="flex flex-col w-full  ">
              <div className=" pb-5">
                <div className="px-4 pt-14 ">
                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 pt-10  ">
                    <div className="md:order-2  max-w-2xl ">
                      <NewsLetterForm />

                      <div className="mb-6">
                        <p>{contact.form}</p>
                      </div>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="">
                          <h4 className="font-Antonio font-bold mb-3 text-xl">
                            INFO
                          </h4>
                          <div className=" flex flex-col flex-wrap">
                            {Array.from(contact.infoText).map((address, id) => (
                              <p key={id} className="">
                                {address}
                              </p>
                            ))}
                          </div>

                          <Link href={``} className="mt-2 block">
                            {contact.mail}
                          </Link>
                        </div>
                        <div className="place-self-start">
                          <h4 className="font-Antonio font-bold mb-3 text-xl">
                            LINKS
                          </h4>

                          {Array.from(contact.socialHandle).map(
                            (handle, id) => (
                              <span key={id} className="block">
                                {handle.length > 1 &&
                                  handle.includes("twitter") && (
                                    <Link href={`${handle}`} className=" ">
                                      Twitter
                                    </Link>
                                  )}
                                {handle.length > 1 &&
                                  handle.includes("facebook") && (
                                    <Link href={`${handle}`} className="">
                                      Facebook
                                    </Link>
                                  )}
                                {handle.length > 1 &&
                                  handle.includes("instagram") && (
                                    <Link href={`${handle}`} className="">
                                      Instagram
                                    </Link>
                                  )}
                                {handle.length > 1 &&
                                  handle.includes("tiktok") && (
                                    <Link href={`${handle}`} className="">
                                      Tiktok
                                    </Link>
                                  )}
                                {handle.length > 1 &&
                                  handle.includes("snapchat") && (
                                    <Link href={`${handle}`} className="">
                                      Snapchat
                                    </Link>
                                  )}
                                {handle.length > 1 &&
                                  handle.includes("youtube") && (
                                    <Link href={`${handle}`} className="">
                                      Youtube
                                    </Link>
                                  )}
                                {handle.length > 1 &&
                                  handle.includes("linkedin") && (
                                    <Link href={`${handle}`} className="">
                                      Linkedin
                                    </Link>
                                  )}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 place-content-end mt-4 sm:mt-0 ">
                      <h2 className="font-Antonio text-3xl lg:text-5xl font-bold mb-2 uppercase ">
                        {contact.logo}
                      </h2>

                      <p className="uppercase">
                        {contact.infoText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Go to Top */}
              {showTopBtn && (
                <motion.div
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 1 }}
                  className="fixed bottom-10 right-10 h-14 w-14  lg:w-24 lg:h-24 flex p-10 z-10 rounded-full justify-center items-center flex-col shadow-lg bg-white text-deep-black text-xl font-Antonio font-extrabold cursor-pointer transition-all duration-700 "
                  onClick={goToTop}
                >
                  Top
                </motion.div>
              )}
            </div>
          </footer>
        </div>
      ))}
    </>
  );
};

export default Footer;
