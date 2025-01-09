export const customeValidator=(req,res,next)=>{
    console.log(req.body);
    if(!req.body || !req.body.body){
        return res.status(400).json({
            error:"validator issue"
        });
    }
    next();
}