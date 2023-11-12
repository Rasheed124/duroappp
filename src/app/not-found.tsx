"use client";


import "./globals.css";
import { fonts } from "../fonts/font";

import Link from "next/link";

import Layout from "@/components/site/Navbars/NavbarLayout";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",

  description: "Creating useful Content ",

  alternates: {
    canonical: "/not-found",
    languages: {
      "en-CA": `en-CA`,
    },
  },
};

export default function NotFound() {


  return (
    <>
      <div
        className={` ${fonts.antonio.variable} ${fonts.sohneBold.variable} ${fonts.migraLight.variable} ${fonts.libre_baskerville.variable}  `}
      >
        <Layout route="/all">
          <section className={`py-24 `}>
            <div className="flex flex-col justify-center items-center text-center py-20 px-5 mt-10">
              <div className="space-y-5 max-w-2xl mx-auto">
                <h3 className="font-Antonio text-2xl lg:text-6xl">
                  ERROR PAGE
                </h3>

                <p className="text-xl px-6">
                  The page you are looking for doesn{"'"}t exist. It may have
                  been moved or removed altogether. Please try searching for
                  some other page, or return to the website{"'"}s homepage to
                  find what you
                  {"'"}re looking for.
                </p>

                <div>
                  <Link
                    href="/"
                    className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-Antonio font-medium tracking-tighter text-deep-black hover:text-white bg-transparent rounded-lg group border border-deep-black"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-deep-black rounded-full group-hover:w-56 group-hover:h-56"></span>

                    <a className="relative uppercase hover:text-light-white">
                      Back to home
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
}
