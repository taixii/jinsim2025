// components/TestsPage.js
import { useNavigate } from "react-router-dom";

const testData = [
  {
    id: "2025-11-08",
    date: "2025. 11. 8 (토)",
    seats: 108,
    time: "08:10~16:37",
    location: "대치중학교",
  },
  {
    id: "2025-11-09",
    date: "2025. 11. 9 (일)",
    seats: 92,
    time: "08:10~16:37",
    location: "대치중학교",
  },
];

function TestsPage() {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">모의수능 예약</h2>
      <div className="flex flex-col gap-6">
        {testData.map((test) => (
          <div
            key={test.id}
            className="border border-gray-300 rounded-xl p-6 shadow-sm hover:bg-gray-50 transition cursor-pointer"
            onClick={() => navigate(`/tests/${test.id}`)}
          >
            <h3 className="text-lg font-semibold mb-2">{test.date}</h3>
            <p>🪑 잔여 좌석: {test.seats}</p>
            <p>🕒 시간: {test.time}</p>
            <p>🏫 장소: {test.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestsPage;
