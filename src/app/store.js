import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counter";

export default store = configureStore({
  reducer: {
    counter: counter,
  },
});
