export const zodValidator=(schema)=>{
    return async (req,res,next)=>{
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            res.status(400).json({
                error:error.errors,
                success:false,
                message:"validation failed"
            })  
        }
    }
}