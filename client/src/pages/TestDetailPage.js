import { useParams } from "react-router-dom";

const testData = {
  "2025-11-08": {
    date: "2025. 11. 8 (토)",
    time: "08:10~16:37",
    location: "대치중학교",
    seats: 108,
  },
  "2025-11-09": {
    date: "2025. 11. 9 (일)",
    time: "08:10~16:37",
    location: "대치중학교",
    seats: 92,
  },
};

function TestDetailPage() {
  const { id } = useParams();
  const test = testData[id];

  if (!test) {
    return <div className="p-6 text-center text-red-500">존재하지 않는 시험입니다.</div>;
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{test.date}</h2>
      <p className="mb-2">🕒 시간: {test.time}</p>
      <p className="mb-2">🏫 장소: {test.location}</p>
      <p className="mb-4">🪑 잔여 좌석: {test.seats}</p>

      <div className="bg-gray-100 rounded p-4 mb-6 text-sm text-gray-700 leading-relaxed">
        ※ 본 시험은 실제 수능과 동일한 시간표로 진행되며, 점심은 제공되지 않습니다. <br />
        시험 당일 07:40까지 입실 완료해주세요.
      </div>

      <button
        onClick={() => alert("결제 페이지로 이동합니다.")}
        className="border border-black text-black px-6 py-2 rounded hover:bg-black hover:text-white transition"
      >
        예약하기
      </button>
    </div>
  );
}

export default TestDetailPage;