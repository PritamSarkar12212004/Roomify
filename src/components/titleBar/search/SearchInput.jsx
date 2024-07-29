import React from "react";

function SearchInput() {
  return (
    <div className="h-full flex items-center gap-3">
      <input
        type="text "
        placeholder="search for rooms"
        className="h-[80%] w-96 rounded-sm px-2 bg-zinc-500 bg-opacity-30 backdrop-blur-sm outline-none "
      />
      <select
        name=""
        id=""
        className="bg-zinc-500 bg-opacity-30 backdrop-blur-sm outline-none px-2 py-1 rounded-lg opacity-80"
      >
        <option value="">Vasudev Nagar</option>
        <option value="">Bansi Nagar</option>
        <option value="">Lokmanya Nagar</option>
        <option value="">Wadi</option>
      </select>
    </div>
  );
}

export default SearchInput;
