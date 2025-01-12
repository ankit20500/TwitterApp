import { createTweetService, getTweetsService } from "../services/tweetService.js";

export const getAllTweets=async(req,res)=>{
    try {
        const response=await getTweetsService();
        return res.status(200).json({
            message:"Tweet fetch successfully",
            tweets:response
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Internal Server error"
        });
    }
}

export const createTweets=async(req,res)=>{
    try {
        const response=await createTweetService({body:req.body.body});
        return res.status(200).json({
            success:true,
            message:"tweet create successfully",
            data:response
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Internal server error"
        });
    }
}
