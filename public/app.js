let messages = [];

const chatContent = document.getElementById('chat-content');
const input = document.getElementById('input');
const sendBtn = document.getElementById('send');

async function sendMessage() {
  const message = input.value.trim();
  if (!message) return;

  // 사용자 메시지 출력
  chatContent.insertAdjacentHTML('beforeend', `
    <div class="line"><span class="chat-box mine">${message}</span></div>
  `);
  chatContent.scrollTop = chatContent.scrollHeight;
  input.value = '';

  // messages 배열에 user 메시지 추가
  messages.push({ role: 'user', content: message });

  try {
    const res = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });
    const data = await res.json();

    // 응답 출력
    chatContent.insertAdjacentHTML('beforeend', `
      <div class="line"><span class="chat-box">${data.reply}</span></div>
    `);
    chatContent.scrollTop = chatContent.scrollHeight;

    // messages 배열에 assistant 답변 추가
    messages.push({ role: 'assistant', content: data.reply });

  } catch (e) {
    chatContent.insertAdjacentHTML('beforeend', `
      <div class="line"><span class="chat-box">⚠️ 서버 응답 오류</span></div>
    `);
  }
}

sendBtn.addEventListener('click', sendMessage);

input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
