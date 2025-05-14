import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-bold">진심모의수능</Link>
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/tests">예약하기</Link>
        <Link to="/my">마이페이지</Link>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </div>
    </nav>
  );
}