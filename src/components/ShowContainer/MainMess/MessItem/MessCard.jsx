import React from "react";

function MessCard(props) {
  const { name, address, image } = props.item;
  return (
    <div className=" w-44">
      <img
        className="w-full h-48 object-center rounded-xl hover:scale-105 hover:shadow-lg shadow-slate-500"
        src={image}
        loading="lazy"
        alt=""
      />
      <div className="px-3  py-2 text-wrap">
        <h1 className="font-bold">{name}</h1>
        <h2>{address}</h2>
      </div>
    </div>
  );
}

export default MessCard;
