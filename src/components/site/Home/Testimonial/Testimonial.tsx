"use client";

import Image from "next/image";
import Link from "next/link";

import React from "react";
import { useEffect, useState, useRef } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
// import { Navigation, Scrollbar, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { register } from "swiper/element/bundle";

// Styles must use direct files imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FaQuoteLeft } from "react-icons/fa";

type Props = {
  testimonials: Testimonial[];
};

const Testimonial = ({ testimonials }: Props) => {
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <section className="py-16 lg:py-20  " id="testimonials">
      <div className="flex flex-col max-w-6xl mx-auto  ">
        <div className=" px-5">
          <Swiper
            modules={[Navigation, EffectFade]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            loop={true}
            effect="crossfade"
            grabCursor={true}
            speed={1000}
            navigation={{
              prevEl: prevRef?.current,
              nextEl: nextRef?.current,
            }}
            spaceBetween={100}
            slidesPerView={1}
            updateOnWindowResize
            observer
            observeParents
          >
            <div className=" text-center flex flex-row justify-center items-center">
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial._id}>
                  <div className=" text-center">
                    <h3 className="text-2xl uppercase  font-bold font-Antonio">
                      {testimonial.title}
                    </h3>
                    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center my-7">
                      <span className="block">
                        <FaQuoteLeft />
                      </span>
                      <p className="font-libre-baskerville px-3 lg:px-10 my-10 text-2xl">
                        {testimonial.description}
                      </p>

                      <span className="block">
                        <FaQuoteLeft />
                      </span>
                    </div>
                    <h4 className="capitalize">{testimonial.author}</h4>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
