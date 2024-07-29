import React from "react";
import SubScribe from "../inputSubsCribe/SubScribe";

function Hero() {
  return (
    <div className="w-1/2 mx-auto mt-20 flex flex-col  items-center">
      <h1 className="text-9xl font leading-tight ">
        <span className="text-red-600">R</span>oo
        <span className="text-red-600">m</span>ify
      </h1>
      <h2 className="text-2xl  opacity-70 text-center m-3">
        Offering the finest rooms in our area. Best Rooms means Roomify
      </h2>
      <h3 className=" opacity-85 m-2">
        आमच्या क्षेत्रात सर्वोत्तम रूम्स ऑफर करत आहोत.
      </h3>
      <SubScribe />
    </div>
  );
}

export default Hero;
