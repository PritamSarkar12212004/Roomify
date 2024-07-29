import React from "react";
import TitleBar from "./TitleBar";

function TitleBars() {
  return (
    <div className="bg-white border-b-[2px] border-zinc-200 bg-opacity-30 backdrop-blur-sm  w-full  fixed top-0 px-2 py-1 flex items-center mb-32 ">
      <TitleBar />
    </div>
  );
}

export default TitleBars;
