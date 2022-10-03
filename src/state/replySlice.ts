import { createSlice } from "@reduxjs/toolkit";


export const replySlice = createSlice(
  {
    name: "reply",
    initialState: {
      value: 0,
      isLike: false
    },
    reducers: {
      changeReply: (state) => {
        const newState = { ...state }
        newState.value = state.isLike ? state.value - 1 : state.value + 1;
        newState.isLike = !state.isLike
        return newState
      }
    }
  }
)
export const { changeReply } = replySlice.actions
export default replySlice.reducer