import { createSlice } from "@reduxjs/toolkit";

export const retweetSlice = createSlice(
  {
    name: "retweet",
    initialState: {
      value: 0,
      isLike: false
    },
    reducers: {
      changeretweet: (state) => {
        const newState = { ...state }
        newState.value = state.isLike ? state.value - 1 : state.value + 1;
        newState.isLike = !state.isLike
        return newState
      }
    }
  }
)

export const { changeretweet } = retweetSlice.actions
export default retweetSlice.reducer