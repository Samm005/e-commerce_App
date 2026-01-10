import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "", //initially search bar is empty
  },
  reducers: {
    setSearchQuery(state, action) {
      state.query = action.payload; //Text typed by user is used to update the state
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;

export const selectSearchQuery = (state) => state.search.query;

export default searchSlice.reducer;
