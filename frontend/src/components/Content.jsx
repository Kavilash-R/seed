import React from "react";

const Content = () => {
  return (
    <div className="h-full w-full">
      <div className="lg:flex justify-center px-10 gap-10 py-10">
        <div className=" lg:w-1/4 w-full h-60 flex justify-center items-center rounded-lg border cursor-pointer my-5 bg-green-500 shadow-inner">
          <div className=" ">Seed</div>
        </div>
        <div className=" lg:w-1/4 w-full h-60 flex justify-center items-center rounded-lg border cursor-pointer my-5 bg-green-500 shadow-xl">
          <div className=" ">Seed</div>
        </div>
        <div className=" lg:w-1/4 w-full h-60 flex justify-center items-center rounded-lg border cursor-pointer my-5 bg-green-500 shadow-xl">
          <div className=" ">Seed</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
