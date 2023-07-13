"use client";
import { apiWithToken } from "@/utils/apiConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTradeData = createAsyncThunk("users/fetchTradeData", async (searchKey: string) => {
  const response: any = await apiWithToken.get(`v1/markets/quotes?symbols=${searchKey}&greeks=true`);
  return response.data.quotes.quote;
});
export interface tradingDataState {
  value: number;
  entities: any;
}

const initialState: tradingDataState = {
  value: 0,
  entities: [],
};

export const tradeDataSlice = createSlice({
  name: "tradeData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTradeData.fulfilled, (state, action) => {
      state.entities.push(action.payload);
    });
  },
});

export const tradingData = (state: any) => state.tradeData.entities;
export default tradeDataSlice.reducer;
