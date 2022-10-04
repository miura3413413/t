import { createSlice } from "@reduxjs/toolkit";


export const replySlice = createSlice(
  {
    name: "reply",
    initialState: {
      value: 0,
      isReply: false
    },
    reducers: {
      changeReply: (state) => {
        const newState = { ...state }
        newState.value = state.isReply ? state.value - 1 : state.value + 1;
        newState.isReply = !state.isReply
        return newState
      }
    }
  }
)
export const { changeReply } = replySlice.actions
export default replySlice.reducer