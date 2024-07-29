import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  MessProduct: [],
};
const MainMessDataSlice = createSlice({
  name: "MainMessData",
  initialState,
  reducers: {
    getMainMessData: (state, action) => {
      state.MessProduct = action.payload;
    },
  },
});

export default MainMessDataSlice.reducer;
export const { getMainMessData } = MainMessDataSlice.actions;
