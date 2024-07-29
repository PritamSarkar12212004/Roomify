import { configureStore } from "@reduxjs/toolkit";
import ImagePreview from "./reducers/ImagePreview";
import mainHomePoster from "./reducers/MainHomeData/mainHomePoster";
import MainMessData from "./reducers/MainMessData/MainMessData";
import MainPgRoomData from "./reducers/MainPgRoomData/MainPgRoomData";
import NotiFicationnav from "./reducers/NotificationNav/NotiFicationnav";
const store = configureStore({
  reducer: {
    ImagePreview: ImagePreview,
    mainHomePoster: mainHomePoster,
    MainPgRoomData: MainPgRoomData,
    MainMessData: MainMessData,
    NotiFicationnav: NotiFicationnav,
  },
});
export default store;
