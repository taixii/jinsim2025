import { useEffect, useState, useCallback } from "react";

function SignupPage() {
  const [userType, setUserType] = useState("student");

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isIdChecked, setIsIdChecked] = useState(false);

  const [nameError, setNameError] = useState("");
  const [userIdError, setUserIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [phone, setPhone] = useState("");
  const [sentCode, setSentCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [codeError, setCodeError] = useState("");

  const [highSchool, setHighSchool] = useState("");
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    marketing: false,
    newsletter: false,
  });

  const [visibleModal, setVisibleModal] = useState(null); // "terms", "privacy", etc.

  const existingUserIds = ['user123', 'testuser', 'abc123'];

  const validateName = () => {
    if (!name.trim()) {
      setNameError("이름을 입력해주세요.");
      return false;
    }
    const nameRegex = /^[가-힣a-zA-Z]{2,}$/;
    if (!nameRegex.test(name)) {
      setNameError("이름은 2자 이상의 한글 또는 영문이어야 합니다.");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateUserId = useCallback(() => {
    if (!userId.trim()) {
      setUserIdError("아이디를 입력해주세요.");
      return false;
    }
    const userIdRegex = /^[a-zA-Z0-9]{6,}$/;
    if (!userIdRegex.test(userId)) {
      setUserIdError("아이디는 영문 또는 영문+숫자 조합의 6자 이상이어야 합니다.");
      return false;
    }
    setUserIdError("");
    return true;
  }, [userId]);

  useEffect(() => {
    if (userId !== "") {
      validateUserId();
    }
  }, [validateUserId, userId]);

  const checkDuplicateId = () => {
    if (!userId) {
      alert("아이디를 입력해 주세요.");
      return;
    }
    const isDuplicate = existingUserIds.includes(userId);
    if (isDuplicate) {
      alert("이미 사용 중인 아이디입니다.");
      setIsIdChecked(false);
    } else {
      alert("사용 가능한 아이디입니다.");
      setIsIdChecked(true);
    }
  };

  const validatePassword = useCallback(() => {
    const count =
      [/[A-Z]/, /[a-z]/, /[0-9]/, /[!@#$%^&*(),.?":{}|<>]/].filter((regex) =>
        regex.test(password)
      ).length;

    if (password.length < 8 || count < 3) {
      setPasswordError(
        "비밀번호는 8자 이상이며, 대문자/소문자/숫자/특수문자 중 3가지 이상 포함해야 합니다."
      );
      return false;
    }
    setPasswordError("");
    return true;
  }, [password]);

  useEffect(() => {
    if (password !== "") {
      validatePassword();
    }
  }, [validatePassword, password]);

  const validateConfirmPassword = useCallback(() => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  }, [password, confirmPassword]);

  useEffect(() => {
    if (confirmPassword !== "") {
      validateConfirmPassword();
    }
  }, [validateConfirmPassword, confirmPassword]);

  

  const validatePhone = useCallback(() => {
    const phoneRegex = /^010\d{8}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("휴대폰 번호 형식이 올바르지 않습니다. (예: 01012345678)");
      return false;
    }
    setPhoneError("");
    return true;
  }, [phone]);

  useEffect(() => {
    if (phone !== "") {
      validatePhone();
    }
  }, [validatePhone, phone]);

  const handleSendCode = () => {
    if (!validatePhone()) return;
    setSentCode("123456");
    setCodeError("");
    alert("인증번호를 발송했습니다. (테스트용: 123456)");
  };

  const handleVerifyCode = () => {
    if (inputCode !== sentCode) {
      setCodeError("인증번호가 일치하지 않습니다.");
    } else {
      setCodeError("");
      alert("인증이 완료되었습니다.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isUserIdValid = validateUserId();
    const isPasswordValid = validatePassword();
    const isConfirmValid = validateConfirmPassword();

    if (isNameValid && isUserIdValid && isPasswordValid && isConfirmValid && isIdChecked) {
      console.log("회원가입 정보:", {
        userId,
        password,
      });
      alert("회원가입 정보가 유효합니다.");
    } else {
      if (!isIdChecked) alert("아이디 중복 확인을 해 주세요.");
      else alert("입력값을 다시 확인해 주세요.");
    }
  };

  const requiredMark = <span style={{ color: "red" }}>*</span>;

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>

        {/* 구분 */}
        <div>
          <label>구분{requiredMark} </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="student"
              checked={userType === "student"}
              onChange={() => setUserType("student")}
            />
            학생
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="parent"
              checked={userType === "parent"}
              onChange={() => setUserType("parent")}
            />
            학부모
          </label>
        </div>

        {/* 이름 */}
        <div>
          <label>이름{requiredMark} </label>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
            required
          />
          {nameError && <div style={{ color: "red" }}>{nameError}</div>}
        </div>

        {/* 아이디 + 중복 확인 버튼 */}
        <div>
          <label>아이디{requiredMark} </label>
          <input
            type="text"
            placeholder="6자 이상, 영문 또는 영문+숫자"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
              setIsIdChecked(false);
            }}
            onBlur={validateUserId}
            required
          />
          <button type="button" onClick={checkDuplicateId} disabled={userIdError}>중복 확인</button>
          {userIdError && <div style={{ color: "red" }}>{userIdError}</div>}
        </div>

        {/* 비밀번호 */}
        <div>
          <label>비밀번호{requiredMark} </label>
          <input
            type="password"
            placeholder="8자 이상, 대소문자/숫자/특수문자 중 3가지 조합"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
          />
          {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
        </div>

        {/* 비밀번호 확인 */}
        <div>
          <label>비밀번호 확인{requiredMark} </label>
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validateConfirmPassword}
          />
          {confirmPasswordError && (
            <div style={{ color: "red" }}>{confirmPasswordError}</div>
          )}
        </div>

        {/* 휴대폰 번호 */}
        <div>
          <label>휴대폰 번호{requiredMark} </label>
          <input
            type="tel"
            placeholder="휴대폰 번호 (- 없이 숫자만)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={validatePhone}
          />
          <button type="button" onClick={handleSendCode}>인증번호 받기</button>
          {phoneError && (
            <div style={{ color: "red" }}>{phoneError}</div>
          )}
        </div>

        {/* 인증번호 */}
        <div>
          <label>인증번호{requiredMark} </label>
          <input
            type="text"
            placeholder="인증번호 입력"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />
          <button type="button" onClick={handleVerifyCode}>인증번호 확인</button>
          {codeError && <div style={{ color: "red" }}>{codeError}</div>}
        </div>

        {/* 고등학교 검색 */}
        <div>
          <label>출신 고등학교{requiredMark} </label>
          <input
            type="text"
            placeholder="출신 고등학교"
            value={highSchool}
            onChange={(e) => setHighSchool(e.target.value)}
          />
        </div>

        {/* 약관 동의 전체 */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={agreeAll}
              onChange={(e) => {
                const checked = e.target.checked;
                setAgreeAll(checked);
                setAgreements({
                  terms: checked,
                  privacy: checked,
                  marketing: checked,
                  newsletter: checked,
                });
              }}
            />
            이용약관, 정보 활용 및 개인정보 활용에 대해 모두 동의합니다.
          </label>
        </div>

        {/* 개별 약관 */}
        <div style={{ marginLeft: "1rem" }}>
          <label>
            <input
              type="checkbox"
              checked={agreements.terms}
              onChange={(e) =>
                setAgreements({ ...agreements, terms: e.target.checked })
              }
            />
            (필수) 이용약관 동의{requiredMark}{" "}
            <button type="button" onClick={() => setVisibleModal("terms")}>
              자세히보기
            </button>
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={agreements.privacy}
              onChange={(e) =>
                setAgreements({ ...agreements, privacy: e.target.checked })
              }
            />
            (필수) 개인정보 수집 및 활용 동의{requiredMark}{" "}
            <button type="button" onClick={() => setVisibleModal("privacy")}>
              자세히보기
            </button>
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={agreements.marketing}
              onChange={(e) =>
                setAgreements({ ...agreements, marketing: e.target.checked })
              }
            />
            (선택) 마케팅 정보 수신 동의{" "}
            <button type="button" onClick={() => setVisibleModal("marketing")}>
              자세히보기
            </button>
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={agreements.newsletter}
              onChange={(e) =>
                setAgreements({ ...agreements, newsletter: e.target.checked })
              }
            />
            (선택) 뉴스레터 구독 동의{" "}
            <button type="button" onClick={() => setVisibleModal("newsletter")}>
              자세히보기
            </button>
          </label>
        </div>

        {/* 제출 버튼 */}
        <div style={{ marginTop: "1rem" }}>
          <button type="submit">회원가입</button>
        </div>
      </form>

      {/* 모달창 */}
      {visibleModal && (
        <div style={modalStyle.overlay}>
          <div style={modalStyle.modal}>
            <div style={modalStyle.header}>
              <span>{modalTitle(visibleModal)}</span>
              <button onClick={() => setVisibleModal(null)}>X</button>
            </div>
            <div style={modalStyle.content}>
              <p>{modalContent(visibleModal)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// 약관 모달 스타일
const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, width: "100%", height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "8px",
    width: "400px",
    maxHeight: "80%",
    overflowY: "auto",
  },
  header: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    borderBottom: "1px solid #ccc", paddingBottom: "0.5rem",
  },
  content: {
    marginTop: "1rem"
  }
};

// 모달 제목
function modalTitle(type) {
  switch (type) {
    case "terms": return "이용약관";
    case "privacy": return "개인정보 활용 동의";
    case "marketing": return "마케팅 수신 동의";
    case "newsletter": return "뉴스레터 동의";
    default: return "";
  }
}

// 모달 내용 (임시 텍스트)
function modalContent(type) {
  return `${modalTitle(type)}에 대한 상세한 내용을 여기에 작성하세요.`;
}

export default SignupPage;
