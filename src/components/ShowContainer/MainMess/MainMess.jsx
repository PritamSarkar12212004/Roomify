import React from "react";
import Mesposter from "./messposter/Mesposter";
import MessContainer from "./MessItem/MessContainer";

function MainMess() {
  return (
    <div className="w-full ">
      <Mesposter />
      <MessContainer />
    </div>
  );
}

export default MainMess;
