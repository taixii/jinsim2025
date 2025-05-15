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
    <div style={{ padding: "2rem" }}>
      <h2>모의수능 예약</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {testData.map((test) => (
          <div
            key={test.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "250px",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/tests/${test.id}`)}
          >
            <h3>{test.date}</h3>
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
