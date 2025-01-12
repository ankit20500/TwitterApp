import Tweet from "../schema/tweet.js";

export const tweetRepository=async({body})=>{
    try{
        const tweet=await Tweet.create({body});
        return tweet;
    }catch (error){
        throw error;
    }
}

export const getTweets=async()=>{
    try{
        const response=await Tweet.find();
        return response;
    }catch(error){
        throw error;
    }
}