const runBtn = document.getElementById('runBtn');
const codeArea = document.getElementById('codeArea');
const resultDiv = document.getElementById('result');

runBtn.addEventListener('click', async () => {
  const code = codeArea.value;
  const res = await fetch('http://localhost:3000/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code })
  });
  const data = await res.json();
  resultDiv.textContent = data.result;
});
