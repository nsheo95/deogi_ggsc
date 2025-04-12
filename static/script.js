// 예시 데이터 (실제 데이터베이스 연동 전까지는 이걸로 테스트)
const studentData = [
  {
    id: "20250101",    name: "김철수",    googleId: "20250101@school.edu",    googlePw: "Abcd1234!"  },
  {
    id: "20250202",    name: "이영희",    googleId: "20250202@school.edu",    googlePw: "Qwer5678!"  },
  // 추가 데이터는 여기에 계속 추가 가능
];

// DOM 요소 가져오기
const form = document.getElementById('search-form');
const resultBox = document.getElementById('result');
const googleIdSpan = document.getElementById('google-id');
const googlePwSpan = document.getElementById('google-password');

// 검색 이벤트 처리
form.addEventListener('submit', function (e) {
  e.preventDefault(); // 폼 기본 제출 막기

  const inputId = document.getElementById('student-id').value.trim();
  const inputName = document.getElementById('student-name').value.trim();

  // 입력값 검증
  if (!inputId || !inputName) {
    alert("학번과 이름을 모두 입력해주세요.");
    return;
  }

  // 데이터 검색
  const found = studentData.find(student =>
    student.id === inputId && student.name === inputName
  );

  if (found) {
    googleIdSpan.textContent = found.googleId;
    googlePwSpan.textContent = found.googlePw;
    resultBox.style.display = 'block';
  } else {
    googleIdSpan.textContent = "-";
    googlePwSpan.textContent = "-";
    resultBox.style.display = 'block';
    alert("일치하는 정보를 찾을 수 없습니다.");
  }
});
