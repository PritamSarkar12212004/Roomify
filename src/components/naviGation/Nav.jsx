import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const NavData = ["Roome", "Flat", "Hostel", "Pg"];
  return (
    <div className="w-[60%]  mx-auto mt-6 px-2 py-3 flex justify-center gap-16 text-2xl">
      {NavData.map((item, index) => {
        return (
          <NavLink
            to={`/${item}`}
            className={(e) =>
              e.isActive
                ? " hover:text-red-500 border-red-500  w-28 flex justify-center rounded-full py-2 border-b-[2px]"
                : " hover:text-red-500   w-28 flex justify-center rounded-full py-2 border-b-[2px]"
            }
            key={index}
          >
            {item}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Nav;
