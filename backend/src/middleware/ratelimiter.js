   import ratelimit from "../config/Upstash.js"
  const rateLimiter = async ( req , res , next) =>{
 try {
    const {success} = await ratelimit.limit("my-limit-key")
  if(!success) {
    return res.status(429).json({ message :" too many requests here try again later 15 mins"})
  }
  next()
 } catch ( error) {
    console.log("ratelimit error")
    next(error)
 }
  }
  export default rateLimiter