import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CommunityButton = () => {
  return (
    <div className="fixed  bottom-0 right-0 rounded-full p-5 m-5 lg:m-10 justify-center items-center">
      <Link
        to="/community"
        className=" text-xl  cursor-pointer  hover:bg-gray-200 "
      >
        <FaUserGroup />
      </Link>
    </div>
  );
};

export default CommunityButton;
