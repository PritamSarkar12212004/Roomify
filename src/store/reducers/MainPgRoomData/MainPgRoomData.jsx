import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Pg: [],
};
const PgSlice = createSlice({
  name: "Pg",
  initialState,
  reducers: {
    setPg(state, action) {
      state.Pg = action.payload;
    },
  },
});

export default PgSlice.reducer;
export const { setPg } = PgSlice.actions;
