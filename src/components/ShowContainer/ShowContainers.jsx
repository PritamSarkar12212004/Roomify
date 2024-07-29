import React, { useEffect } from "react";
import MainHome from "./mainHome/MainHome";
import HomeData from "../../store/actions/mainHomeDataAction";
import pgDataApi from "../../store/actions/ainPgDataActions";
import { useDispatch, useSelector } from "react-redux";
import MainMess from "./MainMess/MainMess";
function ShowContainers() {
  const { Home } = useSelector((state) => state.mainHomePoster);
  const { Pg } = useSelector((state) => state.MainPgRoomData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HomeData());
    dispatch(pgDataApi());
  }, []);
  return (
    <div className="w-full  mt-2 h-screen ">
      <div className="mb-7">
        <h1 className="w-full flex justify-center text-4xl mt-4">
          <span className="text-red-600">T</span>op 5_
          <span className="text-red-600">R</span>ooms
        </h1>
        <div className="w-full flex overflow-x-scroll gap-5 mt-10 ">
          {Home.map((item, index) => (
            <MainHome key={index} item={item} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="w-full flex justify-center text-4xl mt-4">
          <span className="text-red-600">P</span>g _
          <span className="text-red-600">R</span>ooms
        </h1>
        <div className="w-full flex overflow-x-scroll gap-5 mt-10 ">
          {Pg.map((item, index) => (
            <MainHome key={index} item={item} />
          ))}
        </div>
        <div>
          <MainMess/>
        </div>
      </div>
    </div>
  );
}

export default ShowContainers;
