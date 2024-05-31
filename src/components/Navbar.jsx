import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className=" h-16 bg-gray-50 lg:h-20 w-full border-b ">
      <div className=" h-full flex items-center justify-between">
        <div className=" ml-10">
          <Link
            to="/"
            className=" tracking-widest transition hover:text-blue-500 text-green-500 p-1 text-2xl lg:text-3xl font-bold"
          >
            SEED
          </Link>
        </div>

        <div className="hidden text-lg md:flex gap-5">
          <Link className=" rounded-3xl tracking-wider px-2 p-1 hover:bg-gray-200">
            News
          </Link>
          <Link className="rounded-3xl tracking-wider px-2 p-1 hover:bg-gray-200">
            Community
          </Link>

          <Link className="rounded-3xl tracking-wider px-2 p-1 hover:bg-gray-200">
            Products
          </Link>
        </div>

        <div className="flex gap-4 text-xl lg:text-2xl mr-10">
          <Link>
            <VscAccount />
          </Link>
          <Link>
            <VscAccount />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
