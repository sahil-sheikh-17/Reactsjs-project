"use client";
import { apiWithToken } from "@/utils/apiConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOptionStrategySelection = createAsyncThunk(
  "users/fetchOptionStrategySelection",
  async (searchKey: string) => {
    if (searchKey) {
      const response: any = await apiWithToken.get(
        `/v1/markets/options/expirations?symbol=${searchKey}`
      );

      return response.data.expirations;
    }
  }
);

export interface optionState {
  entities: any;
}

const initialState: optionState = {
  entities: [],
};

export const optionStrategySlice = createSlice({
  name: "optionStrategySelection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOptionStrategySelection.fulfilled, (state, action) => {
      state.entities = action.payload;
    });
  },
});

export const optionStrategiSelectionData = (state: any) =>
  state.optionStrategySelection && state.optionStrategySelection.entities;

export default optionStrategySlice.reducer;
