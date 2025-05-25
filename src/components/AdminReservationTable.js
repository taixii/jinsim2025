// components/AdminReservationTable.js
function AdminReservationTable({ data }) {
    return (
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">이름</th>
            <th className="border p-2">아이디</th>
            <th className="border p-2">전화번호</th>
            <th className="border p-2">시험일자</th>
            <th className="border p-2">상태</th>
            <th className="border p-2">액션</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r) => (
            <tr key={r.id}>
              <td className="border p-2">{r.name}</td>
              <td className="border p-2">{r.username}</td>
              <td className="border p-2">{r.phone}</td>
              <td className="border p-2">{r.date}</td>
              <td className="border p-2">{r.status}</td>
              <td className="border p-2 text-center">
                <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">
                  예약 취소
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default AdminReservationTable;
  