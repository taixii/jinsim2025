import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("입력된 ID:", userId);
    console.log("입력된 비밀번호:", password);
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
      <div style={{ marginTop: "1rem" }}>
        <p>
          <a href="#">아이디/비밀번호 찾기</a>
        </p>
        <p>
          회원이 아니라면?{" "}
          <Link to="/signup">회원가입</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
