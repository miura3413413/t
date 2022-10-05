export const dummyTweets = [
  {
    _id: 1,
    text: "test1",
    reply: 0,
    retweet: 0,
    like: 0,
  },
  {
    _id: 2,
    text: "test2",
    reply: 1,
    retweet: 2,
    like: 3,
  },
  {
    _id: 3,
    text: "test3",
    reply: 10,
    retweet: 20,
    like: 30,
  },
  {
    _id: 4,
    text: "test4",
    reply: 100,
    retweet: 200,
    like: 300,
  },
  {
    _id: 5,
    text: "test5",
    reply: 1000,
    retweet: 2000,
    like: 3000,
  },
]

export interface dummyTweetType {
  _id: number
  text: string,
  reply: number,
  retweet: number,
  like: number,
}