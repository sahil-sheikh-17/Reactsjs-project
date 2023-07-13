"use client";
import { apiWithToken } from "@/utils/apiConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSearchApi = createAsyncThunk("users/fetchSearchApi", async (searchKey: string) => {
  if (searchKey) {
    const response: any = await apiWithToken.get(`/v1/markets/search?q=${searchKey}`);
    const lookUpResponse: any = await apiWithToken.get(`v1/markets/lookup?q=${searchKey}`);
    const searchData = response.data.securities.security || [];
    const lookUpData = lookUpResponse.data.securities.security || [];
    return [...searchData, ...lookUpData];
  }
  return [];
});

export interface CounterState {
  value: number;
  entities: any;
  data: any;
}

const initialState: CounterState = {
  value: 0,
  entities: [],
  data: [],
};

export const recentSearchSlice = createSlice({
  name: "searchStock",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchSearchApi.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const searchData = (state: any) => state.searchStock && state.searchStock.entities;

export default recentSearchSlice.reducer;
