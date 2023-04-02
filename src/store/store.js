import { configureStore } from "@reduxjs/toolkit";
import { deezerSlice } from "./slices/deezer/deezerSlice";

export const store = configureStore({
  reducer: {
    deezers: deezerSlice.reducer,
  },
});
