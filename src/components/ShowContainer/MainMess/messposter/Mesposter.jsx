import React, { useState } from "react";

function Mesposter() {
  const [hover, sethover] = useState(true);
  const enterHover = () => {
    sethover(false);
  };
  const leaveHover = () => {
    sethover(true);
  };
  return (
    <div className="w-full mt-10 flex flex-col gap-4">
      <h1 className="text-4xl">
        <span className="text-6xl text-red-600 font-mono">T</span>iffin Service
      </h1>
      <div className="w-full flex justify-between gap-3 flex-wrap  ">
        <div
          className=" w-[45%] h-[54vh] "
          onMouseEnter={() => enterHover()}
          onMouseLeave={() => leaveHover()}
        >
          {hover ? (
            <img
              className="rounded-xl w-full h-full "
              src="https://i.pinimg.com/564x/e9/2e/ed/e92eedf5b16aa4600e39c55d997c40b6.jpg"
              alt=""
            />
          ) : (
            <video
              
              loop
              muted
              autoPlay
              src="Video/Mess/2.mp4"
            ></video>
          )}
        </div>
        <video
          src="Video/Mess/BIRYANI FOOD COMMERCIAL - FOOD REEL - BIRIYANI FOOD ADVERTISEMENT.mp4"
          loop
          muted
          autoPlay
          className="rounded-xl"
        ></video>
      </div>
    </div>
  );
}

export default Mesposter;
