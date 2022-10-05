import { configureStore } from "@reduxjs/toolkit";
import locationCoords from "../features/locationCoords";

export default store = configureStore({
  reducer: {
    locationCoords: locationCoords,
  },
});
