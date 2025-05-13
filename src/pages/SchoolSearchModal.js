import React, { useState } from "react";

function SchoolSearchModal({ onClose, onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const dummySchools = ["서울고등학교", "부산고등학교", "대전여자고등학교"];
    const filtered = dummySchools.filter((school) =>
      school.includes(query)
    );
    setResults(filtered);
    setHasSearched(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 기본 submit 방지
      handleSearch();
    }
  };

  return (
    <div
      style={styles.overlay}
      onClick={onClose}
    >
      <div
        style={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} style={styles.closeButton}>X</button>
        <h3>학교 검색</h3>

        {/* form 사용 X, 대신 keyDown 감지 */}
        <div>
          <input
            type="text"
            placeholder="학교명을 입력하세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            style={styles.input}
          />
          <button type="button" onClick={handleSearch} style={styles.searchButton}>
            검색
          </button>
        </div>

        <ul style={styles.resultList}>
          {hasSearched && results.length === 0 && (
          <li style={styles.noResult}>검색 결과가 없습니다.</li>
          )}
          {results.map((school, index) => (
            <li key={index}>
              <button
                onClick={() => onSelect(school)}
                style={styles.resultItem}
              >
                {school}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SchoolSearchModal;

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex", justifyContent: "center", alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 8,
    width: "400px",
    maxHeight: "80vh",
    overflowY: "auto",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 8, right: 8,
    background: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
  input: {
    width: "70%",
    padding: "8px",
    marginRight: "8px",
  },
  searchButton: {
    padding: "8px 12px",
  },
  resultList: {
    listStyle: "none",
    marginTop: "16px",
    padding: 0,
  },
  resultItem: {
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: "8px",
    marginBottom: "4px",
    backgroundColor: "#f2f2f2",
    border: "none",
    cursor: "pointer",
  },
  noResult: {
    color: "gray",
    fontStyle: "italic",
  },
};
