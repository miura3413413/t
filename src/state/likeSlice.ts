import { createSlice, current } from "@reduxjs/toolkit";
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
        console.log(newState)
        newState.isLike = !state.isLike
        return newState
      },
      assignmentLike: (state, { payload }) => {
        const newState = { ...state }
        newState.value += payload
        return newState
      }
    }
  }
)
export const { changeLike, assignmentLike } = likeSlice.actions
export default likeSlice.reducer