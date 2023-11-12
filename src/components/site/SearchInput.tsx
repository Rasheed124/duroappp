"use client"

import { motion } from "framer-motion";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation"
import { useState } from "react"

import CiSearch from  "react-icons/ci"

import {TiDelete} from "react-icons/ti"



const  SearchInput = () => {

  const search = useSearchParams();

  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : "",
  );
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/blog/search?q=${encodedSearchQuery}`);

   
  };

  return (
    <form onSubmit={onSearch} className="flex justify-center w-full md:w-2/3">
      <input
        value={searchQuery || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="px-5 py-1 w-full md:w-2/3 sm:px-5  flex-1 text-deep-black
          rounded-full focus:outline-none focus:ring-[1px] focus:ring-deep-black placeholder:text-deep-black"
        placeholder="search here?"
      />
    </form>


  );
}

export default SearchInput;