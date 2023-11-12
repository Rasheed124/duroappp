import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { HiArrowNarrowRight } from "react-icons/hi";
import useSetTimeout from "../useSetTimeout";

type Inputs = {
  email: string;
};

const NewsLetterForm = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [successMessage, setSuccessMessage] = useState<string>("");

  // CONTACT FORM SUBMIT
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        setSuccessMessage("Message sent successfully!");
        reset(); // Reset the form fields
      } else {
        setIsSuccess(false);
        setSuccessMessage("Message sending failed.");
      }
    } catch (error) {
      setIsSuccess(false);
      setSuccessMessage("Message sending failed.");
    }
  };

  // Time Form Submit
  useSetTimeout(
    () => {
      setIsSuccess(false);
    },
    isSuccess ? 4000 : null,
  );

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
 
          <div className="relative max-w-md ">
            <input
              type="email"
              className="w-full pt-4 pb-3 outline-none placeholder:text-lg placeholder:text-deep-black  bg-inherit border-b border-deep-black"
              placeholder="Email"
              required
            />
         

            <button type="submit" className="group cursor-pointer font-Antonio inline-flex absolute right-2.5 bottom-2.5">
              <div className="relative self-end p-4 py-3 overflow-hidden font-medium transition duration-300 ease-out  text-2xl">
                <div className="">
                  <span className="absolute inset-0 flex items-center justify-end w-full h-full text-white duration-500 group-hover:translate-x-[100%] bg-transparent -translate-x-[20%] ease">
                    <div className="relative btn overflow-x-hidden flex justify-center items-center gap-3 text-lg ">
                      <span>
                        <HiArrowNarrowRight className="text-4xl text-deep-black" />
                      </span>
                    </div>
                  </span>
                  <span className="absolute inset-0 flex items-center justify-end w-full h-full text-white duration-500 -translate-x-[100%]  bg-transparent group-hover:translate-x-0 ease">
                    <div className="relative btn overflow-x-hidden flex justify-center items-center gap-3 text-lg font-Antonio">
                      <span>
                        <HiArrowNarrowRight className="text-4xl text-deep-black" />
                      </span>
                    </div>
                  </span>
                </div>
              </div>
            </button>
          </div>
        </form>

  

      {/* Success message */}
      {isSuccess && (
        <div className="text-deep-black p-3 mt-5 bg-header-dark-overlay font-Antonio">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default NewsLetterForm;
