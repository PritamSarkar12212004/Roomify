import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

function MainHome(props) {
  const { location, image, description, owner, date, authorImage } = props.item;
  
 
  return (
    <div className="w-full ">
      <div className="items   w-[30vw] flex flex-col  border-b-[2px] border-zinc-300 ">
        <img
          className="h-[45vh] w-full object-cover rounded-2x  "
          src={image}
          alt=""
        />
        <div className="w-full px-2 py-2">
          <h1 className="text-blue-600 flex justify-start font-bold">
            <span className="text-red-500">
              <FmdGoodIcon />
            </span>
            {location}
          </h1>
          <h2 className="mt-2 px-1 opacity-85">{description}</h2>

          <div className="mt-3 flex items-center">
            <span className=" inline-block w-20 h-16 rounded-full overflow-hidden ">
              <img className=" h-full w-full" src={authorImage} alt="" />
            </span>
            <span className="w-full flex-col px-2 flex leading-0 tracking-widest">
              <h1 className="text-md">{owner}</h1>
              <h2 className="text-sm opacity-85">{date}</h2>
            </span>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHome;
