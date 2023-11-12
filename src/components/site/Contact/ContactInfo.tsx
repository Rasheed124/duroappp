import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

type Props = {
  contacts: Contact[];
};

const ContactInfo = ({ contacts }: Props) => {
  return (
    <div>
      {contacts.map((contact) => (
        <section className="py-16 lg:py-20 " key={contact._id}>
          <div className=" flex flex-col max-w-6xl mx-auto  px-5">
            
            <div className="  px-5 text-center">
              <h4 className="font-migra-light text-7xl xl:text-[6rem] ">
                {contact.heading}
              </h4>
            </div>

        

            <Link href={"/contact"} className="self-center mt-10   ">
              <div className="group cursor-pointer font-Antonio inline-flex">
                <div className="mr-2 uppercase text-xl transition duration-700 group-hover:text-header-dark-overlay">
                  Get in touch
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

            <div className="flex uppercase flex-col lg:flex-row justify-center lg:justify-between items-center mt-16 space-y-3">
              <div>
                <h3 className="text-xl font-bold font-Antonio">
                  {contact.logo}
                </h3>
              </div>
              <div className="flex justify-center items-center">
                <h3 className="text-xl text-center font-bold font-Antonio">
                  {contact.text}
                </h3>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ContactInfo;
