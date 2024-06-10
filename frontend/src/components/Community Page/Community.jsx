import React from "react";
import { IoIosLink } from "react-icons/io";
import { IoSend } from "react-icons/io5";
const Community = () => {
  return (
    <div className=" h-screen w-full">
      <div className="h-full w-full">
        <div className="h-[90%] px-10 p-2 border overflow-y-scroll  w-full">
          <div>chats</div>
          <div>chats</div> <div>chats</div> <div>chats</div> <div>chats</div>{" "}
          <div>chats</div> <div>chats</div> <div>chats</div> <div>chats</div>{" "}
          <div>chats</div> <div>chats</div>
          <div>chats</div> <div>chats</div>
          <div>chats</div> <div>chats</div>
          <div>chats</div> <div>chats</div>
          <div>chats</div> <div>chats</div>
          <div>chats</div> <div>chats</div>
          <div>chats</div> <div>chats</div>
          <div>chats</div> <div>chats</div>
          <div>chats</div> <div>chats</div>
          <div>chats</div> <div>chats</div>
          <div>chats</div> <div>chats</div>
        </div>
        <div className="">
          <form className="">
            <div className="flex py-1 justify-center ">
              <div className="w-[80%] flex rounded-lg  border-black border">
                <input
                  type="text"
                  className=" w-full px-5 rounded-lg text-right "
                  placeholder=" type to display"
                ></input>
                <div className=" items-center h-full px-2">
                  <IoIosLink size={30} className=" border  rounded-lg" />
                </div>
              </div>
              <div className="h-full flex items-center">
                <IoSend className=" px-1" size={30} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Community;
