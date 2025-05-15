// components/TestsDetailPage.js
import { useParams } from "react-router-dom";

const detailData = {
  "2025-11-08": {
    date: "2025. 11. 8 (토)",
    info: "08:10까지 입실해야 하며, 지각 시 응시가 제한될 수 있습니다.",
  },
  "2025-11-09": {
    date: "2025. 11. 9 (일)",
    info: "08:10까지 입실해야 하며, 지각 시 응시가 제한될 수 있습니다.",
  },
};

function TestsDetailPage() {
  const { id } = useParams();
  const test = detailData[id];

  if (!test) return <p>잘못된 경로입니다.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{test.date} 모의고사 안내</h2>
      <p>{test.info}</p>
      <button onClick={() => alert("결제 창으로 이동 예정입니다.")}>
        예약하기
      </button>
    </div>
  );
}

export default TestsDetailPage;
