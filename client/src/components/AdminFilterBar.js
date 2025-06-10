function AdminFilterBar({ searchValue, onSearchChange, selectedDate, onDateChange }) {
    return (
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="이름, 아이디, 전화번호 검색"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
        />
        <select
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
        >
          <option value="">전체 날짜</option>
          <option value="2025-11-08">2025년 11월 8일 (토)</option>
          <option value="2025-11-09">2025년 11월 9일 (일)</option>
        </select>
      </div>
    );
  }
  
  export default AdminFilterBar;
  