import React from "react";

function SubScribe() {
  return (
    <div className="w-full flex justify-center gap-4 m-5">
      <input
        type="text"
        placeholder="name@Roomify.gmail.com"
        className="border-[1px] px-2 py-2 outline-none rounded-md w-[50%] border-gray-400"
      />
      <button className="px-4    py-1 bg-red-500 rounded-xl text-white">
        Subscribe
      </button>
    </div>
  );
}

export default SubScribe;
