# 💬 Simple Chat Interface with OpenAI API

OpenAI GPT API와 연동되는 간단한 챗봇 웹 인터페이스입니다. 프론트엔드(HTML/CSS/JS)와 백엔드(Node.js/Express)를 분리하여, 사용자의 메시지를 OpenAI에 전달하고, 응답을 대화 형태로 출력합니다.

---

## 📁 프로젝트 구조
```text
project-root/
├── public/
│   ├── index.html   # 프론트엔드 UI
│   ├── style.css    # 스타일시트
│   └── app.js       # 프론트엔드 로직
├── server.js        # 백엔드 서버 (Node.js + Express)
├── package.json     # 의존성 및 스크립트
├── .env             # OpenAI API 키 (gitignore에 포함)
├── .gitignore       # Git 추적 제외 파일
└── README.md        # 프로젝트 설명
```

---

## ⚙️ 설치 및 실행 방법

1. **OpenAI API 키 설정**
   - 프로젝트 루트에 `.env` 파일을 생성하고 아래처럼 작성하세요:
     ```env
     OPENAI_API_KEY=your_openai_api_key_here
     ```
   - `.env` 파일은 Git에 포함되지 않도록 `.gitignore`에 추가되어 있습니다.

2. **패키지 설치 및 서버 실행**
   ```bash
   npm install
   npm run start
   ```
   - 서버가 3000번 포트에서 실행됩니다.

3. **프론트엔드 접속**
   - `public/index.html` 파일을 브라우저에서 열어 사용합니다.
   - 또는 정적 서버를 띄워서 접근할 수 있습니다:
     ```bash
     npx serve ./public
     ```

---

## 🛡️ .gitignore 예시
```gitignore
.env
.env.*
node_modules/
.idea/
package-lock.json
*.log
temp/
tmp/
.tmp/
.DS_Store
```

---

## 💡 사용법
- 입력창에 메시지를 입력하고 [전송] 버튼을 누르면, 대화가 누적되어 GPT가 이전 답변을 기억하며 응답합니다.
- 대화 내역은 role: 'user' / 'assistant' 형태로 배열에 저장되어 서버에 전달됩니다.

**예시 응답(JSON):**
```json
{
  "reply": "안녕하세요! 무엇을 도와드릴까요?"
}
```

---

## 📝 라이선스
MIT License

---

## ⚠️ 주의사항
- OpenAI API 키는 절대 코드에 하드코딩하거나, GitHub에 커밋하지 마세요.
- `.env`, `.env.*`, `node_modules/` 등은 반드시 `.gitignore`에 추가하세요.
