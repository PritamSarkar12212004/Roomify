import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Home: [],
};
const HomeImagesSlice = createSlice({
  name: "HomeImages",
  initialState,
  reducers: {
    getImage: (state, action) => {
      state.Home = action.payload;
    },
  },
});
export default HomeImagesSlice.reducer;
export const { getImage } = HomeImagesSlice.actions;
