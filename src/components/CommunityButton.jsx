import React from "react";
import { FaUserGroup } from "react-icons/fa6";

const CommunityButton = () => {
  return (
    <div className="fixed  bottom-0 right-0 m-5 lg:m-10 justify-center items-center">
      <div className="rounded-full text-xl p-3 cursor-pointer border hover:bg-gray-200 ">
        <FaUserGroup />
      </div>
    </div>
  );
};

export default CommunityButton;
