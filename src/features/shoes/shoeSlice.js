import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAsyncHandlers } from "../common/asyncHandlers";
import { getBrands, getShoesDiscover } from "./shoeApi";

const initialState = {
  loading: {
    loadBrands: false,
    loadShoes: false,
  },
};
export const getBrandsAsync = createAsyncThunk("shoes/getBrands", (params) =>
  getBrands(params)
);

export const getShoesDiscoverAsync = createAsyncThunk(
  "shoes/getShoesDiscover",
  (params) => getShoesDiscover(params)
);

const shoeSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    logoutUser: () => initialState,
  },
  extraReducers: (builder) => {
    createAsyncHandlers(
      builder,
      getBrandsAsync,
      "brands",
      "loadBrands",
      "BRANDS_ERROR"
    );
    createAsyncHandlers(
      builder,
      getShoesDiscoverAsync,
      "shoes",
      "loadShoes",
      "DISCOVER_SHOES_ERROR"
    );
  },
});

export const { logoutUser } = shoeSlice.actions;

export default shoeSlice.reducer;
