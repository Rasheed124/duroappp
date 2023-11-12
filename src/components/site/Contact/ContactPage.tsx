"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import ContactUsForm from "./ContactForm";


type Props = {
  contactPage: Contact[];
};

const ContactPageComp = ({ contactPage }: Props) => {


  return (
    <>
      {contactPage.map((contact) => (
        <div key={contact._id} className=" ">
          <section className="pt-24 bg-light-white">
            <div className=" ">
              <motion.div
                className=""
                initial="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="max-w-6xl px-5 mx-auto text-left  grid grid-cols-1 md:grid-cols-2 gap-10 pb-24 ">
                  <div className=" flex flex-col ">
                    <h2 className="font-Antonio text-5xl font-bold mb-10 lg:mb-16 max-w-[455px] md:text-7xl uppercase leading-[3.4rem]">
                      {contact.title}
                    </h2>

                    <Link
                      href={`mailto:${contact.mail}`}
                      className="block mb-2 self-start"
                    >
                      {contact.mail}
                    </Link>
                    <div className="space-y-2">
                      {Array.from(contact.socialHandle).map((share, id) => (
                        <span
                          key={id}
                          className="font-Sohne-Bold text-xs uppercase block  "
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
                          {share.length > 1 && share.includes("instagram") && (
                            <Link href={`${share}`} className="block underline">
                              <span>Instagram</span>
                            </Link>
                          )}
                          {share.length > 1 && share.includes("wa") && (
                            <Link href={`${share}`} className="block underline">
                              <span>Whatsapp</span>
                            </Link>
                          )}
                          {share.length > 1 && share.includes("discord") && (
                            <Link href={`${share}`} className="block underline">
                              <span>Discord</span>
                            </Link>
                          )}
                          {share.length > 1 && share.includes("tiktok") && (
                            <Link href={`${share}`} className="block underline">
                              <span>Tiktok</span>
                            </Link>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className=" ">
                    <ContactUsForm />
                  </div>
                </div>

                <div className=" py-2 bg-white   ">
                  <Marquee className=" flex space-x-[0.2] whitespace-nowrap  ">
                    {Array.from(contact.marquee).map((marq, id) => (
                      <div key={id} className=" w-full  whitespace-nowrap">
                        <div className="  font-semibold text-xl">
                          &nbsp;{marq}
                        </div>
                      </div>
                    ))}
                  </Marquee>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      ))}
    </>
  );
};
export default ContactPageComp;
