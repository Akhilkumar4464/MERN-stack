import express from "express";
import dotenv from 'dotenv';
import notesRoutes from './routes/notesRoutes.js'
import { connectdb } from "./config/Db.js";
import rateLimiter from "./middleware/ratelimiter.js";

dotenv.config();

const app = express();
 const PORT = process.env.PORT || 3000;


//middleware
app.use(express.json()); 

app.use(rateLimiter)
app.use("/api/notes", notesRoutes);
connectdb( ).then(()=>{
  app.listen(PORT, () => {
  console.log(`server is listening at url http://localhost:${PORT} `);
});
})

