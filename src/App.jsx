import React, { useEffect } from "react";
import pgDataApi from "./store/actions/ainPgDataActions";
import { useDispatch, useSelector } from "react-redux";
import MainLoading from "./components/loading/MainLoading/MainLoading";
import RoutesPath from "./routes/RoutesPath";
function App() {
  const { Pg } = useSelector((state) => state.MainPgRoomData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pgDataApi());
  }, []);
  return (
    <div className="w-full  absolute top-0">
      {Pg.length > 0 ? (
        <div>
          <RoutesPath />
        </div>
      ) : (
        <MainLoading />
      )}
    </div>
  );
}

export default App;
