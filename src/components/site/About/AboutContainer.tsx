"use client";

import { useState, useEffect } from "react";

import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

import useMediaQuery from "../UseMediaQuery";

import Image from "next/image";
import { motion } from "framer-motion";

import SetScrollSize from "../SetScrollSize";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import NewsLetterForm from "../Contact/NewsLetter";
import Awards from "./Awards";
import urlFor from "../../../../sanity/lib/image";



type Props = {
  abouts: About[];
  contactPage: Contact[];
  awards: Awards[]

};

const AboutContainer = ({ abouts, contactPage, awards}: Props) => {
  const [MenuIsToggle, setMenuIstoggle] = useState(false);

  const [DropDownIsToggle, setDropDownIsToggle] = useState(false);

  const [DropDownIsToggleP, setDropDownIsToggleP] = useState(false);

  const isAboveSmallScreens = useMediaQuery("(min-width: 1024px)");

  const isScrollSize = SetScrollSize(137);

  // FOOTER HOOKS
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <section className="">
      {abouts.map((about) => (
        <motion.div
          key={about._id}
          className={`min-h-screen bg-cover bg-no-repeat bg-center bg-deep-black bg-blend-overlay bg-opacity-10 `}
          style={{ backgroundImage: `url(${urlFor(about.image).url()})` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <nav
            className={` ${!isAboveSmallScreens ? "bg-deep-black fixed w-full z-[80] top-0 text-light-white transition duration-700 translate-y-0": isScrollSize ? "bg-deep-black fixed w-full z-[80] top-0 text-light-white transition duration-700 translate-y-0 ": "bg-transparent pt-4 mx-10 z-[80] text-light-white transform transition duration-700 translate-y-3"}  `} >
            <div
              className={`${!isAboveSmallScreens ? "border-0 py-6 px-5" : isScrollSize ? "border-0 py-6 px-5" : "py-6 border-t border-white" }`}
            >
              <div className=" flex justify-between items-center">
                <Link
                  href={"/"}
                  className="block text-2xl hover:transition-colors hover:duration-500 hover:text-header-dark-overlay font-semibold font-Antonio "
                >
                  {contactPage.map((contact) => (
                    <h1 key={contact._id}>{contact.logo}</h1>
                  ))}
                </Link>
                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                  <div className="">
                    <ul className="space-x-12  ">
                      <li className=" inline-block p-1 group transition-all duration-500">
                        <Link
                          href={"/about"}
                          className="font-extrabold  text-xl font-Antonio block"
                        >
                          <div className="relative uppercase overflow-y-hidden link-swipe">
                            <span className="block   transform transition-transform translate-y-0 duration-300">
                              About
                            </span>
                            <span className="block absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 ">
                              About
                            </span>
                          </div>
                        </Link>
                        <div className="z-20 relative font-Sohne-Bold hidden transition-all duration-500 group-hover:block hover:block ">
                          <ul className="space-y-3 top-2 absolute flex flex-col flex-grow left-0  py-5 px-5 bg-deep-overlay-black ">
                            <li className="">
                              <Link
                                href={"/blog"}
                                className=" whitespace-nowrap  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-0.5"
                              >
                                <div className="">
                                  <span className="block text-lg ">Blog</span>
                                </div>
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                href={"/resume"}
                                className=" whitespace-nowrap  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-0.5"
                              >
                                <div className="">
                                  <span className="block text-lg ">Resume</span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="inline-block  p-1 group transition-all duration-500">
                        <Link
                          href={"/portfolio"}
                          className="font-extrabold  text-xl font-Antonio block"
                        >
                          <div className="relative uppercase overflow-y-hidden link-swipe">
                            <span className="block   transform transition-transform translate-y-0 duration-300">
                              Porfolio
                            </span>
                            <span className="block absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 ">
                              Porfolio
                            </span>
                          </div>
                        </Link>
                        <div className="z-20 relative font-Sohne-Bold hidden transition-all duration-500 group-hover:block hover:block ">
                          <ul className="space-y-3 top-2 absolute flex flex-col flex-grow  -left-24   py-5 px-5 bg-deep-overlay-black ">
                            <li className="">
                              <Link
                                href={"/graphics-visual-design"}
                                className=" whitespace-nowrap  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-0.5"
                              >
                                <div className="">
                                  <span className="block text-lg ">
                                    Graphics & Visual Design
                                  </span>
                                </div>
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                href={"/ui-ux-product-design"}
                                className=" whitespace-nowrap  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-0.5"
                              >
                                <div className="">
                                  <span className="block text-lg ">
                                    UI/UX & Product Design
                                  </span>
                                </div>
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                href={"/digital-marketing"}
                                className=" whitespace-nowrap  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-0.5"
                              >
                                <div className="">
                                  <span className="block text-lg ">
                                    Digital Marketing
                                  </span>
                                </div>
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                href={"/data-analyst"}
                                className=" whitespace-nowrap  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-0.5"
                              >
                                <div className="">
                                  <span className="block text-lg ">
                                    Data Analyst
                                  </span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className=" inline-block p-1 group transition-all duration-500">
                        <Link
                          href={"/contact"}
                          className="font-extrabold  text-xl font-Antonio block"
                        >
                          <div className="relative uppercase overflow-y-hidden link-swipe">
                            <span className="block   transform transition-transform translate-y-0 duration-300">
                              Contact
                            </span>
                            <span className="block absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 ">
                              Contact
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="   ">
                    {!MenuIsToggle ? (
                      // Open Menu
                      <div className="">
                        <button
                          className="outline-none "
                          onClick={() => setMenuIstoggle(!MenuIsToggle)}
                        >
                          <HiMenu className="text-light-white text-2xl " />
                        </button>
                      </div>
                    ) : (
                      // Close Menu
                      <div className=" ">
                        <button
                          className="outline-none "
                          // initial="hidden"
                          // whileInView="visible"
                          // viewport={{ once: false, amount: 0.5 }}
                          // transition={{ duration: 0.8 }}
                          // variants={{
                          //     hidden: { opacity: 0, y: 0 },
                          //     visible: { opacity: 1, y: 0 },
                          // }}
                          onClick={() => setMenuIstoggle(!MenuIsToggle)}
                        >
                          <HiX className="text-light-white text-2xl" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* MOBILE NAV */}
              {!isAboveSmallScreens && MenuIsToggle && (
                <motion.div
                  className="  relative "
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.9 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <ul className="flex flex-col text-deep-black justify-between items-start absolute top-6 bg-white left-0 w-full p-5 z-10 space-y-3.5">
                    <li className="w-full ">
                      <div className="flex justify-between  items-center">
                        <Link
                          href={"/about"}
                          className="font-bold font-Antonio  w-1/2 block"
                        >
                          <div className=" ">
                            <span className=" transform transition-transform translate-y-0 duration-300">
                              About
                            </span>
                          </div>
                        </Link>

                        <div className="  ">
                          {!DropDownIsToggle ? (
                            // Open Menu
                            <button
                              className="outline-none pl-5  py-[2px] "
                              onClick={() =>
                                setDropDownIsToggle(!DropDownIsToggle)
                              }
                            >
                              <BiChevronRight className="w-6 h-6 " />
                            </button>
                          ) : (
                            // Close Menu
                            <button
                              className="outline-none  pl-5  py-[2px]"
                              onClick={() =>
                                setDropDownIsToggle(!DropDownIsToggle)
                              }
                            >
                              <BiChevronDown className="w-6 h-6 " />
                            </button>
                          )}
                        </div>
                      </div>

                      {DropDownIsToggle && (
                        <motion.div
                          className="   py-2.5"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false }}
                          transition={{ duration: 0.5 }}
                          variants={{
                            hidden: { opacity: 0, y: 0 },
                            visible: { opacity: 1, y: 0 },
                          }}
                        >
                          <ul className={`space-y-1py-5 px-5`}>
                            <li className="">
                              <Link
                                href={"/blog"}
                                className=" whitespace-nowrap  w-2/3 block "
                              >
                                <div className="">
                                  <span className="block text-lg ">Blog</span>
                                </div>
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                href={"/resume"}
                                className=" whitespace-nowrap   w-2/3 block "
                              >
                                <div className="">
                                  <span className="block text-lg ">Resume</span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </li>

                    <li className="w-full ">
                      <div className="flex justify-between  items-center">
                        <Link
                          href={"/portfolio"}
                          className="font-bold font-Antonio  w-1/2 block"
                        >
                          <div className=" ">
                            <span className=" transform transition-transform translate-y-0 duration-300">
                              Portfolio
                            </span>
                          </div>
                        </Link>

                        <div className="  ">
                          {!DropDownIsToggleP ? (
                            // Open Menu
                            <button
                              className="outline-none pl-5  py-[2px] "
                              onClick={() =>
                                setDropDownIsToggleP(!DropDownIsToggleP)
                              }
                            >
                              <BiChevronRight className="w-6 h-6 " />
                            </button>
                          ) : (
                            // Close Menu
                            <button
                              className="outline-none  pl-5  py-[2px]"
                              onClick={() =>
                                setDropDownIsToggleP(!DropDownIsToggleP)
                              }
                            >
                              <BiChevronDown className="w-6 h-6 " />
                            </button>
                          )}
                        </div>
                      </div>

                      {DropDownIsToggleP && (
                        <motion.div
                          className="   py-2.5"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false }}
                          transition={{ duration: 0.5 }}
                          variants={{
                            hidden: { opacity: 0, y: 0 },
                            visible: { opacity: 1, y: 0 },
                          }}
                        >
                          <ul className={`space-y-1py-5 px-5`}>
                            <li className="">
                              <Link
                                href={"/graphics-visual-design"}
                                className=" whitespace-nowrap  w-2/3 block "
                              >
                                <div className="">
                                  <span className="block text-lg ">
                                    Graphics & Visual Design
                                  </span>
                                </div>
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                href={"/ui-ux-product-design"}
                                className=" whitespace-nowrap   w-2/3 block "
                              >
                                <div className="">
                                  <span className="block text-lg ">
                                    UI/UX & Product Design
                                  </span>
                                </div>
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                href={"/digital-marketing"}
                                className=" whitespace-nowrap   w-2/3 block "
                              >
                                <div className="">
                                  <span className="block text-lg ">
                                    Digital Marketing
                                  </span>
                                </div>
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                href={"/data-analyst"}
                                className=" whitespace-nowrap   w-2/3 block "
                              >
                                <div className="">
                                  <span className="block text-lg ">
                                    Data Analyst
                                  </span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </li>

                    <li className="w-full ">
                      <div className="">
                        <Link
                          href={"/contact"}
                          className="font-bold font-Antonio  w-1/2 block"
                        >
                          <div className=" ">
                            <span className=" transform transition-transform translate-y-0 duration-300">
                              Contact
                            </span>
                          </div>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
          </nav>
        </motion.div>
      ))}

      {abouts.map((about) => (
        <div key={about._id}>
          {/* ABOUT ME DETAILS */}
          <div className=" py-14 bg-white text-deep-black">
            <div className="max-w-6xl px-5 mx-auto text-left  grid grid-cols-1 lg:grid-cols-3 gap-10 ">
              <div className=" lg:col-start-1 lg:col-end-3 ">
                <h2 className="font-Antonio font-bold text-2xl uppercase">
                  {about.title}
                </h2>

                <div className=" space-y-5 pr-10 md:pr-0 font-libre-baskerville text-lg mt-5">
                  {Array.from(about.storyText).map((text, id) => (
                    <p key={id}>{text}</p>
                  ))}
                </div>
              </div>

              <div className=" ">
                <h2 className="font-Antonio font-bold text-2xl uppercase">
                  Contact{" "}
                </h2>

                <div className="mt-5">
                  {contactPage.map(
                    (contact, index) =>
                      contact.mail && (
                        <Link
                          key={index}
                          className="font-libre-baskerville text-lg"
                          href={`mailto:${contact.mail}`}
                        >
                          {contact.mail}
                        </Link>
                      ),
                  )}

                  {contactPage.map((contact) =>
                    Array.from(contact.socialHandle).map((share, id) => (
                      <span
                        key={id}
                        className=" font-libre-baskerville text-lg"
                      >
                        {share.length > 1 && share.includes("twitter") && (
                          <Link href={`${share}`} className="block">
                            <span>Twitter</span>
                          </Link>
                        )}
                        {share.length > 1 && share.includes("facebook") && (
                          <Link href={`${share}`} className="block">
                            <span>Facebook</span>
                          </Link>
                        )}
                        {share.length > 1 && share.includes("linkedin") && (
                          <Link href={`${share}`} className="block">
                            <span>Linkedin</span>
                          </Link>
                        )}
                        {share.length > 1 && share.includes("instagram") && (
                          <Link href={`${share}`} className="block">
                            <span>Instagram</span>
                          </Link>
                        )}
                        {share.length > 1 && share.includes("wa") && (
                          <Link href={`${share}`} className="block">
                            <span>Whatsapp</span>
                          </Link>
                        )}
                        {share.length > 1 && share.includes("discord") && (
                          <Link href={`${share}`} className="block">
                            <span>Discord</span>
                          </Link>
                        )}
                        {share.length > 1 && share.includes("tiktok") && (
                          <Link href={`${share}`} className="block">
                            <span>Tiktok</span>
                          </Link>
                        )}
                      </span>
                    )),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ABOUT COMPANY */}
          <div className=" py-14 bg-light-white text-deep-black">
            <motion.div
              className=" max-w-6xl px-5 mx-auto text-center "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className=" mb-10 py-2">
                <h2 className="font-Antonio font-bold text-3xl xl:text-5xl uppercase leading-[3.5rem]">
                  {about.heading}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 ">
                {about.companys.map((company, id) => (
                  <div
                    key={id}
                    className="relative  md:last:border-b-0 last:border-b border-deep-black md:[&>*nth-child(n+4)]:border-b-0"
                  >
                    <div className="text-left  py-3 border-t border-deep-black group border-b-0 md:border-b ">
                      <div className="mb-5  scale-0 group-hover:scale-110 ease-in  duration-500 absolute w-[120px] h-[100px]  -top-7 right-10  ">
                        <Image
                          src={company.image}
                          alt={company.alt}
                          fill
                          className="w-full max-w-full"
                        />
                      </div>
                      <Link href={"/"} className="block">
                        <p className="text-xl">{company.title}</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      ))}

      <div>
        {/* AWARDS */}
        <Awards awardsData={awards} />
      </div>

      <div>
        {contactPage &&
          contactPage.map((footerData) => (
            <footer
              key={footerData._id}
              className="pb-14  bg-contact-dark-overlay text-deep-black relative "
            >
              <div className="flex flex-col w-full  ">
                <div className=" pb-5">
                  <div className="px-4 pt-14 ">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 pt-10  ">
                      <div className="md:order-2  max-w-2xl ">
                        <NewsLetterForm />

                        <div className="mb-6">
                          <p>{footerData.form}</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                          <div className="">
                            <h4 className="font-Antonio font-bold mb-3 text-xl">
                              INFO
                            </h4>
                            <div className=" flex flex-col flex-wrap">
                              {Array.from(footerData.infoText).map(
                                (address, id) => (
                                  <p key={id} className="">
                                    {address}
                                  </p>
                                ),
                              )}
                            </div>

                            <Link
                              href={`mailto:${footerData.mail}`}
                              className="mt-2 block"
                            >
                              {footerData.mail}
                            </Link>
                          </div>
                          <div className="place-self-start">
                            <h4 className="font-Antonio font-bold mb-3 text-xl">
                              LINKS
                            </h4>

                            {Array.from(footerData.socialHandle).map(
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

                      <div className="grid grid-cols-1 place-content-end ">
                        <h2 className="font-Antonio text-5xl font-bold mb-2 uppercase ">
                          {footerData.logo}
                        </h2>

                        <p>{footerData.text}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Go to Top */}
                {showTopBtn && (
                  <div
                    className="fixed bottom-10 right-10 h-14 w-14  lg:w-24 lg:h-24 flex p-10 z-10 rounded-full justify-center items-center shadow-lg flex-col bg-white text-deep-black text-xl font-Antonio font-extrabold cursor-pointer transition-all duration-700 "
                    onClick={goToTop}
                  >
                    Top
                  </div>
                )}
              </div>
            </footer>
          ))}
      </div>
    </section>
  );
};

export default AboutContainer;
