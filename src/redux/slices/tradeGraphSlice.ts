"use client";
import { apiWithToken } from "@/utils/apiConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IGraphPayload {
  searchKey: string | null;
  start: string;
  end: string;
}
export const fetchTradeDataofGraph = createAsyncThunk(
  "users/fetchTradeGraphData",
  async ({ searchKey, start, end }: IGraphPayload) => {
    const response: any = await apiWithToken.get(
      `v1/markets/timesales?symbol=${searchKey}&interval=15min&start=${start}&end=${end}&session_filter=open`
    );
    return response.data.series.data;
  }
);
export interface tradingDataGraphState {
  value: number;
  entities: any;
  loading: boolean;
}

const initialState: tradingDataGraphState = {
  value: 0,
  entities: [],
  loading: true,
};

export const tradeGraphDataSlice = createSlice({
  name: "tradeGraphData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTradeDataofGraph.pending, (state, action) => {
      state.entities = [];
      state.loading = false;
    });
    builder.addCase(fetchTradeDataofGraph.fulfilled, (state, action) => {
      state.entities = [];
      state.entities.push(action.payload);
      state.loading = false;
    });
    builder.addCase(fetchTradeDataofGraph.rejected, (state, action) => {
      state.entities = [];
    });
  },
});

export const tradingGraphData = (state: any) => state.tradeGraphData.entities;
export const loadingGraphData = (state: any) => state.tradeGraphData.loading;
export default tradeGraphDataSlice.reducer;
