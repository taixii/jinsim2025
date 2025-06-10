import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js"; // 확장자 .js 반드시 붙이기

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

await connectDB();

app.get("/", (req, res) => {
  res.send("서버 정상 작동 중");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
