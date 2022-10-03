import { configureStore } from "@reduxjs/toolkit"
import likeSlice from "./likeSlice"
import replySlice from "./replySlice"
import retweetSlice from "./retweetSlice"

export interface LikeState {
  like: {
    value: number
    islike: boolean
  }
}
export interface ReplyState {
  reply: {
    value: number
    islike: boolean
  }
}
export interface RetweetState {
  retweet: {
    value: number
    islike: boolean
  }
}
export default configureStore({
  reducer: {
    like: likeSlice,
    reply: replySlice,
    retweet: retweetSlice

  },
})