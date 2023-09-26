import { configureStore } from "@reduxjs/toolkit";
import shoeReducer from "../features/shoes/shoeSlice";

const store = configureStore({
  reducer: {
    //this can be multiple reducers
    shoes: shoeReducer,
  },
});

export default store;
