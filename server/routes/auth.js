import express from "express";
import User from "../models/User.js";

const router = express.Router();

// 회원가입 API
router.post("/signup", async (req, res) => {
  try {
    const { username, password, name } = req.body;

    // 아이디 중복 체크
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "이미 존재하는 아이디입니다." });
    }

    // 유저 생성
    const newUser = new User({ username, password, name });
    await newUser.save();

    res.status(201).json({ message: "회원가입 성공" });
  } catch (err) {
    console.error("회원가입 오류:", err);
    res.status(500).json({ message: "서버 오류" });
  }
});

export default router;
