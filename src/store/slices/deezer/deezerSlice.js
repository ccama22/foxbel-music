import { createSlice } from "@reduxjs/toolkit";

export const deezerSlice = createSlice({
  name: "deezer",
  initialState: {
    deezers: [],
    isLoading: false,
    active: null,
  },
  reducers: {
    startLoadingDeezers: (state) => {
      state.isLoading = true;
    },
    setDeezers: (state, action) => {
      state.isLoading = false;
      state.deezers = action.payload.deezers;
    },
    setActiveDeezers: (state, action) => {
      state.active = action.payload;
      // estoy cambiando de nota activa
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingDeezers, setDeezers, setActiveDeezers } =
  deezerSlice.actions;
