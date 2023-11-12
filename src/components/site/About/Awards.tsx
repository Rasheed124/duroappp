import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


interface Props {
  awardsData: Awards[];
}

function Awards({ awardsData }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedAwards, setDisplayedAwards] = useState(3); // Initial number of awards to display
  const [showMoreDisabled, setShowMoreDisabled] = useState(false); // State to disable the button when no more data

  const awardsByCategory: { [key: string]: AwardTemplate[] } = {
    All: awardsData.flatMap((award) => [
      ...(award.award ?? []),
      ...(award.certfication ?? []),
      ...(award.recognition ?? []),
      ...(award.education ?? []),
    ]),
    Education: awardsData.flatMap((award) => award.education ?? []),
    Certification: awardsData.flatMap((award) => award.certfication ?? []),
    Awards: awardsData.flatMap((award) => award.award ?? []),
    Recognition: awardsData.flatMap((award) => award.recognition ?? []),
  };

  const filteredAwards = awardsByCategory[selectedCategory] || [];
  const displayedAwardsList = filteredAwards.slice(0, displayedAwards);

    const loadMoreAwards = () => {
      // Simulated delay to mimic API fetch
      setTimeout(() => {
        setDisplayedAwards(displayedAwards + 3);
      }, 500); // Simulated 0.5-second delay
    };
  return (
    <>
      <div>
        {/* AWARD ME DETAILS */}
        <div className="py-14 bg-white text-deep-black">
          {/* AWARDS TITLE */}
          {awardsData &&
            awardsData.map((award) => (
              <div
                key={award.title}
                className="max-w-6xl px-5 mx-auto text-center"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-Antonio font-bold text-2xl md:text-3xl uppercase"
                >
                  {award.title}
                </motion.h2>

                <div className="max-w-5xl  mx-auto font-libre-baskerville text-lg mt-5">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {award.subtitle}
                  </motion.p>
                </div>
              </div>
            ))}
        </div>

        {/* AWARD COMPANY */}
        <div className="py-8 text-deep-black">
          <div className="max-w-6xl px-5 mx-auto text-center">
            {/* TABBED CONTENT TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 border-b border-gray-200 max-w-4xl mx-auto md:max-w-full"
            >
              <ul className="flex flex-wrap justify-center items-center md:justify-start text-base space-x-10 -mb-px font-medium text-center">
                {Object.keys(awardsByCategory).map((category) => (
                  <motion.li key={category} whileHover={{ scale: 1.05 }}>
                    <button
                      className={`inline-block p-2.5 md:p-4 border-b-4 ${
                        selectedCategory === category
                          ? "border-header-dark-overlay"
                          : "border-transparent"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* TABBED CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center py-7"
            >
              {displayedAwardsList.map((award) => (
                <motion.div
                  key={award._id}
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col-reverse justify-center items-center gap-7 group"
                >
                  <motion.div
                    className="w-full   order-1 cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={award.image}
                      alt=""
                      className="max-w-full"
                      width={700}
                      height={240}
                    />
                  </motion.div>
                  <motion.div
                    className="text-left space-y-3 cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link
                      href={award.slug}
                      className="font-bold underline group-hover:text-header-dark-overlay transition duration-300 font-libre-baskerville text-lg flex justify-start items-center"
                    >
                      {award.title}
                      <span className="ml-2.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-location-check w-6 h-6"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M11.512 17.023l-1.512 -3.023l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-4.45 12.324"></path>
                          <path d="M15 19l2 2l4 -4"></path>
                        </svg>
                      </span>
                    </Link>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-base"
                    >
                      {award.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {displayedAwards < filteredAwards.length && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={loadMoreAwards}
                className={`mt-4 text-center bg-header-dark-overlay text-white py-2 px-4 rounded-lg hover:bg-header-dark transition duration-300 ${
                  displayedAwards + 3 >= filteredAwards.length
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
                disabled={displayedAwards + 3 >= filteredAwards.length}
              >
                Show More Awards
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
