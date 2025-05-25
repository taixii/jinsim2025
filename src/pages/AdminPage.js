import { useState } from "react";
import AdminFilterBar from "../components/AdminFilterBar";
import AdminReservationTable from "../components/AdminReservationTable";

const dummyData = [
  {
    id: 1,
    name: "홍길동",
    username: "hong123",
    phone: "010-1234-5678",
    date: "2025-11-08",
    status: "예약 완료",
  },
  {
    id: 2,
    name: "김철수",
    username: "kim22",
    phone: "010-5678-1234",
    date: "2025-11-09",
    status: "예약 완료",
  },
];

function AdminPage() {
  const [reservations, setReservations] = useState(dummyData);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedDate, setSelectedDate] = useState(""); // "2025-11-08" 형태

  const filtered = reservations.filter((r) => {
    const matchesKeyword =
      r.name.includes(searchKeyword) ||
      r.username.includes(searchKeyword) ||
      r.phone.includes(searchKeyword);

    const matchesDate = selectedDate ? r.date === selectedDate : true;

    return matchesKeyword && matchesDate;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">관리자 - 예약 관리</h2>
      <AdminFilterBar
        searchValue={searchKeyword}
        onSearchChange={setSearchKeyword}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
      <AdminReservationTable data={filtered} />
    </div>
  );
}

export default AdminPage;
