import React from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchInput from "./search/SearchInput";
import { setNotificationNav } from "../../store/reducers/NotificationNav/NotiFicationnav";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function TitleBar() {
  const dispatch = useDispatch();
  const { steData } = useSelector((state) => state.NotiFicationnav);

  const NotiBtn = () => {
    dispatch(setNotificationNav());
  };
  return (
    <div className="w-full h-12 flex items-center justify-between">
      <div className="logo text-3xl font-serif">
        <h1>
          <span className="text-red-600 text-3xl">R</span>oo
          <span className="text-red-600 text-3xl">m</span>ify
        </h1>
      </div>
      <SearchInput />
      <div className="setting flex gap-5 items-center">
        <Brightness7Icon />
        {steData ? (
          <button
            onClick={() => {
              NotiBtn();
            }}
          >
            <NotificationsNoneIcon />
          </button>
        ) : (
          <button
            onClick={() => {
              NotiBtn();
            }}
          >
            <CloseIcon />
          </button>
        )}
        <span className=" w-7 h-7 rounded-full bg-red-600 overflow-hidden">
          <Link to="/admin">
            <img
              src="https://i.pinimg.com/736x/76/f3/f3/76f3f3007969fd3b6db21c744e1ef289.jpg"
              alt=""
            />{" "}
          </Link>
        </span>
      </div>
    </div>
  );
}

export default TitleBar;
