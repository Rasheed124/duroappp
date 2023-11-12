

import {HiArrowUturnLeft} from 'react-icons/hi2'
import Link from "next/link";

const Navbar = (props: any) => {
  return (
    // Render  Studio Navbar
    <div>
      <div className=" p-6 text-light-white">
        <div className="flex space-y-3 md:space-y-0 flex-col md:flex-row justify-between  items-center">
          <Link
            target="_blank"
            href="/"
            className=" flex items-center uppercase"
          >
            <HiArrowUturnLeft className="h-6 w-6  mr-2 mb-3 md:mb-0" />
            Go To website
          </Link>
        
        </div>

        <div className="py-8  text-center">
          <p className="text-xl font-Antonio uppercase">
            Duromedia Abdulhad Studio
          </p>
        </div>
      </div>

      {/* Render Default Studio Navbar */}
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default Navbar;
