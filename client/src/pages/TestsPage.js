import { useNavigate } from "react-router-dom";

const data = [
  { id: "2025-11-08", date: "2025.11.8 (토)", seats: 120 },
  { id: "2025-11-09", date: "2025.11.9 (일)", seats: 95 },
];

function TestsPage() {
  const navigate = useNavigate();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {data.map(({ id, date, seats }) => (
        <div key={id} className="border border-white p-4 rounded-xl">
          <p className="text-lg">{date}</p>
          <p className="text-sm">남은 좌석: {seats}/200</p>
          <button
            onClick={() => navigate(`/tests/${id}`)}
            className="py-1 transition"
          >
            신청하기
          </button>
        </div>
      ))}
    </div>
  );
}

export default TestsPage;