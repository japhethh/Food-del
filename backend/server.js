import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints 
//My, this is the starting path 
app.use("/api/food",foodRouter)

app.get("/", (req, res) => {
  res.send("<h2 className='text-orange-500'>API Working</h2>");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
