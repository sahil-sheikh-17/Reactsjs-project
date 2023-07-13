"use client";
import { apiWithToken } from "@/utils/apiConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOptionGreek = createAsyncThunk(
  "users/fetchOptionGreek",
  async ({ searchKey, expiration }: { searchKey: string; expiration: any }) => {
    if (searchKey) {
      const response: any = await apiWithToken.get(
        `v1/markets/options/chains?symbol=${searchKey}&expiration=${expiration}&greeks=true`
      );
      return response.data.options.option;
    }
  }
);

export interface optionGreekState {
  entities: any;
}

const initialState: optionGreekState = {
  entities: [],
};

export const optionGreekSlice = createSlice({
  name: "optionGreek",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOptionGreek.fulfilled, (state, action) => {
      state.entities = action.payload;
    });
  },
});

export const optionGreekData = (state: any) =>
  state.optionGreek && state.optionGreek.entities;

export default optionGreekSlice.reducer;
