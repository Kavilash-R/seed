import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaSeedling } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className=" h-16 bg-gray-50 lg:h-20 w-full border-b ">
      <div className=" h-full flex items-center justify-between">
        <div className="flex ml-10">
          <Link
            to="/"
            className="  transition duration-300 hover:text-green-700 text-green-500  p-1 text-2xl lg:text-3xl font-bold"
          >
            <FaSeedling />
          </Link>
        </div>

        <div className="hidden text-lg md:flex gap-5">
          <Link
            to="/learning"
            className=" rounded-3xl transition duration-200 tracking-wider px-2 p-1 hover:bg-gray-200"
          >
            Learning
          </Link>
          <Link
            to="/products"
            className="rounded-3xl transition duration-200 tracking-wider px-2 p-1 active:bg-gray-300 hover:bg-gray-200"
          >
            Products
          </Link>

          <Link
            to="/market"
            className="rounded-3xl transition duration-200 tracking-wider px-2 p-1 hover:bg-gray-200"
          >
            Market
          </Link>
          <Link
            to="/news"
            className=" rounded-3xl transition duration-200 tracking-wider px-2 p-1 hover:bg-gray-200"
          >
            News
          </Link>
        </div>

        <div className="flex gap-4 text-xl lg:text-2xl mr-10">
          <Link to="/login" className=" p-1 rounded-full hover:bg-gray-200">
            <VscAccount />
          </Link>
          <Link className=" p-1 rounded hover:bg-gray-200">
            <CgMenuLeftAlt />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
