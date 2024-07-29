import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  steData: [true],
};
const notificationNavSlice = createSlice({
  name: "notificationNav",
  initialState,
  reducers: {
    setNotificationNav(state, action) {
      if (state.steData === false) {
        state.steData = true;
      } else {
        state.steData = false;
      }
    },
  },
});
export default notificationNavSlice.reducer;
export const { setNotificationNav } = notificationNavSlice.actions;
