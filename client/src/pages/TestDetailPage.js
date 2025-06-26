import { useParams } from "react-router-dom";

function TestDetailPage() {
  const { id } = useParams();

  return (
    <div className="space-y-3">
      <h2 className="text-xl">모의수능 신청 ({id})</h2>
      <p>남은 좌석 수: 120</p>
      <p>가격: 49,000원</p>

      <form className="space-y-2">
        <input className="w-full bg-black border border-white p-2" placeholder="학생 이름" />
        <input className="w-full bg-black border border-white p-2" placeholder="출신 고등학교" />
        <input className="w-full bg-black border border-white p-2" placeholder="전화번호" />
        <input className="w-full bg-black border border-white p-2" placeholder="간편비밀번호" type="password" />
        <input className="w-full bg-black border border-white p-2" placeholder="결제수단 (선택)" />
        <button
          type="submit"
          className="w-full px-4 py-2 transition"
          onClick={(e) => {
            e.preventDefault();
            alert("결제 처리 중...");
          }}
        >
          결제하기
        </button>
      </form>
    </div>
  );
}

export default TestDetailPage;