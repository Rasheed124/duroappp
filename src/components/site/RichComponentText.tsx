import { PortableText } from "@portabletext/react";

import Image from "next/image";

import Link from "next/link";
import urlFor from "../../../sanity/lib/image";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className=" max-w-3xl  mx-auto  ">
          <Image
            className=" max-w-full "
            src={urlFor(value).url()}
            alt="Blog Post Image"
            width={1000}
            height={1000}
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),

    number: ({ children }: any) => (
      <ol className=" list-decimal">{children}</ol>
    ),
  },
  block: {
    p: ({ children }: any) => (
      <p className="text-base py-5 font-bold">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-semibold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-medium">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl py-10 font-medium">{children}</h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-light-white border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-header-dark-overlay hover:decoration-deep-overlay-black"
        >
          {children}
        </Link>
      );
    },
  },
};
