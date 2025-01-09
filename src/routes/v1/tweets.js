// tweets se related sare routes
import express from 'express';
import { createTweets, getTweets } from '../../controller/tweetController.js';
import { customeValidator } from '../../validator/customeValidator.js';
import { zodValidator } from '../../validator/validatorWithZod.js';
import { tweetZodSchema } from '../../validator/zodSchema.js';


const routes=express.Router();  // create a new router object

routes.get('/', getTweets);

// routes.post('/create',customeValidator,createTweets);  // manual validator

routes.post('/create',zodValidator(tweetZodSchema),createTweets);

export default routes;