// server.js
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// 현재 경로 계산 (ESM 대응)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// NODE_ENV 값에 따라 env 파일 선택
const mode = process.env.NODE_ENV || 'development';
dotenv.config({ path: `${__dirname}/.env.${mode}` });

console.log('MODE:', process.env.MODE);
console.log('API KEY:', process.env.OPENAI_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

// 정적 파일 서빙
app.use(express.static(join(__dirname, 'public')));

// 라우팅 설정 (SPA나 단일 HTML 제공 시)
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 또는 직접 키를 문자열로 지정
});

app.post('/chat', async (req, res) => {
  const { messages } = req.body;
  console.log(20, messages);
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
  });
  console.log(30, response);
  res.json({ reply: response.choices[0].message.content });
});

app.listen(3000, () => console.log('Server running on port 3000'));

