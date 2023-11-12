import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { HiArrowNarrowRight } from "react-icons/hi";
import useSetTimeout from "../useSetTimeout";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  challenge: string;
  budget: string;
  selectedServices: string[]; // field for selected services
  subscribeToNewsletter: boolean;
};

const ContactUsForm = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [selectServices, setSelectServices] = useState<string>("");

  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState<string>(
    "Your message has been submitted successfully",
  );

  // CONTACT FORM SUBMIT
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Inputs>();

 

  const handleCheckboxChange = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices((prevSelected) =>
        prevSelected.filter((item) => item !== service),
      );
    } else {
      setSelectedServices((prevSelected) => [...prevSelected, service]);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // Prepend the dollar sign ('$') to the budget value
    data.budget = `$${data.budget}`;

    

    if (!selectedServices.length) {
      setSelectServices("Please select at least one service before submitting");
      return;
    }

    if (!selectedServices.includes("SUBSCRIBED TO NEWSLETTER")) {
      data.selectedServices = [...selectedServices, "SUBSCRIBED TO NEWSLETTER"];
    } else {
      data.selectedServices = selectedServices;

      if (selectedServices.length <= 1) {
        setSelectServices(
          "Please select at least one service before submitting",
        );

        return;
      }
    }

    try {
      // Use the selectedServices state to populate the challenge field
      data.selectedServices = selectedServices;
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          access_key: "308b9bbf-12cc-4c7b-8c85-e9fcb5130627",
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Reset the selectedServices state to clear checked checkboxes
        setSelectedServices([]);
        setIsSuccess(true);
        reset();
      } else {
        setIsSuccess(false);
      }
    } catch (error) {
      setIsSuccess(false);
    }
  };

  // Time selected Services
  useSetTimeout(
    () => {
      setSelectServices("");
    },
    selectServices ? 4000 : null,
  );

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
        <div className="grid grid-cols-2 gap-5 ">
          {/* First Name */}

          <div className="relative ">
            <input
              type="text"
              {...register("firstName", { required: true })}
              className="peer border-b border-deep-black block min-h-[auto] w-full focus:placeholder:bg-transparent bg-transparent pr-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear pt-8 focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              required
            />
            <label
              htmlFor="first_name"
              className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.3rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary font-medium focus:bg-transparent"
            >
              First Name
            </label>
          </div>

          {/* Last Name */}

          <div className="relative ">
            <input
              type="text"
              {...register("lastName", { required: true })}
              className="peer border-b border-deep-black block min-h-[auto] w-full bg-transparent pr-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear pt-8 focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              required
            />
            <label
              htmlFor="last_name"
              className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.3rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary font-medium focus:bg-transparent"
            >
              Last Name
            </label>
          </div>
        </div>
        {/* Email */}
        <div className="relative mt-5 ">
          <input
            type="email"
            {...register("email", { required: true })}
            className="peer border-b border-deep-black block min-h-[auto] w-full bg-transparent pr-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear pt-8 focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            required
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.3rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary font-medium focus:bg-transparent"
          >
            Email
          </label>
        </div>

        {/* Budget */}

        <div>
          <div className="relative mt-5 ">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center ">
              <span className="text-deep-black sm:text-sm font-bold">$</span>
            </div>

            {/* <div className=" flex items-center"> */}
            <select
              {...register("budget", { required: true })}
              className="peer border-b pl-3  pr-5 border-deep-black block min-h-[auto] w-full bg-transparent  py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              required
            >
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="1500">1500</option>
              <option value="2000">2000</option>
              <option value="2500">2500</option>
            </select>
            {/* </div> */}
          </div>
          <small className="mt-2 text-black text-base font-medium leading-[1.6] ">
            What{"'"}s your budget{" "}
          </small>
        </div>

        {/* Role */}
        <div className="  mt-5">
          <div className="relative ">
            <input
              type="text"
              {...register("role", { required: true })}
              className="peer border-b border-deep-black block min-h-[auto] w-full bg-transparent pr-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear pt-8 focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              required
            />
            <label
              htmlFor="role"
              className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.3rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary font-medium focus:bg-transparent"
            >
              What{"'"}s your role
            </label>
          </div>
        </div>

        {/* Job  */}
        <div className="relative mt-5 ">
          <small className="mt-2 text-black text-base font-medium leading-[1.6] mb-3">
            Which Project do you want{"'"}s us to work on
          </small>

          {selectServices && (
            <small className="text-red-500 font-Sohne-Bold block text-base my-1">
              {selectServices}
            </small>
          )}

          <div className="flex items-center">
            <input
              type="checkbox"
              value=""
              id="uiuxDesignCheckbox"
              className="w-4 h-4 p-2 rounded accent-deep-overlay "
              checked={selectedServices.includes("Ui/UX DESIGN")}
              onChange={() => handleCheckboxChange("Ui/UX DESIGN")}
            />
            <label
              htmlFor="uiuxDesignCheckbox"
              onChange={() => handleCheckboxChange("Ui/UX DESIGN")}
              className="ml-2 text-sm font-medium text-deep-black"
            >
              Ui/UX DESIGN
            </label>
          </div>
          <div className="flex justify-start items-start ">
            <input
              type="checkbox"
              value=""
              id="productDesignCheckbox"
              className="w-4 h-4 p-2 rounded accent-deep-overlay "
              checked={selectedServices.includes("PRODUCT DESIGN")}
              onChange={() => handleCheckboxChange("PRODUCT DESIGN")}
            />
            <label
              htmlFor="productDesignCheckbox"
              className="ml-2 text-sm font-medium text-deep-black"
            >
              PRODUCT DESIGN
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              value=""
              id="dataAnalystCheckbox"
              className="w-4 h-4 p-2 rounded accent-deep-overlay "
              checked={selectedServices.includes("DATA ANALYST")}
              onChange={() => handleCheckboxChange("DATA ANALYST")}
            />
            <label
              htmlFor="dataAnalystCheckbox"
              className="ml-2 text-sm font-medium text-deep-black"
            >
              DATA ANALYST
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="digitalMarketingCheckbox"
              value=""
              className="w-4 h-4 p-2 rounded accent-deep-overlay "
              checked={selectedServices.includes("DIGITAL MARKETING")}
              onChange={() => handleCheckboxChange("DIGITAL MARKETING")}
            />
            <label
              htmlFor="digitalMarketingCheckbox"
              className="ml-2 text-sm font-medium text-deep-black"
            >
              DIGITAL MARKETING
            </label>
          </div>
        </div>

        {/* Role */}
        <div className="  mt-5">
          <div className="relative ">
            <input
              type="text"
              {...register("challenge", { required: true })}
              className="peer border-b border-deep-black block min-h-[auto] w-full bg-transparent pr-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear pt-8 focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              required
            />
            <label
              htmlFor="challenge"
              className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.3rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary font-medium focus:bg-transparent"
            >
              What{"'"}s your biggest business challenge
            </label>
          </div>
        </div>

        <div className="relative mt-5 ">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="subscribeToNewsletter"
              checked={selectedServices.includes("SUBSCRIBED TO NEWSLETTER")}
              onChange={() => handleCheckboxChange("SUBSCRIBED TO NEWSLETTER")}
              value=""
              className="w-4 h-4 p-2 rounded accent-deep-overlay "
            />
            <label
              htmlFor="subscribeToNewsletter"
              className="ml-2 text-base font-medium text-deep-black"
            >
              Subscribe to our newsletter
            </label>
          </div>
        </div>

        <div className="flex justify-end mt-3">
          <div className="group cursor-pointer font-Antonio inline-flex">
            <div>
              <button
                type="submit"
                className="text-lg block  hover:transition-colors px-3 duration-500 group:hover:text-header-dark-overlay"
              >
                Send Message
              </button>
            </div>
            <div className="relative self-end p-4 py-3 overflow-hidden font-medium transition duration-300 ease-out  text-2xl">
              <div className="">
                <span className="absolute inset-0 flex items-center justify-end w-full h-full text-white duration-500 group-hover:translate-x-[100%] bg-transparent -translate-x-[20%] ease">
                  <div className="relative btn overflow-x-hidden flex justify-center items-center gap-3 text-lg ">
                    <span>
                      <HiArrowNarrowRight className="text-3xl text-deep-black" />
                    </span>
                  </div>
                </span>
                <span className="absolute inset-0 flex items-center justify-end w-full h-full text-white duration-500 -translate-x-[100%]  bg-transparent group-hover:translate-x-0 ease">
                  <div className="relative btn overflow-x-hidden flex justify-center items-center gap-3 text-lg font-Antonio">
                    <span>
                      <HiArrowNarrowRight className="text-3xl text-deep-black" />
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Success message */}
      {isSuccess && (
        <div className="text-deep-black text-center p-3 mt-5 bg-header-dark-overlay font-Antonio">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default ContactUsForm;
