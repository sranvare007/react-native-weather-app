import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "locationCoords",
  initialState: {
    locationCoords: {
      latitude: 0,
      longitude: 0,
    },
  },
  reducers: {
    setLocationCoords: function (state, action) {
      state.locationCoords.latitude = action.payload.latitude;
      state.locationCoords.longitude = action.payload.longitude;
    },
  },
});

export const { setLocationCoords } = locationSlice.actions;
export default locationSlice.reducer;
