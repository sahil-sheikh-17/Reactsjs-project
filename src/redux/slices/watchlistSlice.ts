"use client";
import { apiWithToken } from "@/utils/apiConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWatchlistGraph = createAsyncThunk("users/fetchWatchlistData", async () => {
  const response: any = await apiWithToken.get(`v1/watchlists/default`);
  return response.data.watchlist;
});
export interface watchlistGraphState {
  value: number;
  entities: any;
}

const initialState: watchlistGraphState = {
  value: 0,
  entities: [],
};

export const watchlistGraphDataSlice = createSlice({
  name: "watchlistGraphData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWatchlistGraph.fulfilled, (state, action) => {
      state.entities.push(action.payload);
    });
  },
});

export const watchlistGraphData = (state: any) => state.watchlistGraphData.entities;
export default watchlistGraphDataSlice.reducer;
