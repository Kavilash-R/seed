import React, { useEffect, useState } from "react";
import { FcIdea } from "react-icons/fc";
import { HiSearch } from "react-icons/hi";
const MainSearch = () => {
  const words = [
    "Agriculture starts from determinations",
    "Farmers are considered equal to god",
    "If you don't save the green today then who will?",
    "life is like a seed, only grows when watered",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 8000); // Change word every 8 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [words.length]);

  return (
    <div className="h-auto w-full">
      <div>
        {/* useful pro tips! */}

        {/* main search bar */}
        <div className="flex justify-center py-5 md:py-10  items-center gap-2  ">
          <input
            type="text"
            placeholder="Search"
            className="w-[60%] lg:w-1/3 bg-gray-100 border-2 rounded p-1 md:p-2"
          />
          <div className=" text-3xl border md:p-1 rounded cursor-pointer">
            <HiSearch />
          </div>
        </div>

        <div className="h-auto flex w-full justify-center transition-all duration-500">
          <div className="flex border  h-auto items-center rounded-lg p-2 text-sm  md:text-xl text-green-600">
            <span className=" text-black">Pro Tip!</span>
            <FcIdea />
            <div> &nbsp; {words[currentWordIndex]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSearch;
