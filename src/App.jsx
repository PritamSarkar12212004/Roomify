import React, { useEffect } from "react";
import Home from "./components/home/Home";
import TitleBars from "./components/titleBar/TitleBars";
import pgDataApi from "./store/actions/ainPgDataActions";
import { useDispatch, useSelector } from "react-redux";
import MainLoading from "./components/loading/MainLoading/MainLoading";
function App() {
  const { Pg } = useSelector((state) => state.MainPgRoomData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pgDataApi());
  }, []);
  return (
    <div className="w-full h-[520vh] absolute top-0">
      {Pg.length > 0 ? (
        <div >
          <TitleBars />
          <Home />
        </div>
      ) : (
        <MainLoading />
      )}
    </div>
  );
}

export default App;
