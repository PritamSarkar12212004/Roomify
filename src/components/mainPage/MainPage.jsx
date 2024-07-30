import React from "react";
import TitleBars from "../titleBar/TitleBars";
import Home from "../home/Home";
function MainPage() {
  return (
    <div className="w-full h-[520vh] absolute top-0">
      <TitleBars />
      <Home />
    </div>
  );
}

export default MainPage;
