import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WeekendIcon from "@mui/icons-material/Weekend";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SettingsIcon from "@mui/icons-material/Settings";
import RepeatIcon from "@mui/icons-material/Repeat";
function SideNavAdmin() {
  return (
    <div className="w-1/5 h-screen  bg-[#4F46F4] px-4 py-3  flex flex-col   ">
      <div className="h-14 mt-2 mb-10 flex gap-2 items-center text-white text-2xl font-bold  ">
        <img
          className="h-full w-14 rounded-full"
          src="https://i.pinimg.com/736x/76/f3/f3/76f3f3007969fd3b6db21c744e1ef289.jpg"
          alt=""
        />
        <h1>Pritam Sarkar</h1>
      </div>
      <div className="w-full h-full flex flex-col gap-7">
        <NavLink
          to={"/"}
          className={(e) =>
            e.isActive
              ? "text-white flex items-center bg-[#4338CA] opacity-100  gap-3 font-bold text-xl  w-full py-2 hover:bg-[#4338CA] px-2 rounded-md  "
              : "text-white flex items-center   gap-3 font-bold text-xl opacity-80 w-full py-2 hover:bg-[#4338CA] px-2 rounded-md"
          }
        >
          {" "}
          <HomeIcon /> Home
        </NavLink>
        <NavLink
          to={"/admin"}
          className={(e) =>
            e.isActive
              ? "text-white flex items-center bg-[#4338CA] opacity-100  gap-3 font-bold text-xl  w-full py-2 hover:bg-[#4338CA] px-2 rounded-md   "
              : "text-white flex items-center   gap-3 font-bold text-xl opacity-80 w-full py-2 hover:bg-[#4338CA] px-2 rounded-md"
          }
        >
          {" "}
          <RepeatIcon /> Dashbord
        </NavLink>
        <NavLink
          to={"/admin/room"}
          className={(e) =>
            e.isActive
              ? "text-white flex items-center bg-[#4338CA] opacity-100  gap-3 font-bold text-xl  w-full py-2 hover:bg-[#4338CA] px-2 rounded-md  "
              : "text-white flex items-center   gap-3 font-bold text-xl opacity-80 w-full py-2 hover:bg-[#4338CA] px-2 rounded-md"
          }
        >
          {" "}
          <WeekendIcon /> Room
        </NavLink>
        <NavLink
          to={"/admin/tiffin"}
          className={(e) =>
            e.isActive
              ? "text-white flex items-center bg-[#4338CA] opacity-100  gap-3 font-bold text-xl  w-full py-2 hover:bg-[#4338CA] px-2 rounded-md  "
              : "text-white flex items-center   gap-3 font-bold text-xl opacity-80 w-full py-2 hover:bg-[#4338CA] px-2 rounded-md"
          }
        >
          {" "}
          <RestaurantMenuIcon /> tiffin
        </NavLink>
        <NavLink
          to={"/admin/flaat"}
          className={(e) =>
            e.isActive
              ? "text-white flex items-center bg-[#4338CA] opacity-100  gap-3 font-bold text-xl  w-full py-2 hover:bg-[#4338CA] px-2 rounded-md  "
              : "text-white flex items-center   gap-3 font-bold text-xl opacity-80 w-full py-2 hover:bg-[#4338CA] px-2 rounded-md"
          }
        >
          {" "}
          <LocationCityIcon /> Flaat
        </NavLink>
        <NavLink
          to={"/admin/pgroom"}
          className={(e) =>
            e.isActive
              ? "text-white flex items-center bg-[#4338CA] opacity-100  gap-3 font-bold text-xl  w-full py-2 hover:bg-[#4338CA] px-2 rounded-md  "
              : "text-white flex items-center   gap-3 font-bold text-xl opacity-80 w-full py-2 hover:bg-[#4338CA] px-2 rounded-md"
          }
        >
          {" "}
          <BedroomParentIcon /> Pg Room
        </NavLink>
      </div>
      <NavLink to={"/admin/profile"}>
        <div className="text-white flex items-center   gap-3 font-bold text-sm px-1 opacity-100 w-full py-2 hover:bg-[#4338CA]  rounded-md">
          <SettingsIcon /> Profile Setting
        </div>
      </NavLink>
    </div>
  );
}

export default SideNavAdmin;
