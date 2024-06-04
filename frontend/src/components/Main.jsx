import React from "react";
import MainSearch from "./MainSearch";

import SeedScore from "./SeedScore";
import Content from "./Content";
import CommunityButton from "./CommunityButton";

const Main = () => {
  return (
    <>
      <div className="h-screen w-full">
        <SeedScore />
        <CommunityButton />
        <MainSearch />
        <Content />
      </div>
    </>
  );
};

export default Main;
