export const getTweets=(req,res)=>{
    return res.json({
        message:"welcome to the tweets route"
    });
}

export const createTweets=(req,res)=>{
    return res.json({
        message:"successfully created",
        success:true
    })
}