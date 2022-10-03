import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice(
  {
    name: "like",
    initialState: {
      value: 0,
      isLike: false
    },
    reducers: {
      changeLike: (state) => {
        const newState = { ...state }
        newState.value = state.isLike ? state.value - 1 : state.value + 1;
        newState.isLike = !state.isLike
        return newState
      }
    }
  }
)
export const { changeLike } = likeSlice.actions
export default likeSlice.reducer