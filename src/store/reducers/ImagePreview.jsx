import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  imagesValu: false,
};
const imagePreviewSlice = createSlice({
  name: "imagePreview",
  initialState,
  reducers: {
    changeImagesValu: (state, action) => {
      state.imagesValu = !state.imagesValu;
      console.log(state.imagesValu);
    },
  },
});

export default imagePreviewSlice.reducer;
export const { changeImagesValu } = imagePreviewSlice.actions;
