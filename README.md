# 💬 Simple Chat Interface with OpenAI API

프론트엔드와 백엔드를 분리하여 OpenAI API와 통신하는 간단한 챗 인터페이스입니다.  
사용자가 입력한 메시지를 OpenAI에 보내고 응답을 받아 대화 형태로 출력합니다.

## 📁 프로젝트 구조
```
project-root/

├── public
├─── index.html # 프론트엔드 UI
├─── style.css # 스타일시트
├─── app.js # 프론트엔드 로직
├── server.js # 백엔드 서버 (Node.js + Express)
├── .env # OpenAI API 키 보관 (gitignore에 포함)
└── README.md
```

## ⚙️ 설치 및 실행 방법

### 1. OpenAI API 키 설정

`.env` 파일을 프로젝트 루트에 생성하고 아래처럼 작성하세요:

OPENAI_API_KEY=your_openai_api_key_here

> `.env` 파일은 Git에 포함되지 않도록 `.gitignore`에 추가하세요.

---

### 2. 패키지 설치 및 서버 실행

```bash
npm install
npm run start
```

💻 기술 스택
Frontend: HTML, CSS, JavaScript (Vanilla)

Backend: Node.js, Express

API: OpenAI GPT (Completion API)

---

🛡️ 보안
API 키는 .env 파일을 통해 관리합니다.

절대로 API 키를 코드 내에 하드코딩하거나 GitHub에 커밋하지 마세요.

.env, .env.*, node_modules/ 등은 .gitignore에 반드시 추가하세요.

예시:

```bash
.env
node_modules/
```

🧪 예시 응답(JSON)
```json
{
  "reply": "안녕하세요! 무엇을 도와드릴까요?"
}
```

📜 라이선스
MIT License
