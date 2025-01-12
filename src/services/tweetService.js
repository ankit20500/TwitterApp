import { getTweets, tweetRepository } from "../repositories/tweetRepository.js"

export const createTweetService=async({body})=>{
    const tweet=await tweetRepository({body});
    return tweet;
}

export const getTweetsService=async()=>{
    const tweets=await getTweets();
    return tweets;
}