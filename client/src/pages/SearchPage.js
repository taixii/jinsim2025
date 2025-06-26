function SearchPage() {
    return (
      <div className="space-y-3">
        <h2 className="text-xl">신청내역 확인</h2>
        <form className="space-y-2">
          <input className="w-full bg-black border border-white p-2" placeholder="학생 이름" />
          <input className="w-full bg-black border border-white p-2" placeholder="전화번호" />
          <input className="w-full bg-black border border-white p-2" placeholder="간편비밀번호" type="password" />
          <button
            className="w-full px-4 py-2 transition"
            onClick={(e) => {
              e.preventDefault();
              alert("신청내역을 불러옵니다...");
            }}
          >
            신청내역 확인하기
          </button>
        </form>
      </div>
    );
  }
  
  export default SearchPage;