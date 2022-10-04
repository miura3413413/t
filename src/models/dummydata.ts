export const dummyTweets = [
  {
    id: 1,
    text: "test1",
    reply: 0,
    retweet: 0,
    isretweet: false,
    like: 0,
    isLike: false
  },
  {
    id: 2,
    text: "test2",
    reply: 1,
    retweet: 2,
    isretweet: false,
    like: 3,
    isLike: false
  },
  {
    id: 3,
    text: "test3",
    reply: 10,
    retweet: 20,
    isretweet: false,
    like: 30,
    isLike: false
  },
  {
    id: 4,
    text: "test4",
    reply: 100,
    retweet: 200,
    isretweet: false,
    like: 300,
    isLike: false
  },
  {
    id: 5,
    text: "test5",
    reply: 1000,
    retweet: 2000,
    isretweet: false,
    like: 3000,
    isLike: false
  },
]

export interface dummyTweetType {
  id: number
  text: string,
  reply: number,
  retweet: number,
  isretweet: boolean,
  like: number,
  isLike: boolean
}