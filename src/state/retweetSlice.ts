import { createSlice } from "@reduxjs/toolkit";

export const retweetSlice = createSlice(
  {
    name: "retweet",
    initialState: {
      value: 0,
      isRetweet: false
    },
    reducers: {
      changeretweet: (state) => {
        const newState = { ...state }
        newState.value = state.isRetweet ? state.value - 1 : state.value + 1;
        newState.isRetweet = !state.isRetweet
        return newState
      }
    }
  }
)

export const { changeretweet } = retweetSlice.actions
export default retweetSlice.reducer