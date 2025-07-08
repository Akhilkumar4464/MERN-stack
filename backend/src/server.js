import express from "express";
import dotenv from 'dotenv';
import notesRoutes from './routes/notesRoutes.js'
import { connectdb } from "./config/Db.js";

dotenv.config();

const app = express();
 const PORT = process.env.PORT || 3000;
connectdb();


app.use(express.json()); 

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`server is listening at url http://localhost:${PORT} `);
});
