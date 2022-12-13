import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ListItem } from "./interface";
import { fetchList } from "./utils";

const initialState = {
  searchKeys: "",
  itemList: [] as ListItem[],
  loading: false,
};

export const fetchNewList = createAsyncThunk("searchList", async (pramas: string) => {
  const res = await fetchList({
    login_token: "INTERVIEW_SIMPLY2021",
    search_phrase: pramas,
  });
  return res.data.product_trends;
});
const searchSlice = createSlice({
  name: "searchInfo",
  initialState,
  reducers: {
    setSearchKeys: (state, action) => {
      state.searchKeys = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchNewList.fulfilled, (state, action) => {
        const newList = action.payload;
        state.itemList = newList;
        state.loading = false;
      });
  },
});
export const { setSearchKeys } = searchSlice.actions;

export default searchSlice.reducer;
